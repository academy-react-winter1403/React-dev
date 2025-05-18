import React, { useEffect } from "react";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import { getCourseDataByClick, getData, getFilterData, getProductData } from "../../../core/services";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourseCommentReplay,
  addCourseDetailCommentData,
  addFirstFilterData,
  changeAddDataFlag,
  changeCommentDataFlag,
  changeCoursesPageCounter,
  changeQueryFlag,
  firstAddCourseProduct,
} from "../../../redux/actions";
import { PaginationData } from "../../partials";
import bg from "../../../assets/pics/courses/bg1.png";
import { deleteAllItemLocalStorage } from "../../../core/hooks/local-storage/deleteAllItem";
import { getDataByClick } from "../../../core/services/api/get-data-by-click/getDataByClick";
import Aos from "aos";
// <<<<<<< HEAD
import ScrollToTopButton from "../../common/ScrollToTopBtn";
// =======
// import { updateCourseQueryState } from "../../../core/utility/updateCourseQueryState";
import { useSearchParams } from "react-router-dom";
import FilterBar from "./FilterBar";
// <<<<<<< HEAD
// =======
// import { filterData } from "../../../core/constants";
// import { useSelect } from "@heroui/react";
// import { deleteItemLocalStorage } from "../../../core/hooks/local-storage/deleteItemLocalStorage";
// import { htttp } from "../../../core/services/interceptor";
// import { setItemLocalStorage } from "../../../core/hooks/local-storage/setItemLocalstorage";
// import { locStorageUpdateItem } from "../../../core/hooks/local-storage/updateItem";
// import { getItemLocalStorage } from "../../../core/hooks/local-storage/getItemLocalStorage";
// >>>>>>> 21a038ce3feace628afe1f449fc089c5a5248056
// >>>>>>> 2ace4c80c7263ea9285540bcb5eccb04035e1996
// >>>>>>> bfddc3b24ca4ff50f06f1eb483129d175a014749

const Courses = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { coursesFlags, coursesPageCounter, courseComment, courseQueryParams } = useSelector(
    (state) => state
  );
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
  const { pageCount } = coursesPageCounter;
  const { addDataFlag, queryFlag } = coursesFlags;
  // const { PageNumber, RowsOfPage } = courseQueryParams;

  useEffect(() => {
    dispatch(dispatch(addCourseDetailCommentData(null)));
    dispatch(dispatch(addCourseCommentReplay(null)));
  }, []);

  const setParams = () => {
    setSearchParams((params) => {
      params.set("PageNumber", PageNumber);
      params.set("RowsOfPage", RowsOfPage);
      return params;
    });
  };

  /////////////////////////////////////////////////////////
  const { mutate, isLoading:dataLoading, data:filterData } = getCourseDataByClick("coursesData");
  const { mutate: getByClick } = getDataByClick();
  useEffect(() => {
    console.log("courseQueryParams ==>", courseQueryParams)
    mutate(["/Home/GetCoursesWithPagination?", courseQueryParams], {
      onSuccess: (data) => {
        console.log("getByFilter ==>", data)
        dispatch(firstAddCourseProduct(data.courseFilterDtos))
      },
    });
    // if (Query === "") {
    //   getByClick("/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=6", {
    //     onSuccess: (data) => {
    //       dispatch(firstAddCourseProduct(data.courseFilterDtos))
    //     }
    //   })
    // }
  }, [
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
  ]);
  if (dataLoading) {
    dispatch(firstAddCourseProduct(null))
  }
  ///////////////////////////////////////

  useEffect(() => {
    if (!queryFlag) {
      deleteAllItemLocalStorage([
        "technologi",
        "courseLevelId",
        "CourseTypeId",
        "searchValue",
        "sortText",
        "pageCounter",
        "pageCounter",
      ]);
    }
    // dispatch(changeQueryFlag(true))
    setParams();
    dispatch(changeCommentDataFlag(false));
    dispatch(addCourseDetailCommentData(null));
    dispatch(addCourseCommentReplay(null));
    // updateCourseQueryState(searchParams, dispatch, firstAddCourseProduct, [
    //   "Query",
    //   "PageNumber",
    //   "RowsOfPage",
    //   "SortingCol",
    //   "SortType",
    //   "CostDown",
    //   "CostUp",
    //   "TechCount",
    //   "ListTech",
    //   "courseLevelId",
    //   "CourseTypeId",
    // ]);
  }, []);

  // const { courseQueryParams } = useSelector((state) => state);
  // const { PageNumber, RowsOfPage } = courseQueryParams;

  // console.log("update ===>", courseQueryParams)

  useEffect(() => {
    Aos.init({
      duration: 800,
    });
    Aos.refresh();
  }, []);

  // if (queryFlag) {
  // console.log(queryFlag)
  const { data, isLoading } = getProductData(
    "product",
    "/Home/GetCoursesWithPagination?",
    courseQueryParams
  );
  // }

  // console.log(data)

  if (!isLoading) {
    // console.log(data)
    // console.log("dataTotalCount=========>",data)
    if (!addDataFlag) {
      setTimeout(() => {
        dispatch(firstAddCourseProduct(data.courseFilterDtos));
        dispatch(changeAddDataFlag(true));
      }, 3000);
    }
  }

  getFilterData("technologie", "/Home/GetTechnologies").then((technologi) => {
    dispatch(addFirstFilterData({ data: technologi.data, type: "technologi" }));
  });

  getFilterData("courseTypes", "/CourseType/GetCourseTypes").then((type) => {
    dispatch(addFirstFilterData({ data: type.data, type: "courseTypes" }));
  });

  getFilterData("courseLevel", "/CourseLevel/GetAllCourseLevel").then(
    (level) => {
      dispatch(addFirstFilterData({ data: level.data, type: "courseLevel" }));
    }
  );

  const { mutateAsync: getDataByClick2 } = getDataByClick();
  const pageChangeHandler = async (pageNum) => {
    dispatch(changeCoursesPageCounter(pageNum));
    dispatch(firstAddCourseProduct(null));
    dispatch(changeAddDataFlag(true));

    const data = await getDataByClick2(
      `/Home/GetCoursesWithPagination?PageNumber=${pageNum}&RowsOfPage=6`
    );
    console.log("mutation ==>", data);
    setTimeout(() => {
      dispatch(firstAddCourseProduct(data.courseFilterDtos));
    }, 2000);
    dispatch(firstAddCourseProduct(data.data.courseFilterDtos));
  };
  return (
    <div
      className="courses-holder flex justify-center mt-10 max-w-[1500px] mx-auto"
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "repeat-y",
        backgroundPosition: "50% 80px",
      }}
    >
      <div className="min-md:w-[82%] max-md:w-[90%] font-b-yekan flex flex-col items-center">
        <TopSection />
        {/* <FilterBar /> */}
        <BottomSection>
{/* <<<<<<< HEAD */}
          {/* {data && <PaginationData
            initialPageNum={1}
            changePageNumber={pageChangeHandler}
            totalCount={data.totalCount}
            RowsOfPage={RowsOfPage}
          />} */}
{/* ======= */}
          {filterData && (
            <PaginationData
              initialPageNum={1}
              changePageNumber={pageChangeHandler}
              totalCount={filterData.totalCount}
              RowsOfPage={RowsOfPage}
              // totalNum={5}
              // changePageNumber={changePageHandler}
            />
          )}
{/* >>>>>>> bfddc3b24ca4ff50f06f1eb483129d175a014749 */}
        </BottomSection>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Courses;
