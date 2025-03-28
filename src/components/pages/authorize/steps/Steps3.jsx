import React from "react";
import LoginBg from "../../../partials/authorize/LoginBg";
import { Form, Formik } from "formik";
import * as yup from "yup";
import GoToPrevPage from "../../../common/BtnText/GoToPrevPage";
import BtnGetCode from "../../../common/BtnText/BtnGetCode";
import StageName from "../../../common/StageName";
import CustomInput from "../../../partials/authorize/CustomInput";
import BtnNumberStep from "../../../common/BtnText/BtnNumberStep";

const Steps3 = () => {
  const onSubmit = (event) => {
    console.log(event);
  };
  const validation = yup.object().shape({
    Email: yup
      .string()
      .email("ایمیل نامعتبر است")
      .required("وارد کردن ایمیل الزامی است"),
    password: yup
      .string()
      .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
      .matches(/[A-Z]/, "رمز عبور باید حداقل یک حرف بزرگ داشته باشد")
      .matches(/[a-z]/, "رمز عبور باید حداقل یک حرف کوچک داشته باشد")
      .matches(/\d/, "رمز عبور باید حداقل یک عدد داشته باشد")
      .matches(
        /[@$!%*?&]/,
        "رمز عبور باید حداقل یک کاراکتر خاص (@$!%*?&) داشته باشد"
      )
      .required("وارد کردن رمز عبور الزامی است"),
    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "رمز عبور مطابقت ندارد")
      .required("تایید رمز عبور الزامی است"),
  });
  return (
    <LoginBg>
      <div className="h-[400px] flex relative">
        <div className="w-[377px] bg-[#fcfcfc] rounded-[15px] flex flex-col gap-3.5 justify-center items-center">
          <StageName stageName={"ایجاد حساب کاربری"} />
          <Formik
            initialValues={{ Email: "", password: "", ConfirmPassword: "" }}
            onSubmit={(event) => onSubmit(event)}
            validationSchema={validation}
          >
            <Form className="w-[262px] flex flex-col items-center gap-3">
              <CustomInput
                name={"Email"}
                placeholder={"ایمیل"}
                type={"email"}
              />
              <CustomInput
                name={"password"}
                placeholder={"رمز عبور"}
                type={"password"}
              />
              <CustomInput
                name={"ConfirmPassword"}
                placeholder={"تایید رمز عبور"}
                type={"password"}
              />
              <div className="w-[94px] h-[12px] font-normal text-xs font-b-yekan">
                مرا به خاطر بسپار
              </div>
              <BtnGetCode text={"ورود به حساب کاربری"} />
            </Form>
          </Formik>
        </div>
        <div className="size-20 mt-[295px] rounded-xl flex justify-center items-center bg-[#cdcfb3] left-[-75px] absolute z-10 rotate-45">
          <BtnNumberStep number={3} />
        </div>
      </div>
      <GoToPrevPage />
    </LoginBg>
  );
};

export default Steps3;
