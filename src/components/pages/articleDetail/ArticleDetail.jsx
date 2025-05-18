import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  addArticleAndNewsDetailCommentData,
  addArticleAndNewsDetailCommentReply,
  addArticleAndNewsDetailData,
  addRelatedCoursesData,
  changeArticleCommentFlag,
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
  getArticleCommentData,
  getCommentData,
  likeCourseCommentPost,
} from "../../../core/services";
import { getNewsCommentsReplay } from "../../../core/services/api/get-data/getNewsCommentsReply";

import { htttp } from "../../../core/services/interceptor";
import { errorMessageHandler } from "../../../core/utility/errorMessageHandler";
import AOS from "aos";
import "aos/dist/aos.css";
import { articleDetailComment } from "../../../core/services/api/post-data/articleDetailComment";
import { QueryClient, useMutation } from "react-query";
import { useQueryClient } from "react-query";
import ScrollToTopButton from "../../common/ScrollToTopBtn";
import { articleDetailCommentSlice } from "../../../redux/slices";

const ArticleDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { articleDetailSlice, relatedCoursesSlice } = useSelector(
    (state) => state
  );
  const { articleAndNewDetailData } = articleDetailSlice;
  const { relatedCoursesData } = relatedCoursesSlice;
  const { articleAndNewDetailComment, articleAndNewDetailCommentReply, articleCommentFlag } =
    useSelector((state) => state.articleDetailCommentSlice);

  const {
    googleDescribe,
    describe,
    currentImageAddress,
    newsCatregoryId,
    // articleCommentFlag,
  } = articleAndNewDetailData || {};

  // if (articleDetailCommentSlice) {
  //   var { articleCommentFlag } = articleDetailCommentSlice
  // }
  console.log(articleCommentFlag)
  // Fetch article details

  const fetchArticle = async () => {
    if (!articleAndNewDetailData) {
      try {
        const res = await htttp.get(`/News/${id}`);
        if (res?.data?.detailsNewsDto) {
          dispatch(addArticleAndNewsDetailData(res.data.detailsNewsDto));
        }
      } catch (error) {
        console.error("Failed to fetch article:", error);
      }
    }
  };
  useEffect(() => {
    fetchArticle();
  }, []);

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
  const fetchRelatedCourses = async () => {
    if (!relatedCoursesData) {
      if (newsCatregoryId) {
        try {
          // if (newsCatregoryId && !relatedCoursesData) {
          const res = await htttp.get(
            `/News/GetNewsWithCategory/${newsCatregoryId}`
          );
          // if (res?.data) {
          dispatch(addRelatedCoursesData(res.data));
          // }
          // }
        } catch (error) {
          console.error("Failed to fetch related courses:", error);
        }
      }
    }
  };

  useEffect(() => {
    fetchRelatedCourses();
  }, []);

  // for comments

  // const { data: dataComment, isLoading: commentLoading } =
  //   getArticleCommentData("newsComment", `/News/GetNewsComments?NewsId=${id}`);
  // if (!commentLoading) {
  //   console.log(dataComment);
  //   dispatch(addArticleAndNewsDetailCommentData(dataComment));
  //   if (articleAndNewDetailComment) {
  //     if (!articleAndNewDetailCommentReply) {
  //       getNewsCommentsReplay("/News/GetRepliesComments?Id=", dataComment).then(
  //         (replyResponse) => {
  //           dispatch(addArticleAndNewsDetailCommentReply(replyResponse));
  //         }
  //       );
  //     }
  //   }
  // }

  const { data: dataComment, isLoading: commentLoading } =
    getArticleCommentData("newsComment", `/News/GetNewsComments?NewsId=${id}`);
  if (!commentLoading) {
    console.log(dataComment);
    dispatch(addArticleAndNewsDetailCommentData(dataComment));
    if (articleAndNewDetailComment) {
      if (!articleCommentFlag) {
        console.log("shodd")
        dispatch(changeArticleCommentFlag(true))
        getNewsCommentsReplay("/News/GetRepliesComments?Id=", dataComment).then(
          (replyResponse) => {
            dispatch(addArticleAndNewsDetailCommentReply(replyResponse));
          }
        );
      }
    }
  }


   // comment like handle

   const newsCommentLike = (key) => {
    return useMutation({
      mutationKey: key,
      mutationFn: async (data) => {
        const [endUrl, commentId] = data
        const fullData = await htttp.post(endUrl, commentId)
        return fullData.data
      }
    })
   }

  //  const {mutate: newsCommentLikeMutate} = newsCommentLike("newsCommentLike")
   const coomentLikeBtnClickHandler = async (item) => {
    // console.log(item)
    // newsCommentLikeMutate(["/News/CommentLike/:CommentId", item.id], {
    //   onSuccess: (data) => {
    //     console.log(data)
    //     dispatch(changeArticleCommentFlag(false))
    //   }
    // })

    console.log(item.id)

    const data = await htttp.post(`/News/CommentLike/CommentId`, "903e06ef-c42a-f011-b701-a70c348a8e3b")
    console.log(data.data)
   }

  //  const {
  //    mutate: likeMutate,
  //    isLoading: commentLikePostLoading,
  //    isSuccess: commentLikeSuccess,
  //  } = likeCourseCommentPost("commentLike");
  //  const coomentLikeBtnClickHandler = async (item) => {
  //   console.log(item)
  //   let dataObj = {
  //     CommentId: item.id
  //   }

  //    likeMutate(["/News/CommentLike/:CommentId", item], {
  //      onSuccess: async (data) => {
  //       console.log("like data ==>", data)
  //        dispatch(changeArticleCommentFlag(false));
  //        queryClient.invalidateQueries(["newsComment"]);
  //      },
  //    });
  //  };
   // comment like handle
 
   // comment dislike handle
  //  const { mutate: comentDislikeMutate } = dislikeComment("commentDislike");
  //  const commentDesLikeBtnClickHandler = async (item) => {
  //    comentDislikeMutate(
  //      ["/Course/AddCourseCommentDissLike?CourseCommandId", item.id],
  //      {
  //        onSuccess: (data) => {
  //          dispatch(changeCommentDataFlag(false));
  //          queryClient.invalidateQueries(["newsComment"]);
  //        },
  //      }
  //    );
  //  };
   // comment dislike handle


  const {
    mutate,
    data: postCommentData,
    isLoading: postCommentLoading,
  } = articleDetailComment("createNewsComment");
  const addCommentBtnClickHandler = (event) => {
    const dataObj = {
      newsId: id,
      title: event.title,
      describe: event.description,
      userId: 40561,
    };
    mutate(
      [
        "/News/CreateNewsComment",
        dataObj,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      ],
      {
        onSuccess: (data) => {
          // console.log("success", data);
          // dispatch(addArticleAndNewsDetailCommentData(null));
          dispatch(addArticleAndNewsDetailCommentReply(null));
          queryClient.invalidateQueries(["newsComment"]);
        },
      }
    );
  };

  // AOS
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full bg-[var(--bg-main)] font-b-yekan py-10 max-w-[1550px] mx-auto">
      <div className="w-[80%] m-auto flex md:flex-row md:flex-nowrap gap-0.5 xs:flex-col justify-center md:items-start xs:items-center">
        {/* Article Content */}
        <div className="md:w-2/3 xs:w-full flex flex-col items-center justify-center gap-2.5">
          <ArticleTitle />

          <div
            className="w-[95%] bg-(--article-detail-box) rounded-[10px] text-[#555555] text-[18px] leading-7 flex flex-col items-center justify-start gap-3 shadow relative overflow-hidden transition-all duration-500"
            data-aos="fade-up"
          >
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

          {articleAndNewDetailCommentReply ? (
            <CommentBox
              commentData={articleAndNewDetailCommentReply}
              coomentLikeBtnClick={coomentLikeBtnClickHandler}
              commentDesLikeBtnClick={commentDesLikeBtnClickHandler}
              replayLikeBtnClick={replayLikeBtnClickHandler}
              replayDeslikeBtnClick={replayDeslikeBtnClickHandler}
              addCommentBtnClick={addCommentBtnClickHandler}
            />
          ) : null}
        </div>

        {/* Related Courses */}
        <div
          className="md:w-1/3 xs:w-[95%] flex flex-col justify-between items-center gap-4 md:mt-0 xs:mt-5"
          data-aos="fade-right"
        >
          <div className="hidden md:block">
            <img src={character} alt="character" />
          </div>
          <RelatedCourses data={relatedCoursesData} />
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default ArticleDetail;
