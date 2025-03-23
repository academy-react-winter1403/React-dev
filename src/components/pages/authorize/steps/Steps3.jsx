import React from "react";
import LoginBg from "../../../partials/authorize/LoginBg";
import { SlArrowRight } from "react-icons/sl";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const Steps3 = () => {
  const onSubmit = (event) => {
    console.log(event);
  };
  const validation = yup.object().shape({
    Email: yup
      .string()
      .email("ایمیل نامعتبر است")
      .required("وارد کردن ایمیل الزامی است"),
    pass: yup
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
    ConfirmPass: yup
      .string()
      .oneOf([yup.ref("pass"), null], "رمز عبور مطابقت ندارد")
      .required("تایید رمز عبور الزامی است"),
  });
  return (
    <LoginBg>
      <div className="w-[437px] h-[400px] flex">
        <div className="w-[377px] bg-[#fcfcfc] rounded-[15px] flex flex-col gap-[20px] justify-center items-center">
          <h1 className="w-[174px] h-[37px] font-bold text-[25px] font-[BYekan] text-[#005351]">
            ایجاد حساب کاربری
          </h1>
          <Formik
            initialValues={{ Email: "", pass: "", ConfirmPass: "" }}
            onSubmit={(event) => onSubmit(event)}
            validationSchema={validation}
          >
            <Form className="w-[262px] flex flex-col items-center gap-[15px]">
              <div className="flex flex-col gap-1.5">
                <Field
                  type="email"
                  name="Email"
                  placeholder="ایمیل"
                  className="w-[266px] h-12 bg-[#f7f7f7] outline-red-600 indent-1.5 rounded-lg inset-shadow-sm text-gray-500 font-bold text-base"
                />
                <ErrorMessage
                  name="Email"
                  className="text-red-600 text-xs font-medium"
                  component="div"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Field
                  type="password"
                  name="pass"
                  placeholder="رمز عبور"
                  className="w-[266px] h-12 bg-[#f7f7f7] outline-red-600 indent-1.5 rounded-lg inset-shadow-sm text-gray-500 font-bold text-base"
                />
                <ErrorMessage
                  name="pass"
                  className="text-red-600 text-xs font-medium"
                  component="div"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Field
                  type="password"
                  name="ConfirmPass"
                  placeholder="تایید رمز عبور"
                  className="w-[266px] h-12 bg-[#f7f7f7] outline-red-600 indent-1.5 rounded-lg inset-shadow-sm text-gray-500 font-bold text-base"
                />
                <ErrorMessage
                  name="ConfirmPass"
                  className="text-red-600 text-xs font-medium"
                  component="div"
                />
              </div>
              <div className="w-[94px] h-[12px] font-normal text-[12px] font-b-yekan">
                مرا به خاطر بسپار
              </div>
              <button className="w-[133px] h-[35px] rounded-[21px] bg-[#E48900] font-bold text-[#fff] text-[13px] leading-[0]">
                ورود به حساب کاربری
              </button>
            </Form>
          </Formik>
        </div>
        <div className="size-[45px] bg-[#fcfcfc] mt-[295px] rounded-[13px] font-bold text-[#d47300] text-[20px] text-center leading-[2]">
          3
        </div>
      </div>
      <div className="w-[112px] h-[20px] flex items-end gap-[5px] absolute bottom-[30px] right-[20px]">
        <SlArrowRight
          style={{ color: "#aaa", width: "13px", height: "13px" }}
        />
        <div className="w-[88px] h-full text-xl font-normal text-[#aaa] font-b-yekan leading-none">
          صفحه قبل
        </div>
      </div>
    </LoginBg>
  );
};

export default Steps3;
