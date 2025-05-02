import FilteredBox from "./filter-box/FilteredBox";
import {
  productMockData,
  sortColData,
  sortCollingData,
  sortFilterData,
  viewData,
} from "../../../core/constants";
import FilterOption from "./filter-box/FilterOption";
import React, { useEffect, useState } from "react";
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
  changeCoursesSortingCol,
  changeCourseTypeId,
  changeQueryFlag,
  changeRowOfPageNum,
  changeSortingCol,
  changeSortText,
  changeSortType,
  changeTechnologiCount,
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
import {
  getCommentDataByClick,
  getCourseDataByClick,
} from "../../../core/services";
import { updateSearchParamsHook } from "../../../core";
import FilterBar from "./FilterBar";

const BottomSection = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    courseFilterData,
    coursesSort,
    courses,
    coursesPageCounter,
    courseQueryParams,
    coursesFlags,
  } = useSelector((state) => state);
  const { filterData } = courseFilterData;
  const { sortText } = coursesSort;
  const { productState } = courses;
  const { pageCount } = coursesPageCounter;
  const {
    PageNumber,
    RowsOfPage,
    SortingCol,
    SortType,
    Query,
    CostDown,
    CostUp,
    TechCount,
    ListTech,
    courseLevelId,
    CourseTypeId,
    TeacherId,
  } = courseQueryParams;
  const { filterBoxFlag } = coursesFlags;
  // console.log(productState)

  // const { mutate, isLoading } = getCourseDataByClick("coursesData");
  // useEffect(() => {
  //   // console.log("getCourseDataByClick ==>", courseQueryParams)
  //   mutate(["/Home/GetCoursesWithPagination?", courseQueryParams], {
  //     onSuccess: (data) => {
  //       console.log("getCourseDataByClick ==>", data);
  //       courseFilterFull(
  //         "/Home/GetCoursesWithPagination?",
  //         courseQueryParams,
  //         dispatch,
  //         firstAddCourseProduct,
  //         setSearchParams
  //       );
  //     },
  //   });
  // }, [
  //   PageNumber,
  //   RowsOfPage,
  //   SortingCol,
  //   SortType,
  //   Query,
  //   CostDown,
  //   CostUp,
  //   TechCount,
  //   ListTech,
  //   courseLevelId,
  //   CourseTypeId,
  //   TeacherId,
  // ]);

  const [windowWidthNum, setWindowWidthNum] = useState(window.innerWidth);

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
      let localThechFullData = [];
      // console.log(flag);
      let validation;
      if (productId && !flag) {
        validation = localItemValidation("technologi");
        if (!validation) {
          setItemLocalStorage("technologi", [productId]);
        }
        locStorageUpdateItem("technologi", productId);
        console.log(validation);
      } else {
        localThechFullData = localStorageDeleteOneItem("technologi", productId);
        if (localThechFullData.length === 0) {
          localStorage.removeItem("technologi");
          setSearchParams((params) => {
            params.delete("ListTech");
            params.delete("TechCount");
            return params;
          });
          dispatch(changeTechnologiList(null));
          dispatch(changeTechnologiCount(undefined));
        }
      }
      if (!flag || localThechFullData.length > 0) {
        updateSearchParamsHook(
          setSearchParams,
          "TechCount",
          2,
          dispatch,
          changeTechnologiCount
        );
        updateSearchParamsHook(
          setSearchParams,
          "ListTech",
          getItemLocalStorage("technologi"),
          dispatch,
          changeTechnologiList
        );
      }
    }
    if (filterName === "وضعیت") {
      // let localStatusFullData = []
      if (productId && !flag) {
        updateSearchParamsHook(
          setSearchParams,
          "CourseTypeId",
          productId,
          dispatch,
          changeCourseTypeId
        );
        // let validation = localItemValidation("CourseTypeId");
        // if (!validation) {
        //   setItemLocalStorage("CourseTypeId", [productId]);
        // }
        // locStorageUpdateItem("CourseTypeId", productId);
      } else {
        setSearchParams((params) => {
          params.delete("CourseTypeId");
          return params;
        });
        dispatch(changeCourseTypeId(null))
        // updateSearchParamsHook(
        //   setSearchParams,
        //   "CourseTypeId",
        //   null,
        //   dispatch,
        //   changeCourseTypeId
        // );
        // localStatusFullData = localStorageDeleteOneItem("CourseTypeId", productId);
        // if (localStatusFullData.length === 0) {
        //   localStorage.removeItem("CourseTypeId")
        //   setSearchParams((params) => {
        //     params.delete("CourseTypeId")
        //     return params
        //   })
        //   dispatch(changeCourseTypeId(null))
        // }
        // localStorage.removeItem("CourseTypeId")
      }
      // dispatch(changeCourseTypeId(getItemLocalStorage("CourseTypeId")));
      // if (!flag || localStatusFullData.length > 0) {
      //   updateSearchParamsHook(
      //     setSearchParams,
      //     "CourseTypeId",
      //     getItemLocalStorage("CourseTypeId"),
      //     dispatch,
      //     changeCourseTypeId
      //   );
      // }
    }
    if (filterName === "سطح") {
      if (productId && !flag) {
        updateSearchParamsHook(
          setSearchParams,
          "courseLevelId",
          productId,
          dispatch,
          changeCourseLevelId
        );
        // let validation = localItemValidation("courseLevelId");
        // if (!validation) {
        //   setItemLocalStorage("courseLevelId", [productId]);
        // }
        // locStorageUpdateItem("courseLevelId", productId);
      } else {
        setSearchParams((params) => {
          params.delete("courseLevelId");
          return params;
        });
        dispatch(changeCourseLevelId(null))
        // localStorageDeleteOneItem("courseLevelId", productId);
      }
      // dispatch(changeCourseLevelId(getItemLocalStorage("courseLevelId")));
      // updateSearchParamsHook(
      //   setSearchParams,
      //   "courseLevelId",
      //   getItemLocalStorage("courseLevelId"),
      //   dispatch,
      //   changeCourseLevelId
      // );
    }

    // courseFilterFull(
    //   courseQueryParams,
    //   dispatch
    // useSelector
    // );
  };

  const filterItemClickHnadler = (productId, flag, filterName) => {
    // console.log(productId);
    // filterHandler(productId, flag, filterName);
    courseFilterFull(
      "/Home/GetCoursesWithPagination?",
      courseQueryParams,
      dispatch,
      firstAddCourseProduct
    );
    // courseFilter(setSearchParams, dispatch, useSelector);
  };

  // const { mutateAsync } = getDataByClick();
  // const viewClickHandler = async (value) => {
  //   dispatch(changeRowOfPageNum(value));
  //   dispatch(firstAddCourseProduct(null));
  //   const data = await mutateAsync(
  //     `/Home/GetCoursesWithPagination?PageNumber=${pageCount}&RowsOfPage=${value}`
  //   );
  //   updateSearchParamsHook(
  //     setSearchParams,
  //     "RowsOfPage",
  //     value,
  //     dispatch,
  //     changeRowOfPageNum
  //   );

  //   setTimeout(() => {
  //     dispatch(firstAddCourseProduct(data.courseFilterDtos));
  //   }, 1000);
  // };

  const sortClickHandler = (text) => {
    localStorage.setItem("sortText", text);
    dispatch(changeSortText(text));
    // courseFilter(setSearchParams, useSelector);
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
    const priceFrom = value[0]
    const priceTo = value[1]
    dispatch(changeCostDown(value[0]));
    dispatch(changeCostUp(value[1]));

    updateSearchParamsHook(
      setSearchParams,
      "CostDown",
      priceFrom,
      dispatch,
      changeCostDown
    );

    updateSearchParamsHook(
      setSearchParams,
      "CostUp",
      priceTo,
      dispatch,
      changeCostUp
    );
  };

  useEffect(() => {
    console.log("BottomSection");
  }, []);

  // const sortChangeHandler = (value) => {
  //   let valuseName;
  //   console.log(value);
  //   if (value === "صعودی") {
  //     dispatch(changeSortType("ASC"));
  //     valuseName = "ASC"
  //   }
  //   if (value === "نزولی") {
  //     dispatch(changeSortType("DESC"));
  //     valuseName = "DESC"
  //   }
  //   updateSearchParamsHook(
  //     setSearchParams,
  //     "SortType",
  //     valuseName,
  //     dispatch,
  //     changeSortType
  //   );
  //   courseFilterFull(
  //     "/Home/GetCoursesWithPagination?",
  //     courseQueryParams,
  //     dispatch,
  //     firstAddCourseProduct,
  //     setSearchParams
  //   );
  // };

  // const changeSortHandler = (value) => {
  //   console.log(value)
  //   let sortValue;
  //   if (value == " پرطرفدارترین ") {
  //     sortValue = "InsertDate"
  //     dispatch(changeCoursesSortingCol("InsertDate"))
  //   }
  //   if (value == " جدیدترین ") {
  //     sortValue = "َActive"
  //     dispatch(changeCoursesSortingCol("َActive"))
  //   }
  //   console.log(sortValue)
  //   updateSearchParamsHook(
  //     setSearchParams,
  //     "SortingCol",
  //     sortValue,
  //     dispatch,
  //     changeCoursesSortingCol
  //   );
  //   courseFilterFull(
  //     "/Home/GetCoursesWithPagination?",
  //     queryPar,
  //     dispatch,
  //     firstAddCourseProduct,
  //     setSearchParams
  //   );
  // }

  // const {
  //   courseQueryParams: queryPar,
  // } = useSelector((state) => state);

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
                            filterHandler(id, flag, item.filterTitle)
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
        {/* <div className="sort-viw-btn-control flex lg:flex-row xs:flex-col-reverse gap-1 justify-between">
          <div className="sorting-control flex items-center gap-x-2 text-[#005B58]">
            <p className="text-xl"> فیلتر بر اساس : </p>
            <SortTypeCard
              placeholder={"پرطرفدارترین"}
              borderWidth={"rounded-[10px]"}
              dataMap={sortCollingData}
              onChange={changeSortHandler}
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
                  placeholder={RowsOfPage}
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
        </div> */}

        <FilterBar />
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
