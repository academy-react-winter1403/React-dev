import React, { useEffect } from "react";
import Input from "../../../common/input/Input";
import TextComp from "../../../common/user-panel-input/TextComp";
import UserPanelCard from "../../../partials/user-panel/UserPanelCard";
import { PaginationData } from "../../../partials";
import { MyViewsMockApi } from "../../../../core/constants/user-panel/myViews";
import TypeSortingUserPanel from "../../../partials/UserPanel/TypeSortingUserPanel";
import { UserPanelSubscribers } from "../../../../core/constants/user-panel/UserPanelSubscribers";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../../core/services";
import {
  setCourseComments,
  setFilterComments,
  setNewsComments,
  setSearchComments,
} from "../../../../redux/actions";

const MyViews = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { displayedComments, searchComments } = useSelector(
    (state) => state.MyComments
  );
  const { data: coursesData, isLoading: isCoursesLoading } = getData(
    "MyCommentsCourses",
    "/SharePanel/GetMyCoursesComments"
  );
  const { data: newsData, isLoading: isNewsLoading } = getData(
    "MyCommentsNews",
    "/SharePanel/GetMyNewsComments"
  );
  useEffect(() => {
    if (!isCoursesLoading && coursesData) {
      console.log("coursesData",coursesData.myCommentsDtos)
      dispatch(setCourseComments(coursesData.myCommentsDtos));
    }
    if (!isNewsLoading && newsData) {
      console.log("newsData",newsData.myNewsCommetDtos)
      dispatch(setNewsComments(newsData.myNewsCommetDtos));
    }
    if (!isCoursesLoading && !isNewsLoading && coursesData && newsData) {
      dispatch(setFilterComments("همه"));
      console.log("نمایش داده میشه");
    }
  }, [isCoursesLoading, isNewsLoading, coursesData, newsData, dispatch]);
  // Search Handler
  const changeHandler = (QueryEvent) => {
    console.log(QueryEvent.target.value);
    dispatch(setSearchComments(QueryEvent.target.value));
  };
  const filteredResults = displayedComments.filter((comments) => {
    return comments?.courseTitle?.toLowerCase().includes(searchComments.toLowerCase());
  });
  console.log("filteredResults", displayedComments);
  // Filter Handler
  const handleCommon = (type) => {
    console.log(type);
    dispatch(setFilterComments(type));
  };
  // Pagination
  const changePageNumber = (pageNum) => {
    console.log(pageNum);
  };
  // View Comment
  const handleView = (id) => {
    navigate(`/course-detail/${id}`)
    // navigate(`/article-detail/${id}`);
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
          <TypeSortingUserPanel
            dataMap={UserPanelSubscribers}
            onChange={handleCommon}
          />
        </div>
      </div>
      <div className="center h-[535px]">
        <TextComp
          dataMaper={MyViewsMockApi}
          boxControlStyle={"w-[65%]"}
          boxContainerStyle={"mt-[23px]"}
        />
        {filteredResults.map((item, index) => {
          return (
            <UserPanelCard
              key={index}
              trashcanFlag={true}
              bgCalc={3}
              divFlag={false}
              colorFlag={false}
              onView={() => handleView(item.commentId)}
              // onDelete={() => handleDelete(item.courseId)}
              titleOne={item.courseTitle}
              titleTwo={"دوره ها"}
              titleThree={item.insertDate}
              accept={item.accept}
              // titleFour={item.teacheName}
            />
          );
        })}
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
