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

export const {
    addArticleAndNewsDetailCommentData,
    addArticleAndNewsDetailCommentReply,
  } = articleDetailCommentSlice.actions;
  
  export default articleDetailCommentSlice.reducer;
  

// import { createSlice } from "@reduxjs/toolkit";

// export const articleDetailCommentSlice = createSlice({
//     name: "articleAndNewDetailComment",

//     initialState: {
//         articleAndNewDetailComment: false,
//     },
//     reducers: {
//         addArticleAndNewsDetailCommentData: (state, action) => {
//             state.articleAndNewDetailComment = action.payload;
//         },
//     },
// });


// export const { addArticleAndNewsDetailCommentData } = articleDetailCommentSlice.actions;

// export default articleDetailCommentSlice.reducer;
