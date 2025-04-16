import React from "react";
import { Outlet } from "react-router-dom";

const ForgetPasswordLayout = () => {
  return (
    <>
      <div
        className="w-[1440px] h-[899px] mx-auto flex justify-center items-center"
      >
        <div className="w-[952px] h-[631px] flex justify-between z-[1]">
          <div className="mt-[105px]">
            <button
              className="w-[69px] h-[34px] text-[#006865] font-bold text-2xl font-b-yekan"
            >
              ثبت نام
            </button>
            <button
              className="w-[41px] h-[34px] text-[#006865] font-bold text-2xl mx-auto mt-[51px] font-b-yekan"
            >
              ورود
            </button>
          </div>
          <div className="w-[869px] h-[631px] flex justify-center items-center relative backdrop-blur-xs bg-gradient-to-tl from-[#01CEC9BF]/75 to-[#E48900BF]/75 rounded-4xl">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordLayout;




        