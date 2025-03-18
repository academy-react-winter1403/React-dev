import React from "react";
import FilterLabel from "./FilterLabel";

const BottomSection = () => {
  return (
    <div className="bottom-section-container w-full mt-16 flex justify-center gap-x-[10px] items-start">
      <div className="side p-2 bg-[#FFFFFF] drop-shadow-[0_1px_2px_#0000004D] rounded-[10px]">
        <FilterLabel />
      </div>
      <div className="main w-[70%] h-[200px] border border-red-400">
        <div className="sort-viw-btn-control"></div>
        <div className="product-card-container"></div>
      </div>
    </div>
  );
};

export default BottomSection;