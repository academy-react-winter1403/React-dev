import React from "react";
import LoginBg from "../../../partials/authorize/LoginBg";
import GoToOrgPage from "../../../common/texts/GoToOrgPage";
import BtnGetCode from "../../../common/texts/BtnGetCode";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

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
          <h1 className="w-[174px] h-[37px] font-bold text-[25px] font-[BYekan] text-[#005351]">
            ایجاد حساب کاربری
          </h1>
          <Formik
            initialValues={{ MNumber: "" }}
            onSubmit={(event) => onSubmit(event)}
            validationSchema={validation}
          >
            <Form className="flex flex-col gap-7">
              <div className="flex flex-col gap-1.5">
                <Field
                  name="MNumber"
                  placeholder="شماره همراه"
                  className="w-[266px] h-12 bg-[#f7f7f7] outline-red-600 indent-1.5 rounded-lg inset-shadow-sm text-gray-500 font-bold text-base"
                />
                <ErrorMessage name="MNumber" className="text-red-600 text-xs font-medium" component="div"/>
              </div>
              <div className="flex flex-col gap-[10px] justify-center items-center">
                <BtnGetCode />
                <button className="w-[21px] h-[17px] font-bold text-[12px] font-b-yekan text-[#008e8b] p-1">
                  ورود
                </button>
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
