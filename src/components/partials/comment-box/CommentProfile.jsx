import React from "react";
import CommentPic from "./CommentPic";

const CommentProfile = ({ userEmail, commentDate, imageAddress }) => {
  return (
    <div className="comment-profile-container flex items-center max-md:flex-col max-md:items-center">
      <CommentPic imageAddress={imageAddress} flag={true} />
      <div className="text-control mr-[10px] max-md:text-center">
        <h2 className="text-[#003B39]">
          {userEmail}
          <span className="font-b-yekan"> | کاربر </span>
        </h2>
        <span
          className="font-b-yekan text-[#888888] tracking-[3px] text-[14px] font-bold
            relative top-[-4px]"
        >
          {commentDate}
        </span>
      </div>
    </div>
  );
};

export default CommentProfile;
