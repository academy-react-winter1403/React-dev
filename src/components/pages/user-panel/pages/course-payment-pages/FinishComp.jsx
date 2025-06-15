import React from "react";
import finishPic from "../../../../../assets/pics/paymentSteps/finish.svg";

const FinishComp = ({ onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3.5">
      <img src={finishPic} alt="" className="w-[80px] h-[80px] rounded-[50%]" />
      <p className="text-white">اطلاعات پرداختی با موفقیت ثبت شد</p>
      <button
        onClick={onClick}
        className="w-[80px] h-[30px] bg-[#ccc] text-[16px] rounded-[8px] cursor-pointer"
      >
        بستن
      </button>
    </div>
  );
};

export default FinishComp;
