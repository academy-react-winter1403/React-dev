import React from "react";
import { FaAngleDown } from "react-icons/fa6";

const ReadMoreButton = ({ onClick }) => {
  return (
    <div className="bg-gradient-to-t from-white to-transparent absolute  w-full h-2/3 bottom-0 flex items-end justify-center">
      <button
        onClick={onClick}
        className="border border-[#01CEC9] text-[#01CEC9] flex flex-row flex-nowrap gap-1 font-b-yekan rounded-[45px] mb-8 cursor-pointer px-6 py-1"
      >
        <p className="text-[18px] text-center">مطالعه بیشتر</p>
        <FaAngleDown className="text-center text-[18px] mt-1.5" />
      </button>
    </div>
  );
};

export default ReadMoreButton;
