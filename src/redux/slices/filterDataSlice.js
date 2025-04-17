import { createSlice } from "@reduxjs/toolkit";

export const filterDataSlice = createSlice({
  name: "fiterData",

  initialState: {
    filterData: [
      {
        filterTitle: "تکنولوژی",
        filterChildren: [],
      },
      {
        filterTitle: "وضعیت",
        filterChildren: [],
      },
      {
        filterTitle: "سطح",
        filterChildren: [],
      },
      {
        filterTitle: "قیمت",
      },
    ],
  },

  reducers: {
    addFirstFilterData: (state, action) => {
      if (action.payload.type === "technologi") {
        state.filterData[0].filterChildren = action.payload.data;
      }
      if (action.payload.type === "courseTypes") {
        state.filterData[1].filterChildren = action.payload.data;
      }
      if (action.payload.type === "courseLevel") {
        state.filterData[2].filterChildren = action.payload.data;
      }
    },
  },
});