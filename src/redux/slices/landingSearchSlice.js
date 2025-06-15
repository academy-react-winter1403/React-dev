import { createSlice } from "@reduxjs/toolkit";

export const landingSearchSlice = createSlice({
    name: "landingSearchSlice",

    initialState: {
        searchFlag: false,
        searchBoxFlag: false,
        searchKey: null,
        searchDataState: null,
        searchUrl: null,
        Query: null,
        startSearchFlag: false
    },

    reducers: {
        changeLandingSearchFlag: (state, action) => {
            state.searchFlag = action.payload
        },
        changeLandingSearchKey: (state, action) => {
            state.searchKey = action.payload
        },
        addDataToLandingSearchDataState: (state, action) => {
            state.searchDataState = action.payload
        },
        changeLandingSearchUrl: (state, action) => {
            state.searchUrl = action.payload
        },
        changeLandingQuery: (state, action) => {
            state.Query = action.payload
        },
        changeStartSearchFlag: (state, action) => {
            state.startSearchFlag = action.payload
        },
        changeSearchBoxFlag: (state, action) => {
            state.searchBoxFlag = action.payload
        }
    }
})