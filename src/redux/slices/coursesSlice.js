import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
  name: "coursesSlice",

  initialState: {
    productState: null,
  },

  reducers: {
    firstAddCourseProduct: (state, action) => {
      state.productState = action.payload;
    },
  },
});

export default coursesSlice;