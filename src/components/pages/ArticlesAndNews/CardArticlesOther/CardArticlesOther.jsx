import React from "react";
import { SlArrowLeft } from "react-icons/sl";

const CardArticlesOther = ({title,image}) => {
  return (
    <div className="w-[251px] h-[70px] relative shadow-sm rounded-r-lg rounded-l-xs" data-aos="zoom-in">
      <div className="absolute bottom-0 left-[-5px] size-[82px]">
        <img src={image} className="rounded-full w-full h-full"/>
      </div>
      <div className="flex flex-col gap-3">
        <div className="h-[17px] mt-2.5 mr-2.5">
          <h1 className="text-sm font-b-yekan font-bold text-[#006865]">{title}</h1>
        </div>
        <div className="h-[17px] flex items-center mr-2.5">
          <p className="text-xs font-b-yekan font-normal text-[#01B4AF] leading-[2px]">مشاهده مطلب</p>
          <SlArrowLeft style={{color:"#01B4AF",width:"10px",height:"10px"}}/>
        </div>
      </div>
    </div>
  );
};

export default CardArticlesOther;
