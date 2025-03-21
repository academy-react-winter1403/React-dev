import FilteredBox from "./filter-box/FilteredBox";
import {
  filterData,
  productMockData,
  sortFilterData,
} from "../../../core/constants";
import FilterOption from "./filter-box/FilterOption";
import React, { useState } from "react";
import FilterLabel from "./FilterLabel";
import StarIcon from "../../../core/icons/courses/StarIcon";
import { GridIcon, MenuIcon } from "../../../core/icons/icons";
import SortingWrapper from "./sorting-comp/SortingWrapper";
import { CardLoading, CardWrapper } from "../../partials";
import { useSelector } from "react-redux";

const BottomSection = ({children}) => {
  const { productState } = useSelector((state) => state);
  const [filterBoxFlag, setFilterBoxFlag] = useState(false)
  const [windowWidthNum, setWindowWidthNum] = useState(window.innerWidth)

  const [viwFlag, setViwFlag] = useState(true);

  const viwGotoRowClickHandler = () => {
    setViwFlag(false);
  };

  const viwGotoColomClickHandler = () => {
    setViwFlag(true);
  };

  window.addEventListener("resize", (event) => {
    setWindowWidthNum(window.innerWidth)
    console.log(windowWidthNum)
  })

  const openFilterBox = () => {
    setFilterBoxFlag(true)
  }

  const closeBtnClickHandler = () => {
    setFilterBoxFlag(false)
  }

  const setFilterHandler = () => {
    setFilterBoxFlag(false)
  }

  return (
    <div className="bottom-section-container w-full mt-[35px] flex justify-center gap-x-[28px] items-start">
      <div className={windowWidthNum < 1024 ? (filterBoxFlag === true ? 
        "side flex justify-center items-center max-lg:w-full max-lg:h-full max-lg:fixed max-lg:top-[0] max-lg:left-0 z-20 max-lg:z-30 max-lg:backdrop-blur-[4px]"
        : "hidden") : null
      }
      >
        <div className="filter-box-control justify-center p-2 bg-[#FFFFFF]
          drop-shadow-[0_1px_2px_#0000004D] rounded-[10px]"
        >
          <FilterLabel closeBtnClick={closeBtnClickHandler}/>
          <div className="filter-box-control mt-[5px] max-lg:max-h-[522px]
            overflow-y-auto overflow-x-hidden flex flex-col gap-y-[5px]"
          >
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
          <h1 className="text-center m-0 fixed w-full mr-[-8.5px]">
            <button 
              className="py-[3px] w-full hidden max-lg:block rounded-[0_0_10px_10px] bg-[#DB3838] text-white cursor-pointer"
              onClick={setFilterHandler}
            > فیلتر انجام شود </button>
          </h1>
        </div>
      </div>
      <div className="main w-[80%] max-lg:w-full">
        <div className="sort-viw-btn-control flex max-lg:flex-col max-lg:items-center max-lg:gap-y-[29px] justify-between">
          <SortingWrapper>
            {sortFilterData.map((item, index) => {
              return (
                <p
                  className="py-[5px] px-[7px] border border-[#cccccc]
                    rounded-[5px] mt-[12px] cursor-pointer transition-colors hover:bg-[#005B58] hover:text-white"
                >
                  {item}
                </p>
              );
            })}
          </SortingWrapper>
          <div className="btn-control flex max-lg:gap-x-[49px] max-sm:w-full max-sm:justify-center">
            <button className="hidden max-lg:block w-[138px] max-lg:w-[180px] text-[23px] bg-[#FFB800] text-white
              rounded-[10px] cursor-pointer transition-colors hover:bg-[#ff8400] drop-shadow-[0_1px_2px_#0000004D]
              max-sm:py-[5px] max-sm:w-[332px]"
              onClick={openFilterBox}
            > فیلتر </button>
            <div className="left-control flex gap-x-[10px] max-sm:hidden">
              <MenuIcon click={viwGotoRowClickHandler} />
              <GridIcon click={viwGotoColomClickHandler} />
            </div>
          </div>
        </div>
        <div
          className={
            viwFlag
              ? "product-card-container grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 mt-[54px] gap-x-[23px] gap-y-[50px]"
              : "product-card-container grid grid-rows-3 mt-[54px] gap-x-[23px] gap-y-[50px]"
          }
        >
          {productState
            ? productState.map((item, index) => {
                // console.log(item);
                return <CardWrapper timeFlag={true} data={item} key={index} />;
              })
            : productMockData.map(() => {
                return <CardLoading />;
              })}
        </div>
          {children}
      </div>
    </div>
  );
};

export default BottomSection;
