import React from "react";
import BtnGetCode from "./BtnGetCode";
import { useFormikContext } from "formik";
import BtnTwoAuthorize from "./BtnTwoAuthorize";

const GoToEmailBtn = () => {
  const { values , isValid ,submitForm } = useFormikContext();
  const handleClick = async () => {
    await submitForm()
    
    // setTimeout(() => {
      
      const email = values.email?.trim();
      if (!email) {
          return alert("لطفا ایمیل خود را وارد کنید")
      }
      if (isValid) {
        window.open("https://mail.google.com", "_blank", "noopener,noreferrer"); 
      }
    // }, 100);



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
