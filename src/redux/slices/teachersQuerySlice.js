import { createSlice } from "@reduxjs/toolkit";

const teachersQuerySlice = createSlice({
  name: "teachersQuery",
  initialState: {
    query: "",
  },
  reducers: {
    changeTeachersQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { changeTeachersQuery } = teachersQuerySlice.actions;
export default teachersQuerySlice;
