import FilteredBox from "./filter-box/FilteredBox";
import { filterData, productMockData, sortFilterData } from "../../../core/constants";
import FilterOption from "./filter-box/FilterOption";
import React, { useState } from "react";
import FilterLabel from "./FilterLabel";
import StarIcon from "../../../core/icons/courses/StarIcon";
import { GridIcon, MenuIcon } from "../../../core/icons/icons";
import SortingWrapper from "./sorting-comp/SortingWrapper";
import { CardLoading, CardWrapper } from "../../partials";
import { CircularProgress, Pagination } from "@heroui/react";
import { useSelector } from "react-redux";

const BottomSection = () => {
  const { productState } = useSelector((state) => state);

  const [viwFlag, setViwFlag] = useState(true);

  const viwGotoRowClickHandler = () => {
    setViwFlag(false);
  };

  const viwGotoColomClickHandler = () => {
    setViwFlag(true);
  };

  return (
    <div className="bottom-section-container w-full mt-[154px] flex justify-center gap-x-[28px] items-start">
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
      <div className="main w-[70%] container">
        <div className="sort-viw-btn-control flex justify-between">
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
          <div className="left-control flex gap-x-[10px]">
            <MenuIcon click={viwGotoRowClickHandler} />
            <GridIcon click={viwGotoColomClickHandler} />
          </div>
        </div>
        <div
          className={
            viwFlag
              ? "product-card-container grid grid-cols-3 mt-[54px] gap-x-[23px] gap-y-[50px] container"
              : "product-card-container grid grid-rows-3 mt-[54px] gap-x-[23px] gap-y-[50px] container"
          }
        >
          {productState ? productState.map((item, index) => {
            console.log(item);
              return (
                <CardWrapper
                  timeFlag={true}
                  data={item}
                  key={index}
                />
              );
            }):productMockData.map(() => {
              return <CardLoading/>
            })
          }
        </div>
        <Pagination
          loop
          total={5}
          initialPage={1}
          color="success"
          showControls
          classNames={{
            base: ["cursor-pointer", "text-blue-500",],
            item: "bg-red-500",
            prev: "rotate-[180deg]"
          }}
        />
      </div>
    </div>
  );
};

export default BottomSection;
