import { createSlice } from "@reduxjs/toolkit";

export const myCoursesUserPanel = createSlice({
    name: "myCourse",

    initialState: {
        myCourse: []
    },

    reducers: {
        addMyCourse: (state, action) => {
            state.myCourse = action.payload
        }
    }
})