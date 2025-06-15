import Input from "../../../common/input/Input";
import React from "react";
import { Outlet } from "react-router-dom";
import { TabSelect } from "../../../partials";
import SortTypeCard from "../../../common/SortTypeCard";
import { sortingArticlesNews } from "../../../../core/constants/articlesMockApi/sort_data";

const MyCourseWrapper = () => {
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
            <TabSelect />
            <SortTypeCard
              dataMap={sortingArticlesNews}
              placeholder={"پرطرفدارترین"}
              borderWidth={"rounded-[20px]"}
              wrapperWidth={"text-[14px]"}
            />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MyCourseWrapper;
