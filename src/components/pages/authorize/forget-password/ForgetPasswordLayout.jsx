import React from "react";
import { Outlet } from "react-router-dom";

const ForgetPasswordLayout = () => {
  return (
    <div className="forget-password-container w-full flex justify-center py-[50px]">
      <div className="bg bg-linear-to-r from-[#e48900a8] to-[#01cecbb5]
        w-[650px] h-[600px] p-[15px] rounded-[15px] flex flex-col justify-center items-center"
      >
        <h1 className="relative top-[-35px] text-[26px] text-[#005351]">Reset Password</h1>
        <Outlet/>
      </div>
    </div>
  );
};

export default ForgetPasswordLayout;
