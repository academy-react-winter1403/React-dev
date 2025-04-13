import React from "react";
import { productMockData } from "../../../../core/constants/courses-datas/productMockData";
import Titles from "./Titles";
import SliderOne from "../landingSlider/SliderOne";
import { MdNavigateBefore } from "react-icons/md";



const CourseSection = ({ courseData }) => {
  return (
    <div className="swiper-container items-center justify-between w-full h-[600px] flex flex-col  font-b-yekan whitespace-nowrap mt-20 overflow-hidden" data-aos="zoom-in">
      <Titles
        title={"دوره های آموزشی"}
        exp={"به روز ترین دوره هایی که میتونید پیدا کنید"}
      />
      <div className="slider-control relative w-[80%] h-[500px]">
        <div className="w-full h-5 flex items-end justify-end flex-row flex-nowrap text-[#AAAAAA] cursor-pointer">
          <p>همه دوره ها</p>
          <MdNavigateBefore size={23} />
        </div>
        <div>
          <SliderOne dataMapper={courseData} maxWidth={80} />
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
