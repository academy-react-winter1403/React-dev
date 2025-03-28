import { createSlice } from "@reduxjs/toolkit";

const slices = createSlice({
    name: "slice",

    initialState: {
        productState: null,
        darkModKey: false,
        queryParams: null
    },

    reducers: {
        firstAddProduct: (state, action) => {
            state.productState = action.payload
        },

        changeDarkModKey: (state, action) => {
            state.darkModKey = action.payload
        },
        addDataTheQueryParams: (state, action) => {
            state.queryParams = action.payload
        }
    }
})

export default slices