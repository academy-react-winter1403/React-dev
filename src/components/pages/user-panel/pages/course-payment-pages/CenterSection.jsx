import React from "react";
// import ImageFedback from '../../../../partials/image-fedback/imageFedback'
import { ImageFeadBackCircle } from "../../../../common/ImageFeadBack";
import { PiStudent } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";

const CenterSection = ({ addPaymentClick }) => {
  return (
    <div
      className="senter-section-container flex justify-between items-center
        max-md:flex-col-reverse max-md:gap-y-7"
    >
      <div className="rigth w-[73%] flex flex-col gap-y-8 max-sm:gap-5">
        <div className="top w-full flex justify-between max-sm:flex-col max-sm:items-center max-md:gap-y-3">
          <h3 className="m-0 text-2xl text-[#333333]"> دوره جامع آموزش Js </h3>
          <h3 className="flex items-center text-[#777777] m-0">
            <PiStudent />
            <span className="text-[16px]"> دکتر محمدحسین بحرالعلومی </span>
          </h3>
        </div>
        <div className="center w-full">
          <p className="text-[16px] font-bold text-[#888888] leading-5 m-0 max-md:text-center">
            دوره جامع آموزش جاوااسکریپت، مسیری کامل از مفاهیم پایه تا مباحث
            پیشرفته برای ساخت وب‌سایت‌ها و اپلیکیشن‌های پویا است. مناسب برای
            مبتدی‌ها تا علاقه‌مندان به برنامه‌نویسی حرفه‌ای، همراه با پروژه‌های
            کاربردی، تمرین‌های متنوع و پشتیبانی تخصصی.
          </p>
        </div>
        <div className="bottom flex justify-between items-center max-sm:flex-col max-sm:gap-y-6">
          <p className="text-[#00726F] text-xl max-md:text-[17px] max-sm:text-xl">{`هزینه دوره:  ${"100,000"} تومان`}</p>
          <button
            className="w-[202px] h-[38px] rounded-[8px] flex justify-center items-center gap-2 bg-[#E48900] text-[#FFFFFF]
            cursor-pointer hover:bg-[#e48900e3]"
            onClick={addPaymentClick}
          >
            <span>پرداخت جدید</span>
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="left">
        <ImageFeadBackCircle
          imageAddress={""}
          width={"w-[160px]"}
          height={"h-[160px]"}
        />
      </div>
    </div>
  );
};

export default CenterSection;
