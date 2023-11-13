import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        // Here we will be adding reducers
        counter: counterReducer,
    }
});