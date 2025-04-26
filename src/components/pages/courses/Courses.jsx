import React, { useEffect } from "react";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import { getData, getFilterData } from "../../../core/services";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourseCommentReplay,
  addCourseDetailCommentData,
  addFirstFilterData,
  changeAddDataFlag,
  changeCoursesPageCounter,
  firstAddCourseProduct,
<<<<<<< HEAD
  // <<<<<<< HEAD
  // =======
  // <<<<<<< HEAD
  // changePageCounter,
  // changeQueryFlag,
  // firstAddProduct,
  // >>>>>>> 2ace4c80c7263ea9285540bcb5eccb04035e1996
=======
>>>>>>> 977ce6192b6f1bb68041d4cb75b8907361a2d5f0
} from "../../../redux/actions";
import { PaginationData } from "../../partials";
import bg from "../../../assets/pics/courses/bg1.png";
import { deleteAllItemLocalStorage } from "../../../core/hooks/local-storage/deleteAllItem";
import { getDataByClick } from "../../../core/services/api/get-data-by-click/getDataByClick";
import Aos from "aos";
<<<<<<< HEAD
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
=======
>>>>>>> 977ce6192b6f1bb68041d4cb75b8907361a2d5f0

const Courses = () => {
  const dispatch = useDispatch();
  const { coursesFlags, coursesPageCounter, courseComment, courseQueryParams } =
    useSelector((state) => state);
  const { pageCount } = coursesPageCounter;
  const { addDataFlag, queryFlag } = coursesFlags;
  const { RowsOfPage } = courseQueryParams;

  useEffect(() => {
    dispatch(dispatch(addCourseDetailCommentData(null)));
    dispatch(dispatch(addCourseCommentReplay(null)));
  }, [])

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
    dispatch(dispatch(addCourseDetailCommentData(null)));
    dispatch(dispatch(addCourseCommentReplay(null)));
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 800,
    });
    Aos.refresh();
  }, []);

  const { data, isLoading } = getData(
    "product",
    `/Home/GetCoursesWithPagination?PageNumber=${pageCount}&RowsOfPage=${RowsOfPage}`
  );

  if (!isLoading) {
    console.log("dataTotalCount=========>",data)
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

    // dispatch(changeCoursesPageCounter(pageNum));
    // dispatch(firstAddCourseProduct(null));

    // dispatch(changeAddDataFlag(true));

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
      className="courses-holder flex justify-center mt-10"
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "repeat-y",
        backgroundPosition: "50% 80px",
      }}
    >
      <div className="min-md:w-[82%] max-md:w-[90%] font-b-yekan flex flex-col items-center">
        <TopSection />
        <BottomSection>
          {data && <PaginationData
            initialPageNum={1}
            changePageNumber={pageChangeHandler}
            totalCount={data.totalCount}
            RowsOfPage={RowsOfPage}
            // totalNum={5}
            // changePageNumber={changePageHandler}
          />}
        </BottomSection>
      </div>
    </div>
  );
};

export default Courses;
