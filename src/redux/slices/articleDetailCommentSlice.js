import { createSlice } from "@reduxjs/toolkit";

export const articleDetailCommentSlice = createSlice({
    name: "articleAndNewDetailComment",

    initialState: {
        articleAndNewDetailComment: null,
        articleAndNewDetailCommentReply: null
    },
  
    reducers : {
        addArticleAndNewsDetailCommentData: (state, action) => {
            state.articleAndNewDetailComment = action.payload
          },
          addArticleAndNewsDetailCommentReply: (state, action) => {
            state.articleAndNewDetailCommentReply = action.payload
          }
    }
})