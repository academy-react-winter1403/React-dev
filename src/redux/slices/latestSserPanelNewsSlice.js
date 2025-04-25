import { createSlice } from "@reduxjs/toolkit";

export const latestSserPanelNewsSlice = createSlice({
    name: "latestSserPanelNewsSlice",

    initialState: {
        latestSserPanelNewsSliceData: []
    },

    reducers: {
        addLatestSserPanelNewsSlice: (state, action) => {
            state.latestSserPanelNewsSliceData = action.payload
        }
    }
})