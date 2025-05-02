import { htttp } from "../services/interceptor";

export const courseFilterFull = async (
  endUrl,
  queryParams,
  dispatch,
  productState,
  setSearchParams
) => {
  dispatch(productState(null));
  const {
    PageNumber,
    RowsOfPage,
    SortingCol,
    SortType,
    Query,
    CostDown,
    CostUp,
    TechCount,
    ListTech,
    courseLevelId,
    CourseTypeId,
    TeacherId,
  } = queryParams;

  const paramsArray = [
    PageNumber,
    RowsOfPage,
    SortingCol,
    SortType,
    Query,
    CostDown,
    CostUp,
    TechCount,
    ListTech,
    courseLevelId,
    CourseTypeId,
    TeacherId,
  ];

  const data = await htttp.get(endUrl, {
    params: {
      PageNumber,
      RowsOfPage,
      SortingCol,
      SortType,
      Query,
      CostDown,
      CostUp,
      TechCount,
      ListTech,
      courseLevelId,
      CourseTypeId,
    },
  });

  dispatch(productState(data.data.courseFilterDtos));
  return data;
};
