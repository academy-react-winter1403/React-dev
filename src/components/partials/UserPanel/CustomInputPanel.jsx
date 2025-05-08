import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { LuEye } from "react-icons/lu";

const CustomInputPanel = ({
  name,
  placeholder,
  Toggle,
  originalType,
  title,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-1.5 relative">
      <p className="text-[#979797] font-b-yekan font-normal text-[14px]">
        {title}
      </p>
      <Field
        // dir="ltr"
        name={name}
        placeholder={placeholder}
        type={Toggle ? (showPassword ? "text" : "password") : originalType}
        className="md:w-[220px] sm:w-[180px] xs:w-[140px] h-10 bg-[#f7f7f7] outline-red-600 indent-2.5 rounded-lg inset-shadow-sm text-gray-500 font-bold text-base"
      />
      {Toggle && (
        <button
          className="size-2.5 absolute top-10 left-4"
          type="button"
          onClick={() => setShowPassword((responsive) => !responsive)}
        >
          {showPassword ? (
            <LuEye style={{ color: "#339290" }} size={15} />
          ) : (
            <HiOutlineEyeSlash style={{ color: "#339290" }} size={15} />
          )}
        </button>
      )}
      <ErrorMessage
        name={name}
        className="text-red-600 text-xs font-medium"
        component="div"
      />
    </div>
  );
};

export default CustomInputPanel;
