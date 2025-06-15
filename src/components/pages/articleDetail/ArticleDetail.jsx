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
  addCourseComment,
  desLikeCourseCommentPost,
  dislikeComment,
  getArticleCommentData,
  getCommentData,
  likeAndDislikeNewsComment,
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
import { gteArtCommentData } from "../../../core/services/api/get-data/getArticleCommentData";
import { toast } from "react-toastify";
import AddComment from "../../partials/comment-box/AddComment";
import { getItemLocalStorage } from "../../../core/hooks/local-storage/getItemLocalStorage";

const ArticleDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { articleDetailSlice, relatedCoursesSlice } = useSelector(
    (state) => state
  );
  const { articleAndNewDetailData } = articleDetailSlice;
  const { relatedCoursesData } = relatedCoursesSlice;
  const {
    articleAndNewDetailComment,
    articleAndNewDetailCommentReply,
    articleCommentFlag,
  } = useSelector((state) => state.articleDetailCommentSlice);
  const [showReplayBoxFlag, setShowReplayBoxFlag] = useState(false);
  const [commentDataState, steCommentDataState] = useState(null)

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
  console.log(articleCommentFlag);
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

  // const commentDesLikeBtnClickHandler = async (item) => {
  //   const resData = await desLikeCourseCommentPost(
  //     `/News/CommentDissLike?CourseCommandId`,
  //     item.id
  //   );
  //   errorMessageHandler(resData);
  // };

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

  // <<<<<<< HEAD

  // like function api
  const newsCommentLike = (key) => {
    return useMutation({
      mutationKey: key,
      mutationFn: async (data) => {
        const [endUrl, commentId, dataObj, params] = data;
        const response = await htttp.post(`${endUrl}${commentId}`, dataObj, {
          params: params,
        });
        return response.data;
      },
    });
  };
  // like function api

  // like handle
  const { mutate: commentLikeMutate } = newsCommentLike("newsCommentLike");
  const commentLikeHandler = async (item) => {
    const dataObj = {
      CommentId: item.id,
    };
    const query = {
      LikeType: true,
    };
    commentLikeMutate(["/News/CommentLike/", item.id, dataObj, query], {
      onSuccess: (data) => {
        console.log(data);
      },
    });
  };
  // like handle

  // useEffect(() => {
  //   fetchRelatedCourses();
  // }, [newsCatregoryId, relatedCoursesData, dispatch]);
  // =======
  // >>>>>>> 2383e79091d1e5cc350030a6ddf4d50645b2676e
  useEffect(() => {
    fetchRelatedCourses();
  }, []);


  //  const {mutate: newsCommentLikeMutate} = newsCommentLike("newsCommentLike")
  // const coomentLikeBtnClickHandler = async (item) => {
  //   console.log(item.id);

  //   const data = await htttp.post(
  //     `/News/CommentLike/CommentId`,
  //     "903e06ef-c42a-f011-b701-a70c348a8e3b"
  //   );
  //   console.log(data.data);
  // };

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


  const {
    data: commentData,
    isLoading,
    refetch: getCommentDataRefetch,
  } = gteArtCommentData(
    "gteArtCommentData",
    `/News/GetNewsComments`,
    { NewsId: id },
    "/News/GetRepliesComments",
    id ? true : false
  );

  if (!isLoading) {
    console.log("comment full data ==>", commentData);
    dispatch(addArticleAndNewsDetailCommentReply(commentData));
  }


  // comment dislike handle
   const { mutate: comentDislikeMutate } = likeAndDislikeNewsComment("likeAndDislikeNewsComment");
   const commentDesLikeBtnClickHandler = async (item) => {
    console.log(item)
     comentDislikeMutate(
       [`/News/CommentLike/${item.id}`, {LikeType: false}],
       {
         onSuccess: (data) => {
          console.log(data)
          toast.success(" نظزتان با موفقیت ثبت شده است😍 ")
          getCommentDataRefetch();
          //  dispatch(changeCommentDataFlag(false));
          //  queryClient.invalidateQueries(["newsComment"]);
         },
       }
     );
   };
  // comment dislike handle

   // handle like
   const coomentLikeBtnClickHandler = (item) => {
    comentDislikeMutate(
      [`/News/CommentLike/${item.id}`, {LikeType: false}],
      {
        onSuccess: (data) => {
         console.log(data)
         toast.success(" نظزتان با موفقیت ثبت شده است😍 ")
         getCommentDataRefetch();
         //  dispatch(changeCommentDataFlag(false));
         //  queryClient.invalidateQueries(["newsComment"]);
        },
      }
    );
   }

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
          console.log("success", data);
          // dispatch(addArticleAndNewsDetailCommentData(null));
          // dispatch(addArticleAndNewsDetailCommentReply(null));
          toast.success("دیدگاه با موفقیت ثبت شد");
          getCommentDataRefetch();
          // queryClient.invalidateQueries(["newsComment"]);
        },
      }
    );
  };

  // post replay comment handle
  const userId = getItemLocalStorage("UserId")
  const {mutate: postReplayComment} = addCourseComment("postNewsReplayComment")
  const addReplayClick = (formValue) => {
    console.log(formValue)
    const dataObj = {
      newsId: commentDataState.newsId,
      title: formValue.title,
      describe: formValue.description,
      userId: userId,
      // parentId: commentDataState.parentId
    }
    console.log(dataObj)
    postReplayComment(["/News/CreateNewsReplyComment", dataObj], {
      onSuccess: (data) => {
        console.log(data)
        setShowReplayBoxFlag(!showReplayBoxFlag)
        // toast.success(data.message)
      },
      onError: () => {
        toast.error("مشکل از سمت سرور")
      }
    })
    // htttp.post("/News/CreateNewsReplyComment", dataObj).then(res => console.log(res))
  }

  // AOS
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const replayClick = (item) => {
    console.log(item);
    steCommentDataState(item)
    setShowReplayBoxFlag(!showReplayBoxFlag)
  };



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
              addReplayClick={replayClick}
              commentData={articleAndNewDetailCommentReply}
              coomentLikeBtnClick={coomentLikeBtnClickHandler}
              commentDesLikeBtnClick={commentDesLikeBtnClickHandler}
              replayLikeBtnClick={replayLikeBtnClickHandler}
              replayDeslikeBtnClick={replayDeslikeBtnClickHandler}
              addCommentBtnClick={addCommentBtnClickHandler}
              // hideBox={hideBox}
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
      {showReplayBoxFlag && (
        <div className="replayBox-container w-full h-full flex items-center justify-center fixed top-0 left-0 backdrop-blur-lg z-50">
          <div className="replay-box-control w-2/4">
            <AddComment
              btnClick={addReplayClick}
              closeBtnClick={() => setShowReplayBoxFlag(!showReplayBoxFlag)}
            />
          </div>
        </div>
      )}
      <ScrollToTopButton />
    </div>
  );
};

export default ArticleDetail;
