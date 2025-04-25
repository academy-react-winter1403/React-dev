import React from "react";

const TextCom = ({ userName, placeholderText, classStyles, elemTitle }) => {
  return (
    <p className={`font-b-yekan text-[14px] max-lg:text-[14px] max-xl:text-[13px]
      max-md:text-[15px] max-sm:text-[14px] max-md:text-center
      ${classStyles}`}
    >
      <span className="text-[#ABABAB]"> {placeholderText} </span>
      <span className="text-[#CC6E00]" title={elemTitle}> {userName} </span>
    </p>
  );
};

export default TextCom;
