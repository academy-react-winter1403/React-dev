import React from "react";
import LoginBg from "./../../../partials/authorize/LoginBg";
import GoToOrgPage from "../../../common/BtnText/GoToOrgPage";
import BtnGetCode from "../../../common/BtnText/BtnGetCode";
import { Form, Formik } from "formik";
import BtnTwoAuthorize from "../../../common/BtnText/BtnTwoAuthorize";
import StageName from "../../../common/StageName";
import CustomInput from "../../../partials/authorize/CustomInput";
import * as yup from "yup";
import BtnNumberStep from "../../../common/BtnText/BtnNumberStep";
import { postData } from "../../../../core/services";

const Steps4 = () => {
  const onSubmit = async (event) => {
    // console.log(event);
    const data = await postData("/Sign/Login", event)
    console.log(data)
  };
  const validation = yup.object().shape({
    EmailOrMobile:yup.string()
    .test("emailOrPhone", "ایمیل یا شماره تلفن نامعتبر است", (value) => {
      if (!value) return false;
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(value)) return true;
  
      const phoneRegex = /^09[0-9]{9}$/;
      if (phoneRegex.test(value)) return true;
  
      return false;
    })
    .required("وارد کردن ایمیل یا شماره تلفن الزامی است"),
    password: yup.string()
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
    .required("وارد کردن رمز عبور الزامی است")
  });
  return (
    <LoginBg>
      <div className="h-[350px] flex relative">
        <div className="w-[377px] h-full bg-[#fcfcfc] rounded-[15px] flex flex-col gap-[20px] justify-center items-center">
          <StageName stageName={"ورود حساب کاربری"} />
          <Formik
            initialValues={{ EmailOrMobile: "", password: "" }}
            onSubmit={onSubmit}
            validationSchema={validation}
          >
            <Form className="flex flex-col items-center justify-center gap-[15px]">
              <CustomInput
                name={"EmailOrMobile"}
                placeholder={"شماره همراه یا ایمیل"}
                type={"text"}
              />
              <CustomInput
                name={"password"}
                placeholder={"رمز عبور"}
                type={"password"}
              />
              <div className="w-[266px] h-[17px] flex items-center justify-between">
                <div className="w-[70px] h-[15px] font-normal text-[11px] text-[#aaa] font-b-yekan">
                  مرا به خاطر بسپار
                </div>
                <button className="w-[71px] h-[17px] font-normal text-[11px] text-[#E48900] font-b-yekan">
                  فراموشی رمز عبور
                </button>
              </div>
              <div className="flex flex-col gap-[10px] justify-center items-center">
                <BtnGetCode text={"دریافت کد تایید"} />
                <BtnTwoAuthorize text={"ورود"} />
              </div>
            </Form>
          </Formik>
        </div>
        <div className="size-20 mt-[100px] rounded-xl flex justify-center items-center bg-[#dac9a4] left-[-75px] absolute z-10 rotate-45">
          <BtnNumberStep number={1} />
        </div>
      </div>
      <GoToOrgPage />
    </LoginBg>
  );
};

export default Steps4;
