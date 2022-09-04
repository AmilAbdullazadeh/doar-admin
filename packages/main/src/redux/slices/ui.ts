/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTheme } from "@doar/shared/types";

export interface UIState {
    sidebar: boolean;
    isBody: boolean;
    theme: TTheme;
}

const initialState: UIState = {
    sidebar: false,
    isBody: false,
    theme: "classic",
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleSidebar(state, action: PayloadAction<{ isOpen?: "open" }>) {
            const {
                payload: { isOpen },
            } = action;
            if (isOpen) {
                state.sidebar = false;
            } else {
                state.sidebar = !state.sidebar;
            }
        },
        toggleBody(state) {
            state.isBody = !state.isBody;
        },
        toggleTheme(state, action: PayloadAction<{ theme: TTheme }>) {
            const {
                payload: { theme },
            } = action;
            state.theme = theme;
        },
    },
});

export const { toggleSidebar, toggleBody, toggleTheme } = uiSlice.actions;
export default uiSlice.reducer;
