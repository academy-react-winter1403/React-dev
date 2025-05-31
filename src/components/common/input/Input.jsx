// import React from "react";
// import { IoSearchCircleSharp } from "react-icons/io5";

// const  Input = ({ placeholder, type, change }) => {
//   const changeHandler = (event) => {
//     change(event.target.value);
//   };

//   return (
//     <div className="input-control w-full relative" data-aos="fade-left">
//       <input
//         type={type}
//         placeholder={placeholder}
//         className="w-full bg-[#FAFAFA] outline-0 shadow-sm font-b-yekan
//         border-[1px] border-[#DFDFDF80] rounded-[35px] pt-[10px] pb-[10px] px-[4px] indent-[12px] text-[#424242]"
//         onChange={changeHandler}
//       />
//       <IoSearchCircleSharp
//         color="#D47300"
//         size={42}
//         style={{ position: "absolute", top: "3px", left: "0" }}
//       />
//     </div>
//   );
// };

// export default Input;


import React from "react";
import { IoSearchCircleSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const Input = ({ placeholder, type, change }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "fa";

  const changeHandler = (event) => {
    change(event.target.value);
  };

  return (
    <div className="input-control w-full relative" data-aos="fade-left">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-[#FAFAFA] outline-0 shadow-sm font-b-yekan
        border-[1px] border-[#DFDFDF80] rounded-[35px] pt-[10px] pb-[10px] px-[4px] indent-[12px] text-[#424242]"
        onChange={changeHandler}
        dir={isRTL ? "rtl" : "ltr"}
      />
      <IoSearchCircleSharp
        color="#D47300"
        size={42}
        style={{
          position: "absolute",
          top: "3px",
          [isRTL ? "left" : "right"]: "0",
        }}
      />
    </div>
  );
};

export default Input;
