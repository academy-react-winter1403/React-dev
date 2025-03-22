
import React from 'react'
import Header from '../../partials/header/Header'
import Footer from '../../partials/footer/Footer'
import HeroSection from './LandingSections/HeroSection'
import CategorySection from './LandingSections/CategorySection'
import BestTeacherSection from './LandingSections/BestTeacherSection'
import { productMockData } from "../../../core/constants/courses-datas/productMockData";
import CourseSection from './LandingSections/CourseSection'

const Landing = () => {
  return (
    <div className='bg-[#F7F7F7]'>
      {/* <Header/> */}
      <HeroSection/>
      <CategorySection/>
      <CourseSection/>
      <BestTeacherSection/>
      {/* <Footer/> */}
    </div>
  );
};

export default Landing; 
