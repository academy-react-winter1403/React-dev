import FilteredBox from "./filter-box/FilteredBox";
import { productMockData } from "../../../core/constants";
import FilterOption from "./filter-box/FilterOption";
import React, { useEffect, useState } from "react";
import FilterLabel from "./FilterLabel";
import { CardLoading, CardWrapper } from "../../partials";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  changeCostDown,
  changeCostUp,
  changeCourseLevelId,
  changeCoursesSortingCol,
  changeCourseTypeId,
  changeFilterBoxFlag,
  changePageCounter,
  changeQuery,
  changeQueryFlag,
  changeRowOfPageNum,
  changeSortType,
  changeTechnologiCount,
  changeTechnologiList,
  changeViewFlag,
} from "../../../redux/actions";
import { setItemLocalStorage } from "../../../core/hooks/local-storage/setItemLocalstorage";
import { localItemValidation } from "../../../core/hooks/local-storage/localStorageValidation";
import {
  localStorageDeleteOneItem,
  locStorageUpdateItem,
} from "../../../core/hooks/local-storage/updateItem";
import { getDataByClick } from "../../../core/services/api/get-data-by-click/getDataByClick";
import PriceInput from "../../partials/price-input/PriceInput";
import { getItemLocalStorage } from "../../../core/hooks/local-storage/getItemLocalStorage";
import {
  deleteAllParams,
  updateCoursesQueryParams,
  updateSearchParamsHook,
} from "../../../core";
import FilterBar from "./FilterBar";
import { useTranslation } from "react-i18next";

const BottomSection = ({ children }) => {
  const { t } = useTranslation();
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
    language,
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
  const { filterBoxFlag, viewFlag } = coursesFlags;

  const [windowWidthNum, setWindowWidthNum] = useState(window.innerWidth);

  // window.addEventListener("resize", () => {
  //   setWindowWidthNum(window.innerWidth);
  //   if (window.innerWidth <= 640) {
  //     dispatch(changeViewFlag(true))
  //   }
  // });

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidthNum(window.innerWidth);
  //     if (window.innerWidth <= 640) {
  //       dispatch(changeViewFlag(true));
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);


  useEffect(() => {
  const handleResize = () => {
    setWindowWidthNum(window.innerWidth);
    if (window.innerWidth <= 640) {
      dispatch(changeViewFlag(true));
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  const closeBtnClickHandler = () => {
    dispatch(changeFilterBoxFlag(false));
  };

  const { mutateAsync: getDataForRemove } = getDataByClick();
  const removeFilterClickHandler = async () => {
    dispatch(changeFilterBoxFlag(false));
    updateCoursesQueryParams(
      [
        { paramsData: 1, action: changePageCounter },
        { paramsData: 6, action: changeRowOfPageNum },
        { paramsData: null, action: changeQuery },
        { paramsData: null, action: changeCourseTypeId },
        { paramsData: 0, action: changeCostDown },
        { paramsData: 100000000, action: changeCostUp },
        { paramsData: null, action: changeTechnologiList },
        { paramsData: undefined, action: changeTechnologiCount },
        { paramsData: "DESC", action: changeSortType },
        { paramsData: "Active", action: changeCoursesSortingCol },
      ],
      dispatch
    );
    deleteAllParams(
      [
        "SortingCol",
        "SortType",
        "CostDown",
        "CostUp",
        "TechCount",
        "ListTech",
        "courseLevelId",
        "CourseTypeId",
      ],
      setSearchParams
    );
  };

  const setFilterHandler = () => {
    dispatch(changeFilterBoxFlag(false));
  };

  const filterHandler = async (productId, flag, filterName) => {
    changeQueryFlag(true);
    if (filterName === "تکنولوژی") {
      let localThechFullData = [];
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
      if (productId && !flag) {
        updateSearchParamsHook(
          setSearchParams,
          "CourseTypeId",
          productId,
          dispatch,
          changeCourseTypeId
        );
      } else {
        setSearchParams((params) => {
          params.delete("CourseTypeId");
          return params;
        });
        dispatch(changeCourseTypeId(null));
      }
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
      } else {
        setSearchParams((params) => {
          params.delete("courseLevelId");
          return params;
        });
        dispatch(changeCourseLevelId(null));
      }
    }
  };

  const cardClickHandler = (productId) => {
    navigate(`/course-detail/${productId}`);
  };

  const priceChangeHandler = async (value) => {
    const priceFrom = value[0];
    const priceTo = value[1];
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

  const isRTL = language === "fa" ? true : false;

  const openFilterBox = () => {
    dispatch(changeFilterBoxFlag(true));
  };

  console.log(isRTL)
  console.log(language)

  return (
    <div
      // className="bottom-section-container w-full mt-0 max-sm:mt-[8px] flex justify-center gap-x-[28px] items-start"
      // className="bottom-section-container w-full mt-0 max-sm:mt-[8px] flex flex-row justify-center gap-x-[28px] items-start"
      // className="bottom-section-container w-full mt-0 max-sm:mt-[8px] flex lg:flex-row flex-col justify-center gap-x-[28px] items-start"
      className={`bottom-section-container w-full mt-0 max-sm:mt-[8px] flex ${
        isRTL ? "lg:flex-row-reverse" : "lg:flex-row"
      } flex-col justify-center gap-x-[28px] items-start`}
    >
      <div
        // className={
        //   windowWidthNum < 1024
        //     ? filterBoxFlag === true
        //       ? "side flex justify-center items-center max-lg:w-full max-lg:h-full max-lg:fixed max-lg:top-[0] max-lg:left-0 z-20 max-lg:z-30 max-lg:backdrop-blur-[4px]"
        //       : "hidden"
        //     : null
        // }
        // style={{
        //   order: isRTL ? 2 : 0,
        // }}

        //       className={
        //   `side ${windowWidthNum < 1024
        //     ? filterBoxFlag ? "flex fixed z-30 backdrop-blur-sm w-full h-full left-0 top-0 justify-center items-center"
        //     : "hidden"
        //     : "block w-[300px]"}`
        // }

        className={`side ${
          windowWidthNum < 1024
            ? filterBoxFlag
              ? "flex fixed z-30 backdrop-blur-sm w-full h-full left-0 top-0 justify-center items-center"
              : "hidden"
            : "block w-[300px]"
        }`}
        style={{
          order: isRTL ? 2 : 0,
        }}
      >
        <div
          className="filter-box-control justify-center p-2 bg-(--filter-box) 
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
      <div
        className="main w-[90%] max-lg:w-full "
        style={{ order: isRTL ? 0 : 2 }}
      >
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
            viewFlag
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
                    viewFlag={viewFlag}
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
