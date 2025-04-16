import { createSlice } from "@reduxjs/toolkit";

export const courseActivedDataUserPanel = createSlice({
    name: "courseActivedUserPanel",

    initialState: {
        courseActivedData: []
    },

    reducers: {
        addCourseActivedDataUserPanel: (state, action) => {
            state.courseActivedData = action.payload
        }
    }
})