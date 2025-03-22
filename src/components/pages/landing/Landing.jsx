import React from "react";
import Header from "../../partials/header/Header";
import Footer from "../../partials/footer/Footer";
import HeroSection from "./LandingSections/HeroSection";
import CategorySection from "./LandingSections/CategorySection";
import { productMockData } from "../../../core/constants/courses-datas/productMockData";
import SliderOne from "./LandingSections/SliderOne";

const Landing = () => {
  return (
    <div className="bg-[#F7F7F7] box-border">
      {/* <div className="h-auto md:h-[572px] w-full max-w-[1202px] flex md:flex-row justify-between mx-auto p-4 md:p-0"> */}
        {/* <Header/> */}
        <HeroSection />
        <CategorySection />
        <div className="swiper-contaienr flex justify-center">
          <div className="slider-control relative w-[80%]">
            <SliderOne dataMapper={productMockData} maxWidth={80}/>
          </div>
        </div>
        {/* <Footer/> */}
      {/* </div> */}
    </div>
  );
};

export default Landing;
