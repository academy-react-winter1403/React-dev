import { createSlice } from "@reduxjs/toolkit";

export const courseCommentSlice = createSlice({
  name: "courseComment",

  initialState: {
    commentData: null,
    commentReplay: null
  },

  reducers: {
    addCourseDetailCommentData: (state, action) => {
      state.commentData = action.payload;
    },
    addCourseCommentReplay: (state, action) => {
      state.commentReplay = action.payload
    }
  },
});
