import { configureStore } from "@reduxjs/toolkit";
import { firstAddProduct, changeDarkModKey } from "./actions";
import slices from "./slices/slices";

export const store = configureStore({
    reducer: slices.reducer
})