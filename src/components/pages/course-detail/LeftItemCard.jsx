import React, { useEffect } from "react";
import { MotionComp } from "../../partials";
import { FrontIcon } from "../../../core/icons/icons";
import ItemCard from "./ItemCard";
import Aos from "aos";
import "aos/dist/aos.css";

const LeftItemCard = ({ cardData }) => {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
    Aos.refresh();
  }, []);

  // if (cardData) {

  // }
  const { categoryData, prerequisite, learnLevel, courseStatus } = cardData

  return (
    <div className="item-card-container mt-[26px] flex flex-col gap-y-[17px]">
      {/* <MotionComp
        aosAnim={"fade-down-right"}
        delay={1}
        xInitial={"-150px"}
        xAnimate={0}
        yInitial={"-50px"}
        yAnimate={0}
        animDuration={1}
      > */}
      <div data-aos="flip-left">
        <ItemCard title={"دسته بندی"} description={categoryData}>
          <FrontIcon />
        </ItemCard>
      </div>
      {/* </MotionComp> */}
      {/* <MotionComp
        aosAnim={"fade-down-right"}
        delay={1.5}
        xInitial={"-150px"}
        xAnimate={0}
        yInitial={"-50px"}
        yAnimate={0}
        animDuration={1}
      > */}
      <div data-aos="flip-left">
        <ItemCard title={" پیشنیاز "} description={prerequisite}>
          <FrontIcon />
        </ItemCard>
      </div>
      {/* </MotionComp> */}

      {/* <MotionComp
        aosAnim={"fade-down-right"}
        delay={2}
        xInitial={"-150px"}
        xAnimate={0}
        yInitial={"-50px"}
        yAnimate={0}
        animDuration={1}
      > */}
      <div data-aos="flip-left">
        <ItemCard title={"سطح آموزش"} description={learnLevel}>
          <FrontIcon />
        </ItemCard>
      </div>
      {/* </MotionComp> */}
      {/* <MotionComp
        aosAnim={"fade-down-right"}
        delay={2.5}
        xInitial={"-150px"}
        xAnimate={0}
        yInitial={"-50px"}
        yAnimate={0}
        animDuration={1}
      > */}
        <div data-aos="flip-left">
          <ItemCard
            title={"وضعیت دوره"}
            description={courseStatus}
          >
            <FrontIcon />
          </ItemCard>
        </div>
      {/* </MotionComp> */}
    </div>
  );
};

export default LeftItemCard;
