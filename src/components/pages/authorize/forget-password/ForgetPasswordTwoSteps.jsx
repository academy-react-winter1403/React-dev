import { Formik, Form } from "formik";
import React, { useState } from "react";
import CustomInput from "../../../partials/authorize/CustomInput";
import BtnNumberStep from "../../../common/BtnText/BtnNumberStep";
import { useNavigate, useParams } from "react-router-dom";
import BtnGetCode from "../../../common/BtnText/BtnGetCode";
import StageName from "../../../common/StageName";
import * as yup from "yup";
import GoToPrevPage from "../../../common/BtnText/GoToPrevPage";
import LoginBg from "../../../partials/authorize/LoginBg";
import { getData, postData } from "../../../../core/services";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";

const ForgetPasswordTwoSteps = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [userId, setUserId] = useState(null);
  const [resetValue, setResetValue] = useState(null);
  const navigate = useNavigate();
  const { ConfigValue } = useParams();

  const { data, isLoading } = getData(
    ["validate-config", ConfigValue],
    `/Sign/Reset/${ConfigValue}`
  );
  if (!isLoading) {
    console.log(data);
    // if (data.success) {
    if (!userId) {
      setUserId(data.id);
    }
    console.log(data.id);
    if (!resetValue) {
      setResetValue(data.message);
    }
    console.log(data.message);
    // }
  }

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const ApiCall = await postData("/Sign/Reset", {
        userId: userId,
        resetValue: resetValue,
        newPassword: values.newPassword,
        rememberMe: rememberMe,
      });
      if (ApiCall.data.success) {
        setTimeout(() => {
          navigate("/Authorize/Login/step1");
        }, 1000);
        toast(ApiCall.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validation = yup.object().shape({
    newPassword: yup
      .string()
      .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد")
      .matches(/\d/, "رمز عبور باید حداقل یک عدد داشته باشد")
      .required("وارد کردن رمز عبور الزامی است"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "رمز عبور مطابقت ندارد")
      .required("تأیید رمز عبور الزامی است"),
  });

  return (
    <>
      <ToastContainer />
      <LoginBg>
        <div className="h-[400px] flex relative">
          <motion.div
            className="w-[377px] h-full bg-[#fcfcfc] rounded-[15px] flex flex-col gap-[35px] justify-center items-center"
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
            <StageName stageName={"بازیابی رمز عبور"} />
            <Formik
              initialValues={{ newPassword: "", confirmPassword: "" }}
              onSubmit={onSubmit}
              validationSchema={validation}
            >
              <Form className="flex flex-col gap-3">
                <CustomInput
                  name={"newPassword"}
                  placeholder={"رمز عبور"}
                  type={"text"}
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
                <div className="flex flex-col gap-[10px] justify-center items-center">
                  <BtnGetCode text={"ورود"} />
                </div>
              </Form>
            </Formik>
          </motion.div>
          <div className="size-16 mt-[165px] rounded-xl flex justify-center items-center bg-[#d7caa8] left-[-50px] absolute z-10 rotate-45">
            <BtnNumberStep number={2} />
          </div>
        </div>
        <GoToPrevPage />
      </LoginBg>
    </>
  );
};

export default ForgetPasswordTwoSteps;
