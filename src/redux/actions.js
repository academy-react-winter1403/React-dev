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
  articlesQueryFilter,
  allDataArticleSlice,
  clientStatusSlice,
  articleDetailSlice,
  relatedCoursesSlice,
  articleDetailCommentSlice,
  userPanelMyCourseFilterParamsSlice,
} from "./slices";
import favoritesSlice from "./slices/favoritesSlice";
import { landingSearchSlice } from "./slices/landingSearchSlice";
import { locationSlice } from "./slices/location";
import MyCommentsSlice from "./slices/MyComments";
import { themeSlice } from "./slices/themeSlice";
export const { firstAddCourseProduct } = coursesSlice.actions;
export const { addCourseDetailData } = courseDetailSlice.actions;
export const { addArticleData } = articleSlice.actions;

// course comment actions
export const {
  addCourseDetailCommentData,
  addCourseCommentReplay,
  changeCommentLikeCounter,
  changeCommentDislikeCounter,
  changeReplayLikeCounter,
  changeReplayDisLikeCounter,
  changeCommentDB,
  changeCommentDataFlag,
} = courseCommentSlice.actions;
// course comment actions

export const {
  changeAddDataFlag,
  changeQueryFlag,
  changeFilterBoxFlag,
  changeViewFlag,
} = coursesFlagsSlice.actions;
export const { changeCoursesPageCounter } = coursesPageCounterSlice.actions;
export const { changeDarkModKey } = dorkModeSlice.actions;
export const { addFirstFilterData } = filterDataSlice.actions;
export const { changeSortText } = coursesSortSlice.actions;
export const {
  addUserProfileInfoData,
  addSelectImageProfile,
  addAllImageData,
  addImageProfile,
} = userProfileInfoSlice.actions;
export const { addLatestSserPanelNewsSlice } = latestSserPanelNewsSlice.actions;
export const { addSuggestedCourseUserPanel } =
  suggested1courseUserPanel.actions;
export const { addCourseActivedDataUserPanel, changeCourseActivedTatolCount } =
  courseActivedDataUserPanel.actions;
export const { addDataTheCourseReserved } = courseReserved.actions;
export const { addMyCourse } = myCoursesUserPanel.actions;
export const { changeClientStatus } = clientStatusSlice.actions;
export const { addArticleAndNewsDetailData } = articleDetailSlice.actions;
export const { addRelatedCoursesData } = relatedCoursesSlice.actions;
export const { firstAddArticleProduct } = allDataArticleSlice.actions;
export const {
  addArticleAndNewsDetailCommentData,
  addArticleAndNewsDetailCommentReply,
  changeArticleCommentFlag,
} = articleDetailCommentSlice.actions;
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
  changeCoursesSortingCol,
} = coursesQueryParams.actions;
export const {
  changePageNumber,
  changeRowsOfPage,
  changeSortingCol,
  changeSortTypeArticles,
  changeQueryArticles,
} = articlesQueryFilter.actions;
export const { SelectLatitude, SelectLongitude } = locationSlice.actions;
export const {
  setNewsFavorites,
  setCourseFavorites,
  setFilter,
  setSearchQuery,
} = favoritesSlice.actions;
export const {
  setNewsComments,
  setCourseComments,
  setFilterComments,
  setSearchComments,
} = MyCommentsSlice.actions;

export const { setMode } = themeSlice.actions;

// user panel actions
export const {
  changeCourseReservedPageNumber,
  changeCourseReservedQuery,
  changeCourseReservedRowsOfPage,
  changeCourseReservedSortType,
  changeCourseReservedSortingCol
} = userPanelMyCourseFilterParamsSlice.actions;
// user panel actions

// landing actions
export const {
  addDataToLandingSearchDataState,
  changeLandingSearchFlag,
  changeLandingSearchKey,
  changeLandingSearchUrl,
  changeLandingQuery,
  changeStartSearchFlag,
  changeSearchBoxFlag
} = landingSearchSlice.actions;
