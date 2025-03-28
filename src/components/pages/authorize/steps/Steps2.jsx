import React from "react";
import LoginBg from "../../../partials/authorize/LoginBg";
import GoToPrevPage from "../../../common/BtnText/GoToPrevPage";
import BtnGetCode from "../../../common/BtnText/BtnGetCode";
import BtnTwoAuthorize from "../../../common/BtnText/BtnTwoAuthorize";
import StageName from "../../../common/StageName";
import LoginPassword from "../../../partials/authorize/LoginPassword";
import BtnNumberStep from "../../../common/BtnText/BtnNumberStep";

const Steps2 = () => {
  return (
    <LoginBg>
      <div className="h-[400px] flex relative">
        <div className="w-[377px] h-full bg-[#fcfcfc] rounded-[15px] flex flex-col gap-[20px] justify-center items-center">
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <StageName stageName={"کد تایید"} />
            <div className="w-[274px] h-[45px] font-b-yekan text-[13px] font-normal">
              کد تایید به شماره
              <span> ... </span>
              ارسال شده است ، در صورت مغایرت روی
              <span> ویرایش </span>
              کلیک کنید
            </div>
          </div>
          <LoginPassword />
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <BtnGetCode text={"ایجاد حساب"} />
            <BtnTwoAuthorize text={"ارسال دوباره کد"} />
          </div>
        </div>
        <div className="size-20 mt-[165px] rounded-xl flex justify-center items-center bg-[#d7caa8] left-[-75px] absolute z-10 rotate-45">
          <BtnNumberStep number={2} />
        </div>
      </div>
      <GoToPrevPage />
    </LoginBg>
  );
};

export default Steps2;