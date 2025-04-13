import { Formik, Form } from "formik";
import React from "react";
import BtnTwoAuthorize from "../../../common/BtnText/BtnTwoAuthorize";
import CustomInput from "../../../partials/authorize/CustomInput";

const ForgetPasswordTwoSteps = () => {
  return (
    <div className="w-[400px] h-[400px] rounded-[10px] shadow-[0_1px_2px_#000] flex items-center justify-center bg-[#FCFCFC]">
      <Formik initialValues={{ email: "" }}>
        <Form className="flex flex-col items-center gap-y-[30px]">
          <div className="input-control flex justify-center flex-col">
            <CustomInput
              name={"email"}
              type={"email"}
              placeholder={"پسسوورد جدید خود را وارد نمایید..."}
            />
          </div>
          <div className="btn-click-holder flex justify-center">
            <BtnTwoAuthorize text={"تایید"}/>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ForgetPasswordTwoSteps;
