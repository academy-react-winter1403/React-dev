import React, { useState } from "react";
import { updateSearchParamsHook } from "../../../core";
import {
  changeCoursesSortingCol,
  changeFilterBoxFlag,
  changeRowOfPageNum,
  changeSortType,
  changeViewFlag,
  firstAddCourseProduct,
} from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { courseFilterFull } from "../../../core/utility/courseFilterFull";
import {
  sortColData,
  sortCollingData,
  viewData,
} from "../../../core/constants";
import { useSearchParams } from "react-router-dom";
import { getDataByClick } from "../../../core/services";
import SortTypeCard from "../../common/SortTypeCard";
import SelectView from "./SelectView";
import { GridIcon, MenuIcon } from "../../../core/icons/icons";

const FilterBar = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  // const [viwFlag, setViwFlag] = useState(false)
  const { courseQueryParams: queryPar } = useSelector((state) => state);
  const { PageNumber, RowsOfPage } = queryPar;
  //   const [filterBoxFlag, setFilterBoxFlag] = useState(false);

  const openFilterBox = () => {
    // setFilterBoxFlag(true);
    dispatch(changeFilterBoxFlag(true));
  };

  // const closeBtnClickHandler = () => {
  //   // setFilterBoxFlag(false);
  //   dispatch(changeFilterBoxFlag(false));
  // };

  // const viwGotoRowClickHandler = () => {
  //   setViwFlag(false);
  // };

  // const viwGotoColomClickHandler = () => {
  //   setViwFlag(true);
  // };

  const sortChangeHandler = (value) => {
    let valuseName;
    console.log(value);
    if (value === "صعودی") {
      dispatch(changeSortType("ASC"));
      valuseName = "ASC";
    }
    if (value === "نزولی") {
      dispatch(changeSortType("DESC"));
      valuseName = "DESC";
    }
    updateSearchParamsHook(
      setSearchParams,
      "SortType",
      valuseName,
      dispatch,
      changeSortType
    );
    // courseFilterFull(
    //   "/Home/GetCoursesWithPagination?",
    //   queryPar,
    //   dispatch,
    //   firstAddCourseProduct,
    //   setSearchParams
    // );
  };

  const changeSortHandler = (value) => {
    console.log(value);
    let sortValue;
    if (value == " پرطرفدارترین ") {
      sortValue = "InsertDate";
    }
    if (value == " جدیدترین ") {
      sortValue = "Active";
    }
    if (value === " قیمت ") {
      sortValue = "Cost";
    }
    console.log(sortValue);
    updateSearchParamsHook(
      setSearchParams,
      "SortingCol",
      sortValue,
      dispatch,
      changeCoursesSortingCol
    );
    // courseFilterFull(
    //   "/Home/GetCoursesWithPagination?",
    //   queryPar,
    //   dispatch,
    //   firstAddCourseProduct,
    //   setSearchParams
    // );
  };

  const { mutateAsync } = getDataByClick();
  const viewClickHandler = async (value) => {
    dispatch(changeRowOfPageNum(value));
    dispatch(firstAddCourseProduct(null));
    const data = await mutateAsync(
      `/Home/GetCoursesWithPagination?PageNumber=${PageNumber}&RowsOfPage=${value}`
    );
    updateSearchParamsHook(
      setSearchParams,
      "RowsOfPage",
      value,
      dispatch,
      changeRowOfPageNum
    );

    setTimeout(() => {
      dispatch(firstAddCourseProduct(data.courseFilterDtos));
    }, 1000);
  };

  const viwGotoRowClickHandler = () => {
    dispatch(changeViewFlag(false))
  };

  const viwGotoColomClickHandler = () => {
    dispatch(changeViewFlag(true))
  };

  return (
    <div className="sort-viw-btn-control flex lg:flex-row xs:flex-col-reverse gap-1 justify-between">
      <div
        className="btn-control flex items-end min-lg:gap-x-[49px] lg:w-full max-lg:items-center justify-between
          md:mt-0 xs:mt-2 gap-y-3 lg:flex-row max-xl:flex-col"
      >
        <button
          className="hidden max-lg:block lg:w-[138px] max-xs:w-[310px] lg:text-[23px] sm:text-[18px] h-11 bg-[#FFB800] text-white
            rounded-[10px] cursor-pointer transition-colors hover:bg-[#ff8400] drop-shadow-[0_1px_2px_#0000004D]
            max-lg:py-[5px] max-lg:w-[305px]"
          onClick={openFilterBox}
        >
          فیلتر
        </button>
        <div className="sorting-control flex items-center justify-center max-lg:flex-col gap-x-2
         text-[var(--filter-text)] relative max-lg:order-3 max-lg:mt-2 max-lg:w-[305px]"
        >
          <p className="text-[16px] font-b-yekan text-center relative max-lg:top-[-5px]">
            فیلتر بر اساس :
          </p>
          <SortTypeCard
            wrapperWidth={"max-lg:w-[305px]"}
            placeholder={"جدیدترین"}
            borderWidth={"rounded-[10px]"}
            dataMap={sortCollingData}
            onChange={changeSortHandler}
          />
        </div>
        <div
          className="left-control flex xs:justify-between items-center min-lg:gap-x-[10px] 
          lg:justify-center max-lg:flex-col max-lg:w-full"
        >
          <div className="select-view-control flex max-lg:w-[70%] max-lg:gap-x-10 gap-x-2.5 justify-center">
            <SelectView
              placeholder={RowsOfPage}
              dataMap={viewData}
              concatText={"آیتم"}
              viewClick={viewClickHandler}
            />
            <SortTypeCard
              wrapperWidth={"max-lg:w-[140px]"}
              placeholder={"صعودی"}
              borderWidth={"rounded-[10px]"}
              dataMap={sortColData}
              onChange={sortChangeHandler}
            />
          </div>
          <div className="flex gap-x-[15px] max-lg:hidden ">
            <MenuIcon click={viwGotoRowClickHandler} />
            <GridIcon click={viwGotoColomClickHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
