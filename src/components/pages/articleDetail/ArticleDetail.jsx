import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  addArticleAndNewsDetailData,
  addRelatedCoursesData,
} from "../../../redux/actions";

import ArticleTitle from "./articleDetailSections/ArticleTitle";
import ArticleFeedBack from "./articleDetailSections/ArticleFeedBack";
import RelatedCourses from "../../partials/relatedCourses/RelatedCourses";
import DescriptionBox from "../../partials/descreption-box/DescriptionBox";
import CommentBox from "../../partials/comment-box/CommentBox";

import articledetailmain from "./../../../assets/pics/others/articledetailmain.png";
import character from "./../../../assets/pics/others/articledetail.png";

import {
  desLikeCourseCommentPost,
  getCommentData,
} from "../../../core/services";
import { getNewsCommentsReplay } from "../../../core/services/api/get-data/getNewsCommentsReply";

import { htttp } from "../../../core/services/interceptor";
import { errorMessageHandler } from "../../../core/utility/errorMessageHandler";

const ArticleDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { articleDetailSlice, relatedCoursesSlice } = useSelector(
    (state) => state
  );
  const { articleAndNewDetailData } = articleDetailSlice;
  const { relatedCoursesData } = relatedCoursesSlice;
  const [commentData, setCommentData] = useState(null);
  const [commentFullData, setCommentFullData] = useState(null);

  const { googleDescribe, describe, currentImageAddress, newsCatregoryId } =
    articleAndNewDetailData || {};

  // Fetch article details
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await htttp.get(`/News/${id}`);
        if (res?.data?.detailsNewsDto) {
          dispatch(addArticleAndNewsDetailData(res.data.detailsNewsDto));
        }
      } catch (error) {
        console.error("Failed to fetch article:", error);
      }
    };

    fetchArticle();
  }, [id, dispatch]);

  getCommentData("newsComment", `/News/GetNewsComments?NewsId=${id}`).then(
    (response) => {
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

  const commentDesLikeBtnClickHandler = async (item) => {
    const resData = await desLikeCourseCommentPost(
      `/News/CommentDissLike?CourseCommandId`,
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

  // Fetch related courses
  useEffect(() => {
    const fetchRelatedCourses = async () => {
      try {
        if (newsCatregoryId && !relatedCoursesData) {
          const res = await htttp.get(
            `/News/GetNewsWithCategory/${newsCatregoryId}`
          );
          if (res?.data) {
            dispatch(addRelatedCoursesData(res.data));
          }
        }
      } catch (error) {
        console.error("Failed to fetch related courses:", error);
      }
    };

    fetchRelatedCourses();
  }, [newsCatregoryId, relatedCoursesData, dispatch]);

  return (
    <div className="w-full bg-[#F7F7F7] font-b-yekan py-10">
      <div className="w-[80%] m-auto flex md:flex-row md:flex-nowrap gap-0.5 xs:flex-col justify-center md:items-start xs:items-center">
        {/* Article Content */}
        <div className="md:w-2/3 xs:w-full flex flex-col items-center justify-center gap-2.5">
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
                alt="Article"
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
              coomentLikeBtnClick={commentDesLikeBtnClickHandler}
              commentDesLikeBtnClick={commentDesLikeBtnClickHandler}
              replayLikeBtnClick={replayLikeBtnClickHandler}
              replayDeslikeBtnClick={replayDeslikeBtnClickHandler}
            />
          ) : null}
        </div>

        {/* Related Courses */}
        <div className="md:w-1/3 xs:w-[95%] flex flex-col justify-between items-center gap-4 md:mt-0 xs:mt-5">
          <div className="hidden md:block">
            <img src={character} alt="character" />
          </div>
          <RelatedCourses data={relatedCoursesData} />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
