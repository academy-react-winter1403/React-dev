import { createSlice } from "@reduxjs/toolkit";

const allDataArticleSlice = createSlice({
  name: "allDataArticleSlice",

  initialState: {
    articleState: [],
    totalCount:15
  },

  reducers: {
    firstAddArticleProduct: (state, action) => {
      state.articleState = action.payload.data;
      state.totalCount = action.payload.totalCount;
    },
  },
});

export default allDataArticleSlice;