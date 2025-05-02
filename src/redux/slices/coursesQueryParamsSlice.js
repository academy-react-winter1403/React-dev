import { createSlice } from "@reduxjs/toolkit";

export const coursesQueryParams = createSlice({
  name: "queryParams",

  initialState: {
    PageNumber: 1,
    RowsOfPage: 6,
    SortingCol: "Active",
    SortType: "DESC",
    Query: null,
    CostDown: 0,
    CostUp: 100000000,
    TechCount: undefined,
    ListTech: null,
    courseLevelId: null,
    CourseTypeId: null,
    TeacherId: null,
  },

  reducers: {
    changePageCounter: (state, action) => {
      state.PageNumber = action.payload
    },
    changeRowOfPageNum: (state, action) => {
      state.RowsOfPage = action.payload;
    },
    changeQuery: (state, action) => {
      state.Query = action.payload;
    },
    changeCourseTypeId: (state, action) => {
      state.CourseTypeId = action.payload;
    },
    changeCourseLevelId: (state, action) => {
      state.courseLevelId = action.payload;
    },
    // changeEndDate: (state, action) => {
    //   state.EndDate = action.payload;
    // },
    changeCostDown: (state, action) => {
      state.CostDown = action.payload;
    },
    changeCostUp: (state, action) => {
      state.CostUp = action.payload;
    },
    changeTechnologiList: (state, action) => {
      state.ListTech = action.payload;
    },
    changeTechnologiCount: (state, action) => {
      state.TechCount = action.payload;
    },
    changeSortType: (state, action) => {
      state.SortType = action.payload
    },
    changeCoursesSortingCol: (state, action) => {
      state.SortingCol = action.payload
    }
  },
});
