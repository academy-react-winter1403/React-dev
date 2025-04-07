import React from "react";
import CommentPic from "./CommentPic";

const CommentProfile = ({ userEmail, commentDate, imageAddress }) => {
  return (
    <div className="comment-profile-container flex items-center">
      <CommentPic imageAddress={imageAddress} flag={true} />
      <div className="text-control mr-[10px]">
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
