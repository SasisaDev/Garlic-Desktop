import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Guild from "../../Application/Guild";
import Account from "../Account";

export enum ViewMode {
    Friends,
    Guilds
};

export enum ScreenView {
    Auth,
    Guilds,
    Settings
};

const GarlicSlice = createSlice({
    name: "garlic",
    initialState: {
        viewMode: ViewMode.Guilds,
        screen: ScreenView.Guilds,
        account: null,
        currentGuild: null,
        currentChannel: null
    },
    reducers: {
        SwitchViewMode(state, mode: PayloadAction<ViewMode>) {
            state.viewMode = mode.payload;
        },

        SetCurrentGuild(state, account: PayloadAction<Account>) {
            state.account = account.payload;
        },

        SetCurrentGuild(state, guild: PayloadAction<Guild>) {
            state.currentGuild = guild.payload;
        }
    }
});

export default GarlicSlice.reducer;
export const {SwitchViewMode} = GarlicSlice.actions