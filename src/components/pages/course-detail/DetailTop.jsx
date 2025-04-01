import React from "react";
import pic from "../../../assets/pics/courses/course-detail-pic.png";
import { BiBookmark } from "react-icons/bi";
import { CameraIcon, DBasketIcon } from "../../../core/icons/icons";
import { HiOutlineUser } from "react-icons/hi2";

const DetailTop = () => {
  return (
    <div className="top flex justify-center items-start gap-x-[10px] font-b-yekan">
      <div
        className="info-control w-[40%] bg-[#FFFFFF] flex flex-col justify-between
            drop-shadow-[0_1px_2px_#00000040] rounded-[15px] py-[30px] px-[30px]"
      >
        <div className="title-control flex items-center justify-between">
          <h1 className="text-[29px] font-bold text-[#333333] font-b-yekan">
            {" "}
            دوره تخصصی و جامع React Js{" "}
          </h1>
          <BiBookmark className="text-[#00B4AF]" size={27} />
        </div>
        <p className="text-[#777777] font-[400] font-b-yekan mt-[16px]">
          {" "}
          حدود 40 ساعت آموزش جامع و تخصصی ری اکت!  شما در دوره آموزش ری اکت
          ReactJS ، این کتابخانه قدرتمند و پر استفاده جاوا اسکریپت را به صورت
          کاملا پروژه محور و کاربردی یاد میگیرید!{" "}
        </p>
        <div className="price-teacherName-control flex justify-between mt-[27px]">
          <div className="teacherName-control flex items-center gap-x-[5px]">
            <HiOutlineUser size={19} className="text-[#006865]" />
            <h2 className="text-[#005B58] text-[20px] font-[500] font-b-yekan">
              {" "}
              مهدی اصغری{" "}
            </h2>
          </div>
          <div className="price-control flex items-center gap-x-3">
            <h2 className="font-b-yekan text-[25px] text-[#005B58] font-[400]">
              ۳,۴۰۰,۰۰۰
              <span className="text-[16px] text-[#006865]"> تومان </span>
            </h2>
            <CameraIcon />
          </div>
        </div>
        <div className="w-full flex justify-center mt-[37px]">
          <button
            className="bg-[#FF8A00] text-[#FFFFFF]
            px-[90px] py-[12px] rounded-[9px] font-[700] text-[18px] flex items-center gap-x-[10px] cursor-pointer"
          >
            <DBasketIcon/>
            <span> شرکت در دوره! </span>
          </button>
        </div>
      </div>
      <div className="product-image-control w-[40%]">
        <img src={pic} alt="" className="" />
      </div>
    </div>
  );
};

export default DetailTop;
