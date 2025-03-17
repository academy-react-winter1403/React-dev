import React from "react";
import { LuFilterX } from "react-icons/lu"
import { TrashCanIcon } from "../../../core/icons/icons";

const FilterLabel = () => {
  return (
    <button className="filter-label-control flex gap-[40px] p-[5px] bg-[#E7E7E7] items-center">
      <button className="rigth flex items-center">
        <LuFilterX />
        <p> فیلترها </p>
      </button>
      <TrashCanIcon/>
    </button>
  );
};

export default FilterLabel;
