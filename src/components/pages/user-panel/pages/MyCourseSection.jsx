import React from "react";
import Input from "../../../common/input/Input";
import SortTypeCard from "../../../common/SortTypeCard";
import { myCourseMockApi } from "../../../../core/constants";
import TextComp from "../../../common/user-panel-input/TextComp";
import UserPanelCard from "../../../partials/user-panel/UserPanelCard";
import { PaginationData, TabSelect } from "../../../partials";
import { sortingArticlesNews } from "../../../../core/constants/articlesMockApi/sort_data";
import SortingCol from "../../ArticlesAndNews/Sorting-Articles/SortingCol";
import { getData } from "../../../../core/services";
import { useDispatch, useSelector } from "react-redux";
import { addCourseActivedDataUserPanel, changeCourseActivedTatolCount } from "../../../../redux/actions";
import noCourses from "../../../../assets/pics/userPanel/no-courses2.png"
import { motion } from "framer-motion";
// import { useDispatch } from "react-redux";

const MyCourseSection = () => {
  const dispatch = useDispatch()
  // const changeHandler = () => {};
  const { courseActivedDataUserPanel } = useSelector(state => state)

  const {courseActivedData, courseActivedTotalCount} = courseActivedDataUserPanel

  // get course data
  const {data, isLoading} = getData("userPanelCoursesData",
    "/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate"
  )
  if (!isLoading) {
    // console.log(data)
    dispatch(addCourseActivedDataUserPanel(data.listOfMyCourses))
    dispatch(changeCourseActivedTatolCount(data.totalCount))
  }
  // get course data

  const changeHandler = (QueryEvent) => {
    console.log(QueryEvent.target.value);
  };
    // const dispatch = useDispatch()
  const sortChangeHandler = (sortEvent) => {
    console.log(sortEvent);
    if (sortEvent === "جدیدترین") {
      //   dispatch(changeSortingCol("Active"));
    }
    if (sortEvent === "پرطرفدارترین") {
      //   dispatch(changeSortingCol("InsertDate"));
    }
  };

  const changePageNumber = (pageNum) => {
    console.log(pageNum);
  };
  return (
    <div className="my-course-container mt-2.5">
      <div className="top border-b-[1px] border-gray-200 pb-5">
        <div className="sort-control flex justify-between items-center">
          <div className="input-control w-[40%] max-md:w-full">
            <Input
              type={"text"}
              placeholder={"چی میخوای یاد بگیری؟..."}
              change={changeHandler}
            />
          </div>
          {/* <SortTypeCard
            dataMap={sortingArticlesNews}
            placeholder={"صعودی"}
            borderWidth={"rounded-[20px]"}
            wrapperWidth={"text-[14px]"}
          /> */}
          <div className="filter-option-control flex items-center gap-x-2.5">
            <TabSelect/>
            <SortTypeCard
              dataMap={sortingArticlesNews}
              placeholder={"پرطرفدارترین"}
              borderWidth={"rounded-[20px]"}
              wrapperWidth={"text-[14px]"}
            />
          </div>
        </div>
      </div>
      <div className="center h-[535px]">
        <TextComp dataMaper={myCourseMockApi} boxControlStyle={"w-[70%]"} boxContainerStyle={"mt-[23px]"}/>
        <motion.div
          initial={{opacity: 0, scale: 0.25}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 1}}
          className="card-control w-full h-full flex justify-center items-center">
          {courseActivedTotalCount > 0 ?
            courseActivedData?.map((item, index) => {
              return (
                <UserPanelCard trashcanFlag={false} bgCalc={3} divFlag={false} colorFlag={false} key={index}/>
              )
            })
            : <div className="">
                <img src={noCourses} alt="" className="h-[350px]"/>
                <h1 className="text-center font-b-yekan text-2xl mt-1
                bg-amber-300 rounded-xl py-3.5 drop-shadow-[0_1px_2px_#00000026]"
                > دوره ای نخریدی اشکول خان😂😂😂 </h1>
              </div>
          }
        </motion.div>
      </div>
      <div className="bottom">
      <PaginationData
          initialPageNum={1}
          totalCount={courseActivedTotalCount}
          RowsOfPage={6}
          changePageNumber={changePageNumber}
        />
      </div>
    </div>
  );
};

export default MyCourseSection;
