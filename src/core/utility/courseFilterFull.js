import { firstAddCourseProduct } from "../../redux/actions";
import { getDataByClick } from "../services/api/get-data-by-click/getDataByClick";
import { htttp } from "../services/interceptor";

// const { mutateAsync: getFilteData } = getDataByClick()
export const courseFilterFull = async (endUrl, queryParams, dispatch) => {
  console.log(queryParams);

  dispatch(firstAddCourseProduct(null))
  const data = await htttp.get(
    `/Home/GetCoursesWithPagination?PageNumber=${
      queryParams.PageNumber
    }&RowsOfPage=${queryParams.RowsOfPage}&
    ${`&SortingCol=${queryParams.SortingCol}`}&
    ${`&Query=${queryParams.Query}`}&
    ${`ListTech=${queryParams.ListTech}`}&
    ${`courseLevelId=${queryParams.courseLevelId}`}&
    ${`CourseTypeId=${queryParams.CourseTypeId}`}`
  );
  dispatch(firstAddCourseProduct(data.data.courseFilterDtos))
  return data;
};
