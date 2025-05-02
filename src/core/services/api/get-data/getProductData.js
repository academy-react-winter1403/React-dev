import { useQuery } from "react-query";
import { htttp } from "../../interceptor";

export const getProductData = (key, endUrl, queryParams) => {
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

  // console.log(queryParams);

  return useQuery({
    queryKey: key,
    queryFn: async () => {
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
      return data.data;
    }
  });
};
