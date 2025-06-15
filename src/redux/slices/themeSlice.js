import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name:'theme',
    initialState:{
        mode:'system',
    },
    reducers:{
        setMode:(state,action) => {
            state.mode = action.payload
        }
    }
})