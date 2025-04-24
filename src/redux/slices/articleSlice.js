import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
  name: "articleData",

  initialState: {
    articleData: false,
  },

  reducers: {
    addArticleData: (state, action) => {
      state.articleData = action.payload;
    },
  },
});
