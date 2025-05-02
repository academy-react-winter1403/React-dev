import { createSlice } from "@reduxjs/toolkit";

export const coursesFlagsSlice = createSlice({
  name: "coursesFlags",

  initialState: {
    addDataFlag: false,
    queryFlag: false,
    filterBoxFlag: false
  },

  reducers: {
    changeAddDataFlag: (state, action) => {
      state.addDataFlag = action.payload;
    },
    changeQueryFlag: (state, action) => {
      state.queryFlag = action.payload;
    },
    changeFilterBoxFlag: (state, action) => {
      state.filterBoxFlag = action.payload
    }
  },
});
