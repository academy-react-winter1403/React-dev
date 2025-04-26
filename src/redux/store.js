import { configureStore } from "@reduxjs/toolkit";
import {
  courseCommentSlice,
  courseDetailSlice,
  coursesPageCounterSlice,
  coursesSlice,
  filterDataSlice,
  coursesFlagsSlice,
  coursesSortSlice,
  coursesQueryParams,
  userProfileInfoSlice,
  latestSserPanelNewsSlice,
  suggested1courseUserPanel,
  courseActivedDataUserPanel,
  courseReserved,
  myCoursesUserPanel,
  clientStatusSlice,
  articleDetailSlice,
  relatedCoursesSlice,
  articlesQueryFilter,
  allDataArticleSlice,
  articleDetailCommentSlice
} from "./slices";

import { locationSlice } from "./slices/location";

export const store = configureStore({
  reducer: {
    courses: coursesSlice.reducer,
    courseDetail: courseDetailSlice.reducer,
    courseFilterData: filterDataSlice.reducer,
    coursesPageCounter: coursesPageCounterSlice.reducer,
    coursesFlags: coursesFlagsSlice.reducer,
    courseComment: courseCommentSlice.reducer,
    coursesSort: coursesSortSlice.reducer,
    courseQueryParams: coursesQueryParams.reducer,
    userProfileInfo: userProfileInfoSlice.reducer,
    latestSserPanelNews: latestSserPanelNewsSlice.reducer,
    suggestedCourseUserPanel: suggested1courseUserPanel.reducer,
    courseActivedDataUserPanel: courseActivedDataUserPanel.reducer,
    courseReserved: courseReserved.reducer,
    myCourseUserPanel: myCoursesUserPanel.reducer,
    articlesQueryFilter:articlesQueryFilter.reducer,
    allDataArticleSlice:allDataArticleSlice.reducer,
    locationSlice:locationSlice.reducer,
    clientStatus: clientStatusSlice.reducer,
    articleDetailSlice: articleDetailSlice.reducer,
    relatedCoursesSlice : relatedCoursesSlice.reducer,
    articleDetailCommentSlice : articleDetailCommentSlice.reducer
  },
});
