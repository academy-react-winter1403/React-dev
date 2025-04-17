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
  articleDetailSlice,
  relatedCoursesSlice
} from "./slices";

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
    articleDetailSlice: articleDetailSlice.reducer,
    relatedCoursesSlice : relatedCoursesSlice.reducer
  },
});
