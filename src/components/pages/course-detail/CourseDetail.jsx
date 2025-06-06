import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addCourseComment,
  addCourseFavoritePost,
  desLikeCourseCommentPost,
  dislikeComment,
  getCommentData,
  getCommentOneData,
  getData,
  getDataByClick,
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
  changeCommentLikeCounter,
  changeCommentDislikeCounter,
  changeReplayLikeCounter,
  changeReplayDisLikeCounter,
  changeCommentDB,
  changeCommentDataFlag,
} from "../../../redux/actions";
import { MotionComp } from "../../partials";
import LeftItemCard from "./LeftItemCard";
import { errorMessageHandler } from "../../../core/utility/errorMessageHandler";
import Aos from "aos";
import { getItemLocalStorage } from "../../../core/hooks/local-storage/getItemLocalStorage";
import { useQueryClient } from "react-query";
import { htttp } from "../../../core/services/interceptor";
import { toast } from "react-toastify";
import AddComment from "../../partials/comment-box/AddComment";

const CourseDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const token = getItemLocalStorage("token");
  const queryClient = useQueryClient();
  const [commentBoxHeightFlag, setCommentBoxHeightFlag] = useState(true);
  const [helpCommentStatus, setHelpCommentStatus] = useState([]);
  const [likeAndDisLikeClickFlag, setLikeAndDisLikeClickFlag] = useState(false);
  const [showReplayBoxFlag, setShowReplayBoxFlag] = useState(false);
  const [commentId, setCommentId] = useState(null);

  const { courseComment, courseDetail, userProfileInfoSlice } = useSelector(
    (state) => state
  );

  // comment data
  const { commentDataFlag, commentData, commentReplay } = courseComment;
  // comment data

  const { detailData } = courseDetail;

  console.log(detailData);
  if (detailData) {
    var { techs } = detailData;
  }

  console.log(detailData);
  // console.log(detailData)
  // get detail data
  const { data, isLoading } = getData(
    "detailProduct",
    `/Home/GetCourseDetails?CourseId=${id}`
  );
  if (!isLoading) {
    dispatch(addCourseDetailData(data));
  }
  // get detail data

  // get comment data
  const {
    data: comment,
    isLoading: commentLoading,
    // isSuccess,
  } = getCommentData("courseComment", `/Course/GetCourseCommnets/${id}`);
  if (!commentLoading) {
    dispatch(addCourseDetailCommentData(comment.data));
    if (commentData) {
      if (!commentDataFlag) {
        dispatch(changeCommentDataFlag(true));
        // console.log(commentDataFlag);
        getCourseCommentReplay(
          "/Course/GetCourseReplyCommnets/",
          commentData
        ).then((replayReponse) => {
          dispatch(addCourseCommentReplay(replayReponse));
        });
      }
    }
  }
  // get comment data

  // comment like handle
  const {
    mutate: likeMutate,
    isLoading: commentLikePostLoading,
    isSuccess: commentLikeSuccess,
  } = likeCourseCommentPost("commentLike");
  const coomentLikeBtnClickHandler = async (item) => {
    likeMutate(["/Course/AddCourseCommentLike?CourseCommandId", item.id], {
      onSuccess: async (data) => {
        dispatch(changeCommentDataFlag(false));
        queryClient.invalidateQueries(["courseComment"]);
      },
    });
  };
  // comment like handle

  // comment dislike handle
  const { mutate: comentDislikeMutate } = dislikeComment("commentDislike");
  const commentDesLikeBtnClickHandler = async (item) => {
    comentDislikeMutate(
      ["/Course/AddCourseCommentDissLike?CourseCommandId", item.id],
      {
        onSuccess: (data) => {
          dispatch(changeCommentDataFlag(false));
          queryClient.invalidateQueries(["courseComment"]);
        },
      }
    );
  };
  // comment dislike handle

  // replay like handle
  const replayLikeBtnClickHandler = async () => {};
  // replay like handle

  // replay dislike handle
  const replayDeslikeBtnClickHandler = async () => {};
  // replay dislike handle

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
    mutate(
      [
        "/Course/AddCommentCourse",
        dataObj,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      ],
      {
        onSuccess: () => {
          dispatch(addCourseCommentReplay(null));
          queryClient.invalidateQueries(["courseComment"]);
        },
      }
    );
  };

  // comment replay form show and hide handler
  const commentReplayFormShowHandler = (item) => {
    console.log(item);
    setShowReplayBoxFlag(true);
    setCommentId(item.id);
  };

  const closeReplayCard = () => {
    setShowReplayBoxFlag(false);
  };
  // comment replay form show and hide handler

  // add replay comment handler
  const { mutate: replayPost } = addCourseComment("courseCommentReplay");
  const addReplayCommentHandler = (event) => {
    setShowReplayBoxFlag(false);
    let dataObj;
    if (commentId) {
      dataObj = {
        CommentId: commentId,
        CourseId: id,
        Title: event.title,
        Describe: event.description,
      };
    }
    replayPost(
      [
        "/Course/AddReplyCourseComment",
        dataObj,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      ],
      {
        onSuccess: (data) => {
          console.log(data);
          dispatch(changeCommentDataFlag(false));
          queryClient.invalidateQueries(["courseComment"]);
        },
      }
    );
    console.log(dataObj);
  };
  // add replay comment handler

  useEffect(() => {
    Aos.init({
      duration: 10,
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
            <div
              className={`comment-item-holder transition-all ${
                commentBoxHeightFlag ? "max-h-[990px]" : "h-auto"
              }
              overflow-hidden relative`}
            >
              {showReplayBoxFlag && (
                <div
                  className="replay-card-container w-full h-full fixed left-0 top-0
                flex flex-col justify-center items-center z-50 backdrop-blur-[6px]"
                >
                  <p
                    className="font-b-yekan text-xl cursor-pointer"
                    onClick={closeReplayCard}
                  >
                    نمیخوام نظر ثبت کنم😂
                  </p>
                  <div className="replay-form-control w-2/4">
                    <AddComment btnClick={addReplayCommentHandler} />
                  </div>
                </div>
              )}
              {commentReplay ? (
                <CommentBox
                  // commentLikeCount={5}
                  commentData={commentReplay}
                  coomentLikeBtnClick={coomentLikeBtnClickHandler}
                  commentDesLikeBtnClick={commentDesLikeBtnClickHandler}
                  replayLikeBtnClick={replayLikeBtnClickHandler}
                  replayDeslikeBtnClick={replayDeslikeBtnClickHandler}
                  addCommentBtnClick={addCommentBtnClickHandler}
                  addReplayClick={commentReplayFormShowHandler}
                />
              ) : <h1> کامنتی وجود ندارد🤣🤣 </h1>}
              {commentReplay ? 
                <div className="btn-control w-full absolute bottom-2 flex justify-center items-center">
                <button
                  className="border border-gray-900 bg-gray-900 text-white
                  py-2 px-7 rounded-2xl cursor-pointer"
                  // data-aos="fade-up"
                  onClick={() =>
                    commentBoxHeightFlag
                      ? setCommentBoxHeightFlag(false)
                      : setCommentBoxHeightFlag(true)
                  }
                >
                  {commentBoxHeightFlag ? "کامنت بیشتر " : " کامنت کمتر "}
                </button>
              </div> : null}
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
                  num={detailData?.currentRegistrants}
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
              <LeftItemCard
                cardData={{
                  categoryData: detailData?.techs,
                  prerequisite: detailData?.googleTitle,
                  learnLevel: detailData?.courseLevelName,
                  courseStatus: detailData?.courseStatusName,
                }}
              />
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
