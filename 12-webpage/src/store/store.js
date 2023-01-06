import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from './slices/counter';
import { menuSlice } from "./slices/menu/menuSlice";
export const store = configureStore({
    reducer:{
        counter: counterSlice.reducer,
        menu : menuSlice.reducer
    },
})