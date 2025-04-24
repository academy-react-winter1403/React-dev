import { Field } from "formik";
import React from "react";

const UserPanelInput = ({ type, name, placeholder, style, asType }) => {
  return <Field name={name} placeholder={placeholder} type={type} as={asType} className={`${style} outline-0 p-2 pr-3.5 
    shadow-[inset_0_1px_2px_#00000033] bg-[#FBFBFB] text-[#005351] text-[14px] border border-transparent
    focus:border-[#01CEC9] focus:shadow-[inset_0_1px_1px_#00000033] rounded-[5px]`}
  />;
};

export default UserPanelInput;
