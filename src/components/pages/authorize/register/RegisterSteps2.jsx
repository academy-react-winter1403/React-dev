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
import { motion } from "framer-motion";

const RegisterSteps2 = () => {
  const phoneNumber = getItemLocalStorage("phoneNumber");
  const navigate = useNavigate();
  const EditNumber = () => {
    navigate("/Authorize/Register/step1");
  };
  return (
    <LoginBg>
      <div className="h-[400px] flex relative">
        <motion.div
          className="w-[377px] h-full bg-[#fcfcfc] rounded-[15px] flex flex-col gap-[30px] justify-center items-center"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 12,
            duration: 0.6,
            delay: 0.2,
          }}
        >
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <StageName stageName={"کد تایید"} />
            <div className="w-[274px] h-[45px] font-b-yekan text-[13px] font-normal">
              کد تایید به شماره
              <span className="text-emerald-700"> {phoneNumber} </span>
              ارسال شده است ، در صورت مغایرت روی
              <span onClick={EditNumber} className="text-blue-400">
                {" "}
                ویرایش{" "}
              </span>
              کلیک کنید
            </div>
          </div>
          <LoginPassword />
        </motion.div>
        <div className="size-16 mt-[165px] rounded-xl flex justify-center items-center bg-[#d7caa8] left-[-50px] absolute z-10 rotate-45">
          <BtnNumberStep number={2} />
        </div>
      </div>
      <GoToPrevPage />
    </LoginBg>
  );
};

export default RegisterSteps2;
