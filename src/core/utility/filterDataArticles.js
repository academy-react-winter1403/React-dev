// import { ArticlesNews } from "../../redux/actions";
// import { htttp } from "../services/interceptor"

// export const filterDataArticles = (searchParams,dispatch) => {
//     const PaginationNumber = localStorage.getItem("PaginationNumber")
//     const SearchArticles = localStorage.getItem("SearchArticles")
//     const sortArticle = localStorage.getItem("sortArticle")
//     const handler = async (params) => {

//       if(SearchArticles){
//         params.set("Query" , SearchArticles)
//       }
//       else{
//         params.set("Query","")
//       }
//       if (sortArticle) {
//         if (sortArticle === "جدید ترین") {
//          params.set("SortingCol" , "insertDate")
//         }
//         else if (sortArticle === "پرطرفدار ترین") {
//          params.set("SortingCol" , "currentLikeCount") 
//         }
//       }

//         dispatch(ArticlesNews(null))
//         const data = await htttp.get(
//           `/News?PageNumber=${PaginationNumber}&RowsOfPage=6&SortType=DESC&
//           ${sortArticle ? `&SortingCol=${params.get("SortingCol")}` : ''}&
//           ${SearchArticles && SearchArticles !== '' ? `&Query=${SearchArticles}` : ''}&`
//         )
//         console.log(data.data.news)
//         // dispatch(ArticlesNews(data.data.news))
//     }
//     searchParams((params) => {
//       handler(params)
//       return params
//     })
// }
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
