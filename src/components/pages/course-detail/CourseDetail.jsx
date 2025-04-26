import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addCourseComment,
  desLikeCourseCommentPost,
  getCommentData,
  getData,
  getDataUserPanel,
  likeCourseCommentPost,
} from "../../../core/services";
import DetailTop from "./DetailTop";
import DescriptionBox from "../../partials/descreption-box/DescriptionBox";
import UserCard from "./UserCard";
import { HiStar, HiUserGroup } from "react-icons/hi2";
import CompletionCourse from "./CompletionCourse";
import HrComp from "../../common/HrComp";
import teacherPic from "../../../assets/pics/detailCourse/teacher.jpg";
import CommentBox from "../../partials/comment-box/CommentBox";
import { getCourseCommentReplay } from "../../../core/services/api/get-data/getCourseCommentReplays";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourseDetailData,
  addCourseDetailCommentData,
  addCourseCommentReplay,
  addUserProfileInfoData,
} from "../../../redux/actions";
import { MotionComp } from "../../partials";
import LeftItemCard from "./LeftItemCard";
import { errorMessageHandler } from "../../../core/utility/errorMessageHandler";
import Aos from "aos";
import { getItemLocalStorage } from "../../../core/hooks/local-storage/getItemLocalStorage";
import { useQueryClient } from "react-query";

const CourseDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const token = getItemLocalStorage("token");
  const queryClient = useQueryClient()
  const [commentBoxHeightFlag, setCommentBoxHeightFlag] = useState(true)

  const { courseComment, courseDetail, userProfileInfoSlice } = useSelector(
    (state) => state
  );
  const { commentData, commentReplay } = courseComment;
  const { detailData } = courseDetail;

  const { data, isLoading } = getData(
    "detailProduct",
    `/Home/GetCourseDetails?CourseId=${id}`
  );
  if (!isLoading) {
    dispatch(addCourseDetailData(data));
  }

  const { data: comment, isLoading: commentLoading, isSuccess } = getCommentData(
    "courseComment",
    `/Course/GetCourseCommnets/${id}`
  );
  if (!commentLoading) {
    dispatch(addCourseDetailCommentData(comment.data));
    if (commentData) {
      if (!commentReplay) {
        getCourseCommentReplay(
          "/Course/GetCourseReplyCommnets/",
          commentData
        ).then((replayReponse) => {
          console.log(replayReponse)
          dispatch(addCourseCommentReplay(replayReponse));
        });
      }
    }
  }

  const coomentLikeBtnClickHandler = async (item) => {
    console.log(item)
    likeCourseCommentPost("/Course/AddCourseCommentLike?CourseCommandId", item.id).then((response) => {
      console.log(response)
    })
  };

  const commentDesLikeBtnClickHandler = async (item) => {
    const resData = await desLikeCourseCommentPost(
      `/Course/AddCourseCommentDissLike?CourseCommandId`,
      item.id
    );
    errorMessageHandler(resData);
  };

  const replayLikeBtnClickHandler = async () => {
    alert();
  };

  const replayDeslikeBtnClickHandler = async () => {
    alert();
  };

  const {
    isError,
    isLoading: userDataLoading,
    data: userData,
  } = getDataUserPanel(
    "userPanelProfileInformation",
    "/SharePanel/GetProfileInfo",
    token
  );

  if (!userDataLoading) {
    dispatch(addUserProfileInfoData(userData));
  }

  const {
    mutate,
    data: postCommentData,
    isLoading: postCommentLoading,
  } = addCourseComment();
  const addCommentBtnClickHandler = (event) => {
    const dataObj = {
      CourseId: id,
      Title: event.title,
      Describe: event.description,
    };
    mutate([
      "/Course/AddCommentCourse",
      dataObj,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    ], {
      onSuccess: () => {
        dispatch(addCourseCommentReplay(null));
        queryClient.invalidateQueries(["courseComment"])
      }
    });
  };

  useEffect(() => {
    Aos.init({
      duration: 5000,
      // once: true
    });
    Aos.refresh();
  }, []);

  return (
    <div className="course-detail-holder w-full flex justify-center mt-4">
      <div className="w-[95%] flex flex-col items-center">
        <DetailTop />
        <div
          className="bottom w-[80%] flex items-start justify-between mt-7
          max-my-breakpoint:flex-col-reverse"
        >
          <div className="right w-[65%] max-my-breakpoint:w-full max-lg:mt-5">
            <MotionComp
              classNames={`description-box-control`}
              xInitial={"200px"}
              xAnimate={0}
              animDuration={2}
            >
              <h3 className="text-[#005351] font-bold text-[18px]">توضیحات</h3>
              <DescriptionBox initialHeight={350}>
                <p className="text-[#7B7B7B]">{detailData?.miniDescribe}</p>
              </DescriptionBox>
            </MotionComp>
            <div className="headlines-holder h-[300px] w-full border rounded-[10px] mt-3"></div>
            <div className={`comment-item-holder transition-all ${commentBoxHeightFlag ? "max-h-[990px]" : "h-auto"}
              overflow-hidden relative`}
            >
              {commentReplay ? (
                <CommentBox
                  commentData={commentReplay}
                  coomentLikeBtnClick={coomentLikeBtnClickHandler}
                  commentDesLikeBtnClick={commentDesLikeBtnClickHandler}
                  replayLikeBtnClick={replayLikeBtnClickHandler}
                  replayDeslikeBtnClick={replayDeslikeBtnClickHandler}
                  addCommentBtnClick={addCommentBtnClickHandler}
                />
              ) : null}
              <div className="btn-control w-full absolute bottom-2 flex justify-center items-center">
                <button
                  className="border border-gray-900 bg-gray-900 text-white
                  py-2 px-7 rounded-2xl cursor-pointer"
                  // data-aos="fade-up"
                  onClick={() => commentBoxHeightFlag ? setCommentBoxHeightFlag(false) : setCommentBoxHeightFlag(true)}
                >{commentBoxHeightFlag ? "کامنت بیشتر " : " کامنت کمتر "}</button>
              </div>
            </div>
          </div>
          <div className="left w-[33%] max-my-breakpoint:w-full ">
            <MotionComp
              classNames={`top-section bg-[#FFFFFF] drop-shadow-[0_1px_2px_#00000040] py-[40px] px-[20px] rounded-[15px]`}
              xInitial={"-100px"}
              xAnimate={0}
              animDuration={2}
            >
              <div className="student-and-score-holder flex justify-center gap-x-[12px] max-my-breakpoint:gap-x-[20px]">
                <UserCard
                  aosAnim={"fade-left"}
                  text={"دانشجو"}
                  num={detailData?.currentUserRateNumber}
                >
                  <HiUserGroup className="text-[#006865]" size={35} />
                </UserCard>
                <UserCard
                  aosAnim={"fade-right"}
                  text={"رضایت"}
                  num={detailData?.currentRate}
                >
                  <HiStar className="text-[#FFC700]" size={35} />
                </UserCard>
              </div>
              <div className="completion-course-control mt-[25px]">
                <CompletionCourse completionNum={87} />
              </div>
              <HrComp initialWidth={"full"} mtNum={27} />
              <LeftItemCard detailData={detailData} />
              <HrComp initialWidth={"full"} mtNum={27} />
              <div className="teacher-prof-control flex flex-col items-center mt-[10px]">
                <div
                  className="pic-control w-[100px] h-[100px] rounded-[100px] flex justify-center items-center
                  overflow-hidden drop-shadow-[0_4px_4px_#00000040]"
                >
                  <img src={teacherPic} alt="" className="scale-150" />
                </div>
                <button
                  className="font-b-yekan border py-[6px] px-[20px] rounded-[50px] transition-colors cursor-pointer
                  border-[#E48900] text-[#6B3A00] hover:bg-[#E48900] hover:text-[#ffffff] mt-[13px] text-[14px]"
                >
                  پروفایل مدرس دوره
                </button>
              </div>
            </MotionComp>
            <div className="bottom-section"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
