import React from "react";
import CommentProfile from "./CommentProfile";
import { BiDislike, BiLike } from "react-icons/bi";
import { RiArrowGoBackFill } from "react-icons/ri";

const CommentUserReaction = ({
  likeCount,
  desLikeCount,
  userElmail,
  commentDate,
  imageAddress,
  likeBtnClick,
  desLikeClick,
}) => {
  const commentLikeClickHandler = () => {
    likeBtnClick();
  };

  const commentDesLikeClickHandler = () => {
    desLikeClick();
  };

  return (
    <div className="top-item-control flex justify-between items-center max-md:flex-col">
      <div className="rigth flex items-center">
        <CommentProfile
          userEmail={userElmail}
          commentDate={commentDate}
          imageAddress={imageAddress}
        />
      </div>
      <div className="left flex items-center justify-center gap-x-[15px]">
        <div className="deslike-control flex items-center gap-x-[10px]">
          <span className="font-b-yekan text-[#888888]"> {desLikeCount} </span>
          <BiDislike
            size={20}
            className="text-[#D47300] cursor-pointer"
            onClick={commentDesLikeClickHandler}
          />
        </div>
        <div className="like-control flex items-center gap-x-[10px] ml-[10px]">
          <span className="font-b-yekan text-[#888888]"> {likeCount} </span>
          <BiLike
            size={20}
            className="text-[#D47300] cursor-pointer"
            onClick={commentLikeClickHandler}
          />
        </div>
        <div className="arrow-control">
          <RiArrowGoBackFill
            className="text-[#01B4AF] cursor-pointer"
            size={23}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentUserReaction;
