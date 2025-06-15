import React, { useEffect, useState } from "react";
// import { useFormContext } from "react-hook-form";
import { Field } from "formik";

const OTPInput = ({ length,name,setFieldValue }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  // const {setFieldValue} = useFormContext();


  useEffect(() => {
    setFieldValue(name,otp.join(""))
  }, [otp,name,setFieldValue])
  

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length > 1) return; // Allow only single-digit inputs
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // onChange(newOtp.join(""));
  
    // Move to the next input if the current input is filled
    if (value && index < length - 1) {
      const nextSibling = e.target.parentNode.childNodes[index + 1];
      nextSibling && nextSibling.focus();
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("text").slice(0, length);
    // const newOtp = [...otp];
    const newOtp = Array(length).fill("")
    pastedData.split("").forEach((char, index) => {
      newOtp[index] = char;
    });
    setOtp(newOtp);
    // onChange(newOtp.join(""));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  };
  return (
    <div dir="ltr" className="flex justify-center gap-2.5">
      {otp.map((_, index) => (
        <input
          className="inset-shadow-sm bg-[#F7F7F7]"
          key={index}
          type="text"
          maxLength="1"
          value={otp[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          style={{
            width: "40px",
            height: "40px",
            textAlign: "center",
            fontSize: "18px",
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
