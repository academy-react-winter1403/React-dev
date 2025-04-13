import React, { useEffect } from "react";
import CommentUserReaction from "./CommentUserReaction";
import Aos from "aos";

const ReplayWrapper = ({
  title,
  description,
  likeCount,
  disLikeCount,
  userName,
  replayLikeBtnClick,
  replayDeslikeBtnClick,
}) => {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
    Aos.refresh();
  }, []);

  return (
    <div
      data-aos="flip-up"
      className="replay-container w-full shadow-[inset_0_1px_2px_#00000040]
        bg-[#ECECEC] p-4 rounded-[10px] border-r-[4px] border-r-[#01CEC9] mt-[18px]"
    >
      <CommentUserReaction
        desLikeCount={disLikeCount}
        likeCount={likeCount}
        userElmail={userName}
        commentDate={true}
        desLikeClick={replayDeslikeBtnClick}
        likeBtnClick={replayLikeBtnClick}
      />
      <div className="hr-control w-full flex justify-center mt-[12px]">
        <hr className="outline-0 border-0 w-full h-[1px] bg-[#dcdcdc]" />
      </div>
      <p className="title text-[13px] font-[700] text-[#656565] w-[90%] mt-[8px]">
        {title}
      </p>
      <p className="description text-[13px] font-[700] text-[#656565] w-[90%] mt-[8px]">
        {description}
      </p>
    </div>
  );
};

export default ReplayWrapper;
