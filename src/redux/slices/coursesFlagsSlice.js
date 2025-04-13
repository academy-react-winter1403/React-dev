import { createSlice } from "@reduxjs/toolkit";

export const coursesFlagsSlice = createSlice({
  name: "coursesFlags",

  initialState: {
    addDataFlag: false,
    queryFlag: false,
  },

  reducers: {
    changeAddDataFlag: (state, action) => {
      state.addDataFlag = action.payload;
    },
    changeQueryFlag: (state, action) => {
      state.flags.coursesFlag.queryFlag = action.payload;
    },
  },
});
