import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menuSlice",
    initialState: {
        isMenuOpen : true,
    },
    reducers : {
        toggleMenu : (state, action) =>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu : (state, action) =>{
            state.isMenuOpen = false;
        },
        openMenu : (state, action) =>{
            state.isMenuOpen = true;
        },
    }
});

export const { toggleMenu, closeMenu, openMenu } = menuSlice.actions;
export default menuSlice.reducer;