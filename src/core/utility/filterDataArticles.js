import { htttp } from "../services/interceptor";

export const filterDataArticles = async ({
  PageNumber,
  RowsOfPage,
  SortingCol,
  SortType,
  Query,
}) => {
  const response = await htttp.get("/News", {
    params: {
      PageNumber,
      RowsOfPage,
      SortingCol,
      SortType,
      Query,
    },
  });
  console.log(response.data.totalCount);
  console.log(response.data.news);
  return { 
    data: response.data.news,
    totalCount: response.data.totalCount
  };
};
