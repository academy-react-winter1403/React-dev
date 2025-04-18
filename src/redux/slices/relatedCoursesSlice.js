import { createSlice } from "@reduxjs/toolkit";

export const relatedCoursesSlice = createSlice({
  name: "relatedCoursesData",

  initialState: {
    relatedCoursesData: null,
  },

  reducers: {
    addRelatedCoursesData: (state, action) => {
      state.relatedCoursesData = action.payload;
    },
  },
});
