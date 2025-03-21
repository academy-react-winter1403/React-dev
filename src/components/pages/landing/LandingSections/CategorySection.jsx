import React from "react";
import CategoryBG from "../../../../core/icons/LandingIcons/CategoryBG";
import { CategorySectionApi } from "../../../../core/constants/LandingMockApi/CategoryMockApi";

const CategorySection = () => {
  return (
    <div className="w-full h-[620px] flex flex-col items-center justify-between font-b-yekan whitespace-nowrap mt-20">
      {/* category title */}
      <div className="w-[30%] h-[90px]">
        <div className="w-full h-1/2 flex flex-row flex-nowrap items-center justify-center gap-2">
          <div className="bg-[#01CEC9] rounded-full md:h-[12px]md:w-[12px] h-[9px] w-[9px]"></div>
          <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center">
            محبوب ترین دسته بندی ها
          </p>
        </div>
        <p className="lg:text-xl md:text-[18px] text-[12px] text-[#AAAAAA] text-center">
          گستره وسیعی از محبوب ترین دوره ها
        </p>
      </div>

      {/* category items */}
      <div className="w-full h-[500px] relative">
        <CategoryBG itemTop={0} itemLeft={0}>
          <div
            // className="border h-auto md:h-[300px] w-full max-w-[1202px] absolute m-auto grid grid-cols-2 md:grid-cols-4 place-items-center left-0 right-0 top-0 bottom-0"
            className="h-auto w-full grid grid-cols-2 md:grid-cols-4 place-items-center gap-y-[53px]"
          >
            {CategorySectionApi.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white rounded-3xl relative rotate-45 md:gap-7 
                shadow-[inset_4px_4px_6px_rgba(0,0,0,0.5)] cursor-pointer group
                hover:bg-gradient-to-b from-[#FFC700] to-[#D47300]
                lg:w-[185px] lg:h-[185px] md:w-[155px] md:h-[155px] xs:w-[105px] xs:h-[105px] xs:gap-3"
              >
                {/* Title */}
                <p className="text-center indent-[35px] -rotate-45 font-bold text-[#006865] group-hover:text-white
                md:text-2xl xs:text-[16px]">
                  {item.title}
                </p>
                {/* Icon */}
                <div className="-rotate-45 ml-12 flex justify-center items-center  text-[#006865] group-hover:text-white">{item.icon}</div>
              </div>
            ))}
          </div>
        </CategoryBG>
      </div>
    </div>
  );
};

export default CategorySection;
