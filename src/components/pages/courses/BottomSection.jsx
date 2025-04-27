import FilteredBox from "./filter-box/FilteredBox";
import {
  productMockData,
  sortColData,
  sortCollingData,
  sortFilterData,
  viewData,
} from "../../../core/constants";
import FilterOption from "./filter-box/FilterOption";
import React, { useState } from "react";
import FilterLabel from "./FilterLabel";
import { GridIcon, MenuIcon } from "../../../core/icons/icons";
import SortingWrapper from "./sorting-comp/SortingWrapper";
import { CardLoading, CardWrapper } from "../../partials";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  addCourseCommentReplay,
  changeCostDown,
  changeCostUp,
  changeCourseLevelId,
  changeCourseTypeId,
  changeQueryFlag,
  changeRowOfPageNum,
  changeSortText,
  changeSortType,
  changeTechnologiList,
  firstAddCourseProduct,
} from "../../../redux/actions";
import SelectView from "./SelectView";
import { setItemLocalStorage } from "../../../core/hooks/local-storage/setItemLocalstorage";
import { localItemValidation } from "../../../core/hooks/local-storage/localStorageValidation";
import {
  localStorageDeleteOneItem,
  locStorageUpdateItem,
} from "../../../core/hooks/local-storage/updateItem";
import SortItem from "./sorting-comp/SortItem";
import { deleteSearchParamsItem } from "../../../core/utility/deleteSearchParams";
import { deleteAllItemLocalStorage } from "../../../core/hooks/local-storage/deleteAllItem";
import { getDataByClick } from "../../../core/services/api/get-data-by-click/getDataByClick";
import PriceInput from "../../partials/price-input/PriceInput";
import { getItemLocalStorage } from "../../../core/hooks/local-storage/getItemLocalStorage";
import SortTypeCard from "../../common/SortTypeCard";
import { courseFilterFull } from "../../../core/utility/courseFilterFull";
import { htttp } from "../../../core/services/interceptor";
import { getCommentDataByClick } from "../../../core/services";

const BottomSection = ({ children }) => {
  const {
    courseFilterData,
    coursesSort,
    courses,
    coursesPageCounter,
    courseQueryParams,
  } = useSelector((state) => state);
  const { filterData } = courseFilterData;
  const { sortText } = coursesSort;
  const { productState } = courses;
  const { pageCount } = coursesPageCounter;
  const { queryParams } = courseQueryParams;
  // const { RowsOfPage } = courseQueryParams

  const [filterBoxFlag, setFilterBoxFlag] = useState(false);
  const [windowWidthNum, setWindowWidthNum] = useState(window.innerWidth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const [viwFlag, setViwFlag] = useState(true);

  const viwGotoRowClickHandler = () => {
    setViwFlag(false);
  };

  const viwGotoColomClickHandler = () => {
    setViwFlag(true);
  };

  window.addEventListener("resize", () => {
    setWindowWidthNum(window.innerWidth);
    if (window.innerWidth <= 640) {
      setViwFlag(true);
    }
  });

  const openFilterBox = () => {
    setFilterBoxFlag(true);
  };

  const closeBtnClickHandler = () => {
    setFilterBoxFlag(false);
  };

  const { mutateAsync: getDataForRemove } = getDataByClick();
  const removeFilterClickHandler = async () => {
    deleteAllItemLocalStorage([
      "technologi",
      "courseLevelId",
      "CourseTypeId",
      "searchValue",
      "sortText",
    ]);
    deleteSearchParamsItem(
      [
        "SortingCol",
        "Query",
        "TechCount",
        "ListTech",
        "courseLevelId",
        "CourseTypeId",
      ],
      setSearchParams
    );

    dispatch(firstAddCourseProduct(null));
    const data = await getDataForRemove(
      "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=6"
    );
    dispatch(firstAddCourseProduct(data.courseFilterDtos));
  };

  const setFilterHandler = () => {
    setFilterBoxFlag(false);
  };

  const filterHandler = async (productId, flag, filterName) => {
    changeQueryFlag(true);
    if (filterName === "تکنولوژی") {
      console.log(flag);
      if (productId && !flag) {
        let validation = localItemValidation("technologi");
        if (!validation) {
          setItemLocalStorage("technologi", [productId]);
        }
        locStorageUpdateItem("technologi", productId);
      } else {
        localStorageDeleteOneItem("technologi", productId);
      }
      dispatch(changeTechnologiList(getItemLocalStorage("technologi")));
    }
    if (filterName === "وضعیت") {
      if (productId && !flag) {
        let validation = localItemValidation("CourseTypeId");
        if (!validation) {
          setItemLocalStorage("CourseTypeId", [productId]);
        }
        locStorageUpdateItem("CourseTypeId", productId);
      } else {
        localStorageDeleteOneItem("CourseTypeId", productId);
      }
      dispatch(changeCourseTypeId(getItemLocalStorage("CourseTypeId")));
    }
    if (filterName === "سطح") {
      if (productId && !flag) {
        let validation = localItemValidation("courseLevelId");
        if (!validation) {
          setItemLocalStorage("courseLevelId", [productId]);
        }
        locStorageUpdateItem("courseLevelId", productId);
      } else {
        localStorageDeleteOneItem("courseLevelId", productId);
      }
      dispatch(changeCourseLevelId(getItemLocalStorage("courseLevelId")));
    }
    const data = await courseFilterFull(
      "/Home/GetCoursesWithPagination?",
      courseQueryParams,
      dispatch
    );
  };

  const filterItemClickHnadler = (productId, flag, filterName) => {
    console.log(productId);
    filterHandler(productId, flag, filterName);
    courseFilter(setSearchParams, dispatch, useSelector);
  };

  const { mutateAsync } = getDataByClick();
  const viewClickHandler = async (value) => {
    dispatch(changeRowOfPageNum(value));
    dispatch(firstAddCourseProduct(null));
    const data = await mutateAsync(
      `/Home/GetCoursesWithPagination?PageNumber=${pageCount}&RowsOfPage=${value}`
    );
    console.log(data);
    setTimeout(() => {
      dispatch(firstAddCourseProduct(data.courseFilterDtos));
    }, 1000);
  };

  const sortClickHandler = (text) => {
    localStorage.setItem("sortText", text);
    dispatch(changeSortText(text));
    courseFilter(setSearchParams, useSelector);
  };

  // const {mutate, data} = getCommentDataByClick()
  const cardClickHandler = (productId) => {
    navigate(`/course-detail/${productId}`);
    // mutate(["/Course/GetCourseCommnets/", productId], {
    //   onSuccess: (data) => {
    //     dispatch(addCourseCommentReplay(data.data));
    //   }
    // })
  };

  const priceChangeHandler = async (value) => {
    dispatch(changeCostDown(value[0]));
    dispatch(changeCostUp(value[1]));

    const data = await courseFilterFull(
      "/Home/GetCoursesWithPagination?",
      courseQueryParams,
      dispatch
    );
    console.log(data.data);
  };

  const sortChangeHandler = (value) => {
    console.log(value);
    if (value === "صعودی") {
      dispatch(changeSortType("ACS"));
    }
    if (value === "نزولی") {
      dispatch(changeSortType("DESC"));
    }
    courseFilterFull(
      "/Home/GetCoursesWithPagination?",
      courseQueryParams,
      dispatch
    );
  };

  return (
    <div className="bottom-section-container w-full mt-0 max-sm:mt-[8px] flex justify-center gap-x-[28px] items-start">
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
          <FilterLabel
            closeBtnClick={closeBtnClickHandler}
            removeFilterClick={removeFilterClickHandler}
          />
          <div
            className="filter-box-control mt-[5px] max-lg:max-h-[522px]
            overflow-x-hidden flex flex-col gap-y-[5px]"
          >
            {filterData.map((item, index) => {
              return (
                <FilteredBox filterText={item.filterTitle} key={index}>
                  {item.filterTitle === "قیمت" && (
                    <PriceInput onChange={priceChangeHandler} key={index} />
                  )}
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
                          filterItemClick={(id, flag) =>
                            filterItemClickHnadler(id, flag, item.filterTitle)
                          }
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
              فیلتر انجام شود
            </button>
          </h1>
        </div>
      </div>
      <div className="main w-[90%] max-lg:w-full">
        <div className="sort-viw-btn-control flex lg:flex-row xs:flex-col-reverse gap-1 justify-between">
          <div className="sorting-control flex items-center gap-x-2 text-[#005B58]">
            <p className="text-xl"> فیلتر بر اساس : </p>
            {/* <SortingWrapper title={sortText} innerWidth={windowWidthNum}>
              {sortFilterData.map((item, index) => {
                return (
                  <SortItem
                    item={item}
                    key={index}
                    sortClick={() => sortClickHandler(item)}
                  />
                );
              })}
            </SortingWrapper> */}

            <SortTypeCard
              placeholder={"پرطرفدارترین"}
              borderWidth={"rounded-[10px]"}
              dataMap={sortCollingData}
            />
          </div>
          <div
            className="btn-control min-lg:w-[50%] flex min-lg:gap-x-[49px] max-lg:w-full max-lg:justify-center  md:mt-0 xs:mt-2 items-center gap-y-2
          lg:flex-row xs:flex-col"
          >
            <button
              className="hidden max-lg:block lg:w-[138px] xs:w-[310px]  lg:text-[23px] sm:text-[18px] h-11  bg-[#FFB800] text-white
              rounded-[10px] cursor-pointer transition-colors hover:bg-[#ff8400] drop-shadow-[0_1px_2px_#0000004D]
              max-lg:py-[5px] max-lg:w-[332px]"
              onClick={openFilterBox}
            >
              فیلتر
            </button>
            <div className="left-control min-lg:w-full flex lg:justify-end xs:justify-between items-center gap-x-[10px] ">
              <div className="select-view-control flex gap-x-[3px] ">
                <SelectView
                  placeholder={" 12 آیتم "}
                  dataMap={viewData}
                  concatText={"آیتم"}
                  viewClick={viewClickHandler}
                />
                <SortTypeCard
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
        <div
          className={
            viwFlag
              ? `transition-colors product-card-container grid max-xl:grid-cols-2 grid-cols-3
                max-sm:grid-cols-1 mt-[54px] gap-x-[23px] gap-y-[50px]`
              : `transition-colors product-card-container grid grid-cols-1
                max-sm:grid-cols-1 mt-[54px] gap-x-[23px] gap-y-[50px]`
          }
        >
          {productState
            ? productState.map((item, index) => {
                return (
                  <CardWrapper
                    timeFlag={true}
                    data={item}
                    key={index}
                    cardClick={cardClickHandler}
                    viewFlag={viwFlag}
                  />
                );
              })
            : productMockData.map((item, index) => {
                return <CardLoading key={index} />;
              })}
        </div>
        {children}
      </div>
    </div>
  );
};

export default BottomSection;
