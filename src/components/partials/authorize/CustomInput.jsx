import { ErrorMessage, Field } from "formik";
import React from "react";

const CustomInput = ({name,placeholder,type}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <Field
        name={name}
        placeholder={placeholder}
        type={type}
        className="w-[266px] h-12 bg-[#f7f7f7] outline-red-600 indent-1.5 rounded-lg inset-shadow-sm text-gray-500 font-bold text-base"
      />
      <ErrorMessage
        name={name}
        className="text-red-600 text-xs font-medium"
        component="div"
      />
    </div>
  );
};

export default CustomInput;
