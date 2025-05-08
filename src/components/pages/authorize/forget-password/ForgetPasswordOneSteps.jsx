import { Formik, Form } from "formik";
import React from "react";
import CustomInput from "../../../partials/authorize/CustomInput";
import BtnNumberStep from "../../../common/BtnText/BtnNumberStep";
// import { useNavigate } from "react-router-dom";
import BtnGetCode from "../../../common/BtnText/BtnGetCode";
import StageName from "../../../common/StageName";
import * as yup from "yup";
import GoToOrgPage from "../../../common/BtnText/GoToOrgPage";
import LoginBg from "../../../partials/authorize/LoginBg";
import { postData } from "../../../../core/services";
import GoToEmailBtn from "../../../common/BtnText/GoToEmailBtn";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import ForgetPasswordBg from "../../../partials/authorize/ForgetPasswordBg";

const ForgetPasswordOneSteps = () => {
  const onSubmit = async (values) => {
    try {
      const ApiCall = await postData("/Sign/ForgetPassword", {
        email: values.email,
        baseUrl: "http://localhost:5173/Authorize/forget-password/step2",
      });
      console.log(ApiCall.data.success);
    } catch (error) {
      console.log(error);
    }
  };

  const validation = yup.object().shape({
    email: yup
      .string()
      .email("ایمیل نامعتبر است")
      .required("وارد کردن ایمیل الزامی است"),
  });

  return (
    <>
      <ToastContainer />
      <ForgetPasswordBg>
      <div className="h-[400px] flex relative">
          <motion.div
            className="w-[377px] h-full bg-[#fcfcfc] rounded-[15px] flex flex-col gap-[15px] justify-center items-center"
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
              initialValues={{ email: "" }}
              onSubmit={onSubmit}
              validationSchema={validation}
            >
              <Form className="flex flex-col gap-7">
                <CustomInput
                  name={"email"}
                  placeholder={"ایمیل"}
                  Toggle={false}
                  originalType={"text"}
                />
                <div className="flex flex-col gap-[10px] justify-center items-center">
                  {/* <BtnGetCode text={"رفتن به صفحه ایمیل"} /> */}
                  <GoToEmailBtn />
                </div>
              </Form>
            </Formik>
          </motion.div>
          <div className="size-16 mt-[55px] rounded-xl flex justify-center items-center bg-[#dcc7a0] left-[-50px] absolute z-10 rotate-45">
            <BtnNumberStep number={1} />
          </div>
        </div>
        <GoToOrgPage />
      </ForgetPasswordBg>
    </>
  );
};

export default ForgetPasswordOneSteps;
