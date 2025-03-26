import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardWrapper from "../../../partials/product-card/CardWrapper";
import { SliderBtn } from "../../../../core/icons/icons";

const SliderOne = ({ dataMapper}) => {
  return (
    <>
      <Swiper
      className='mt-[60px] max-h-[400px] overflow-hidden'
        modules={[Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={4}
        grabCursor
        slideToClickedSlide
        navigation={{
          nextEl: ".me-btn-next",
          prevEl: ".me-btn-prive",
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        // className="mt-[60px]"
        breakpoints={{
          1284: { spaceBetween: 2 },
          1053: { slidesPerView: 3 },
          1448: { slidesPerView: 4 },
          990: { slidesPerView: 2 },
          651: { slidesPerView: 2 },
          580: { slidesPerView: 1 },
          1: { slidesPerView: 1 },
        }}
      >
        {dataMapper?.map((item, index) => {
          return (
            <SwiperSlide className="" key={index}>
              <div className="bg w- p-[54px_25px_35px_25px]">
                <CardWrapper timeFlag={true} data={item} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SliderBtn
        btnRotate={-180}
        leftNum={-6}
        topNum={284}
        btnClass={"me-btn-next"}
      />
      <SliderBtn
        btnRotate={360}
        leftNum={-6}
        topNum={330}
        btnClass={"me-btn-prive"}
      />
    </>
  );
};

export default SliderOne;
