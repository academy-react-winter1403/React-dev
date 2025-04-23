import { createSlice } from "@reduxjs/toolkit";

export const clientStatusSlice = createSlice({
    name: "clientStatus",

    initialState: {
        clientStatusFlag: false
    },

    reducers: {
        changeClientStatus: (state, action) => {
            state.clientStatusFlag = action.payload
        }
    }
})