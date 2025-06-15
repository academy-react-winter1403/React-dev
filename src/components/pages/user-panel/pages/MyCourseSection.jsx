import React, { useState } from "react";
import Input from "../../../common/input/Input";
import SortTypeCard from "../../../common/SortTypeCard";
import { myCourseMockApi } from "../../../../core/constants";
import TextComp from "../../../common/user-panel-input/TextComp";
import UserPanelCard from "../../../partials/user-panel/UserPanelCard";
import { PaginationData, TabSelect } from "../../../partials";
import { sortingArticlesNews } from "../../../../core/constants/articlesMockApi/sort_data";
import SortingCol from "../../ArticlesAndNews/Sorting-Articles/SortingCol";
import { getData, getMyCourse } from "../../../../core/services";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourseActivedDataUserPanel,
  changeCourseActivedTatolCount,
} from "../../../../redux/actions";
import noCourses from "../../../../assets/pics/userPanel/no-courses2.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PaymentActionComp from "./course-payment-pages/PaymentActionComp";
// import { useDispatch } from "react-redux";

const MyCourseSection = () => {
  const [showModalFlag, setShowModalFlag] = useState(false)
  const dispatch = useDispatch();
  const navigation = useNavigate()
  // const changeHandler = () => {};
  const { courseActivedDataUserPanel, userPanelMyCourseFilterParamsSlice } =
    useSelector((state) => state);

  const { courseActivedData, courseActivedTotalCount } =
    courseActivedDataUserPanel;

  const { PageNumber, RowsOfPage, SortingCol, SortType, Query } =
    userPanelMyCourseFilterParamsSlice;

  // get course data
  // const { data, isLoading } = getData(
  //   "userPanelCoursesData",
  //   "/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate"
  // );
  // if (!isLoading) {
  //   // console.log(data)
  //   dispatch(addCourseActivedDataUserPanel(data.listOfMyCourses));
  //   dispatch(changeCourseActivedTatolCount(data.totalCount));
  // }
  // get course data

  // get my course data
  const { data, isLoading, refetch } = getMyCourse(
    "getMyCourse",
    "/SharePanel/GetMyCourses",
    {
      PageNumber,
      RowsOfPage,
      SortingCol,
      SortType,
      Query,
    }
  );
  if (!isLoading) {
    console.log("my course ==>", data);
    dispatch(addCourseActivedDataUserPanel(data?.listOfMyCourses));
    dispatch(changeCourseActivedTatolCount(data?.totalCount));
  }
  // get my course data

  const changePageNumber = (pageNum) => {
    console.log(pageNum);
  };

  const gotoMiniDetailHandler = (item) => {
    console.log(item)
    navigation("/user-panel/my-course/courseDetailView")
  }

  console.log("sortingArticlesNews ==>", sortingArticlesNews);
  return (
    <div className="my-course-container mt-2.5">
      {/* <div className="top border-b-[1px] border-gray-200 pb-5">
        <div className="sort-control flex justify-between items-center">
          <div className="input-control w-[40%] max-md:w-full">
            <Input
              type={"text"}
              placeholder={"چی میخوای یاد بگیری؟..."}
              change={changeHandler}
            />
          </div>
          <div className="filter-option-control flex items-center gap-x-2.5">
            <TabSelect />
            <SortTypeCard
              dataMap={sortingArticlesNews}
              placeholder={"پرطرفدارترین"}
              borderWidth={"rounded-[20px]"}
              wrapperWidth={"text-[14px]"}
            />
          </div>
        </div>
      </div> */}
      <div className="center h-[535px]">
        <TextComp
          dataMaper={myCourseMockApi}
          boxControlStyle={"w-[70%]"}
          boxContainerStyle={"mt-[23px]"}
        />
        {courseActivedTotalCount > 0 ? (
          courseActivedData?.map((item, index) => {
            console.log(item);
            return (
              <UserPanelCard
                trashcanFlag={false}
                bgCalc={3}
                divFlag={false}
                colorFlag={false}
                key={index}
                courseName={item.courseTitle}
                teacherName={item.fullName}
                imageAddress={item.tumbImageAddress}
                staerDate={item.lastUpdate}
                price={item.cost}
                eyeClick={() => gotoMiniDetailHandler(item)}
                statusFlag={false}
                CiWalletFlag={true}
                ciWalletClick={() => setShowModalFlag(!showModalFlag)}
              />
            );
          })
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.25 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="card-control w-full h-full flex justify-center items-center"
          >
            <div className="">
              <img src={noCourses} alt="" className="h-[350px]" />
              <h1
                className="text-center font-b-yekan text-2xl mt-1
                bg-amber-300 rounded-xl py-3.5 drop-shadow-[0_1px_2px_#00000026]"
              >
                {" "}
                دوره ای نخریدی اشکول خان😂😂😂{" "}
              </h1>
            </div>
          </motion.div>
        )}
      </div>
      <div className="bottom">
        <PaginationData
          initialPageNum={1}
          totalCount={courseActivedTotalCount}
          RowsOfPage={6}
          changePageNumber={changePageNumber}
        />
      </div>
      <PaymentActionComp isOpenFlag={showModalFlag} setIsOpenFlag={setShowModalFlag}/>
    </div>
  );
};

export default MyCourseSection;
