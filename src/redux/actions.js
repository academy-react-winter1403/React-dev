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
  articleDetailSlice,
  relatedCoursesSlice
} from "./slices";

export const { firstAddCourseProduct } = coursesSlice.actions;
export const { addCourseDetailData } = courseDetailSlice.actions;
export const { addCourseDetailCommentData, addCourseCommentReplay } = courseCommentSlice.actions;
export const { addArticleData } = articleSlice.actions;
export const { changeAddDataFlag, changeQueryFlag } = coursesFlagsSlice.actions;
export const { changeCoursesPageCounter } = coursesPageCounterSlice.actions;
export const { changeDarkModKey } = dorkModeSlice.actions;
export const { addFirstFilterData } = filterDataSlice.actions;
export const { changeSortText } = coursesSortSlice.actions;
export const { addArticleAndNewsDetailData } = articleDetailSlice.actions;
export const { addRelatedCoursesData } = relatedCoursesSlice.actions

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
  // addArticleData
} = coursesQueryParams.actions;
