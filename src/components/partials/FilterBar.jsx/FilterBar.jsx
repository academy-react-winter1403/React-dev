import React from "react";
import SortingCol from "../../pages/ArticlesAndNews/Sorting-Articles/SortingCol";
import { sortingArticlesNews, sortingArticlesNews2 } from "./../../../core/constants/articlesMockApi/sort_data";
import { viewDataArticles } from "../../../core/constants/articlesMockApi/view-data-articles";
import { sortColData } from "../../../core/constants";
import SelectView from "../../pages/courses/SelectView";
import SortTypeCard from "../../common/SortTypeCard";
import { useDispatch } from "react-redux";
import {
  changeRowsOfPage,
  changeSortingCol,
  changeSortTypeArticles,
} from "../../../redux/actions";
import { useTranslation } from "react-i18next";

const FilterBar = () => {
  const dispatch = useDispatch();
  const viewClickHandler = (viewEvent) => {
    dispatch(changeRowsOfPage(viewEvent));
  };
  const sortTypeChangeHandler = (sortTypeEvent) => {
    if (sortTypeEvent === "صعودی") {
      dispatch(changeSortTypeArticles("ASC"));
    }
    if (sortTypeEvent === "نزولی") {
      dispatch(changeSortTypeArticles("DESC"));
    }
  };
  const sortChangeHandler = (sortEvent) => {
    if (sortEvent === "جدیدترین") {
      dispatch(changeSortingCol("Active"));
    }
    if (sortEvent === "پرطرفدارترین") {
      dispatch(changeSortingCol("InsertDate"));
    }
  };

  const { t } = useTranslation();
  const getSortColData = sortColData(t);
  return (
    <>
      <SortingCol  dataMap={sortingArticlesNews2(t)}  onChange={sortChangeHandler} />
      <SelectView
        placeholder={" 6"}
        dataMap={viewDataArticles}
        concatText={t("items")}
        viewClick={viewClickHandler}
      />
      <SortTypeCard
        dataMap={getSortColData}
        onChange={sortTypeChangeHandler}
        // placeholder={"نزولی"}
        placeholder={t("Ascending")}
      />
    </>
  );
};

export default FilterBar;
