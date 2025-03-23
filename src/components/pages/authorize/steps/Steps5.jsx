import React from "react";
import LoginBg from "../../../partials/authorize/LoginBg";
import { SlArrowRight } from "react-icons/sl";

const Steps5 = () => {
  return (
    <LoginBg>
      <div className="w-[437px] h-[350px] flex">
        <div className="w-[377px] h-full bg-[#fcfcfc] rounded-[15px] flex flex-col gap-[20px] justify-center items-center">
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <h1 className="w-[81px] h-[46px] font-bold text-[25px] font-b-yekan text-[#005351] ">
              کد تایید
            </h1>
            <div className="w-[274px] h-[45px] font-b-yekan text-[13px] font-normal">
              کد تایید به شماره
              <span> ... </span>
              ارسال شده است ، در صورت مغایرت روی
              <span> ویرایش </span>
              کلیک کنید
            </div>
          </div>
          <div>
            <div className="w-[266px] h-[59px] bg-[#f7f7f7] rounded-lg"></div>
            <span className="float-left">1.59</span>
          </div>
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <button className="w-[133px] h-[43px] rounded-[21px] bg-[#E48900] font-bold text-[#fff] text-[13px] font-b-yekan">
              ایجاد حساب
            </button>
            <div className="w-[73px] h-[18px] font-bold text-[12px] font-b-yekan text-[#008e8b]">
              ارسال دوباره کد
            </div>
          </div>
        </div>
        <div className="size-[45px] bg-[#fcfcfc] mt-[215px] rounded-[13px] font-bold text-[#d47300] text-[20px] text-center leading-[2] font-b-yekan">
          2
        </div>
      </div>
      <div className="w-[112px] h-[20px] flex items-end gap-[5px] absolute bottom-[30px] right-[20px]">
        <SlArrowRight
          style={{ color: "#aaa", width: "13px", height: "13px" }}
        />
        <div className="w-[88px] h-full text-xl font-normal text-[#aaa] font-b-yekan leading-none">
          صفحه قبل
        </div>
      </div>
    </LoginBg>
  );
};

export default Steps5;
