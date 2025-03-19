import React from "react";
import { HeaderItemsText } from "../../../core/constants/LandingMockApi/HeaderItemsMock";


const HeaderMiddlePart = () => {
  return (
    <div
      className="text-center 
              "
    >
      <ul
        className="flex flex-row flex-nowrap justify-center mt-2.5 font-b-yekan gap-6 text-[#555555] text-[17px] font-normal whitespace-nowrap
                lg:text-[17px] md:text-[14px] sm:text-[11px] xs:text-[11px]"
      >
        {HeaderItemsText.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer relative ${
              index === 0
                ? "before:absolute before:bottom-[-4px] before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-[#F3F3F300] before:via-[#E48900] before:to-[#F3F3F300] content-['']"
                : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderMiddlePart;
