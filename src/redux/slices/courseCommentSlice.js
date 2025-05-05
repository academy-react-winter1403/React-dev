import { createSlice } from "@reduxjs/toolkit";

export const courseCommentSlice = createSlice({
  name: "courseComment",

  initialState: {
    commentDataFlag: false,
    commentData: null,
    commentReplay: null,
  },

  reducers: {
    changeCommentDataFlag: (state, action) => {
      state.commentDataFlag = action.payload
    },
    addCourseDetailCommentData: (state, action) => {
      state.commentData = action.payload;
    },
    addCourseCommentReplay: (state, action) => {
      state.commentReplay = action.payload
    },
  },
});
