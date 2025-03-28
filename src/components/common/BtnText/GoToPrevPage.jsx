import React from "react";
import { SlArrowRight } from "react-icons/sl";

const GoToPrevPage = () => {
  return (
    <div className="w-[112px] h-[20px] flex items-end gap-[5px] absolute bottom-[30px] right-[20px]">
      <SlArrowRight style={{ color: "#aaa", width: "13px", height: "13px" }} />
      <div className="w-[88px] h-full text-xl font-normal text-[#aaa] font-b-yekan leading-none">
        صفحه قبل
      </div>
    </div>
  );
};

export default GoToPrevPage;
