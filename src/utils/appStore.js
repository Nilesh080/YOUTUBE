import { configureStore } from "@reduxjs/toolkit";
import menuSlicewala from "./menuSlice";
import searchSlice from "./searchSlice"
import chatSlice from "./chatSlice";

const store = configureStore({
    reducer:{
        menuSlice : menuSlicewala,
        searchSlice: searchSlice,
        chat: chatSlice,
    }
});

export default store