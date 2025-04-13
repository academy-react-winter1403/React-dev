import { Formik, Form } from "formik";
import React from "react";
import CustomInput from "../../../partials/authorize/CustomInput";
import BtnNumberStep from "../../../common/BtnText/BtnNumberStep";
import BtnTwoAuthorize from "../../../common/BtnText/BtnTwoAuthorize";
import { useNavigate } from "react-router-dom";

const ForgetOneSteps = () => {
  const navigate = useNavigate();

  const btnClickHandler = () => {
    // alert();
    navigate("/Register/forget-password/steps2");
  };

  return (
    <div className="w-[400px] h-[400px] rounded-[10px] shadow-[0_1px_2px_#000] flex items-center justify-center bg-[#FCFCFC]">
      <Formik initialValues={{ email: "" }}>
        <Form className="flex flex-col items-center gap-y-[30px]">
          <div className="input-control flex justify-center">
            <CustomInput
              name={"email"}
              type={"email"}
              placeholder={"لطفا ایمیل خود را وارد نمایید..."}
            />
          </div>
          <div className="btn-click-holder flex justify-center">
            <BtnTwoAuthorize text={"تایید"} onClick={btnClickHandler} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ForgetOneSteps;
