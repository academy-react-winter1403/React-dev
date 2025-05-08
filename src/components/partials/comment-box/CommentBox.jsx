import React, { useState } from "react";
import CommentBtn from "../../common/CommentBtn";
import CommentWrapper from "./CommentWrapper";
import AddComment from "./AddComment";

const CommentBox = ({
  commentData,
  coomentLikeBtnClick,
  commentDesLikeBtnClick,
  replayLikeBtnClick,
  replayDeslikeBtnClick,
  addCommentBtnClick,
  // commentReplay
}) => {
  const [showAddComment, setShowAddComment] = useState(false);

  // console.log(commentData)

  const toggleAddComment = () => {
    setShowAddComment(prev => !prev);
  };

  return (
    <div
      className="commentBox-holder w-full bg-[#FFFFFF]
        drop-shadow-[0_1px_2px_#00000040] rounded-[10px] mt-[20px] p-6"
    >
      {/* Button */}
      <div className="btn-control w-full flex justify-end">
        <CommentBtn onClick={toggleAddComment} />
      </div>

      {/* Show AddComment only if showAddComment is true */}
      {showAddComment && <AddComment btnClick={addCommentBtnClick}/>}

      {/* Comments List */}
      <div className="card-holdre">
        {commentData?.map((item, index) => (
          <CommentWrapper
            key={index}
            data={item}
            coomentLikeBtnClick={() => coomentLikeBtnClick(item)}
            commentDesLikeBtnClick={() => commentDesLikeBtnClick(item)}
            replayLikeBtnClick={replayLikeBtnClick}
            replayDeslikeBtnClick={replayDeslikeBtnClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentBox;
