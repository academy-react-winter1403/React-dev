import { createSlice } from "@reduxjs/toolkit";

export const userPanelMyCourseFilterParamsSlice = createSlice({
  name: "userPanelMyCourseFilterParams",

  initialState: {
    PageNumber: 1,
    RowsOfPage: 10,
    SortingCol: "DESC",
    SortType: "LastUpdate",
    Query: null,
  },

  reducers: {
    changeCourseReservedPageNumber: (state, action) => {
      state.PageNumber = action.payload;
    },
    changeCourseReservedRowsOfPage: (state, action) => {
      state.RowsOfPage = action.payload;
    },
    changeCourseReservedSortingCol: (state, action) => {
      state.SortingCol = action.payload;
    },
    changeCourseReservedSortType: (state, action) => {
      state.SortType = action.payload;
    },
    changeCourseReservedQuery: (state, action) => {
      state.Query = action.payload;
    },
  },
});
