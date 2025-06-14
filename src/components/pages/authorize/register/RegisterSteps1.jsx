import React from "react";
import LoginBg from "../../../partials/authorize/LoginBg";
import GoToOrgPage from "../../../common/BtnText/GoToOrgPage";
import BtnGetCode from "../../../common/BtnText/BtnGetCode";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import BtnTwoAuthorize from "../../../common/BtnText/BtnTwoAuthorize";
import StageName from "../../../common/StageName";
import CustomInput from "../../../partials/authorize/CustomInput";
import BtnNumberStep from "../../../common/BtnText/BtnNumberStep";
import { postData } from "../../../../core/services/api/post-data/postData";
import { setItemLocalStorage } from "../../../../core/hooks/local-storage/setItemLocalstorage";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
// import { Toaster } from "react-hot-toast";

const RegisterSteps1 = () => {
  const { t, i18n } = useTranslation();
  const direction = i18n.language === "fa" ? "rtl" : "ltr";
  const lang = i18n.language;
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
        navigate("/Authorize/Register/step2");
        // toast("لطفا  کد تایید را وارد نمایید");
        toast(t("please_enter_code"));
      } else if (
        ApiCall.data.success == true &&
        ApiCall.data.message == "درخواست نامعتبر"
      ) {
        // toast("شما قبلا ثبت نام کرده ایید");
        toast(t("already_registered"));
        // alert("شما قبلا ثبت نام کرده ایید")
        navigate("/Authorize/Login/step1");
      }
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
    }
  };
  const validation = yup.object().shape({
    phoneNumber: yup
      .string()
      // .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن معتبر نیست")
      // .required("شماره تلفن الزامی است"),
      .matches(/^(\+98|0)?9\d{9}$/, t("invalid_phone"))
      .required(t("required_phone")),
  });
  const LoginPage = () => {
    navigate("/Authorize/Login/step1");
  };

  return (
    <>
      {/* <ToastContainer /> */}
      <LoginBg>
        {/* <Toaster position="top-center" reverseOrder={false} /> */}
        <div className="md:h-[400px] xs:h-[300px] flex relative   "
         dir={direction} lang={lang}>
          <motion.div
            className="lg:w-[377px] lg:h-[400px] md:w-[300px] md:h-[340px] sm:w-[250px] sm:h-[250px] xs:w-[200px] xs:h-[250px] bg-(--bg-main) rounded-[15px] flex flex-col gap-[35px] justify-center items-center "
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
            <StageName 
            // stageName={"ایجاد حساب کاربری"} 
            stageName={t("create_account")}
            />
            <Formik
              initialValues={{ phoneNumber: "" }}
              onSubmit={onSubmit}
              validationSchema={validation}
            >
              <Form className="flex flex-col gap-7">
                <CustomInput
                  name={"phoneNumber"}
                  // placeholder={"شماره همراه"}
                  placeholder={t("phone_number")}
                  Toggle={false}
                  originalType={"text"}
                />
                <div className="flex flex-col gap-[10px] justify-center items-center">
                  <BtnGetCode 
                  // text={"دریافت کد تایید"} 
                  text={t("get_code")}
                  />
                  <BtnTwoAuthorize 
                  // text={"ورود"} 
                  text={t("Login")}
                  onClick={LoginPage} />
                </div>
              </Form>
            </Formik>
          </motion.div>
          <div className="size-16 mt-[55px] rounded-xl flex justify-center items-center bg-[#dcc7a0] left-[-50px] absolute z-10 rotate-45">
            <BtnNumberStep number={1} />
          </div>
        </div>
        <GoToOrgPage />
      </LoginBg>
    </>
  );
};

export default RegisterSteps1;
