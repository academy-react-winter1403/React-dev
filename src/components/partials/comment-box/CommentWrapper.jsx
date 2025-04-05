import React from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { RiArrowGoBackFill } from "react-icons/ri";

const CommentWrapper = () => {
  return (
    <div
      className="comment-card w-full h-[360px] bg-[#F9F9F9] drop-shadow-[0_1px_2px_#00000040]
        rounded-[7px] px-6 py-3 mt-[24px]"
    >
      <div className="top-item-control flex justify-between items-center">
        <div className="rigth">
          <div className="text-control">
            <h2>
              ali@gmail.com
              <span> | کاربر </span>
            </h2>
            <span> ۱۴۰۳/۰۱/۲۵ </span>
          </div>
          <div className="pic-control"></div>
        </div>
        <div className="left flex items-center justify-center gap-x-[15px]">
          <div className="deslike-control flex items-center gap-x-[10px]">
            <span className="font-b-yekan text-[#888888]"> 6 </span>
            <BiDislike size={22} className="text-[#D47300] cursor-pointer"/>
          </div>
          <div className="like-control flex items-center gap-x-[10px] ml-[10px]">
            <span className="font-b-yekan text-[#888888]"> 25 </span>
            <BiLike size={22} className="text-[#D47300] cursor-pointer"/>
          </div>
          <div className="arrow-control">
            <RiArrowGoBackFill className="text-[#01B4AF] cursor-pointer" size={25}/>
          </div>
        </div>
      </div>
      <hr className="outline-0 border-0 w-[95%]" />
    </div>
  );
};

export default CommentWrapper;
