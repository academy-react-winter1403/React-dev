import React, { useEffect, useState } from "react";
import { InputOtp } from "@heroui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import BtnGetCode from "../../common/BtnText/BtnGetCode";
import BtnTwoAuthorize from "../../common/BtnText/BtnTwoAuthorize";
import { postData } from "../../../core/services/api/post-data/postData";
import { getItemLocalStorage } from "./../../../core/hooks/local-storage/getItemLocalStorage";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPassword = () => {
  const navigate = useNavigate();
  const Location = useLocation();
  const phoneNumber = getItemLocalStorage("phoneNumber");
  const ResendCode = async () => {
    try {
      const Resend = await postData("/Sign/SendVerifyMessage", {
        phoneNumber
      });
      console.log(Resend);
      console.log(Resend.data.message)
      if (Resend.data.message == "لطفا  کد تایید را وارد نمایید") {
        alert("لطفا کد جدیدرا وارد نمایید")
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
        location.pathname === "/Register/step2"
      ) {
        navigate("/Register/step3");
        console.log(ApiCall.data.message);
      } 
      else if (
        ApiCall.data.success == true &&
        location.pathname === "/Register/step5"
      ) {
        navigate("/landing");
        console.log(ApiCall.data.message);
      } 
      else {
        alert("کد صحیح  نمی باشد");
      }

      // console.log(ApiCall.data.success);
      // console.log(ApiCall.data.message);
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
        .matches(/^\d{5}$/, "کد باید 5 رقمی باشد")
        .required("وارد کردن کد الزامی است"),
    }),
    onSubmit: (values) => {
      console.log(values.verifyCode);
      handleSendInformation(values);
    },
  });
  return (
    <div className="flex flex-col gap-5">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center  w-[266px] h-[59px]"
      >
        <input
          name="verifyCode"
          value={formik.values.verifyCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          maxLength={5}
          autoFocus
          className="bg-[#f7f7f7] h-[59px]"
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
          <BtnTwoAuthorize
            text={"ارسال دوباره کد"}
            onClick={ResendCode}
          />
    </div>
  );
};

export default LoginPassword;