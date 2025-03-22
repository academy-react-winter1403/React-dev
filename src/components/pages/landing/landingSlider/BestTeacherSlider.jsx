import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { BestTeacherMockData } from "../../../../core/constants/LandingMockApi/BestTeacherMockApi";
import { IoPersonOutline } from "react-icons/io5"
import { LuPlay } from "react-icons/lu";

const BestTeacherSlider = () => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="swiper w-[240px] h-[400px]"
    >

    {
        BestTeacherMockData.map((item, index) => (
            <SwiperSlide key={index} className="swiper-slide rotate-2 relative group">
                {/* image */}
            <img 
              src={item.image} 
              alt='#' 
              className="w-full h-full object-cover rounded-lg" 
            />
            {/* image hover */}
            <div className="
            absolute inset-0 bg-black group font-b-yekan
            flex flex-col justify-end items-center 
            text-white text-center p-4 rounded-lg 
            opacity-0 hover:opacity-50 mb-2
            transition-opacity duration-300 gap-1.5
          ">
            <h3 className="text-lg font-bold group-hover:opacity-100">{item.name}</h3>
            <div className="flex flex-row justify-between gap-2">
                <p className="text-sm flex flex-row gap-1">
                    <IoPersonOutline 
                    className="text-white h-[18px]"/>
                     {item.students} 
                     دانشحو
                </p>
                <p className="text-sm flex flex-row gap-1">
                    <LuPlay className="text-white h-[18px]" />
                    {item.courses} 
                    دوره آموزشی
                </p>
            </div>
          </div>
          </SwiperSlide>
        ))
    }
    </Swiper>
  );
};

export default BestTeacherSlider;
