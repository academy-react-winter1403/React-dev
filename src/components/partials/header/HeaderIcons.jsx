import React from "react";
import { TbHeart } from "react-icons/tb";
import { HiShoppingBag } from "react-icons/hi2";

const HeaderIcons = () => {
  return (
    <div
      className="flex justify-between flex-row-reverse flex-nowrap gap-1
                 sm:justify-center"
    >
      <div className="flex items-start mt-2">
        <button className="relative cursor-pointer">
          <HiShoppingBag
            className="text-[#CCCCCC] 
                          lg:w-[35px] lg:h-[30px] md:w-[30px] md:h-[25px] sm:w-[20px] sm:h-[15px]"
            strokeWidth={0.1}
          />
          <div
            className=" bg-[#E48900] text-white  rounded-full absolute bottom-2
                                    right-0 flex items-center justify-center font-b-yekan
                                    lg:w-[14px] lg:h-[14px] lg:text-[10px] lg:bottom-0 md:w-[12px] md:h-[12px] md:text-[8px]
                                    md:bottom-0 sm:w-[10px] sm:h-[10px] sm:text-[4px] sm:bottom-1 xs:w-[10px] xs:h-[10px] xs:text-[4px]"
          >
            4
          </div>
        </button>
      </div>
      <div className="flex items-start mt-2">
        <button className="cursor-pointer">
          <TbHeart
            className="text-[#CCCCCC] 
                          lg:w-[30px] lg:h-[30px] md:w-[25px] md:h-[25px] sm:w-[15px] sm:h-[15px]"
            strokeWidth={1}
          />
        </button>
      </div>
    </div>
  );
};

export default HeaderIcons;
