import React from "react";
import { productMockData } from "../../../../core/constants/courses-datas/productMockData";
import Titles from "./Titles";
import SliderOne from "../landingSlider/SliderOne";
// import { MdNavigateBefore } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const CourseSection = ({ courseData }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";
  return (
    <div
      className="swiper-container items-center justify-between w-full h-[600px] flex flex-col  font-b-yekan whitespace-nowrap mt-20 overflow-hidden max-w-[1515px] mx-auto"
      data-aos="zoom-in"
    >
      {/* <Titles
        title={"دوره های آموزشی"}
        exp={"به روز ترین دوره هایی که میتونید پیدا کنید"}
      /> */}
      <Titles title={t("courseTitle")} exp={t("courseDesc")} />
      <div className="slider-control relative w-[80%] h-[500px]">
        {/* <div className="w-full h-5 flex items-end justify-end flex-row flex-nowrap text-[#AAAAAA] cursor-pointer">
          
           <p>{t("allCourses")}</p>
          <MdNavigateBefore size={23} />
        </div> */}
        <div
          className={`w-full h-5 flex items-end justify-end flex-nowrap text-[#AAAAAA] cursor-pointer
    ${isRTL ? "flex-row" : "flex-row-reverse"}
  `}
        >
          <p className={isRTL ? "ml-1" : "mr-1"}>{t("allCourses")}</p>
          {isRTL ? (
            <MdNavigateBefore size={23} />
          ) : (
            <MdNavigateNext size={23} />
          )}
        </div>
        <div>
          <SliderOne dataMapper={courseData} maxWidth={80} />
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
