import { configureStore } from "@reduxjs/toolkit";
import menuSlicewala from "./menuSlice";
import searchSlice from "./searchSlice"

const store = configureStore({
    reducer:{
        menuSlice : menuSlicewala,
        searchSlice: searchSlice,
    }
});

export default store