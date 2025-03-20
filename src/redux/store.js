import { configureStore } from "@reduxjs/toolkit";
import { firstAddProduct, changeDarkModKey } from "./reducer";
import slices from "./slices/slices";

export const store = configureStore({
    reducer: slices.reducer
})