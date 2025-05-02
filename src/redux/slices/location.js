import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
    name: "locationSlice",

    initialState: {
        Latitude: null,
        Longitude:null
    },

    reducers: {
        SelectLatitude: (state, action) => {
            state.Latitude = action.payload
        },
        SelectLongitude: (state, action) => {
            state.Longitude = action.payload
        },
    }
})