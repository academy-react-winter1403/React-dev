import React from "react";
import { InputOtp } from "@heroui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import BtnGetCode from "../../common/BtnText/BtnGetCode";
import BtnTwoAuthorize from "../../common/BtnText/BtnTwoAuthorize";
import { postData } from "../../../core/services/api/post-data/postData";
import { getItemLocalStorage } from './../../../core/hooks/local-storage/getItemLocalStorage';

const LoginPassword = () => {
  const handleSendInformation = async (values) => {
    const phoneNumber = getItemLocalStorage("phoneNumber")
    console.log(typeof values.verifyCode);
    try {
      const ApiCall = await postData("/Sign/VerifyMessage", {
        phoneNumber,
        verifyCode: values.verifyCode,
      });
      console.log(ApiCall);
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
    }
  };

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
      handleSendInformation(values)
    },
  });
  return (
    <div className="flex flex-col">
      {/* <div className="w-[266px] h-[59px] rounded-lg flex  items-center gap-4 bg-[#f7f7f7]"> */}
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center  w-[266px] h-[59px]"
      >
        {/* <InputOtp
            length={5}
            variant="underlined"
            value={formik.values.verifyCode}
            onChange={(value) => formik.setFieldValue("verifyCode", value)}
            classNames={{
              segmentWrapper: "flex",
            }}
            name="verifyCode"
            autoFocus
          /> */}
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
          1.59
        </span>
        <div className="flex flex-col gap-[10px] justify-center items-center">
          <BtnGetCode text={"ایجاد حساب"} />
          <BtnTwoAuthorize text={"ارسال دوباره کد"} />
        </div>
      </form>
      {/* </div> */}
    </div>
  );
};

export default LoginPassword;
