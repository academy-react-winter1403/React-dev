import { createSlice } from "@reduxjs/toolkit";

export const userProfileInfoSlice = createSlice({
    name: "userProfileInfo",

    initialState: {
        userProfileInfoData: null
    },

    reducers: {
        addUserProfileInfoData: (state, action) => {
            state.userProfileInfoData = action.payload
        }
    }
})