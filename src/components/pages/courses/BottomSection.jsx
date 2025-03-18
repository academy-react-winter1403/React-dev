<<<<<<< HEAD
import React from "react";
import FilterLabel from "./FilterLabel";
import FilteredBox from "./filter-box/FilteredBox";
// import { sortData } from "../../../core/constants/courses-datas/filter-data";
// import FilterOption from "./filter-box/FilterOption";
=======
import React from 'react'
import FilterLabel from './FilterLabel'
import { technologyData } from '../../../core/constants/courses-datas/filter-data'
import FilterBox from './FilterBox'
>>>>>>> main

const BottomSection = () => {
  return (
    <div className="bottom-section-container w-full mt-16 flex justify-center gap-x-[10px] items-start">
      <div className="side p-2 bg-[#FFFFFF] drop-shadow-[0_1px_2px_#0000004D] rounded-[10px] flex flex-col gap-y-[15px]">
        <FilterLabel />
        {sortData.map((item, index) => {
          return (
            <FilteredBox filterText={item.sortText} key={index}>
              {item.sortingData.map((sort, index) => {
                return <FilterOption filterName={sort.text} key={sort.id} id={sort.id}/>;
              })}
            </FilteredBox>
          );
        })}
        <FilteredBox filterText={"قیمت"} currencyUnit={"تومان"}>

        </FilteredBox>
      </div>
      <div className="main w-[70%] h-[200px] border border-red-400">
        <div className="sort-viw-btn-control"></div>
        <div className="product-card-container"></div>
      </div>
<<<<<<< HEAD
=======
      <div className="side p-2 bg-[#FFFFFF] drop-shadow-[0_1px_2px_#0000004D]">
        <FilterLabel/>
        <FilterBox/>
      </div>
>>>>>>> main
    </div>
  );
};

export default BottomSection;