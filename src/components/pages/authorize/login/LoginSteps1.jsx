import React, { useState } from "react";
import LoginBg from "../../../partials/authorize/LoginBg";
import GoToOrgPage from "../../../common/BtnText/GoToOrgPage";
import BtnGetCode from "../../../common/BtnText/BtnGetCode";
import { Form, Formik } from "formik";
import BtnTwoAuthorize from "../../../common/BtnText/BtnTwoAuthorize";
import StageName from "../../../common/StageName";
import CustomInput from "../../../partials/authorize/CustomInput";
import * as yup from "yup";
import BtnNumberStep from "../../../common/BtnText/BtnNumberStep";
import { postData } from "../../../../core/services";
import { setItemLocalStorage } from "../../../../core/hooks/local-storage/setItemLocalstorage";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const LoginSteps1 = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const handleSendInformation = async (values) => {
    try {
      const ApiCall = await postData("/Sign/Login", {
        phoneOrGmail: values.phoneOrGmail,
        password: values.password,
        rememberMe: rememberMe,
      });
      console.log(ApiCall);
      if (ApiCall.data.success) {
        console.log(ApiCall.data.token);
        setItemLocalStorage("token", ApiCall.data.token);
        // navigate("/Authorize/Login/step2")
        navigate("/");
      } else {
        alert(ApiCall.data.errors[1]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const validation = yup.object().shape({
    phoneOrGmail: yup
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
      .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد")
      .required("وارد کردن رمز عبور الزامی است"),
  });
  const RegisterPage = () => {
    navigate("/Authorize/Register/step1");
  };
  const forgetPassword = () => {
    navigate("/Authorize/forget-password/step1");
  };
  return (
    <LoginBg>
      <div className="h-[350px] flex relative">
        <motion.div
          className="w-[377px] h-full bg-[#fcfcfc] rounded-[15px] flex flex-col gap-[20px] justify-center items-center"
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
          <StageName stageName={"ورود حساب کاربری"} />
          <Formik
            initialValues={{ phoneOrGmail: "", password: "" }}
            onSubmit={handleSendInformation}
            validationSchema={validation}
          >
            <Form className="flex flex-col items-center justify-center gap-[15px]">
              <CustomInput
                name={"phoneOrGmail"}
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
                  <label
                    className="font-normal text-xs font-b-yekan text-gray-400 mr-1"
                    htmlFor="rememberMe"
                  >
                    <input
                      type="checkbox"
                      name="rememberMe"
                      id="rememberMe"
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                    مرا به خاطر بسپار
                  </label>
                </div>
                <button
                  className="w-[71px] h-[17px] font-normal text-[11px] text-[#E48900] font-b-yekan"
                  onClick={forgetPassword}
                  type="button"
                >
                  فراموشی رمز عبور
                </button>
              </div>
              <div className="flex flex-col gap-[10px] justify-center items-center">
                <BtnGetCode text={"دریافت کد تایید"} />
                <BtnTwoAuthorize text={"ثبت نام"} onClick={RegisterPage} />
              </div>
            </Form>
          </Formik>
        </motion.div>
        <div className="size-16 mt-[100px] rounded-xl flex justify-center items-center bg-[#dac9a4] left-[-50px] absolute z-10 rotate-45">
          <BtnNumberStep number={1} />
        </div>
      </div>
      <GoToOrgPage />
    </LoginBg>
  );
};

export default LoginSteps1;
