import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./BookSlice";
import CategorySlice from "./CategorySlice";

export const store = configureStore({
    reducer : {
        books : BookSlice,
        category : CategorySlice
    }
})