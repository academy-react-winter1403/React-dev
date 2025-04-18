import React from "react";
import BtnGetCode from "./BtnGetCode";
import { useFormikContext } from "formik";
import BtnTwoAuthorize from "./BtnTwoAuthorize";
import { toast, ToastContainer } from "react-toastify";

const GoToEmailBtn = () => {
  const { values, isValid, submitForm } = useFormikContext();
  const handleClick = async () => {
    await submitForm();

    const email = values.email?.trim();
    if (!email) {
      return toast("لطفا ایمیل خود را وارد کنید");
    }
    if (isValid) {
      window.open("https://mail.google.com", "_blank", "noopener,noreferrer");
      toast("میتوانید رمز خود را بازیابی کنید")
    }
  };
  return (
      <BtnGetCode
        text={"رفتن به صفحه ایمیل"}
        onClick={handleClick}
        type={"button"}
      />
  );
};

export default GoToEmailBtn;
