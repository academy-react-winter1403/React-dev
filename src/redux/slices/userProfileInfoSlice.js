import { createSlice } from "@reduxjs/toolkit";

export const userProfileInfoSlice = createSlice({
    name: "userProfileInfo",

    initialState: {
        userProfileInfoData: null,
        selectImageProfile:null,
        allImageData:[],
        imageProfile:null
    },

    reducers: {
        addUserProfileInfoData: (state, action) => {
            state.userProfileInfoData = action.payload
        },
        addSelectImageProfile:(state,action) => {
            state.selectImageProfile = action.payload
        },
        addAllImageData:(state,action) => {
            state.allImageData = action.payload
        },
        addImageProfile:(state,action) => {
            state.imageProfile = action.payload
        }
    }
})