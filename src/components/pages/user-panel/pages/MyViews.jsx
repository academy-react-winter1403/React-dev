
import React from "react";
import Input from "../../../common/input/Input";
// import SortTypeCard from "../../../common/SortTypeCard";
// import { sortColData } from "../../../../core/constants";
import TextComp from "../../../common/user-panel-input/TextComp";
import UserPanelCard from "../../../partials/user-panel/UserPanelCard";
import { sortingArticlesNews } from "../../../../core/constants/articlesMockApi/sort_data";
// import { useDispatch } from "react-redux";
import SortingCol from "../../ArticlesAndNews/Sorting-Articles/SortingCol";
import { PaginationData } from "../../../partials";
import { MyViewsMockApi } from "../../../../core/constants/user-panel/myViews";

const MyViews = () => {
  const changeHandler = (QueryEvent) => {
    console.log(QueryEvent.target.value);
  };
  //   const dispatch = useDispatch()
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
        <div className="sort-control flex justify-between">
          <div className="input-control w-[60%] max-md:w-full">
            <Input
              type={"text"}
              placeholder={"چی میخوای یاد بگیری؟..."}
              change={changeHandler}
            />
          </div>
          <SortingCol
            dataMap={sortingArticlesNews}
            onChange={sortChangeHandler}
          />
        </div>
      </div>
      <div className="center h-[535px]">
        <TextComp
          dataMaper={MyViewsMockApi}
          boxControlStyle={"w-[65%]"}
          boxContainerStyle={"mt-[23px]"}
        />
        <UserPanelCard trashcanFlag={true} bgCalc={3} divFlag={false} colorFlag={false}/>
      </div>
      <div className="bottom">
        <PaginationData
          initialPageNum={1}
          totalCount={15}
          RowsOfPage={6}
          changePageNumber={changePageNumber}
        />
      </div>
    </div>
  );
};

export default MyViews;
