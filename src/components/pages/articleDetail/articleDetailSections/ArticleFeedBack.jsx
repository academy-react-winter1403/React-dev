import React, { useEffect, useState } from "react";
import { StarIcon } from "../../../../core/icons/icons";
import { CiShare2 } from "react-icons/ci";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { useSelector } from "react-redux";
import star from "../../../../assets/pics/star/star-fill.png";

const ArticleFeedBack = () => {
  const { articleDetailSlice } = useSelector((state) => state);
  const { articleAndNewDetailData } = articleDetailSlice;

  const [score, setScore] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
    if (articleAndNewDetailData) {
      const {
        currentDissLikeCount = 0,
        currentLikeCount = 0,
        currentRate = 0,
      } = articleAndNewDetailData;

      setScore(currentRate * 14);
      setLikeCount(currentLikeCount);
      setDislikeCount(currentDissLikeCount);
    }
  }, [articleAndNewDetailData]);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
      setLiked(false);
    } else {
      setLikeCount((prev) => prev + 1);
      setLiked(true);
      if (disliked) {
        setDislikeCount((prev) => prev - 1);
        setDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDislikeCount((prev) => prev - 1);
      setDisliked(false);
    } else {
      setDislikeCount((prev) => prev + 1);
      setDisliked(true);
      if (liked) {
        setLikeCount((prev) => prev - 1);
        setLiked(false);
      }
    }
  };

  return (
    <div className="w-[95%] h-[52px] font-b-yekan px-3.5 shadow bg-white rounded-[8px] flex flex-row flex-nowrap items-center xs:justify-center md:justify-between whitespace-nowrap">
      {/* score */}
      <div className="h-1/2 flex flex-row items-center gap-1 relative">
        <p className="text-[#888888] hidden md:block text-[16px]">
          امتیاز {likeCount} نفر
        </p>
        <StarIcon className="text-[24px]" />
        <div
          className="fill-star h-[14px] bg-repeat-x absolute top-[6px] left-0"
          style={{
            background: `url(${star})`,
            width: `${score}px`,
            backgroundSize: "14px 14px",
          }}
        ></div>
      </div>

      {/* like, dislike, share */}
      <div className="h-1/2 flex flex-row text-[#888888] cursor-pointer gap-4">
        {/* share */}
        <div className="flex items-center gap-1">
          <CiShare2 className="text-[22px]" />
          <p className="text-[14px]">اشتراک‌گذاری</p>
        </div>

        {/* dislike */}
        <div className="flex items-center gap-1" onClick={handleDislike}>
          <AiOutlineDislike
            className={`text-[22px] ${disliked ? "text-red-500" : ""}`}
          />
          <p className="text-[14px]">{dislikeCount}</p>
        </div>

        {/* like */}
        <div className="flex items-center gap-1" onClick={handleLike}>
          <AiOutlineLike
            className={`text-[22px] ${liked ? "text-green-600" : ""}`}
          />
          <p className="text-[14px]">{likeCount}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleFeedBack;