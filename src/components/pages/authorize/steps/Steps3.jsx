import React from "react";
import LoginBg from "../../../partials/authorize/LoginBg";
import { Form, Formik } from "formik";
import * as yup from "yup";
import GoToPrevPage from "../../../common/BtnText/GoToPrevPage";
import BtnGetCode from "../../../common/BtnText/BtnGetCode";
import StageName from "../../../common/StageName";
import CustomInput from "../../../partials/authorize/CustomInput";
import BtnNumberStep from "../../../common/BtnText/BtnNumberStep";
import { postData } from "../../../../core/services/api/post-data/postData";
import { htttp } from "../../../../core/services/interceptor";

const Steps3 = () => {
  const onSubmit = async (values) => {
    // alert("")
    console.log(typeof values.phoneNumber)
    let password = values.password
    let gmail = values.gmail
    let phoneNumber = values.phoneNumber
    console.log(values);
    // let requestData = {
    //   "password": "masih1382",
    //   "gmail": "6536masih@gmail.com",
    //   "phoneNumber": "09330498868",
    // }
    // console.log(requestData)
    try {
      // const ApiCall = await postData("/Sign/Register", requestData);
      let ApiCall = await htttp.post("/Sign/Register", {gmail, password, phoneNumber});
      // console.log(ApiCall)
    } catch (error) {
      console.log(error)
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
      // .matches(/[A-Z]/, "رمز عبور باید حداقل یک حرف بزرگ داشته باشد")
      // .matches(/[a-z]/, "رمز عبور باید حداقل یک حرف کوچک داشته باشد")
      .matches(/\d/, "رمز عبور باید حداقل یک عدد داشته باشد")
      .required("وارد کردن رمز عبور الزامی است"),
    phoneNumber: yup
      .string()
      .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن معتبر نیست")
      .required("شماره تلفن الزامی است"),
  });
  return (
    <LoginBg>
      <div className="h-[400px] flex relative">
        <div className="w-[377px] bg-[#fcfcfc] rounded-[15px] flex flex-col gap-3.5 justify-center items-center">
          <StageName stageName={"ایجاد حساب کاربری"} />
          <Formik
            initialValues={{ gmail: "", password: "", phoneNumber: "" }}
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
                name={"phoneNumber"}
                placeholder={"شماره همراه"}
                type={"text"}
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
