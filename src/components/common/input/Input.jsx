import React from "react";
import { IoSearchCircleSharp } from "react-icons/io5";

const Input = ({ placeholder, type, change }) => {
  const changeHandler = (event) => {
    change(event);
  };

  return (
    <div className="input-control w-full relative">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-[#FAFAFA] backdrop-blur-[5px] outline-0
        border-[1px] border-[#DFDFDF80] rounded-[35px] py-[8px] px-[4px] indent-[5px] text-[#424242]"
        onChange={changeHandler}
      />
      <IoSearchCircleSharp
        color="#D47300"
        size={35}
        style={{ position: "absolute", top: "3px", left: "0" }}
      />
    </div>
  );
};

export default Input;
