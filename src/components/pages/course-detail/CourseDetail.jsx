import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  desLikeCourseCommentPost,
  getCommentData,
  getData,
  getDataByClick,
  likeCourseCommentPost,
} from "../../../core/services";
import DetailTop from "./DetailTop";
import DescriptionBox from "../../partials/descreption-box/DescriptionBox";
import UserCard from "./UserCard";
import { HiStar, HiUserGroup } from "react-icons/hi2";
import CompletionCourse from "./CompletionCourse";
import ItemCard from "./ItemCard";
import { FrontIcon } from "../../../core/icons/icons";
import HrComp from "../../common/HrComp";
import teacherPic from "../../../assets/pics/detailCourse/teacher.jpg";
import CommentBox from "../../partials/comment-box/CommentBox";
import { getCourseCommentReplay } from "../../../core/services/api/get-data/getCourseCommentReplays";
import { useDispatch, useSelector } from "react-redux";
import { addDetailData } from "../../../redux/actions";
import { MotionComp } from "../../partials";
import LeftItemCard from "./LeftItemCard";
import { errorMessageHandler } from "../../../core/utility/errorMessageHandler";

const CourseDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [commentData, setCommentData] = useState(null);
  const [commentFullData, setCommentFullData] = useState(null);
  // const [detailData, setDetailData] = useState(null)

  getData("detailProduct", `/Home/GetCourseDetails?CourseId=${id}`).then(
    (response) => {
      // console.log(response.data);
      dispatch(addDetailData(response.data));
      // setDetailData(response.data)
    }
  );

  const { detailData } = useSelector((state) => state.courseDetailData);

  // get comment and comment replay data
  getCommentData("courseComment", `/Course/GetCourseCommnets/${id}`).then(
    (response) => {
      setCommentData(response.data);
      if (commentData) {
        getCourseCommentReplay(
          "/Course/GetCourseReplyCommnets/",
          commentData
        ).then((response) => {
          if (!commentFullData) {
            setCommentFullData(response);
          }
          // console.log(response)
        });
      }
    }
  );
  // get comment and comment replay data

  const coomentLikeBtnClickHandler = async (item) => {
    console.log(item)
    const resData = await likeCourseCommentPost(`/Course/AddCourseCommentLike?CourseCommandId`, item.id)
    errorMessageHandler(resData)
  };

  const commentDesLikeBtnClickHandler = async (item) => {
    // alert("");
    const resData = await desLikeCourseCommentPost(`/Course/AddCourseCommentDissLike?CourseCommandId`, item.id)
    // console.log(resData)
    errorMessageHandler(resData)
  };

  const replayLikeBtnClickHandler = async () => {
    alert()
  }

  const replayDeslikeBtnClickHandler = async () => {
    alert()
  }

  useEffect(() => {
    if (detailData) {
      console.log("detailData ==>", detailData);
    }
  }, [detailData]);

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
              <h3 className="text-[#005351] font-bold text-[18px]">
                {" "}
                توضیحات{" "}
              </h3>
              <DescriptionBox initialHeight={350}>
                <p className="text-[#7B7B7B]">{detailData?.miniDescribe}</p>
              </DescriptionBox>
            </MotionComp>
            <div className="headlines-holder h-[300px] w-full border rounded-[10px] mt-3"></div>
            <div className="comment-item-holder">
              {commentData ? (
                <CommentBox
                  commentData={commentFullData}
                  coomentLikeBtnClick={coomentLikeBtnClickHandler}
                  commentDesLikeBtnClick={commentDesLikeBtnClickHandler}
                  replayLikeBtnClick={replayLikeBtnClickHandler}
                  replayDeslikeBtnClick={replayDeslikeBtnClickHandler}
                />
              ) : null}
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
                  text={"دانشجو"}
                  num={detailData?.currentUserRateNumber}
                >
                  <HiUserGroup className="text-[#006865]" size={35} />
                </UserCard>
                <UserCard text={"رضایت"} num={detailData?.currentRate}>
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
                  {" "}
                  پروفایل مدرس دوره{" "}
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
