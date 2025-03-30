import React, { useEffect, useState } from "react";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import { getData, getDataByClick } from "../../../core/services";
import { useDispatch, useSelector } from "react-redux";
import { addFirstFilterData, changePageCounter, changeQueryFlag, firstAddProduct } from "../../../redux/actions";
import { PaginationData } from "../../partials";
import bg from "../../../assets/pics/courses/bg1.png";
import { filterData } from "../../../core/constants";
import { useSelect } from "@heroui/react";
import { deleteItemLocalStorage } from "../../../core/hooks/local-storage/deleteItemLocalStorage";
import { deleteAllItemLocalStorage } from "../../../core/hooks/local-storage/deleteAllItem";

const Courses = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [flag, setFlag] = useState(false)
  console.log(state)

  let queryFlag = state.flags.coursesFlag.queryFlag
  // let pageCount = state.coursesData.pageCount

  // console.log(queryFlag)

  // const [coursesData, setCoursesData] = useState(1);
  // const [pageCounter, setPageCounter] = useState(null);

  let pageCount = 1;

  const change = () => {
    setFlag(true)
  }

  useEffect(() => {
    if (!queryFlag) {
      deleteAllItemLocalStorage(["technologi", "courseLevelId", "CourseTypeId", "searchValue", "sortText"])
    }

  }, [queryFlag]);

  useEffect(() => {
    change()
  }, [])

  // if (!flag) {
    getData(
      "product",
      `/Home/GetCoursesWithPagination?PageNumber=${pageCount}&RowsOfPage=6`
    ).then((response) => {
      setTimeout(() => {
        dispatch(firstAddProduct(response.data.courseFilterDtos));
      }, 3000);
    });
  // }


  const pageChangeHandler = async (pageNum) => {
    // dispatch(changePageCounter(pageNum))
    pageCount = pageNum
    // console.log(pageCount)
    dispatch(firstAddProduct(null));
    const data = await getDataByClick(
      `/Home/GetCoursesWithPagination?PageNumber=${pageCount}&RowsOfPage=6`
    );
    setTimeout(() => {
      dispatch(firstAddProduct(data.data.courseFilterDtos));
    }, 2000);
  };

  getData("technologie", "/Home/GetTechnologies").then((technologi) => {
    // console.log(technologi.data)
    dispatch(addFirstFilterData({ data: technologi.data, type: "technologi" }));
  });

  getData("courseTypes", "/CourseType/GetCourseTypes").then((type) => {
    dispatch(addFirstFilterData({ data: type.data, type: "courseTypes" }));
  });

  getData("courseLevel", "/CourseLevel/GetAllCourseLevel").then((level) => {
    dispatch(addFirstFilterData({ data: level.data, type: "courseLevel" }));
  });

  return (
    <div
      className="courses-holder flex justify-center mt-10"
      style={{
        background: `url(${bg})`,
        // backgroundSize: "400px 100%",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "50% 80px",
      }}
    >
      <div className="min-md:w-[82%] max-md:w-[90%] font-b-yekan flex flex-col items-center">
        <TopSection />
        <BottomSection pageCount={pageCount}>
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
