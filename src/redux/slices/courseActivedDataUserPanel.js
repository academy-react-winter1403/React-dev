import { createSlice } from "@reduxjs/toolkit";

export const courseActivedDataUserPanel = createSlice({
  name: "courseActivedUserPanel",

  initialState: {
    courseActivedData: [],
    courseActivedTotalCount: null,
  },

  reducers: {
    addCourseActivedDataUserPanel: (state, action) => {
      state.courseActivedData = action.payload;
    },
    changeCourseActivedTatolCount: (state, action) => {
      state.courseActivedTotalCount = action.payload;
    }
  },
});
