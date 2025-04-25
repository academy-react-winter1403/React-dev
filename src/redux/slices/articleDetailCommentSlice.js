// import { createSlice } from "@reduxjs/toolkit";

// export const articleDetailCommentSlice = createSlice({
//     name: "articleAndNewDetailComment",

//     initialState: {
//         articleAndNewDetailComment: false,
//     },
  
//     reducers : {
//         addArticleAndNewsDetailCommentData: (state, action) => {
//             state.articleAndNewDetailComment = action.payload
//           }
//     }
// })

import { createSlice } from "@reduxjs/toolkit";

export const articleDetailCommentSlice = createSlice({
    name: "articleAndNewDetailComment",
    initialState: {
        articleAndNewDetailComment: false,
    },
    reducers: {
        addArticleAndNewsDetailCommentData: (state, action) => {
            state.articleAndNewDetailComment = action.payload;
        },
    },
});


export const { addArticleAndNewsDetailCommentData } = articleDetailCommentSlice.actions;

export default articleDetailCommentSlice.reducer;
