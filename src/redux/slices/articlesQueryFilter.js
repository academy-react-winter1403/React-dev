import { createSlice } from "@reduxjs/toolkit";

export const articlesQueryFilter = createSlice({
  name: "QueryParamsFilter",
  initialState: {
    PageNumber: 1,
    RowsOfPage: 6,
    SortingCol: "InsertDate",
    SortType: "ACS",
    Query: null,
  },
  reducers: {
    changePageNumber:(state,action) => {
        state.PageNumber = action.payload
    },
    changeRowsOfPage:(state,action) => {
        state.RowsOfPage = action.payload
    },
    changeSortingCol:(state,action) => {
        state.SortingCol = action.payload
    },
    changeSortTypeArticles:(state,action) => {
        state.SortType = action.payload
    },
    changeQueryArticles:(state,action) => {
        state.Query = action.payload
    }
  },
});
