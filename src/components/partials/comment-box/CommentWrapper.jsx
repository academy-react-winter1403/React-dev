import React, { useEffect } from "react";
import CommentUserReaction from "./CommentUserReaction";
import ReplayWrapper from "./ReplayWrapper";
import AOS from "aos";
import "aos/dist/aos.css";

const CommentWrapper = ({
  data,
  coomentLikeBtnClick,
  commentDesLikeBtnClick,
  replayLikeBtnClick,
  replayDeslikeBtnClick,
}) => {
  const {
    author,
    describe,
    title,
    pictureAddress,
    likeCount,
    disslikeCount,
    insertDate,
    commentReplay,
  } = data;

  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //   });
  //   AOS.refresh();

  //   console.log("commentReplay ==>", data)
  // }, []);

  return (
    <div
      data-aos={commentReplay.length > 2 ? `fade-up` : `flip-up`}
      className={`comment-card w-full bg-[#F9F9F9] drop-shadow-[0_1px_2px_#00000040]
        rounded-[7px] px-6 py-3 mt-[24px]`}
    >
      <CommentUserReaction
        likeBtnClick={coomentLikeBtnClick}
        desLikeClick={commentDesLikeBtnClick}
        imageAddress={pictureAddress}
        desLikeCount={disslikeCount}
        likeCount={likeCount}
        userElmail={author}
        commentDate={insertDate}
      />
      <div className="hr-control w-full flex justify-center mt-[12px]">
        <hr className="outline-0 border-0 w-full h-[2px] bg-[#EDEDED]" />
      </div>
      <p className="title text-[13px] font-[700] text-[#656565] w-[90%] mt-[8px]">
        {title}
      </p>
      <p className="description text-[13px] font-[700] text-[#656565] w-[90%] mt-[8px]">
        {describe}
      </p>
      <div className="replay-control">
        {commentReplay?.map((item, index) => {
          return (
            <ReplayWrapper
              key={index}
              userName={item.author}
              title={item.title}
              description={item.describe}
              likeCount={item.likeCount}
              disLikeCount={item.disslikeCount}
              replayLikeBtnClick={replayLikeBtnClick}
              replayDeslikeBtnClick={replayDeslikeBtnClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentWrapper;
