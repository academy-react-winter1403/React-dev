import React from "react";

const BtnTwoAuthorize = ({text,onClick}) => {
  return (
    <button className="px-5 font-bold text-2xs font-b-yekan text-[#008e8b] cursor-pointer" onClick={onClick}>
        {text}
    </button>
  );
};

export default BtnTwoAuthorize;
