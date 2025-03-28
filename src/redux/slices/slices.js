import { createSlice } from "@reduxjs/toolkit";

const slices = createSlice({
  name: "slice",

  initialState: {
    productState: null,
    darkModKey: false,
    queryParams: null,
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
    ],
  },

  reducers: {
    firstAddProduct: (state, action) => {
      state.productState = action.payload;
    },

    changeDarkModKey: (state, action) => {
      state.darkModKey = action.payload;
    },
    addDataTheQueryParams: (state, action) => {
      state.queryParams = action.payload;
    },
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

export default slices;