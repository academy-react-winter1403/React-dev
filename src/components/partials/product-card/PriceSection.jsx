import React from "react";
import { BasketIcon } from "../../../core/icons/icons";

const PriceSection = ({ price }) => {
  return (
    <>
      <div className="left">
        <BasketIcon />
      </div>
      <div className="right flex items-center gap-x-[4px]">
        <p className="text-[#006865] text-[20px] font-[tahoma]"> {price} </p>
        <span className="text-[#006865] text-[14px]"> تومان </span>
      </div>
    </>
  );
};

export default PriceSection;
