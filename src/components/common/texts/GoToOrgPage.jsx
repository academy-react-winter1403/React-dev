import React from "react";
import { SlArrowLeft } from "react-icons/sl";
const GoToOrgPage = () => {
  return (
    <div className="w-[112px] h-[20px] flex items-end gap-[5px] absolute bottom-[30px] left-[20px]">
      <div className="w-[88px] h-full text-xl font-normal text-[#aaa] font-b-yekan leading-none">
        صفحه اصلی
      </div>
      <SlArrowLeft style={{color:"#aaa",width:"13px",height:"13px"}}/>
    </div>
  );
};

export default GoToOrgPage;
