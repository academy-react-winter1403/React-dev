import FilteredBox from "./filter-box/FilteredBox";
import {
  filterData,
  productMockData,
  sortFilterData,
} from "../../../core/constants";
import FilterOption from "./filter-box/FilterOption";
import React, { useEffect, useState } from "react";
import FilterLabel from "./FilterLabel";
import StarIcon from "../../../core/icons/courses/StarIcon";
import { GridIcon, MenuIcon } from "../../../core/icons/icons";
import SortingWrapper from "./sorting-comp/SortingWrapper";
import { CardLoading, CardWrapper } from "../../partials";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { addDataTheQueryParams, changeQueryFlag, firstAddProduct } from "../../../redux/actions";
import { getData } from "../../../core/services/api/get-data/getData";
import { htttp } from "../../../core/services/interceptor";
import { Select, SelectItem } from "@heroui/react";
import SelectView from "./SelectView";
import { setItemLocalStorage } from "../../../core/hooks/local-storage/setItemLocalstorage";
import { getItemLocalStorage } from "../../../core/hooks/local-storage/getItemLocalStorage";
import { localItemValidation, localItemValueValidation } from "../../../core/hooks/local-storage/localStorageValidation";
import { deleteItemLocalStorage } from "../../../core/hooks/local-storage/deleteItemLocalStorage";
import { localStorageDeleteOneItem, locStorageUpdateItem } from "../../../core/hooks/local-storage/updateItem";
import { courseFilter } from "../../../core/utility/courseFilter";
// import { setSearchParams } from "../../../core/hooks/indexHooks";

const BottomSection = ({ children, pageCount }) => {
  const { productState } = useSelector((state) => state);
  const [filterBoxFlag, setFilterBoxFlag] = useState(false);
  const [windowWidthNum, setWindowWidthNum] = useState(window.innerWidth);
  const [pageViewNum, setPageViewNum] = useState(3);

  // console.log(pageCount)

  // select filter option
  const { filterData } = useSelector((state) => state);
  // select filter option

  // useDispatch Hooks
  const dispatch = useDispatch();
  // useDispatch Hooks

  // search params
  const [searchParams, setSearchParams] = useSearchParams();
  // search params

  const [viwFlag, setViwFlag] = useState(true);

  const viwGotoRowClickHandler = () => {
    setViwFlag(false);
  };

  const viwGotoColomClickHandler = () => {
    setViwFlag(true);
  };

  window.addEventListener("resize", (event) => {
    setWindowWidthNum(window.innerWidth);
    console.log(windowWidthNum);
  });

  const openFilterBox = () => {
    setFilterBoxFlag(true);
  };

  const closeBtnClickHandler = () => {
    setFilterBoxFlag(false);
  };

  const setFilterHandler = () => {
    setFilterBoxFlag(false);
  };

  const filterHandler = async (productId, flag, filterName) => {
    changeQueryFlag(true)
    if (filterName === "تکنولوژی") {
      if (productId && !flag) {

        let validation = localItemValidation("technologi")
        if (!validation) {
          setItemLocalStorage("technologi", [productId])
        }
        locStorageUpdateItem("technologi", productId)
      }else{
        localStorageDeleteOneItem("technologi", productId)
      }
    }
    if (filterName === "وضعیت") {
      if (productId && !flag) {

        let validation = localItemValidation("CourseTypeId")
        if (!validation) {
          setItemLocalStorage("CourseTypeId", [productId])
        }
        locStorageUpdateItem("CourseTypeId", productId)
      }else {
        localStorageDeleteOneItem("CourseTypeId", productId)
      }
    }
    if (filterName === "سطح") {
      if (productId && !flag) {
        let validation = localItemValidation("courseLevelId")
        if (!validation) {
          setItemLocalStorage("courseLevelId", [productId])
        }
        locStorageUpdateItem("courseLevelId", productId)
        
      }else {
        localStorageDeleteOneItem("courseLevelId", productId)
      }
    }
  }
  
  
  const filterItemClickHnadler = (productId, flag, filterName) => {
    console.log(productId)
      filterHandler(productId, flag, filterName)
      courseFilter(setSearchParams, dispatch)
  };

  const viewClickHandler = (value) => {
    // console.log(value);
    setPageViewNum(value);
    console.log(pageViewNum)
  };

  return (
    <div className="bottom-section-container w-full mt-[35px] flex justify-center gap-x-[28px] items-start">
      <div
        className={
          windowWidthNum < 1024
            ? filterBoxFlag === true
              ? "side flex justify-center items-center max-lg:w-full max-lg:h-full max-lg:fixed max-lg:top-[0] max-lg:left-0 z-20 max-lg:z-30 max-lg:backdrop-blur-[4px]"
              : "hidden"
            : null
        }
      >
        <div
          className="filter-box-control justify-center p-2 bg-[#FFFFFF]
          drop-shadow-[0_1px_2px_#0000004D] rounded-[10px]"
        >
          <FilterLabel closeBtnClick={closeBtnClickHandler} />
          <div
            className="filter-box-control mt-[5px] max-lg:max-h-[522px]
            overflow-x-hidden flex flex-col gap-y-[5px]"
          >
            {filterData.map((item, index) => {
              // console.log(item)
              return (
                <FilteredBox filterText={item.filterTitle} key={index}>
                  {item.filterChildren?.map((sort, index) => {
                    let filName;
                    sort.techName
                      ? ({ techName: filName } = sort)
                      : sort.typeName
                      ? ({ typeName: filName } = sort)
                      : sort.levelName
                      ? ({ levelName: filName } = sort)
                      : null;
                    return (
                      <>
                        <FilterOption
                          key={index}
                          id={filName}
                          itemId={sort.id}
                          filterName={filName}
                          filterItemClick={(id, flag) => filterItemClickHnadler(id, flag, item.filterTitle)}
                        >
                          {item.sortText === "امتیاز" && sort.text}
                        </FilterOption>
                      </>
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
            >
              {" "}
              فیلتر انجام شود{" "}
            </button>
          </h1>
        </div>
      </div>
      <div className="main w-[90%] max-lg:w-full">
        <div className="sort-viw-btn-control flex max-lg:flex-col max-lg:items-center max-lg:gap-y-[29px] justify-between">
          <SortingWrapper>
            {sortFilterData.map((item, index) => {
              return (
                <p
                  key={index}
                  className="py-[5px] px-[7px] border border-[#cccccc]
                    rounded-[5px] mt-[12px] cursor-pointer transition-colors hover:bg-[#005B58] hover:text-white"
                >
                  {item}
                </p>
              );
            })}
          </SortingWrapper>
          <div className="btn-control min-lg:w-[50%] flex max-lg:gap-x-[49px] max-sm:w-full max-sm:justify-center">
            <button
              className="hidden max-lg:block w-[138px] max-lg:w-[180px] text-[23px] bg-[#FFB800] text-white
              rounded-[10px] cursor-pointer transition-colors hover:bg-[#ff8400] drop-shadow-[0_1px_2px_#0000004D]
              max-sm:py-[5px] max-sm:w-[332px]"
              onClick={openFilterBox}
            >
              {" "}
              فیلتر{" "}
            </button>
            <div className="left-control min-lg:w-full flex justify-end gap-x-[10px] max-sm:hidden">
              <div className="select-view-control max-lg:hidden">
                <SelectView viewClick={viewClickHandler} />
              </div>
              <MenuIcon click={viwGotoRowClickHandler} />
              <GridIcon click={viwGotoColomClickHandler} />
            </div>
          </div>
        </div>
        <div
          className={
            viwFlag
              ? `transition-colors product-card-container grid grid-cols-${pageViewNum} max-xl:grid-cols-2
                max-sm:grid-cols-1 mt-[54px] gap-x-[23px] gap-y-[50px]`
              : `transition-colors product-card-container grid grid-cols-1
                max-sm:grid-cols-1 mt-[54px] gap-x-[23px] gap-y-[50px]`
            // `transition-colors product-card-container grid grid-cols-${pageViewNum} grid-rows-1 max-xl:grid-cols-2
            //     max-sm:grid-cols-1 mt-[54px] gap-x-[23px] gap-y-[50px]`
          }
          // style={{gridColumn: "3"}}
        >
          {productState
            ? productState.map((item, index) => {
                // console.log(item);
                return <CardWrapper timeFlag={true} data={item} key={index} />;
              })
            : productMockData.map((item, index) => {
                return <CardLoading key={index}/>;
              })}
        </div>
        {children}
      </div>
    </div>
  );
};

export default BottomSection;
