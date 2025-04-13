import { createSlice } from "@reduxjs/toolkit";

export const dorkModeSlice = createSlice({
  name: "dorkMode",

  initialState: {
    darkModKey: false,
  },

  reducers: {
    changeDarkModKey: (state, action) => {
      state.darkModKey = action.payload;
    },
  },
});
