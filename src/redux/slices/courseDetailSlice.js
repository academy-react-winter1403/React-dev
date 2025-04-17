import { createSlice } from "@reduxjs/toolkit";

export const courseDetailSlice = createSlice({
  name: "courseDetailSlice",

  initialState: {
    detailData: null,
  },

  reducers: {
    addCourseDetailData: (state, action) => {
      state.detailData = action.payload;
    },
  },
});
