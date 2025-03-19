import FilteredBox from "./filter-box/FilteredBox";
import { filterData, sortFilterData } from "../../../core/constants";
import FilterOption from "./filter-box/FilterOption";
import React from "react";
import FilterLabel from "./FilterLabel";
import StarIcon from "../../../core/icons/courses/StarIcon";
import { GridIcon, MenuIcon } from "../../../core/icons/icons";
import SortingWrapper from "./sorting-comp/SortingWrapper";
import { CardWrapper } from "../../partials";

const BottomSection = () => {
  return (
    <div className="bottom-section-container w-full mt-[154px] flex justify-center gap-x-[10px] items-start">
      <div className="side p-2 bg-[#FFFFFF] drop-shadow-[0_1px_2px_#0000004D] rounded-[10px] flex flex-col gap-y-[15px]">
        <FilterLabel />
        {filterData.map((item, index) => {
          return (
            <FilteredBox filterText={item.sortText} key={index}>
              {item.sortingData.map((sort, index) => {
                return (
                  <FilterOption key={sort.id} id={sort.id}>
                    {item.sortText === "امتیاز" ? (
                      <StarIcon repeatNum={sort.text} />
                    ) : (
                      <p className="font-[400] text-[16px] text-[#333333] mr-[8px]">
                        {sort.text}
                      </p>
                    )}
                  </FilterOption>
                );
              })}
            </FilteredBox>
          );
        })}
      </div>
      <div className="main w-[70%] h-[200px]">
        <div className="sort-viw-btn-control flex justify-between">
          <SortingWrapper>
            {
              sortFilterData.map((item, index) => {
                return (
                  <p className="py-[5px] px-[7px] border border-[#cccccc]
                    rounded-[5px] mt-[12px] cursor-pointer transition-colors hover:bg-[#005B58] hover:text-white"
                  >{item}</p>
                )
              })
            }
          </SortingWrapper>
          <div className="left-control flex gap-x-[10px]">
            <MenuIcon/>
            <GridIcon/>
          </div>
        </div>
        <div className="product-card-container flex mt-[54px]">
          <CardWrapper/>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
