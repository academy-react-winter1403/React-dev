import React, { useState } from "react";
import {
  IoBookmarkOutline,
  IoBookmark,
  IoPersonOutline,
  IoEyeOutline,
} from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { htttp } from "../../../../core/services/interceptor";
import { toast } from "react-toastify";

const ArticleTitle = () => {

  const { articleDetailSlice } = useSelector((state) => state);
  const { articleAndNewDetailData } = articleDetailSlice;


  const [isSaved, setIsSaved] = useState(false);

  const {id, title, addUserFullName, currentView, insertDate } =
  articleAndNewDetailData || {};

  const formattedDate = insertDate
    ? new Date(insertDate).toLocaleDateString("fa-IR")
    : "";



  const toggleFavorite = async () => {
    const toastId = "favorite-toast"; 
    try {
      const newState = !isSaved;
      await htttp.post(`/News/AddFavoriteNews?NewsId=${id}`);
      setIsSaved(newState);
  
      if (!toast.isActive(toastId)) {
        toast.success(newState ? "مقاله ذخیره شد" : "از ذخیره خارج شد", {
          toastId,
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error("خطا در ذخیره‌سازی مقاله", {
        toastId: "error-toast",
        autoClose: 2000,
      });
    }
  };

  return (
    <div
      className="w-[95%] md:h-[150px] xs:h-[100px] rounded-tl-[10px] rounded-tr-[50px] rounded-br-[10px] rounded-bl-[10px]
      bg-gradient-to-r from-[#E4890080] to-[#01CEC9BF] flex flex-col items-center justify-center shadow"
      data-aos="fade-left"
    >
      {/* Title Text */}
      <div className="w-[90%] h-1/2 flex flex-row items-center justify-start gap-2">
        <div className="bg-[#01CEC9] rounded-full md:h-[10px] md:w-[10px] h-[6px] w-[6px] mt-1"></div>
        <p className="font-bold text-[14px] md:text-[18px] lg:text-[22px] text-[#005351] lg:whitespace-nowrap">
          {title}
        </p>
      </div>

      {/* Info Row */}
      <div className="w-[90%] h-1/2 flex flex-row justify-end md:gap-4 xs:gap-1 text-[var(--article-detail-top-text)] items-center whitespace-nowrap">
        <div className="flex flex-row gap-1 items-center">
          <IoEyeOutline className="text-[16px] mt-1" />
          <p className="text-[12px] md:text-[14px] lg:text-[16px]">{currentView} بازدید</p>
        </div>

        <div className="flex flex-row gap-1 items-center">
          <FiCalendar className="text-[16px] mt-1" />
          <p className="text-[12px] md:text-[14px] lg:text-[16px]">{formattedDate}</p>
        </div>

        <div className="flex flex-row gap-1 items-center">
          <IoPersonOutline className="text-[16px] mt-1" />
          <p className="text-[12px] md:text-[14px] lg:text-[16px]">{addUserFullName}</p>
        </div>

        <div>
          {isSaved ? (
            <IoBookmark
              className="text-[#00B4AF] text-[20px] cursor-pointer"
              onClick={toggleFavorite}
            />
          ) : (
            <IoBookmarkOutline
              className="text-[#00B4AF] text-[20px] cursor-pointer"
              onClick={toggleFavorite}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleTitle;

