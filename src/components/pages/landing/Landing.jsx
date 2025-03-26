// import React from 'react'
// import Header from '../../partials/header/Header'
// import Footer from '../../partials/footer/Footer'
// import HeroSection from './LandingSections/HeroSection'
// import CategorySection from './LandingSections/CategorySection'
// import BestTeacherSection from './LandingSections/BestTeacherSection'
// import { productMockData } from "../../../core/constants/courses-datas/productMockData";
// import CourseSection from './LandingSections/CourseSection'

// const Landing = () => {
//   return (
//     <div className='bg-[#F7F7F7]'>
//       <HeroSection/>
//       <CategorySection/>
//       <CourseSection/>
//       <BestTeacherSection/>
//     </div>
//   );
// };


// export default Landing; 



import React, { useEffect, useState } from 'react'
import Header from '../../partials/header/Header'
import Footer from '../../partials/footer/Footer'
import HeroSection from './LandingSections/HeroSection'
import CategorySection from './LandingSections/CategorySection'
import BestTeacherSection from './LandingSections/BestTeacherSection'
import { productMockData } from "../../../core/constants/courses-datas/productMockData";
import CourseSection from './LandingSections/CourseSection'
import ServiceSection from './LandingSections/ServiceSection'
import NewsSection from './LandingSections/NewsSection'
import { getData } from '../../../core/services'

const Landing = () => {
  const [courseData, setCourseData] = useState(null)

  getData("landingProduct", "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=6")
  .then((response) => {
    setCourseData(response.data.courseFilterDtos)
  })

  useEffect(() => {
    if (courseData) {
      console.log("courseData ==>",courseData)
    }
  }, [courseData])

  return (
    <div className='bg-[#F7F7F7]'>
      {/* <Header/> */}
      <HeroSection/>
      <CategorySection/>
      <CourseSection courseData={courseData}/>
      <BestTeacherSection/>
      <ServiceSection/>
      <NewsSection/>
      {/* <Footer/> */}
    </div>
  );
};

export default Landing;