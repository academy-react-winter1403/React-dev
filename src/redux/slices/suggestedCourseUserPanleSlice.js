import { createSlice } from "@reduxjs/toolkit";

export const suggested1courseUserPanel = createSlice({
    name: "suggestedCourse",

    initialState: {
        suggestedCourseUserPanelData: []
    },

    reducers: {
        addSuggestedCourseUserPanel: (state, action) => {
            state.suggestedCourseUserPanelData = action.payload
        }
    }
})