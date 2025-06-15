import React, { useEffect } from "react";
import Input from "../../../common/input/Input";
import TextComp from "../../../common/user-panel-input/TextComp";
import UserPanelCard from "../../../partials/user-panel/UserPanelCard";
import { PaginationData } from "../../../partials";
import { myFavoriteMockApi } from "../../../../core/constants/user-panel/favorite";
import { UserPanelSubscribers } from "../../../../core/constants/user-panel/UserPanelSubscribers";
import TypeSortingUserPanel from "../../../partials/UserPanel/TypeSortingUserPanel";
import { useDispatch, useSelector } from "react-redux";
import {
  setCourseFavorites,
  setFilter,
  setNewsFavorites,
  setSearchQuery,
} from "../../../../redux/actions";
import { deleteDataApi, getData } from "../../../../core/services";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { displayedFavorites, searchQuery } = useSelector(
    (state) => state.favorites
  );

  const { data: coursesData, isLoading: isCoursesLoading } = getData(
    "FavoriteCourses",
    "/SharePanel/GetMyFavoriteCourses"
  );
  const { data: newsData, isLoading: isNewsLoading } = getData(
    "FavoriteNews",
    "/SharePanel/GetMyFavoriteNews"
  );
  useEffect(() => {
    if (!isCoursesLoading && coursesData) {
      dispatch(setCourseFavorites(coursesData.favoriteCourseDto));
    }
    if (!isNewsLoading && newsData) {
      dispatch(setNewsFavorites(newsData.myFavoriteNews));
    }
    if (!isCoursesLoading && !isNewsLoading && coursesData && newsData) {
      dispatch(setFilter("همه"));
      console.log("نمایش داده میشه");
    }
  }, [isCoursesLoading, isNewsLoading, coursesData, newsData, dispatch]);

  // Search Handler
  const handleSearch = (QueryEvent) => {
    console.log(QueryEvent.target.value);
    dispatch(setSearchQuery(QueryEvent.target.value));
  };
  const filteredResults = displayedFavorites.filter((favorites) => {
    return favorites?.courseTitle?.toLowerCase().includes(searchQuery.toLowerCase());
  });
  // const filteredResults = displayedFavorites.filter((item) => {
  //   if (item?.type === "دوره ها") {
  //     return item?.courseTitle?.toLowerCase().includes(searchQuery.toLowerCase());
  //   } else if (item?.type === "اخبارها") {
  //     return item?.newsTitle?.toLowerCase().includes(searchQuery.toLowerCase());
  //   }
  //   return false;
  // });
  console.log("filteredResults", displayedFavorites);
  // Filter Handler
  const handleCommon = (type) => {
    console.log(type);
    dispatch(setFilter(type));
  };
  // Pagination
  const changePageNumber = (pageNum) => {
    console.log(pageNum);
  };

  // const handleDelete = async (FavoritesId) => {
  //   const formData = new FormData();
  //   formData.append("CourseFavoriteId", FavoritesId);
  //   try {
  //     const response = await deleteDataApi("/Course/DeleteCourseFavorite", {
  //       data: formData,
  //     });
  //     console.log(response);
  //     console.log(FavoritesId);
  //     // toast(response.data.message);
  //     // queryClient.invalidateQueries(["allImageProfile"]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleView = (id) => {
    navigate(`/course-detail/${id}`);
    // navigate(`/article-detail/${id}`);
  };

  return (
    <div className="my-course-container mt-2.5">
      <div className="top border-b-[1px] border-gray-200 pb-5">
        <div className="sort-control flex justify-between">
          <div className="input-control w-[60%] max-md:w-full">
            <Input
              type={"text"}
              placeholder={"چی میخوای یاد بگیری؟..."}
              change={handleSearch}
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
          dataMaper={myFavoriteMockApi}
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
              onView={() => handleView(item.courseId)}
              // onDelete={() => handleDelete(item.courseId)}
              imageAddress={item.tumbImageAddress}
              titleOne={item.courseTitle}
              titleTwo={"دوره ها"}
              titleThree={item.lastUpdate}
              titleFour={item.teacheName}
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

export default Favorite;
