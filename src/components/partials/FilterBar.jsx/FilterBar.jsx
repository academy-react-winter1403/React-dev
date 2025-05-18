import React from "react";
import SortingCol from "../../pages/ArticlesAndNews/Sorting-Articles/SortingCol";
import { sortingArticlesNews } from "./../../../core/constants/articlesMockApi/sort_data";
import { viewDataArticles } from "../../../core/constants/articlesMockApi/view-data-articles";
import { sortColData } from "../../../core/constants";
import SelectView from "../../pages/courses/SelectView";
import SortTypeCard from "../../common/SortTypeCard";
import { useDispatch } from "react-redux";
import { changeRowsOfPage, changeSortingCol, changeSortTypeArticles } from "../../../redux/actions";

const FilterBar = () => {
    const dispatch = useDispatch();
      const viewClickHandler = (viewEvent) => {
// <<<<<<< HEAD
        // console.log(viewEvent);
        dispatch(changeRowsOfPage(viewEvent));
// =======
        console.log(viewEvent);
        // if (viewEvent === 6) {
        //   dispatch(changeRowsOfPage(6));
        // }
        // if (viewEvent === 9) {
        //   dispatch(changeRowsOfPage(9));
        // }
        // if (viewEvent === 12) {
        //   dispatch(changeRowsOfPage(12));
        // }
        // dispatch(changeRowsOfPage(viewEvent))
// >>>>>>> bfddc3b24ca4ff50f06f1eb483129d175a014749
      };
      const sortTypeChangeHandler = (sortTypeEvent) => {
        // console.log(sortTypeEvent);
        if (sortTypeEvent === "صعودی") {
          dispatch(changeSortTypeArticles("ASC"));
        }
        if (sortTypeEvent === "نزولی") {
          dispatch(changeSortTypeArticles("DESC"));
        }
      };
      const sortChangeHandler = (sortEvent) => {
        // console.log(sortEvent);
        if (sortEvent === "جدیدترین") {
          dispatch(changeSortingCol("Active"));
        }
        if (sortEvent === "پرطرفدارترین") {
          dispatch(changeSortingCol("InsertDate"));
        }
      };
  return (
    <>
      <SortingCol dataMap={sortingArticlesNews} onChange={sortChangeHandler} />
      <SelectView
// <<<<<<< HEAD
        placeholder={"آتیم 6"}
// =======
        // placeholder={" 6 "}
// {/* >>>>>>> bfddc3b24ca4ff50f06f1eb483129d175a014749 */}
        dataMap={viewDataArticles}
        concatText={"آیتم"}
        viewClick={viewClickHandler}
      />
      <SortTypeCard dataMap={sortColData} onChange={sortTypeChangeHandler} placeholder={"نزولی"}/>
    </>
  );
};

export default FilterBar;
