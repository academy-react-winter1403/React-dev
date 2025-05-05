import React, { useEffect, useState } from "react";
import { BasketIcon } from "../../../core/icons/icons";
import { SeparationPrice } from "../../../core";

const PriceSection = ({ price }) => {
  const [priceFull, setPriceFull] = useState()

  // change a price
  const priceConvertor = () => {
    setPriceFull(SeparationPrice(price))
  }

  useEffect(() => {
    priceConvertor()
  }, [])
  // change a price

  
  return (
    <>
      <div className="left">
        <BasketIcon />
      </div>
      <div className="right flex items-center gap-x-[4px]">
        <p className="text-[#006865] text-[20px] font-b-yekan"> {priceFull} </p>
        <span className="text-[#006865] text-[14px]"> تومان </span>
      </div>
    </>
  );
};

export default PriceSection;
