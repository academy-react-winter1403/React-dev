import React from "react";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import { getData } from "../../../core/services";
import { useDispatch } from "react-redux";
import { firstAddProduct } from "../../../redux/reducer";

const Courses = () => {
  const dispatch = useDispatch();

  getData(
    "/Home/GetCoursesWithPagination?PageNumber=3&RowsOfPage=6"
  ).then((response) => {
    setTimeout(() => {
      dispatch(firstAddProduct(response.data.courseFilterDtos));
    }, 3000)
  });

  return (
    <div className="courses-holder flex justify-center mt-10">
      <div className="container w-[80%] font-b-yekan flex flex-col items-center">
        <TopSection />
        <BottomSection />
      </div>
    </div>
  );
};

export default Courses;
