import {
  changeCostDown,
  changeCostUp,
  changeCourseLevelId,
  changeCourseTypeId,
  changePageNumber,
  changeQuery,
  changeRowOfPageNum,
  changeSortingCol,
  changeSortType,
  changeTechnologiCount,
  changeTechnologiList,
} from "../../redux/actions";

export const updateCourseQueryState = (
  searchParams,
  dispatch,
  productStateb,
  paramsArray
) => {
  let paramsValue;
  paramsArray.map((paramsItem) => {
    paramsValue = searchParams.get(paramsItem);
    if (paramsValue) {
      if (paramsItem === "Query") {
        dispatch(changeQuery(paramsValue));
      }
      if (paramsItem === "PageNumber") {
        dispatch(changePageNumber(paramsValue));
      }
    }

    // paramsItem === "PageNumber" ? dispatch(changePageNumber(paramsValue)) : ""
    //     paramsItem === "RowsOfPage" ? dispatch(changeRowOfPageNum(paramsValue)) : ""
    //     paramsItem === "SortingCol" ? dispatch(changeSortingCol(paramsValue)) : ""
    //     paramsItem === "SortType" ? dispatch(changeSortType(paramsValue)) : ""
    //     paramsItem === "CostDown" ? dispatch(changeCostDown(paramsValue)) : ""
    //     paramsItem === "CostUp" ? dispatch(changeCostUp(paramsValue)) : ""
    //     paramsItem === "TechCount" ? dispatch(changeTechnologiCount(paramsValue)) : ""
    //     paramsItem === "ListTech" ? dispatch(changeTechnologiList(paramsValue)) : ""
    //     paramsItem === "courseLevelId" ? dispatch(changeCourseLevelId(paramsValue)) : ""
    //     paramsItem === "CourseTypeId" ? dispatch(changeCourseTypeId(paramsValue)) : ""
  });
};
