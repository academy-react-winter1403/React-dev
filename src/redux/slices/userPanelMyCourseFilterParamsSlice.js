import { createSlice } from "@reduxjs/toolkit";

export const userPanelMyCourseFilterParamsSlice = createSlice({
    name: "userPanelMyCourseFilterParams",

    initialState: {
        query: null,
        sortingCol: "Active",
        sortType: "DESC"
    },

    reducers: {
        changeUserPanelQueryFilter: (state, action) => {
            state.query = action.payload
        },
        changeUserPanelSortingColFilter: (state, action) => {
            state.sortingCol = action.payload
        },
        changeUserPanelSortTypeFilter: (state, action) => {
            state.sortType = action.payload
        }
    }
})