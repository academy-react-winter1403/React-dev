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
  articleDetailCommentSlice,
  userPanelMyCourseFilterParamsSlice,
} from "./slices";
import { themeSlice } from "./slices/themeSlice";
import { locationSlice } from "./slices/location";
// <<<<<<< HEAD
import favoritesSlice from "./slices/favoritesSlice";
import MyCommentsSlice from "./slices/MyComments";
// =======
import teachersQuerySlice from "./slices/teachersQuerySlice";
import { landingSearchSlice } from "./slices/landingSearchSlice";
//   userPanelMyCourseFilterParamsSlice
// } from "./slices";

// import { locationSlice } from "./slices/location";
// >>>>>>> b6267ed1b82df788837059dfa4276a84030a3184

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
    articlesQueryFilter: articlesQueryFilter.reducer,
    allDataArticleSlice: allDataArticleSlice.reducer,
    locationSlice: locationSlice.reducer,
    clientStatus: clientStatusSlice.reducer,
    articleDetailSlice: articleDetailSlice.reducer,
    relatedCoursesSlice: relatedCoursesSlice.reducer,
    articleDetailCommentSlice: articleDetailCommentSlice.reducer,
    theme: themeSlice.reducer,
// <<<<<<< HEAD
    favorites:favoritesSlice.reducer,
    MyComments:MyCommentsSlice.reducer,
// =======
    userPanelMyCourseFilterParamsSlice: userPanelMyCourseFilterParamsSlice.reducer,
    teachersQuery: teachersQuerySlice.reducer,
    landingSearchSlice: landingSearchSlice.reducer
// >>>>>>> b6267ed1b82df788837059dfa4276a84030a3184
  },
});
