import React from "react";

const BtnComp = ({ text, type, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-[219px] h-[45px] rounded-[8px] bg-[#01CEC9] text-white cursor-pointer"
    >
      {text}
    </button>
  );
};

export default BtnComp;
