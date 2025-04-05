import React from "react";
import CommentBtn from "../../common/CommentBtn";
import CommentWrapper from "./CommentWrapper";

const CommentBox = () => {
  return (
    <div
      className="commentBox-holder w-full bg-[#FFFFFF]
            drop-shadow-[0_1px_2px_#00000040] rounded-[10px] mt-[20px] p-6"
    >
      <div className="btn-control w-full flex justify-end">
        <CommentBtn />
      </div>
      <div className="card-holdre">
        <CommentWrapper/>
      </div>
    </div>
  );
};

export default CommentBox;
