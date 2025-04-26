import { createSlice } from "@reduxjs/toolkit";

export const articleDetailSlice = createSlice({
  name: "articleAndNewDetailData",

  initialState: {
    articleAndNewDetailData: false,
  },

  reducers: {
    addArticleAndNewsDetailData: (state, action) => {
      state.articleAndNewDetailData = action.payload;
    }
  },
});
