import React from "react";
import TopSection from "../dosboard/TopSection";
import CenterSection from "../dosboard/CenterSection";
import { useDispatch, useSelector } from "react-redux";
import {
  getActivedCourseData,
  getCourseReservedUserPanel,
  getData,
  getMyCourseData,
  getNewData,
} from "../../../../core/services";
import {
  addCourseActivedDataUserPanel,
  addDataTheCourseReserved,
  addLatestSserPanelNewsSlice,
  addMyCourse,
  addSuggestedCourseUserPanel,
} from "../../../../redux/actions";
import BottomSection from "../dosboard/BottomSection";
import DoshboardLoading from "../dosboard/DoshboardLoading";
import { motion } from "framer-motion";

const DashboardSection = () => {
  const dispatch = useDispatch();

  // get course reserved courent
  const { data, isLoading } = getCourseReservedUserPanel(
    "courseReserv",
    `/SharePanel/GetMyCoursesReserve`
  );
  if (!isLoading) {
    dispatch(addDataTheCourseReserved(data));
    console.log("course reserv", data);
  }
  // get course reserved courent

  // get my course data
  const {
    data: myCourseData,
    isLoading: myCourseLoading,
    isError: myCourseError,
  } = getMyCourseData("myCourse", `/SharePanel/GetMyCourses`);
  if (!myCourseLoading) {
    console.log(myCourseData)
    dispatch(addMyCourse(myCourseData))
  }
  // get lastUpdate data
  const {
    isError: newsError,
    isLoading: newsLoading,
    data: newsData,
  } = getNewData(
    "userPanelNewsData",
    `/News?RowsOfPage=3&SortingCol=lastUpdate&SortType=DESC`
  );

  if (!newsLoading) {
    console.log(newsData.news);
    dispatch(addLatestSserPanelNewsSlice(newsData.news));
  }
  // get lastUpdate data

  // get suggested courses
  const {
    data: seggestedCourseData,
    isLoading: seggestedCourseLoading,
    isError: seggestedCourseError,
  } = getData("suggestedCourse", `/Home/GetCoursesTop?Count=2`);

  if (!seggestedCourseLoading) {
    console.log("seggestedCourseData ==>", seggestedCourseData);
    dispatch(addSuggestedCourseUserPanel(seggestedCourseData));
  }
  // get suggested courses

  // get actived course
  const {
    data: courseActivedData,
    isLoading: courseActivedLoading,
    isError: courseActivedError,
  } = getActivedCourseData(
    "courseActivedData",
    `/Home/GetCoursesWithPagination?RowsOfPage=2&SortingCol=Active`
  );

  if (!courseActivedLoading) {
    dispatch(addCourseActivedDataUserPanel(courseActivedData.courseFilterDtos));
  }
  // get actived course

  const { latestSserPanelNews, userProfileInfo } = useSelector(
    (state) => state
  );
  const { userProfileInfoData } = userProfileInfo;
  const { latestSserPanelNewsSliceData } = latestSserPanelNews;

  if (isLoading || myCourseLoading || newsLoading || seggestedCourseLoading || courseActivedLoading) {
    return <DoshboardLoading/>
  }

  return (
    <div className="dashboard-container w-full flex justify-center ">
      <div className="dashboard-control w-full min-lg:w-[90%] p-2">
        {<TopSection />}
        <CenterSection data={latestSserPanelNewsSliceData} />
        <div className="hr-control flex justify-center w-full">
          <motion.hr
            className="outline-0 border-0 w-full h-[1px] bg-[#dfdfdf] mt-8"
            initial={{width: 0}}
            animate={{width: "100%"}}
            transition={{duration: 0.6, delay: 0.8}}
          ></motion.hr>
        </div>
        {<BottomSection />}
      </div>
    </div>
  );
};

export default DashboardSection;
