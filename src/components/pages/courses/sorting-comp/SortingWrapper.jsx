import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

const SortingWrapper = ({ children }) => {
  return (
    <div className="group relative z-1">
      <button
        className="flex items-center justify-around w-[207px] h-[45px] bg-[#FFFFFF]
        drop-shadow-[0_1px_3px_#00000040] rounded-[13px_13px_0_0]"
      >
        <BiMenuAltRight size={25} style={{color: "#005B58"}}/>
        <p className="text-[17px] text-[#333333] font-[400] mt-[-3px]"> جدید ترین </p>
        <MdKeyboardArrowDown size={27} style={{color: "#005B58"}}/>
      </button>

      <div className="sort-menu absolute overflow-hidden top-[46px] left-0 h-0 w-full transition-all rounded-[0_0_10px_10px]
        bg-[#fff] drop-shadow-[0_2px_3px_#ccc] px-[8px] group-hover:h-44"
        >
        {children}
      </div>
    </div>
  );
};

export default SortingWrapper;
