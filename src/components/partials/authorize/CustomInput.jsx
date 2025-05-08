import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { LuEye } from "react-icons/lu";

const CustomInput = ({ name, placeholder, Toggle, originalType }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-1.5 relative">
      <Field
        name={name}
        placeholder={placeholder}
        type={Toggle ? (showPassword ? "text" : "password") : originalType}
        className="md:w-[266px] sm:w-[200px] xs:w-[160px] h-12 bg-[#f7f7f7] outline-red-600 indent-1.5 rounded-lg inset-shadow-sm text-gray-500 font-bold text-base"
      />
      {Toggle && (
        <button
          className="size-2.5 absolute top-4 left-4"
          type="button"
          onClick={() => setShowPassword((responsive) => !responsive)}
        >
          {showPassword ? (
            <LuEye style={{ color: "#339290" }} />
          ) : (
            <HiOutlineEyeSlash style={{ color: "#339290" }} />
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

export default CustomInput;
