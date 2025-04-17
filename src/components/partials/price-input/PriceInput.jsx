import { Slider } from "@heroui/react";
import React, { useState } from "react";
import { SeparationPrice } from "../../../core/utility/SeparationPrice";

const PriceInput = ({ onChange }) => {
  const [priceValue, setPriceValue] = useState([]);

  const priceChangeHandler = (value) => {
    onChange(value);
    let priceFull = [];
    value.map((item) => {
      const price = SeparationPrice(item);
      priceFull.push(price);
    });
    setPriceValue(priceFull);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="value-control w-full px-3.5 flex justify-between">
        <p className="font-b-yekan text-[#005B58]">
          {priceValue[1] ? priceValue[1] : "2,000"}
        </p>
        <p className="font-b-yekan text-[#005B58]">
          {priceValue[0] ? priceValue[0] : "9,500,000"}
        </p>
      </div>
      <Slider
        defaultValue={[9500, 2000]}
        maxValue={1000000}
        minValue={1000}
        step={1000}
        classNames={{
          base: "w-[90%] h-[60px]",
          filler: "h-[7px] bg-[#FFA31A]",
          track: "h-[7px] bg-[#FEE9CA] flex items-center",
          startContent: "flex justify-center",
          trackWrapper: "h-[40px]",
          thumb:
            "w-[20px] h-[20px] bg-[#E48900] bottom-[-15px] border border-[3px] border-[#F0F0F0]",
          label: "hidden",
          labelWrapper: "hidden",
        }}
        onChange={priceChangeHandler}
      />
    </div>
  );
};

export default PriceInput;
