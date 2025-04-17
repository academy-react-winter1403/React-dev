import React from "react";
import LoginBg from "../../../partials/authorize/LoginBg";
import GoToPrevPage from "../../../common/BtnText/GoToPrevPage";
import BtnGetCode from "../../../common/BtnText/BtnGetCode";
import BtnTwoAuthorize from "../../../common/BtnText/BtnTwoAuthorize";
import StageName from "../../../common/StageName";
import LoginPassword from "../../../partials/authorize/LoginPassword";
import BtnNumberStep from "../../../common/BtnText/BtnNumberStep";
import { getItemLocalStorage } from "../../../../core/hooks/local-storage/getItemLocalStorage";
import { useNavigate } from "react-router-dom";

const Steps5 = () => {
  const phoneNumber = getItemLocalStorage("phoneNumber")
  const navigate = useNavigate()
  const EditNumber = () => {
    navigate("/Register/step4")
  }
  return (
    <LoginBg>
      <div className="h-[350px] flex relative">
        <div className="w-[377px] h-full bg-[#fcfcfc] rounded-[15px] flex flex-col gap-[30px] justify-center items-center">
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <StageName stageName={"کد تایید"} />
            <div className="w-[274px] h-[45px] font-b-yekan text-[13px] font-normal">
              کد تایید به شماره
              <span className="text-emerald-700"> {phoneNumber} </span>
              ارسال شده است ، در صورت مغایرت روی
              <span onClick={EditNumber} className="text-blue-400"> ویرایش </span>
              کلیک کنید
            </div>
          </div>
          <LoginPassword />
        </div>
        <div className="size-16 mt-[215px] rounded-xl flex justify-center items-center bg-[#d2cdae] left-[-50px] absolute z-10 rotate-45">
          <BtnNumberStep number={2} />
        </div>
      </div>
      <GoToPrevPage />
    </LoginBg>
  );
};

export default Steps5;
