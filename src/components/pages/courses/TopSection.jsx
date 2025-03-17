import React from "react";
import { CoursesCharectorIcon } from "../../../core/icons/icons";
import Input from "../../common/input/Input";

const TopSection = () => {
  return (
    <div className="top-section-contaienr relative w-[80%]">
      <div
        className="top-section-control bg-[#EBF9F982] backdrop-blur-[4px]
        drop-shadow-[0_2px_2px_#00000040] rounded-[15px] p-[40px]"
      >
        <div className="text-control">
          <div className="top flex items-center">
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6.5" cy="7.11798" r="6.5" fill="#01CEC9" />
            </svg>
            <h2
              className="font-b-yekan text-[25px] font-extrabold text-[#000000]
            m-0 mr-[10px]"
            >
              {" "}
              دوره های آموزشی{" "}
            </h2>
          </div>
          <p className="font-[400] text-[#AAAAAA] indent-[10px] mt-[5px]">
            {" "}
            به روز ترین دوره هایی که میتونید پیدا کنید{" "}
          </p>
          <div className="input-control w-[60%] mt-[25px] mr-[10px]">
            <Input type={"text"} placeholder={"چی میخوای یاد بگیری؟..."} />
          </div>
        </div>
      </div>
      <CoursesCharectorIcon />
    </div>
  );
};

export default TopSection;
