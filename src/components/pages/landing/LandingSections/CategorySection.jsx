import React from "react";
import CategoryBG from "../../../../core/icons/LandingIcons/CategoryBG";
import { CategorySectionApi } from "../../../../core/constants/LandingMockApi/CategoryMockApi";
import Titles from "./Titles";

const CategorySection = () => {
  return (
    <div className="w-full h-[620px] flex flex-col items-center justify-between font-b-yekan whitespace-nowrap mt-20 max-w-[1515px] mx-auto " data-aos="fade-up">
      {/* category title */}
      
      <Titles title={"محبوب ترین دسته بندی ها"} exp={"گستره وسیعی از محبوب ترین دوره ها"}/>

      {/* category items */}
      <div className="w-full h-[500px] relative">
        <CategoryBG itemTop={0} itemLeft={0}>
          <div
            className="h-auto w-[80%]  grid grid-cols-2 md:grid-cols-4 place-items-center lg:gap-y-[53px] md:gap-y-[61px] xs:gap-y-[53px]"
          >
            {CategorySectionApi.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white rounded-3xl relative rotate-45 md:gap-10 
                shadow-[inset_4px_4px_6px_rgba(0,0,0,0.5)] cursor-pointer group
                hover:bg-gradient-to-b from-[#FFC700] to-[#D47300]
                lg:w-[185px] lg:h-[185px] md:w-[130px] md:h-[130px] xs:w-[105px] xs:h-[105px] xs:gap-3"
              >
                {/* Title */}
                <p className="text-center lg:indent-[38px] md:indent-[50px] xs:indent-[40px] -rotate-45 font-bold text-[#006865] group-hover:text-white
                lg:text-2xl md:text-[18px] xs:text-[14px]">
                  {item.title}
                </p>
                {/* Icon */}
                <div className="-rotate-45 md:ml-18 xs:ml-10 flex justify-center items-center  text-[#006865] group-hover:text-white">{item.icon}</div>
              </div>
            ))}
          </div>
        </CategoryBG>
      </div>
    </div>
  );
};

export default CategorySection;
