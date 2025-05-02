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

  const { data, isLoading } = getData(
    "landingProduct",
    "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=6"
  );

  if (!isLoading) {
    if (!coursesData) {
      console.log("landing ",data);
      setCoursesData(data.courseFilterDtos);
    }
  }

  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true,     
    })
  }, [])

  return (
    <div className="bg-[#F7F7F7]">
      {/* <Header/> */}
      {/* <HeroSection /> */}
      {/* <CategorySection />
      <CourseSection courseData={coursesData} />
      <BestTeacherSection />
      <ServiceSection />
      <NewsSection /> */}

      {/* <HeroSection />
      <CategorySection />
      <CourseSection coursesData={coursesData} />
      <BestTeacherSection />
      <ServiceSection />
      <NewsSection /> */}
      {/* <Footer/> */}
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
