import React from "react";
import DashboardCard from "./DashboardCard";
import ViewAllBtn from "../../../common/view-all/ViewAllBtn";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BottomSection = () => {
    const navigate = useNavigate()
  const { courseActivedDataUserPanel, suggestedCourseUserPanel } = useSelector(
    (state) => state
  );
  const { courseActivedData } = courseActivedDataUserPanel;
  const { suggestedCourseUserPanelData } = suggestedCourseUserPanel;

  const cardClickHandler = (item) => {
    console.log(item)
    navigate(`/course-detail/${item.courseId}`)
  }

  return (
    <div className="flex gap-x-11 mt-6">
      <div className="right w-[50%]">
        <motion.h1
          className="text-[#777777] font-b-yekan text-nowrap"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          دوره های در حال برگزاری:
        </motion.h1>
        <motion.div
          className="card-control mt-3.5 flex flex-col gap-y-4 relative"
          initial={{ top: "-20px", opacity: 0 }}
          animate={{ top: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          {courseActivedData.map((item) => (
            <DashboardCard data={item} teacherNameFlag={true} />
          ))}
        </motion.div>
        <div className="btn-control flex justify-center mt-6">
          <ViewAllBtn
            text={"مشاهده همه"}
            textColor={"#B7B7B7"}
            svgColor={"#B7B7B7"}
            onClick={() => navigate("/courses")}
          />
        </div>
      </div>
      <div className="left w-[50%]">
        <motion.h1
          className="text-[#777777] font-b-yekan text-nowrap"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          دوره های پیشنهادی:
        </motion.h1>
        <motion.div
          className="card-control mt-3.5 flex flex-col gap-y-4 relative"
          initial={{ top: "-20px", opacity: 0 }}
          animate={{ top: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          {suggestedCourseUserPanelData.map((item) => (
            <DashboardCard
              data={item}
              teacherNameFlag={false}
              cardClickHandler={() => cardClickHandler(item)}
            />
          ))}
        </motion.div>
        <div className="btn-control flex justify-center mt-6">
          <ViewAllBtn
            text={"مشاهده همه"}
            textColor={"#B7B7B7"}
            svgColor={"#B7B7B7"}
            onClick={() => navigate("/courses")}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
