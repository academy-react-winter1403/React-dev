import { createSlice } from "@reduxjs/toolkit";

export const userPanelMyCoursesSlice = createSlice({
    name: "userPanelMyCourses",

    initialState: {
        data: null,
        totalCount: null
    },

    reducers: {
        addMyCourseUserPanel: (state, action) => {
            state.data = action.payload
        },
        addMyCourseUserPanelTotalCount: (state, action) => {
            state.totalCount = action.payload
        }
    }
})