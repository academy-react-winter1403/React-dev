import React, { useEffect, useState } from "react";
import ArticleTitle from "./articleDetailSections/ArticleTitle";
import ArticleFeedBack from "./articleDetailSections/ArticleFeedBack";
import character from "./../../../assets/pics/others/articledetail.png";
import RelatedCourses from "../../partials/relatedCourses/RelatedCourses";
import {
  desLikeCourseCommentPost,
  getCommentData,
  getData,
  likeCourseCommentPost,
} from "../../../core/services";
import { useParams } from "react-router-dom";
import { addArticleAndNewsDetailData } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import DescriptionBox from "../../partials/descreption-box/DescriptionBox";
import { htttp } from "../../../core/services/interceptor";
import articledetailmain from "./../../../assets/pics/others/articledetailmain.png";
import CommentBox from "../../partials/comment-box/CommentBox";
import { getCourseCommentReplay } from "../../../core/services/api/get-data/getCourseCommentReplays";
import { errorMessageHandler } from "../../../core/utility/errorMessageHandler";
import { getNewsCommentsReplay } from "../../../core/services/api/get-data/getNewsCommentsReply";
import AOS from 'aos'
import 'aos/dist/aos.css'

const ArticleDetail = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [commentData, setCommentData] = useState(null);
  const [commentFullData, setCommentFullData] = useState(null);

  const dispatch = useDispatch();
  const { id } = useParams();

  getData("articleDetail", `/News/${id}`).then((response) => {
    dispatch(addArticleAndNewsDetailData(response.data));
    console.log("news: ", response.data);
  });

  // get comment and comment replay data
  getCommentData("newsComment", `/News/GetNewsComments?NewsId=${id}`).then(
    (response) => {
      // console.log("comment data ==>", response);
      setCommentData(response.data);
      if (commentData) {
        getNewsCommentsReplay("/News/GetRepliesComments?Id=", commentData).then(
          (response) => {
            if (!commentFullData) {
              setCommentFullData(response);
            }
          }
        );
      }
    }
  );

  useEffect(() => {
    if (commentData) {
      console.log("article commentData ==>", commentData);
    }
  }, [commentData]);

  const state = useSelector((state) => state.articleAndNewDetailData);

  if (state) {
    var commentDtos = state.commentDtos;
    var detailsNewsDto = state.detailsNewsDto;
    var { googleDescribe, describe, currentImageAddress, newsCatregoryId } =
      detailsNewsDto;
  }

  if (newsCatregoryId && relatedCourses.length === 0) {
    htttp
      .get(`/News/GetNewsWithCategory/${newsCatregoryId}`)
      .then((response) => {
        setRelatedCourses(response.data);
        console.log("related: ", response.data);
      });
  }

  // get comment and comment replay data

  const coomentLikeBtnClickHandler = async () => {
    // console.log(item);
    // const resData = await likeCourseCommentPost(
    //   `/News/CommentLike?CourseCommandId`,
    //   item.id
    // );
    // errorMessageHandler(resData);
  };

  const commentDesLikeBtnClickHandler = async (item) => {
    // alert("");
    const resData = await desLikeCourseCommentPost(
      `/News/CommentDissLike?CourseCommandId`,
      item.id
    );
    // console.log(resData)
    errorMessageHandler(resData);
  };

  const replayLikeBtnClickHandler = async () => {
    alert();
  };

  const replayDeslikeBtnClickHandler = async () => {
    alert();
  };

//  AOS
  useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true,     
      })
    }, [])

  return (
    <div className="w-full bg-[#F7F7F7] font-b-yekan py-10">
      <div className="w-[80%] m-auto flex md:flex-row md:flex-nowrap gap-0.5 xs:flex-col justify-center md:items-start xs:items-center">
        {/* article section */}
        <div className="md:w-2/3 xs:w-full flex flex-col items-center justify-center gap-2.5" data-aos="fade-left">
          <ArticleTitle />
          <div className="w-[95%] bg-white rounded-[10px] text-[#555555] text-[18px] leading-7 flex flex-col items-center justify-start gap-3 shadow relative overflow-hidden transition-all duration-500">
            <div className="w-[95%]">
              <p>{googleDescribe}</p>
            </div>
            <div className="w-[75%]">
              <img
                src={
                  currentImageAddress && currentImageAddress !== "Not-set"
                    ? currentImageAddress
                    : articledetailmain
                }
                alt="#"
              />
            </div>
            <div className="w-[95%]">
              <DescriptionBox initialHeight={300}>
                <p>{describe}</p>
              </DescriptionBox>
            </div>
          </div>
          <ArticleFeedBack />
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

        {/* related courses section */}
        <div className="md:w-1/3 xs:w-[95%] flex flex-col justify-between items-center gap-4 md:mt-0 xs:mt-5" data-aos="fade-right">
          <div className="hidden md:block">
            <img src={character} alt="#" />
          </div>
          <RelatedCourses data={relatedCourses} />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
