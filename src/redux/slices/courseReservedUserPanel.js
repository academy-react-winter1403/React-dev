import { createSlice } from "@reduxjs/toolkit";

export const courseReserved = createSlice({
    name: "courseReserve",

    initialState: {
        courseReserv: []
    },

    reducers: {
        addDataTheCourseReserved: (state, aciton) => {
            state.courseReserv = aciton.payload
        }
    }
})