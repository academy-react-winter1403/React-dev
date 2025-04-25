import React, { useEffect, useState } from "react";
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
// <<<<<<< HEAD
  // changePageCounter,
  // changeQueryFlag,
  // firstAddProduct,
} from "../../../redux/actions";
import { PaginationData } from "../../partials";
import bg from "../../../assets/pics/courses/bg1.png";
import { deleteAllItemLocalStorage } from "../../../core/hooks/local-storage/deleteAllItem";
//   changeCoursesPageCounter,
//   firstAddCourseProduct,
// } from "../../../redux/actions";
// import { PaginationData } from "../../partials";
// import bg from "../../../assets/pics/courses/bg1.png";
// import { deleteAllItemLocalStorage } from "../../../core/hooks/local-storage/deleteAllItem";
import { getDataByClick } from "../../../core/services/api/get-data-by-click/getDataByClick";
import Aos from "aos";
// import { filterData } from "../../../core/constants";
// import { useSelect } from "@heroui/react";
// import { deleteItemLocalStorage } from "../../../core/hooks/local-storage/deleteItemLocalStorage";
// import { htttp } from "../../../core/services/interceptor";
// import { setItemLocalStorage } from "../../../core/hooks/local-storage/setItemLocalstorage";
// import { locStorageUpdateItem } from "../../../core/hooks/local-storage/updateItem";
// import { getItemLocalStorage } from "../../../core/hooks/local-storage/getItemLocalStorage";
// >>>>>>> 21a038ce3feace628afe1f449fc089c5a5248056

const Courses = () => {
  const dispatch = useDispatch();
  const { coursesFlags, coursesPageCounter, courseComment, courseQueryParams } = useSelector((state) => state);
  const { pageCount } = coursesPageCounter
  const { addDataFlag, queryFlag } = coursesFlags
  const { RowsOfPage } = courseQueryParams

  // getData("pages",
  //   /Home/GetCoursesWithPagination?PageNumber=${pageCount}&RowsOfPage=6
// <<<<<<< HEAD
  // const { addDataFlag } = state.coursesData
  
  // let pageCount = 1;
  // getData("pages",
  //   `/Home/GetCoursesWithPagination?PageNumber=${pageCount}&RowsOfPage=6`
  // ).then((response) => {
  //   setCoursesData(response.data.courseFilterDtos);
  //   setTimeout(() => {
  //     dispatch(firstAddProduct(response.data.courseFilterDtos));
  //   }, 3000);
  // })

  // const queryFlag = state.flags.queryFlag

// =======
// >>>>>>> 21a038ce3feace628afe1f449fc089c5a5248056

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
    dispatch(dispatch(addCourseDetailCommentData(null)))
    dispatch(dispatch(addCourseCommentReplay(null)))
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 800,
    })
    Aos.refresh()
  }, [])

  const {data, isLoading} = getData(
    "product",
    `/Home/GetCoursesWithPagination?PageNumber=${pageCount}&RowsOfPage=${RowsOfPage}`
  )

  if (!isLoading) {
    if (!addDataFlag) {
      setTimeout(() => {
        dispatch(firstAddCourseProduct(data.courseFilterDtos));
        dispatch(changeAddDataFlag(true))
      }, 3000);
    }
  }


  getFilterData("technologie", "/Home/GetTechnologies").then((technologi) => {
    dispatch(addFirstFilterData({ data: technologi.data, type: "technologi" }));
  });

  getFilterData("courseTypes", "/CourseType/GetCourseTypes").then((type) => {
    dispatch(addFirstFilterData({ data: type.data, type: "courseTypes" }));
  });

  getFilterData("courseLevel", "/CourseLevel/GetAllCourseLevel").then((level) => {
    dispatch(addFirstFilterData({ data: level.data, type: "courseLevel" }));
  });

  const { mutateAsync: getDataByClick2 } = getDataByClick()
  const pageChangeHandler = async (pageNum) => {

// <<<<<<< HEAD
    // pageCount = pageNum
    dispatch(changeCoursesPageCounter(pageNum));
    dispatch(firstAddCourseProduct(null))
    dispatch(changeAddDataFlag(true))
    // const data = await getDataByClick(`/Home/GetCoursesWithPagination?PageNumber=${pageCount}&RowsOfPage=6`)
    // dispatch(firstAddProduct(data.data.courseFilterDtos))
// =======/
    // dispatch(changeCoursesPageCounter(pageNum));
    // dispatch(firstAddCourseProduct(null))
    dispatch(changeAddDataFlag(true))
    
    const data = await getDataByClick2(`/Home/GetCoursesWithPagination?PageNumber=${pageNum}&RowsOfPage=6`)
    console.log("mutation ==>",data)
    setTimeout(() => {dispatch(firstAddCourseProduct(data.courseFilterDtos))}, 2000)
    dispatch(firstAddCourseProduct(data.data.courseFilterDtos))
    // const data = await getDataByClick2(`/Home/GetCoursesWithPagination?PageNumber=${pageNum}&RowsOfPage=6`)
    // console.log("mutation ==>",data)
    // setTimeout(() => {dispatch(firstAddCourseProduct(data.courseFilterDtos))}, 2000)
// 
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
          <PaginationData
            initialPageNum={1}
            totalNum={5}
            pageChange={pageChangeHandler}
          />
        </BottomSection>
      </div>
    </div>
  );
};

export default Courses;