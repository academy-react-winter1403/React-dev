import React from "react";
import {
  IoBookmarkOutline,
  IoPersonOutline,
  IoEyeOutline,
} from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";
import { useSelector } from "react-redux";

const ArticleTitle = () => {
  const { articleDetailSlice } = useSelector((state) => state);
  const { articleAndNewDetailData } = articleDetailSlice;

  console.log("articleDetailSlice ==>", articleDetailSlice);

  var { title, addUserFullName, currentView, insertDate } =
    articleAndNewDetailData;

  return (
    <div
      className="w-[95%] md:h-[150px] xs:h-[100px] rounded-tl-[10px] rounded-tr-[50px] rounded-br-[10px] rounded-bl-[10px]
    bg-gradient-to-r from-[#E4890080] to-[#01CEC9BF] flex flex-col items-center justify-center shadow"
    data-aos="fade-left"
    >
      {/* text */}
      <div className="w-[90%] h-1/2 flex flex-row flex-nowrap items-center justify-start gap-2">
        <div className="bg-[#01CEC9] rounded-full md:h-[10px] md:w-[10px] h-[6px] w-[6px]  items-start mt-1"></div>
        <p className="font-bold text-[14px] md:text-[18px] lg:text-[22px]  items-start text-[#005351] lg:whitespace-nowrap">
          {/* ری اکت چیست و چه کاربرد هایی دارد؟ + ۵ دلیل استفاده از ری اکت */}
          {title}
        </p>
      </div>
      {/* options */}
      <div className="w-[90%] h-1/2 flex flex-row flex-nowrap justify-end md:gap-4 xs:gap-0.5 text-[#7d7c7c] items-center whitespace-nowrap">
        <div className="flex flex-row-reverse flex-nowrap md:gap-2 xs:gap-0.5">
          <IoEyeOutline className="lg:text-lg md:text-[16px] xs:text-[14px] mt-1" />
          <p className="md:mb-1.5 md:mt-0 xs:mt-1 xs:mb-0 lg:text-[16px] md:text-[14px] xs:text-[10px]">
            {currentView} بازدید
          </p>
        </div>
        <div className="flex flex-row-reverse flex-nowrap gap-2">
          <FiCalendar className="lg:text-lg md:text-[16px] xs:text-[14px]  mt-1" />
          <p className="md:mb-1.5 md:mt-0 xs:mt-1 xs:mb-0  lg:text-[16px] md:text-[14px] xs:text-[10px]">
            {" "}
            {insertDate}
          </p>
        </div>
        <div className="flex flex-row-reverse flex-nowrap gap-2">
          <IoPersonOutline className="lg:text-lg md:text-[16px] xs:text-[14px]  mt-1" />
          <p className="md:mb-1.5 md:mt-0 xs:mt-1 xs:mb-0  lg:text-[16px] md:text-[14px] xs:text-[10px]">
            {addUserFullName}
          </p>
        </div>
        <div className="">
          <IoBookmarkOutline className="text-[#00B4AF] lg:text-[25px] md:text-[23px] xs:text-[18px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default ArticleTitle;