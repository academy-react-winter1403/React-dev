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
import { addDataTheQueryParams, firstAddProduct } from "../../../redux/actions";
import { getData } from "../../../core/services/api/get-data/getData";
import { htttp } from "../../../core/services/interceptor";
import { Select, SelectItem } from "@heroui/react";
import SelectView from "./SelectView";

const BottomSection = ({children}) => {
  const { productState } = useSelector((state) => state);
  const [filterBoxFlag, setFilterBoxFlag] = useState(false)
  const [windowWidthNum, setWindowWidthNum] = useState(window.innerWidth)
  const [filterFlag, setFilterFlag] = useState(false)
  
  // useDispatch Hooks
  const dispatch = useDispatch()
  // useDispatch Hooks

  // search params
  const [searchParams, setSearchParams] = useSearchParams()
  // const [dataParams, setDataParams] = useState(paramsFilterObj)
  // search params

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

  const filterItemClickHnadler = async (filterId ,filterName) => {

    const params = new URLSearchParams(searchParams)

    if ( 1 <= filterId && filterId <= 5) { // technology
      if (filterFlag) {
        // params.set("technology", filterName)
        setFilterFlag(false)
      }else {
        params.delete("technology")
        setFilterFlag(true)
      }
      // params.set("technology", filterName)
      dispatch(addDataTheQueryParams())
    }
    if ( 6 <= filterId && filterId <= 8 ) { // status
      // params.set("status", filterName)
    }
    if ( 9 <= filterId && filterId <= 13 ) { // score
      // params.set("score", filterName)
    }
    if ( 14 <= filterId && filterId <= 16 ) { // level
      filterId === 14 ? params.set("courseLevelId", 1) : 
      filterId === 15 ? params.set("courseLevelId", 2) :
      filterId === 16 ? params.set("courseLevelId", 3) : null
      // params.set("level", filterName)
    }
    if (17 === filterId) {
      params.set("price", 0)
    }
    if ( filterId === 18 ) { // price
      params.set("price", filterName)
    }
    // filterFlag ? setSearchParams(params) : null
    setSearchParams(params)

    dispatch(firstAddProduct(null))
    const data = await htttp.get(`/Home/GetCoursesTop?=&=&=${searchParams}`)
    dispatch(firstAddProduct(data.data))
    console.log(data)
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
                      <FilterOption
                        key={sort.id}
                        id={sort.id}
                        filterName={sort.text}
                        filterItemClick={() => filterItemClickHnadler(sort.id, sort.text)}
                      >
                        {item.sortText === "امتیاز" && sort.text}
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
          <div className="btn-control w-[30%] flex max-lg:gap-x-[49px] max-sm:w-full max-sm:justify-center">
            <button className="hidden max-lg:block w-[138px] max-lg:w-[180px] text-[23px] bg-[#FFB800] text-white
              rounded-[10px] cursor-pointer transition-colors hover:bg-[#ff8400] drop-shadow-[0_1px_2px_#0000004D]
              max-sm:py-[5px] max-sm:w-[332px]"
              onClick={openFilterBox}
            > فیلتر </button>
            <div className="left-control w-full flex gap-x-[10px] max-sm:hidden">
              <SelectView/>
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
