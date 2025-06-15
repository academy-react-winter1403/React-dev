import { createSlice } from "@reduxjs/toolkit";

export const articleDetailCommentSlice = createSlice({
    name: "articleAndNewDetailComment",

    initialState: {
        articleAndNewDetailComment: null,
        articleAndNewDetailCommentReply: null,
        articleCommentFlag: false,
    },
  
    reducers : {
        addArticleAndNewsDetailCommentData: (state, action) => {
            state.articleAndNewDetailComment = action.payload
          },
          addArticleAndNewsDetailCommentReply: (state, action) => {
            state.articleAndNewDetailCommentReply = action.payload
          },
          changeArticleCommentFlag: (state, action) => {
            state.articleCommentFlag = action.payload
          }
    }
})