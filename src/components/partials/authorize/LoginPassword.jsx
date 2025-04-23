import React, { useEffect, useState } from "react";
// import { InputOtp } from "@heroui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import OTPInput from "../../common/OtpInput/OtpInput";
import BtnGetCode from "../../common/BtnText/BtnGetCode";
import BtnTwoAuthorize from "../../common/BtnText/BtnTwoAuthorize";
import { postData } from "../../../core/services/api/post-data/postData";
import { getItemLocalStorage } from "./../../../core/hooks/local-storage/getItemLocalStorage";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const LoginPassword = () => {
  const navigate = useNavigate();
  const Location = useLocation();
  const phoneNumber = getItemLocalStorage("phoneNumber");

  const ResendCode = async () => {
    try {
      const Resend = await postData("/Sign/SendVerifyMessage", {
        phoneNumber,
      });
      console.log(Resend);
      console.log(Resend.data.message);
      if (Resend.data.message == "لطفا  کد تایید را وارد نمایید") {
        toast("لطفا کد جدید را وارد نمایید");
      }
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
    }
  };
  const handleSendInformation = async (values) => {
    console.log(values);
    try {
      const ApiCall = await postData("/Sign/VerifyMessage", {
        phoneNumber,
        verifyCode: values.verifyCode,
      });
      if (
        ApiCall.data.success == true &&
        location.pathname === "/Authorize/Register/step2"
      ) {
        toast(ApiCall.data.message);
        navigate("/Authorize/Register/step3");
      } else if (
        ApiCall.data.success == true &&
        location.pathname === "/Authorize/Login/step2"
      ) {
        navigate("/");
        toast(ApiCall.data.message);
      } else {
        toast("کد صحیح  نمی باشد");
      }
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
    }
  };

  const [timer, setTimer] = useState(119);
  const [minute, setMinute] = useState(1);
  const [second, setSecond] = useState(59);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTime) => {
        const newTime = prevTime - 1;
        const newMinute = Math.floor(newTime / 60);
        const newSecond = newTime % 60;

        setMinute(newMinute);
        setSecond(newSecond);
        if (newTime == 0) {
          clearInterval(countdown);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formik = useFormik({
    initialValues: { verifyCode: "" },
    validationSchema: yup.object().shape({
      verifyCode: yup
        .string()
        // .matches(/^\d{5}$/, "کد باید 5 رقمی باشد")
        .length(5, "کد باید 5 رقمی باشد")
        .required("وارد کردن کد الزامی است"),
    }),
    onSubmit: (values) => {
      console.log(values.verifyCode);
      handleSendInformation(values);
    },
  });
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col gap-8">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center w-[266px] h-[59px]"
        >
          {/* onChange={formik.setFieldValue}  */}
          <OTPInput
            length={5}
            name="verifyCode"
            setFieldValue={formik.setFieldValue}
          />
          {formik.errors.verifyCode && (
            <p className="text-red-600">{formik.errors.verifyCode}</p>
          )}
          <span className="flex flex-row-reverse text-[#008e8b] text-xs font-normal font-b-yekan">
            {minute}:{second < 10 ? "0" : ""}
            {second}
          </span>
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <BtnGetCode text={"ایجاد حساب"} />
          </div>
        </form>
        <BtnTwoAuthorize text={"ارسال دوباره کد"} onClick={ResendCode} />
      </div>
    </>
  );
};

export default LoginPassword;
