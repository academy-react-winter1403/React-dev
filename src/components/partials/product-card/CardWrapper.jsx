import React, { useEffect } from "react";
import productPic from "../../../assets/pics/product/khafan.jpg";
import productPic2 from "../../../assets/pics/product/product.png";
import TeacherSection from "./teacherSection";
import ScoreSection from "./ScoreSection";
import PriceSection from "./PriceSection";
import Aos from "aos";
import MotionComp from "../motion/MotionComp";

const CardWrapper = ({ data, timeFlag, cardClick, viewFlag }) => {
  const {
    title,
    teacherName,
    levelName,
    tumbImageAddress,
    cost,
    likeCount,
    courseId,
  } = data;

  const imageClickHandler = (productId) => {
    cardClick(productId);
  };

  // useEffect(() => {
  //   Aos.init({
  //     duration: 800,
  //   });
  //   Aos.refresh();
  // }, []);

  return (
    <>
      <MotionComp
        hoverMotion={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
      >
        <div
          // data-aos="flip-down"
          data-aos={viewFlag ? `flip-left` : `"flip-down"`}
          className={
            viewFlag
              ? `card-container example slim-fade-in bg-[#FFFFFF]
             col-span-1 drop-shadow-[0_1px_2px_#00000040] rounded-[15px] px-[12px] pb-[12px]`
              : `card-container example slim-fade-in bg-[#FFFFFF] 
             col-span-1 drop-shadow-[0_1px_2px_#00000040] rounded-[15px] px-[12px] pb-[12px]`
          }
        >
          <div
            className={`item-control 
              ${viewFlag ? `` : `flex min-sm:justify-between max-sm:flex-col`}`}
          >
            <div className={`top-item-control flex ${viewFlag ? `flex-col` : ``}`}>
              <div
                className={`image-control overflow-hidden rounded-[10px] relative ${viewFlag ? `top-[-24px]` : `top-0`}
                 flex justify-center items-center drop-shadow-[0_1px_4px_#00000040]
                 ${viewFlag ? `` : ``}`}
              >
                <img
                  src={
                    tumbImageAddress && tumbImageAddress !== "Not-set"
                      ? tumbImageAddress
                      : productPic2
                  }
                  alt=""
                  className="h-[159px] w-[246px] cursor-pointer"
                  onClick={() => imageClickHandler(courseId)}
                />
              </div>
            </div>
            <div className={`text-control ${!viewFlag ? `w-[73%]` : `w-full`}`}>
              <p
                className="w-[70%] text-ellipsis overflow-hidden text-nowrap course-name text-[#444444]
              font-[800] text-[18px] mt-[8px] indent-[4px] text-start"
                title={title}
              >
                {title}
              </p>
              <div className="teacherName-section-container flex items-center justify-between mt-[26px]">
                <TeacherSection
                  studentsOfNum={likeCount}
                  teacherName={teacherName}
                />
              </div>
              <div className="score-section-container flex items-center justify-between mt-[8px]">
                <ScoreSection
                  levelText={levelName}
                  timeFlag={timeFlag}
                  timeText={"15.30"}
                />
              </div>
              <div className="hr-control flex justify-center mt-[11px]">
                <hr className="outline-0 border-0 w-[94%] h-[1px] bg-gray-200" />
              </div>
              <div className="price-section-control flex items-center justify-between mt-[15px] mb-[3px]">
                <PriceSection price={cost} />
              </div>
            </div>
          </div>
        </div>
      </MotionComp>
    </>
  );
};

export default CardWrapper;
