import React from "react";
import { MotionComp } from "../../partials";
import { FrontIcon } from "../../../core/icons/icons";
import ItemCard from "./ItemCard";

const LeftItemCard = ({ detailData }) => {
  return (
    <div className="item-card-container mt-[26px] flex flex-col gap-y-[17px]">
      <MotionComp
        delay={1}
        xInitial={"-150px"}
        xAnimate={0}
        yInitial={"-50px"}
        yAnimate={0}
        animDuration={1}
      >
        <ItemCard title={"دسته بندی"} description={"فرانت اند"}>
          <FrontIcon />
        </ItemCard>
      </MotionComp>
      <MotionComp
        delay={1.5}
        xInitial={"-150px"}
        xAnimate={0}
        yInitial={"-50px"}
        yAnimate={0}
        animDuration={1}
      >
        <ItemCard title={" پیشنباز "} description={"HTML, CSS, JS"}>
          <FrontIcon />
        </ItemCard>
      </MotionComp>
      <MotionComp
        delay={2}
        xInitial={"-150px"}
        xAnimate={0}
        yInitial={"-50px"}
        yAnimate={0}
        animDuration={1}
      >
        <ItemCard title={"سطح آموزش"} description={detailData?.courseLevelName}>
          <FrontIcon />
        </ItemCard>
      </MotionComp>
      <MotionComp
        delay={2.5}
        xInitial={"-150px"}
        xAnimate={0}
        yInitial={"-50px"}
        yAnimate={0}
        animDuration={1}
      >
        <ItemCard
          title={"وضعیت دوره"}
          description={detailData?.courseStatusName}
        >
          <FrontIcon />
        </ItemCard>
      </MotionComp>
    </div>
  );
};

export default LeftItemCard;
