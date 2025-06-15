import React, { useEffect, useState } from "react";
import Input from "../../../common/input/Input";
// import SortTypeCard from "../../../common/SortTypeCard";
// import { sortColData } from "../../../../core/constants";
import TextComp from "../../../common/user-panel-input/TextComp";
import UserPanelCard from "../../../partials/user-panel/UserPanelCard";
import { myCourseReserveMockApi } from "../../../../core/constants/user-panel/courseReserveSection";
import { sortingArticlesNews } from "../../../../core/constants/articlesMockApi/sort_data";
// import { useDispatch } from "react-redux";
import SortingCol from "../../ArticlesAndNews/Sorting-Articles/SortingCol";
import { PaginationData } from "../../../partials";
import { getData, getDataByClick } from "../../../../core/services";
import SortTypeCard from "../../../common/SortTypeCard";
import { useDispatch, useSelector } from "react-redux";
import { addDataTheCourseReserved } from "../../../../redux/actions";
import { reservCourseSortingApi } from "../../../../core/constants";
import { useNavigate } from "react-router-dom";

const CourseReserveSection = () => {
  const dispatch = useDispatch();
  const [cardState, setCardState] = useState(null);
  const navigate = useNavigate()

  // handle filter
  const userPanelCourseReservFilter = (dataBase, params) => {
    const { sort, query } = params;
    const filterData = dataBase.filter((item) => {
      if (!sort || !query || query === "") {
        if (sort) {
          if (sort === "همه") {
            console.log(params)
            return item.accept === false || item.accept === true;
          }
          if (sort === "در انتظار تایید") {
            console.log(params)
            return item.accept === false;
          }
          if (sort === "تایید شده") {
            console.log(params)
            return item.accept === true;
          }
        }
        if (query) {
          console.log(params)
          return item.courseName.indexOf(query) !== -1;
        }
      }else {
        console.log("duta filter")
        if (sort === "همه") {
          return (
            (item.accept === false && item.courseName.indexOf(query) !== -1) ||
            (item.accept === true && item.courseName.indexOf(query) !== -1)
          );
        }
        if (sort === "در انتظار تایید") {
          return item.accept === false && item.courseName.indexOf(query) !== -1;
        }
        if (sort === "تایید شده") {
          return item.accept === true && item.courseName.indexOf(query) !== -1;
        }
      }
    });
    return filterData
  };
  // handle filter

  const { courseReserved } = useSelector((state) => state);
  const { courseReserv } = courseReserved;
  const [filterData, setFilterData] = useState();
  const [filterParams, setFilterParams] = useState({
    sort: null,
    query: null,
  });

  const changeHandler = (queryEvent) => {
    console.log(queryEvent);
    setFilterParams({ ...filterParams, query: queryEvent });
  };
  const changePageNumber = (pageNum) => {
    console.log(pageNum);
  };

  const { data, isLoading } = getData(
    "courseReserv",
    "/SharePanel/GetMyCoursesReserve"
  );
  if (!isLoading) {
    dispatch(addDataTheCourseReserved(data));
  }

  // sorting change
  const sortingChange = (item) => {
    console.log(item);
    setFilterParams({ ...filterParams, sort: item });
  };
  // sorting change

  useEffect(() => {
    const fullFilter = userPanelCourseReservFilter(courseReserv, filterParams)
    console.log(fullFilter)
    setCardState(fullFilter)
  }, [filterParams]);

  useEffect(() => {
    if (courseReserv) {
      setCardState(courseReserv);
    }
  }, [courseReserv]);

  useEffect(() => {
    if (filterData) {
      setCardState(filterData);
    }
  }, [filterData]);

  const trashcanClickHandler = (item) => {
    console.log(item)
  }

  const eyeClickHandler = (item) => {
    console.log(item)
    navigate(`/course-detail/${item.courseId}`)
  }

  return (
    <div className="my-course-container mt-2.5">
      <div className="top border-b-[1px] border-gray-200 pb-5">
        <div className="sort-control flex justify-between">
          <div className="input-control w-[60%] max-md:w-full">
            <Input
              type={"text"}
              placeholder={"چی میخوای یاد بگیری؟..."}
              change={changeHandler}
            />
          </div>
          <SortTypeCard
            dataMap={reservCourseSortingApi}
            placeholder={"در انتظار تایید"}
            borderWidth={"rounded-[20px]"}
            wrapperWidth={"text-[14px]"}
            onChange={sortingChange}
          />
        </div>
      </div>
      <div className="center h-[535px]">
        <TextComp
          dataMaper={myCourseReserveMockApi}
          boxControlStyle={"w-[70%]"}
          boxContainerStyle={"mt-[23px]"}
        />
        {cardState
          ? cardState.map((item, index) => {
              // console.log(item)
              // mutate(`/Home/GetCourseDetails/${item.courseId}`)
              return (
                <UserPanelCard
                  key={index}
                  trashcanFlag={true}
                  bgCalc={index}
                  statusFlag={item.accept}
                  colorFlag={true}
                  courseName={item.courseName}
                  trashcanClick={() => trashcanClickHandler(item)}
                  eyeClick={() => eyeClickHandler(item)}
                />
              );
            })
          : null}
      </div>
      <div className="bottom">
        <PaginationData
          initialPageNum={1}
          totalCount={courseReserv.length}
          RowsOfPage={6}
          changePageNumber={changePageNumber}
        />
      </div>
    </div>
  );
};

export default CourseReserveSection;
