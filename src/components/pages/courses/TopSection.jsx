import React from "react";
import CoursesChar from "../../../core/icons/courses/CoursesChar";

const TopSection = () => {
  return (
    <div className="top-section-contaienr w-full">
      <div
        className="top-section-control w-full bg-[#EBF9F982] backdrop-blur-[4px]
        drop-shadow-[0_2px_2px_#00000040] rounded-[15px]"
      >
        <div className="text-control">
          <div className="top">
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6.5" cy="7.11798" r="6.5" fill="#01CEC9" />
            </svg>
            <h2> دوره های آموزشی </h2>
          </div>
          <div className="bottom"></div>
        </div>
      </div>
      <CoursesChar />
    </div>
  );
};

export default TopSection;
