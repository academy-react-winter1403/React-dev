import { createSlice } from "@reduxjs/toolkit";

export const coursesQueryParams = createSlice({
  name: "queryParams",

  initialState: {
    // queryParams: {},
    PageNumber: 1,
    RowsOfPage: 13,
    SortingCol: "Active",
    SortType: "DESC",
    Query: undefined,
    CostDown: 2,
    CostUp: 1000000000,
    TechCount: 2,
    ListTech: null,
    courseLevelId: undefined,
    CourseTypeId: undefined,
    TeacherId: null,
  },

  reducers: {
    changePageCounter: (state, action) => {
      state.PageNumber = action.payload
    },
    changeRowOfPageNum: (state, action) => {
      state.RowsOfPage = action.payload;
      // state.queryParams = { ...state.queryParams, RowsOfPage: action.payload };
    },
    changeQuery: (state, action) => {
      state.Query = action.payload;
      // state.queryParams = { ...state.queryParams, Query: action.payload };
    },
    changeCourseTypeId: (state, action) => {
      state.CourseTypeId = action.payload;
      // state.queryParams = {
      //   ...state.queryParams,
      //   CourseTypeId: action.payload,
      // };
    },
    changeCourseLevelId: (state, action) => {
      state.courseLevelId = action.payload;
      // state.queryParams = {
      //   ...state.queryParams,
      //   courseLevelId: action.payload,
      // };
    },
    changeEndDate: (state, action) => {
      state.EndDate = action.payload;
      // state.queryParams = { ...state.queryParams, EndDate: action.payload };
    },
    changeCostDown: (state, action) => {
      state.CostDown = action.payload;
      // state.queryParams = { ...state.queryParams, CostDown: action.payload };
    },
    changeCostUp: (state, action) => {
      state.CostUp = action.payload;
      // state.queryParams = { ...state.queryParams, CostUp: action.payload };
    },
    changeTechnologiList: (state, action) => {
      state.ListTech = action.payload;
      // state.queryParams = { ...state.queryParams, ListTech: action.payload };
    },
    changeTechnologiCount: (state, action) => {
      state.TechCount = action.payload;
      // state.queryParams = { ...state.queryParams, TechCount: action.payload };
    },
    changeSortType: (state, action) => {
      state.SortType = action.payload
    }
  },
});
