import React, { useEffect, useState } from "react";
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
  addReplayClick
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

  // const [showReplyForm, setShowReplyForm] = useState(false);
  // const [replyTitle, setReplyTitle] = useState("");
  // const [replyText, setReplyText] = useState("");

  // const handleReplySubmit = async () => {
  //   const payload = {
  //     newsId: data.newsId,
  //     parentId: data.id,
  //     userId: 123, // Replace with actual logged-in user ID
  //     userIpAddress: "127.0.0.1",
  //     title: replyTitle,
  //     describe: replyText,
  //   };
  
  //   try {
  //     // Replace this with your actual API call
  //     await fetch(`/News/CreateNewsReplyComment`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     });
  
  //     // Reset form
  //     setShowReplyForm(false);
  //     setReplyTitle("");
  //     setReplyText("");
  
  //     // Refresh comments if needed
  //   } catch (error) {
  //     console.error("Failed to send reply", error);
  //   }
  // };
  

  return (
    <div
      data-aos={commentReplay.length > 2 ? `fade-up` : `flip-up`}
      className={`comment-card w-full bg-[#F9F9F9] drop-shadow-[0_1px_2px_#00000040]
        rounded-[7px] px-6 py-3 mt-[24px]`}
    >
      <CommentUserReaction
        commentId={data.id}
        likeBtnClick={coomentLikeBtnClick}
        desLikeClick={commentDesLikeBtnClick}
        addReplayClick={addReplayClick}
        imageAddress={pictureAddress}
        desLikeCount={disslikeCount}
        likeCount={likeCount}
        userElmail={author}
        commentDate={insertDate}
        // onReplyClick={() => setShowReplyForm((prev) => !prev)}
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

      {/* {showReplyForm && (
  <div className="mt-4">
    <input
      className="border rounded px-2 py-1 w-full mb-2"
      placeholder="Reply title"
      value={replyTitle}
      onChange={(e) => setReplyTitle(e.target.value)}
    />
    <textarea
      className="border rounded px-2 py-1 w-full mb-2"
      placeholder="Your reply"
      value={replyText}
      onChange={(e) => setReplyText(e.target.value)}
    />
    <button
      className="bg-[#01B4AF] text-white px-4 py-2 rounded"
      onClick={handleReplySubmit}
    >
      Submit Reply
    </button>
  </div>
)} */}


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
