import React from "react";
import LoginBg from "./../../../partials/authorize/LoginBg";
import GoToOrgPage from "../../../common/texts/GoToOrgPage";
import BtnGetCode from "../../../common/texts/BtnGetCode";
import { ErrorMessage, Field, Form, Formik } from "formik";

const Steps4 = () => {
  return (
    <LoginBg>
      <div className="w-[437px] h-[350px] flex">
        <div className="w-[377px] h-full bg-[#fcfcfc] rounded-[15px] flex flex-col gap-[20px] justify-center items-center">
          <h1 className="w-[174px] h-[37px] font-bold text-[25px] font-[BYekan] text-[#005351]">
            ورود حساب کاربری
          </h1>
          <Formik>
            <Form className="flex flex-col items-center justify-center gap-[15px]">
              <div>
              <Field className="w-[266px] h-12 bg-[#f7f7f7] outline-red-600 indent-1.5 rounded-lg inset-shadow-sm text-gray-500 font-bold text-base"/>
              <ErrorMessage />
              </div>
            </Form>
          </Formik>
          <div className="flex flex-col items-center justify-center gap-[15px]">
            <div className="w-[266px] h-[45px] bg-[#f7f7f7] rounded-lg"></div>
            <div className="w-[266px] h-[45px] bg-[#f7f7f7] rounded-lg"></div>
            <div className="w-[266px] h-[17px] flex items-center justify-between">
                <div className="w-[70px] h-[15px] font-normal text-[11px] text-[#aaa] font-b-yekan">مرا به خاطر بسپار</div>
                <button className="w-[71px] h-[17px] font-normal text-[11px] text-[#E48900] font-b-yekan">فراموشی رمز عبور</button>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <BtnGetCode />
            <button className="w-[21px] h-[17px] font-bold text-[12px] font-b-yekan text-[#008e8b]">
              ورود
            </button>
          </div>
        </div>
        <div className="size-[45px] bg-[#fcfcfc] mt-[100px] rounded-[13px] font-bold text-[#d47300] text-[20px] text-center leading-[2]">
          1
        </div>
      </div>
      <GoToOrgPage />
    </LoginBg>
  );
};

export default Steps4;
