import {
  coursesSlice,
  courseDetailSlice,
  coursesPageCounterSlice,
  courseCommentSlice,
  articleSlice,
  coursesFlagsSlice,
  dorkModeSlice,
  filterDataSlice,
  coursesSortSlice,
  coursesQueryParams,
  articlesQueryFilter,
  allDataArticleSlice
} from "./slices";
// import allDataArticleSlice from "./slices/allDataArticleSlice";
// import { articlesQueryFilter } from "./slices/ArticlesQueryFilter";

export const { firstAddCourseProduct } = coursesSlice.actions;
export const { addCourseDetailData } = courseDetailSlice.actions;
export const { addCourseDetailCommentData, addCourseCommentReplay } =
  courseCommentSlice.actions;
export const { addArticleAndNewsDetailData } = articleSlice.actions;
export const { changeAddDataFlag, changeQueryFlag } = coursesFlagsSlice.actions;
export const { changeCoursesPageCounter } = coursesPageCounterSlice.actions;
export const { changeDarkModKey } = dorkModeSlice.actions;
export const { addFirstFilterData } = filterDataSlice.actions;
export const { changeSortText } = coursesSortSlice.actions;
export const { firstAddArticleProduct } = allDataArticleSlice.actions
export const {
  changeQuery,
  changeRowOfPageNum,
  changeCostDown,
  changeCostUp,
  changeCourseLevelId,
  changeCourseTypeId,
  changeEndDate,
  changeTechnologiList,
  changeTechnologiCount,
  changeSortType,
} = coursesQueryParams.actions;
export const {
  changePageNumber,
  changeRowsOfPage,
  changeSortingCol,
  changeSortTypeArticles,
  changeQueryArticles,
} = articlesQueryFilter.actions;