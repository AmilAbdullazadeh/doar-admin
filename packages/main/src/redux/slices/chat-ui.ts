/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPerson {
    image?: string;
    bg?: string;
    status: "online" | "offline";
    name: string;
}

export interface UIState {
    channel?: string;
    chatType: "channel" | "direct";
    person?: IPerson;
    rightSidebar?: boolean;
}

const initialState: UIState = {
    channel: "",
    chatType: "channel",
    rightSidebar: true,
};

const chatUISlice = createSlice({
    name: "chatUI",
    initialState,
    reducers: {
        toggleChannel(
            state,
            action: PayloadAction<{
                channel: string;
            }>
        ) {
            const {
                payload: { channel },
            } = action;
            state.channel = channel;
            state.chatType = "channel";
        },
        togglePerson(
            state,
            action: PayloadAction<{
                person: IPerson;
            }>
        ) {
            const {
                payload: { person },
            } = action;
            state.person = person;
            state.chatType = "direct";
            state.rightSidebar = false;
        },
        toggleSidebar(state) {
            state.rightSidebar = !state.rightSidebar;
        },
    },
});

export const {
    toggleChannel,
    togglePerson,
    toggleSidebar,
} = chatUISlice.actions;
export default chatUISlice.reducer;
