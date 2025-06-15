import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { SlArrowLeft } from "react-icons/sl";
import ChangeMoment from "../changeMoment/changeMoment";

const ArticlesCardView2 = ({
  src,
  title,
  Describe,
  currentView,
  onClick,
  insertDate,
}) => {
  const DateArticle = insertDate
  const persianDate = ChangeMoment(DateArticle,'YYYY/MM/DD','persian')
  return (
    <div
      className="w-[90%] h-[200px] shadow-sm flex flex-row items-center gap-2.5 rounded-r-[145px] bg-(--boxes-article)"
      data-aos="zoom-in-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
      onClick={onClick}
    >
      <img className="w-[251px] h-[171px] rounded-[18px]" src={src} />
      <div className="w-[67%] h-[80%] flex flex-col gap-2.5">
        <h1
          className="w-[230px] font-b-yekan font-bold text-[#003B39] text-xl text-nowrap truncate"
          title={title}
        >
          {title}
        </h1>
        <p
          className="w-[248px] h-[48px] font-b-yekan font-normal text-[#aaa] text-xs text-nowrap truncate"
          title={title}
        >
          {Describe}
        </p>
        <div className="h-[15px] flex justify-between mt-3">
          <div className="flex gap-1.5">
            <IoEyeOutline style={{ color: "#01CEC9" }} />
            <p className="font-b-yekan font-normal text-[#888] text-xs">
              {currentView} بازدید
            </p>
          </div>
          <div className="flex gap-1.5">
            <p className="font-b-yekan font-normal text-[#888] text-xs">
              {/* ۱۴۰۳/۰۱/۱۸ */}
              {/* {insertDate} */}
              {persianDate}
            </p>
            <MdOutlineDateRange style={{ color: "#01CEC9" }} />
          </div>
        </div>
        <div className="h-[40px] border-t-[#f3f3f3] border-t flex justify-center items-center gap-1">
          <span className="font-b-yekan font-bold text-[#D47300] text-sm mt-2.5">
            مطالعه بیشتر
          </span>
          <SlArrowLeft
            style={{
              color: "#D47300",
              width: "10px",
              height: "10px",
              marginTop: "17px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlesCardView2;
