import { createSlice } from "@reduxjs/toolkit";

export const queryFlagSlice = createSlice({
  name: "queryFlag",

  initialState: {
    queryFlag: false,
  },

  reducers: {
    changeQueryFlag: (state, action) => {
      state.flags.coursesFlag.queryFlag = action.payload;
    },
  },
});