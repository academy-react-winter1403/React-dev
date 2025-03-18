import React from "react";

const FilterOption = ({ filterName, id }) => {
    console.log(id)
  return (
    <div className="filter-option-control flex mt-[3px] cursor-pointer items-center">
      <input
        type="checkbox"
        id={"check" + id}
        // className="cursor-pointer appearance-none
        // w-[17px] h-[17px] border-[2px] border-dotted rounded-[4px] checked:bg-blue-500"
        className="cursor-pointer"
      />
      <label htmlFor={"check" + id} className="cursor-pointer">
        <p className="font-[400] text-[16px] text-[#333333] mr-[8px]">
          {filterName}
        </p>
      </label>
    </div>
  );
};

export default FilterOption;
