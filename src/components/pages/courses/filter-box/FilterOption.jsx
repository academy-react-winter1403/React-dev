import React, { useState } from "react";
import { StarIcon } from "../../../../core/icons/icons";
import { Checkbox } from "@heroui/react";

const FilterOption = ({ filterName, id, children, filterItemClick, itemId }) => {
  const [checkFlag, setCheckFlag] = useState(false)
  const inputCheck = (productId) => {
    checkFlag ? (setCheckFlag(false), filterItemClick(productId, true)) : (setCheckFlag(true), filterItemClick(productId, false))
    
  };
  return (
    <div className="filter-option-control flex justify-start">
      {/* <span
        className="flex cursor-pointer items-center"
      >
        <input
          type="checkbox"
          id={`check${id}`}
          className="cursor-pointer"
          onChange={inputCheck}
        />
        <label htmlFor={"check" + id} className="cursor-pointer">
          {!children ? (
            <p className="font-[400] text-[14px] text-[#333333] mr-[6px]">
              {filterName}
            </p>
          ) : (
            <StarIcon repeatNum={filterName} />
          )}
        </label>
      </span> */}
      <Checkbox
        classNames={{
          base: "flex w-full indent-[22px] text-[14px]",
          wrapper: "hidden",
          label: "flex gap-x-[15px]",
          hiddenInput: "w-[12px] leading-0",
        }}
        onClick={() => inputCheck(itemId, filterName)}
        checked={checkFlag ? true : false}
      >
      {filterName}
      </Checkbox>
    </div>
  );
};

export default FilterOption;
