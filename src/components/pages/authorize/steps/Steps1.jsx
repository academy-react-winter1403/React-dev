import React from "react";
import LoginBg from "../../../partials/authorize/LoginBg";
import GoToOrgPage from "../../../common/BtnText/GoToOrgPage";
import BtnGetCode from "../../../common/BtnText/BtnGetCode";
import { Form, Formik } from "formik";
import * as yup from "yup";
import BtnTwoAuthorize from "../../../common/BtnText/BtnTwoAuthorize";
import StageName from "../../../common/StageName";
import CustomInput from "../../../partials/authorize/CustomInput";
import BtnNumberStep from "./../../../common/BtnText/BtnNumberStep";
import { postData } from "../../../../core/services/api/post-data/postData";

const Steps1 = () => {
  const onSubmit = async (values) => {
    console.log(typeof(values.MNumber));
    
    const ApiCall = await postData("/Sign/SendVerifyMessage",values.MNumber);
    console.log(ApiCall);
  };
  const validation = yup.object().shape({
    MNumber: yup
      .string()
      .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن معتبر نیست")
      .required("شماره تلفن الزامی است"),
  });
  return (
    <LoginBg>
      <div className="h-[400px] flex relative">
        <div className="w-[377px] h-full bg-[#fcfcfc] rounded-[15px] flex flex-col gap-[35px] justify-center items-center">
          <StageName stageName={"ایجاد حساب کاربری"} />
          <Formik
            initialValues={{ MNumber: "" }}
            onSubmit={onSubmit}
            validationSchema={validation}
          >
            <Form className="flex flex-col gap-7">
              <CustomInput
                name={"MNumber"}
                placeholder={"شماره همراه"}
                type={"text"}
              />
              <div className="flex flex-col gap-[10px] justify-center items-center">
                <BtnGetCode text={"دریافت کد تایید"} />
                <BtnTwoAuthorize text={"ورود"} />
              </div>
            </Form>
          </Formik>
        </div>
        <div className="size-20 mt-[55px] rounded-xl flex justify-center items-center bg-[#dcc7a0] left-[-75px] absolute z-10 rotate-45">
          <BtnNumberStep number={1} />
        </div>
      </div>
      <GoToOrgPage />
    </LoginBg>
  );
};

export default Steps1;

// /^(\+98|0)?9\d{9}$/
// /^09[0-9]{9}$/
