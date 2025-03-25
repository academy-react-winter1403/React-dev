import React from "react";
import LoginBg from "../../../partials/authorize/LoginBg";
import GoToOrgPage from "../../../common/BtnText/GoToOrgPage";
import BtnGetCode from "../../../common/BtnText/BtnGetCode";
import { Form, Formik } from "formik";
import * as yup from "yup";
import BtnTwoAuthorize from "../../../common/BtnText/BtnTwoAuthorize";
import StageName from "../../../common/StageName";
import CustomInput from "../../../partials/authorize/CustomInput";

const Steps1 = () => {
  const onSubmit = (event) => {
    console.log(event);
  };

  const validation = yup.object().shape({
    MNumber: yup
      .string()
      .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن معتبر نیست")
      .required("شماره تلفن الزامی است"),
  });

  return (
    <LoginBg>
      <div className="w-[437px] h-[400px] flex">
        <div className="w-[377px] h-full bg-[#fcfcfc] rounded-[15px] flex flex-col gap-[35px] justify-center items-center">
          <StageName stageName={"ایجاد حساب کاربری"} />
          <Formik
            initialValues={{ MNumber: "" }}
            onSubmit={(event) => onSubmit(event)}
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
        <div className="size-[45px] bg-[#fcfcfc] mt-[55px] rounded-[13px] font-bold text-[#d47300] text-[20px] text-center leading-[2]">
          1
        </div>
      </div>
      <GoToOrgPage />
    </LoginBg>
  );
};

export default Steps1;
