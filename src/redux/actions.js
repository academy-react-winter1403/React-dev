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
  allDataArticleSlice
} from "./slices";

export const { firstAddCourseProduct } = coursesSlice.actions;
export const { addCourseDetailData } = courseDetailSlice.actions;
export const { addArticleData } = articleSlice.actions;
export const { addCourseDetailCommentData, addCourseCommentReplay } =
  courseCommentSlice.actions;
export const { changeAddDataFlag, changeQueryFlag } = coursesFlagsSlice.actions;
export const { changeCoursesPageCounter } = coursesPageCounterSlice.actions;
export const { changeDarkModKey } = dorkModeSlice.actions;
export const { addFirstFilterData } = filterDataSlice.actions;
export const { changeSortText } = coursesSortSlice.actions;
export const { addUserProfileInfoData } = userProfileInfoSlice.actions
export const { addLatestSserPanelNewsSlice } = latestSserPanelNewsSlice.actions
export const { addSuggestedCourseUserPanel } = suggested1courseUserPanel.actions
export const { addCourseActivedDataUserPanel } = courseActivedDataUserPanel.actions
export const { addDataTheCourseReserved } = courseReserved.actions
export const { addMyCourse } = myCoursesUserPanel.actions
export const { changeClientStatus } = clientStatusSlice.actions
export const { addArticleAndNewsDetailData } = articleDetailSlice.actions;
export const { addRelatedCoursesData } = relatedCoursesSlice.actions
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
  changePageCounter,
} = coursesQueryParams.actions;
export const {
  changePageNumber,
  changeRowsOfPage,
  changeSortingCol,
  changeSortTypeArticles,
  changeQueryArticles,
} = articlesQueryFilter.actions;
