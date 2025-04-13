import React from "react";

const BtnNumberStep = ({number}) => {
  return (
    <div className="size-[45px] bg-[#fcfcfc] rounded-xl flex items-center justify-center">
      <div className="font-bold text-[#d47300] text-[20px] leading-[2] rotate-315">
      {number}
      </div>
    </div>
  );
};

export default BtnNumberStep;
