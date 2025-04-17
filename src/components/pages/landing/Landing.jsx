import React, { useEffect, useState } from "react";
import Header from "../../partials/header/Header";
import Footer from "../../partials/footer/Footer";
import HeroSection from "./LandingSections/HeroSection";
import CategorySection from "./LandingSections/CategorySection";
import BestTeacherSection from "./LandingSections/BestTeacherSection";
import { productMockData } from "../../../core/constants/courses-datas/productMockData";
import CourseSection from "./LandingSections/CourseSection";
import ServiceSection from "./LandingSections/ServiceSection";
import NewsSection from "./LandingSections/NewsSection";
import { useDispatch } from "react-redux";
import { getData } from "../../../core/services";
import { firstAddCourseProduct } from "../../../redux/actions";
import AOS from 'aos'
import 'aos/dist/aos.css'


const Landing = () => {
  
  const [coursesData, setCoursesData] = useState(null);

  getData(
    "landingProduct",
    "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=6"
  ).then((response) => {
    console.log("",response.data)
    setCoursesData(response.data.courseFilterDtos);
  });

  useEffect(() => {
    if (coursesData) {
      console.log(coursesData);
    }
  }, [coursesData]);

  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true,     
    })
  }, [])

  return (
    <div className="bg-[#F7F7F7]">
      <HeroSection/>
      <CategorySection/>
      <CourseSection courseData={coursesData}/>
      <BestTeacherSection/>
      <ServiceSection/>
      <NewsSection/>
    </div>
  );
};

export default Landing;
