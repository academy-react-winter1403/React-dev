import React, { useState } from "react";
import LoginBg from "../../../partials/authorize/LoginBg";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import GoToPrevPage from "../../../common/BtnText/GoToPrevPage";
import BtnGetCode from "../../../common/BtnText/BtnGetCode";
import StageName from "../../../common/StageName";
import CustomInput from "../../../partials/authorize/CustomInput";
import BtnNumberStep from "../../../common/BtnText/BtnNumberStep";
import { postData } from "../../../../core/services/api/post-data/postData";
import { getItemLocalStorage } from "../../../../core/hooks/local-storage/getItemLocalStorage";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";

const RegisterSteps3 = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const phoneNumber = getItemLocalStorage("phoneNumber");
    console.log(values);
    try {
      const ApiCall = await postData("/Sign/Register", {
        password: values.password,
        gmail: values.gmail,
        phoneNumber,
        rememberMe: rememberMe,
      });
      if (ApiCall.data.success) {
        toast("به سایت خودتون خوش اومدین لطفا اطلاعات خود را تکمیل کنید");
        navigate("/user-panel");
      } else {
        toast(ApiCall.data.message);
      }
      console.log(ApiCall);
    } catch (error) {
      console.log(error);
    }
  };

  const validation = yup.object().shape({
    gmail: yup
      .string()
      .email("ایمیل نامعتبر است")
      .required("وارد کردن ایمیل الزامی است"),
    password: yup
      .string()
      .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد")
      .matches(/\d/, "رمز عبور باید حداقل یک عدد داشته باشد")
      .required("وارد کردن رمز عبور الزامی است"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "رمز عبور مطابقت ندارد")
      .required("تأیید رمز عبور الزامی است"),
  });
  return (
    <>
      <ToastContainer />
      <LoginBg>
        <div className="h-[400px] flex relative">
          <motion.div
            className="w-[377px] bg-[#fcfcfc] rounded-[15px] flex flex-col gap-3.5 justify-center items-center"
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
            <StageName stageName={"ایجاد حساب کاربری"} />
            <Formik
              initialValues={{ gmail: "", password: "", confirmPassword: "" }}
              onSubmit={onSubmit}
              validationSchema={validation}
            >
              <Form className="w-[262px] flex flex-col items-center gap-3">
                <CustomInput
                  name={"gmail"}
                  placeholder={"ایمیل"}
                  type={"email"}
                />
                <CustomInput
                  name={"password"}
                  placeholder={"رمز عبور"}
                  type={"password"}
                />
                <CustomInput
                  name={"confirmPassword"}
                  placeholder={"تایید رمز عبور"}
                  type={"text"}
                />
                <div className="flex w-[94px] h-[12px] ">
                  <label
                    className="font-normal text-xs font-b-yekan text-gray-400"
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
                <BtnGetCode text={"ورود به حساب کاربری"} />
              </Form>
            </Formik>
          </motion.div>
          <div className="size-16 mt-[295px] rounded-xl flex justify-center items-center bg-[#cdcfb3] left-[-50px] absolute z-10 rotate-45">
            <BtnNumberStep number={3} />
          </div>
        </div>
        <GoToPrevPage />
      </LoginBg>
    </>
  );
};

export default RegisterSteps3;
