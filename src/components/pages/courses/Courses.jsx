import React, { useState } from "react";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import { getData, getDataByClick } from "../../../core/services";
import { useDispatch } from "react-redux";
import { addFirstFilterData, firstAddProduct } from "../../../redux/actions";
import { PaginationData } from "../../partials";
import bg from "../../../assets/pics/courses/bg1.png";
import { filterData } from "../../../core/constants";

const Courses = () => {
  const dispatch = useDispatch();
  const [coursesData, setCoursesData] = useState(1);

  let pageCount = 1;

  getData(
    "product",
    `/Home/GetCoursesWithPagination?PageNumber=${pageCount}&RowsOfPage=6`
  ).then((response) => {
    setCoursesData(response.data.courseFilterDtos);
    setTimeout(() => {
      dispatch(firstAddProduct(response.data.courseFilterDtos));
    }, 3000);
  });

  // getData("dfg", "/Home/GetCoursesWithPagination?PageNumber=&RowsOfPage=6").then((response) => console.log("no pagination",response))

  const pageChangeHandler = async (pageNum) => {
    pageCount = pageNum;
    dispatch(firstAddProduct(null));
    let data = await getDataByClick(
      `/Home/GetCoursesWithPagination?PageNumber=${pageCount}&RowsOfPage=6`,
    );
    setTimeout(() => {
      dispatch(firstAddProduct(data.data.courseFilterDtos));
    }, 2000);
  };

  getData("technologie","/Home/GetTechnologies").then((technologi) => {
    dispatch(addFirstFilterData({data: technologi.data, type: "technologi"}))
  })

  getData("courseTypes", "/CourseType/GetCourseTypes").then((type) => {
    dispatch(addFirstFilterData({data: type.data, type: "courseTypes"}))
  })

  getData("courseLevel", "/CourseLevel/GetAllCourseLevel").then((level) => {
    dispatch(addFirstFilterData({data: level.data, type: "courseLevel"}))
  })

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
