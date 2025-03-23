import React, { useState } from "react";
import { StarIcon } from "../../../../core/icons/icons";

const FilterOption = ({ filterName, id, children, filterItemClick }) => {
  const filterOptionClick = (filterName) => {
    filterItemClick(filterName);
  };
  return (
    <div className="filter-option-control flex justify-start">
      <span
        className="flex cursor-pointer items-center"
        onClick={() => filterOptionClick(filterName)}
      >
        <input
          type="checkbox"
          id={"check" + id}
          // className="cursor-pointer appearance-none
          // w-[17px] h-[17px] border-[2px] border-dotted rounded-[4px] checked:bg-blue-500"
          className="cursor-pointer"
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
      </span>
    </div>
  );
};

export default FilterOption;
