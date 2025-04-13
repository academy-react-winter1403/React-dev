import { createSlice } from "@reduxjs/toolkit";

export const coursesPageCounterSlice = createSlice({
  name: "coursePageCount",

  initialState: {
    pageCount: 1,
  },

  reducers: {
    changeCoursesPageCounter: (state, action) => {
      state.pageCount = action.payload;
    },
  },
});
