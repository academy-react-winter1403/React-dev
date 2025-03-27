import React from "react";
import { productMockData } from "../../../../core/constants/courses-datas/productMockData";
import Titles from "./Titles";
import SliderOne from "../landingSlider/SliderOne";

const CourseSection = ({courseData}) => {
  return (
    <div className="swiper-container items-center justify-between w-full h-[600px] flex flex-col  font-b-yekan whitespace-nowrap mt-20 overflow-hidden">
      <Titles
        title={"دوره های آموزشی"}
        exp={"به روز ترین دوره هایی که میتونید پیدا کنید"}
      />
      <div className="slider-control relative w-[80%] h-[500px]">
        <SliderOne dataMapper={courseData} maxWidth={80} />
      </div>
    </div>
  );
};

export default CourseSection;
