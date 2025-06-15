import { useMutation } from "react-query";
import { htttp } from "../../interceptor";

export const getCourseDataByClick = (key) => {
  return useMutation({
    mutationKey: key,
    mutationFn: async (data) => {
      const [endUrl, searchParams] = data;
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
      } = searchParams;

      console.log(searchParams)

      let response;
      if (Query !== "") {
        response = await htttp.get(endUrl, {
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
            TeacherId,
          },
        });
      }else {
        response = await htttp.get(endUrl, {
          params: {
            PageNumber,
            RowsOfPage,
            SortingCol,
            SortType,
            CostDown,
            CostUp,
            TechCount,
            ListTech,
            courseLevelId,
            CourseTypeId,
            TeacherId,
          },
        });
      }
      return response.data
    },
  });
};
