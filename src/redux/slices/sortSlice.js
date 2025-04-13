import { createSlice } from "@reduxjs/toolkit";

export const coursesSortSlice = createSlice({
  name: "sort",

  initialState: {
    sortText: " جدیدترین ها ",
  },

  reducers: {
    changeSortText: (state, action) => {
      state.coursesData.sortText = action.payload;
    },
  },
});
