import React from "react";
import LoginBg from "../../../partials/authorize/LoginBg";
import { InputOtp } from "@nextui-org/react";
import GoToPrevPage from "../../../common/BtnText/GoToPrevPage";
import BtnGetCode from "../../../common/BtnText/BtnGetCode";
import BtnTwoAuthorize from "../../../common/BtnText/BtnTwoAuthorize";
import StageName from "../../../common/StageName";
import LoginPassword from "../../../partials/authorize/LoginPassword";

const Steps2 = () => {
  return (
    <LoginBg>
      <div className="w-[437px] h-[400px] flex">
        <div className="w-[377px] h-full bg-[#fcfcfc] rounded-[15px] flex flex-col gap-[35px] justify-center items-center">
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <StageName stageName={"کد تایید"}/>
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
            <BtnGetCode text={"ایجاد حساب"}/>
            <BtnTwoAuthorize text={"ارسال دوباره کد"}/>
          </div>
        </div>
        <div className="size-[45px] bg-[#fcfcfc] mt-[165px] rounded-[13px] font-bold text-[#d47300] text-[20px] text-center leading-[2] font-b-yekan">
          2
        </div>
      </div>
      <GoToPrevPage />
    </LoginBg>
  );
};

export default Steps2;
