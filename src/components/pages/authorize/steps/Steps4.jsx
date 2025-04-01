// import React, { useState } from "react";
import LoginBg from "./../../../partials/authorize/LoginBg";
import GoToOrgPage from "../../../common/BtnText/GoToOrgPage";
import BtnGetCode from "../../../common/BtnText/BtnGetCode";
import { Field, Form, Formik } from "formik";
import BtnTwoAuthorize from "../../../common/BtnText/BtnTwoAuthorize";
import StageName from "../../../common/StageName";
import CustomInput from "../../../partials/authorize/CustomInput";
import * as yup from "yup";
import BtnNumberStep from "../../../common/BtnText/BtnNumberStep";
import { postData } from "../../../../core/services";
// import { setItemLocalStorage } from "../../../../core/hooks/local-storage/setItemLocalstorage";
import { useNavigate } from "react-router-dom";

const Steps4 = () => {
  // const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate();
  const handleSendInformation = async (values) => {
    // if (!values.target.value) {
    //   setRememberMe(true)
    //   console.log("ذخیره شد");
    // }
    try {
      const ApiCall = await postData("/Sign/Login", {
        EmailOrMobile: values.EmailOrMobile,
        password: values.password,
        // rememberMe
      });
      console.log(ApiCall.data);
      // setItemLocalStorage(ApiCall.data.token);
    } catch (error) {
      console.log(error);
    }
  };
  const validation = yup.object().shape({
    EmailOrMobile: yup
      .string()
      .test("emailOrPhone", "ایمیل یا شماره تلفن نامعتبر است", (value) => {
        if (!value) return false;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(value)) return true;

        const phoneRegex = /^09[0-9]{9}$/;
        if (phoneRegex.test(value)) return true;

        return false;
      })
      .required("وارد کردن ایمیل یا شماره تلفن الزامی است"),
    password: yup
      .string()
      .min(6, "رمز عبور باید حداقل 8 کاراکتر باشد")
      .required("وارد کردن رمز عبور الزامی است"),
  });
  const RegisterPage = () => {
    navigate("/Register/step1");
  };
  return (
    <LoginBg>
      <div className="h-[350px] flex relative">
        <div className="w-[377px] h-full bg-[#fcfcfc] rounded-[15px] flex flex-col gap-[20px] justify-center items-center">
          <StageName stageName={"ورود حساب کاربری"} />
          <Formik
            initialValues={{ EmailOrMobile: "", password: "" }}
            onSubmit={handleSendInformation}
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
                <div className="flex w-[94px] h-[12px] justify-center items-center">
                  <Field type="checkbox" name="rememberMe" id="rememberMe" />
                  <label
                    className="font-normal text-xs font-b-yekan text-gray-400"
                    htmlFor="rememberMe"
                  >
                    مرا به خاطر بسپار
                  </label>
                </div>
                <button className="w-[71px] h-[17px] font-normal text-[11px] text-[#E48900] font-b-yekan">
                  فراموشی رمز عبور
                </button>
              </div>
              <div className="flex flex-col gap-[10px] justify-center items-center">
                <BtnGetCode text={"دریافت کد تایید"} />
                <BtnTwoAuthorize text={"ثبت نام"} onClick={RegisterPage} />
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
