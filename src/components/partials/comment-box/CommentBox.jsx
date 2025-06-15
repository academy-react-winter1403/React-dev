import React, { useEffect, useState } from "react";
import CommentBtn from "../../common/CommentBtn";
import CommentWrapper from "./CommentWrapper";
import AddComment from "./AddComment";

const CommentBox = ({
  commentData,
  coomentLikeBtnClick,
  commentDesLikeBtnClick,
  addReplayClick,
  replayLikeBtnClick,
  replayDeslikeBtnClick,
  addCommentBtnClick,
  // hideBox
// <<<<<<< HEAD
  // commentReplay
// =======
  // commentReplay,
// >>>>>>> bfddc3b24ca4ff50f06f1eb483129d175a014749
}) => {
  // const [commentLikeCountState, setCommentLikeCountState] = useState(null);
  // const [commentDislikeCountState, setCommentDislikeCountState] = useState(null);
  // const [replayLikeCountState, setReplayLikeCountState] = useState(null);
  // const [replayDislikeCountState, setReplayDislikeCountState] = useState(null);
  const [showAddComment, setShowAddComment] = useState(false);

  // const hideBox = () => {
  //   setShowAddComment(!showAddComment)
  // }

// <<<<<<< HEAD
  // console.log(commentData)
// =======
  // console.log("commentData ==>", commentData);
// >>>>>>> bfddc3b24ca4ff50f06f1eb483129d175a014749

  const toggleAddComment = () => {
    setShowAddComment((prev) => !prev);
  };

  const changeLikeCount = () => {};
  const changeCommentDislikeCount = () => {};
  const changeReplayLikeCount = () => {};
  const changeDislikeCount = () => {};

  // useEffect(() => {
  //   if (commentLikeCount) {
  //     changeLikeCount();
  //   }
  //   if (commentDesLikeBtnClick) {
  //     changeCommentDislikeCount();
  //   }
  //   if (replayLikeCount) {
  //     changeReplayLikeCount();
  //   }
  //   if (replayDislikeCount) {
  //     changeDislikeCount();
  //   }
  // }, []);

  // if (!commentLikeCountState && !commentLikeCount) {
  //   setCommentLikeCountState()
  // }

  // let commentLikeCountState = null
  // let commentDislikeCountState = null
  // let replayLikeCountState = null
  // let replayDislikeCountState = null

  return (
    <div
      className="commentBox-holder w-full bg-(--article-detail-box)
        drop-shadow-[0_1px_2px_#00000040] rounded-[10px] mt-[20px] p-6"
    >
      {/* Button */}
      <div className="btn-control w-full flex justify-end">
        <CommentBtn onClick={toggleAddComment} />
      </div>

      {/* Show AddComment only if showAddComment is true */}
      {showAddComment && <AddComment btnClick={addCommentBtnClick} />}

      {/* Comments List */}
      <div className="card-holdre">
        {commentData?.map((item, index) => {
          // console.log(item)
          // likeCount
          // setCommentLikeCountState()
          // if (!commentLikeCountState && !commentLikeCount) {
          //   setCommentLikeCountState()
          // }
          // commentLikeCountState = item.likeCount
          // console.log(commentLikeCountState)
          // setCommentLikeCountState(commentLikeCountStatee)
          return (
            <CommentWrapper
              key={index}
              data={item}
              coomentLikeBtnClick={() => coomentLikeBtnClick(item)}
              commentDesLikeBtnClick={() => commentDesLikeBtnClick(item)}
              replayLikeBtnClick={replayLikeBtnClick}
              replayDeslikeBtnClick={replayDeslikeBtnClick}
              likeAndDislikeData={[]}
              addReplayClick={() => addReplayClick(item)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentBox;
