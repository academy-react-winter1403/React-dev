import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
  name: "articleAndNewDetailData",

  initialState: {
    articleAndNewDetailData: false,
  },

  reducers: {
    addArticleAndNewsDetailData: (state, action) => {
      state.articleAndNewDetailData = action.payload;
    },
  },
});
