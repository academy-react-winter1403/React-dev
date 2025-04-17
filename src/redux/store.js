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
  articlesQueryFilter,
  allDataArticleSlice
} from "./slices";
// import allDataArticleSlice from "./slices/allDataArticleSlice";

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
    articlesQueryFilter:articlesQueryFilter.reducer,
    allDataArticleSlice:allDataArticleSlice.reducer,
  },
});