import React from "react";
import LoginBg from "../../../partials/authorize/LoginBg";
import GoToOrgPage from "../../../common/BtnText/GoToOrgPage";
import BtnGetCode from "../../../common/BtnText/BtnGetCode";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import BtnTwoAuthorize from "../../../common/BtnText/BtnTwoAuthorize";
import StageName from "../../../common/StageName";
import CustomInput from "../../../partials/authorize/CustomInput";
import BtnNumberStep from "./../../../common/BtnText/BtnNumberStep";
import { postData } from "../../../../core/services/api/post-data/postData";
import { setItemLocalStorage } from "./../../../../core/hooks/local-storage/setItemLocalstorage";
import { useNavigate } from "react-router-dom";

const Steps1 = () => {
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    console.log(values);
    try {
      const ApiCall = await postData("/Sign/SendVerifyMessage", {
        phoneNumber: values.phoneNumber,
      });
      setItemLocalStorage("phoneNumber", values.phoneNumber);

      console.log(ApiCall.data.success);
      console.log(ApiCall.data.message);
      if (
        ApiCall.data.success == true &&
        ApiCall.data.message == "لطفا  کد تایید را وارد نمایید"
      ) {
        navigate("/Register/step2");
      } else if (
        ApiCall.data.success == true &&
        ApiCall.data.message == "درخواست نامعتبر"
      ) {
        alert("شما قبلا ثبت نام کرده ایید");
        navigate("/Register/step4");
      }
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
    }
  };
  const validation = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن معتبر نیست")
      .required("شماره تلفن الزامی است"),
  });
  const LoginPage = () => {
    navigate("/Register/step4");
  };

  return (
    <LoginBg>
      <div className="h-[400px] flex relative">
        <div className="w-[377px] h-full bg-[#fcfcfc] rounded-[15px] flex flex-col gap-[35px] justify-center items-center">
          <StageName stageName={"ایجاد حساب کاربری"} />
          <Formik
            initialValues={{ phoneNumber: "" }}
            onSubmit={onSubmit}
            validationSchema={validation}
          >
            <Form className="flex flex-col gap-7">
              <CustomInput
                name={"phoneNumber"}
                placeholder={"شماره همراه"}
                type={"text"}
              />
              <div className="flex flex-col gap-[10px] justify-center items-center">
                <BtnGetCode text={"دریافت کد تایید"} />
                <BtnTwoAuthorize text={"ورود"} onClick={LoginPage} />
              </div>
            </Form>
          </Formik>
        </div>
        <div className="size-16 mt-[55px] rounded-xl flex justify-center items-center bg-[#dcc7a0] left-[-50px] absolute z-10 rotate-45">
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
