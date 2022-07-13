import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Guild from "../../API/Guild";
import Account from "../../API/Account";

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
        viewMode: ViewMode.Friends,
        screen: ScreenView.Guilds,
        account: null,
        currentGuild: null,
        currentChannel: null
    },
    reducers: {
        SwitchViewMode(state, mode: PayloadAction<ViewMode>) {
            state.viewMode = mode.payload;
        },

        SetAccount(state, account: PayloadAction<Account>) {
            state.account = account.payload;
        },

        SetCurrentGuild(state, guild: PayloadAction<string>) {
            state.currentGuild = guild.payload;
        }
    }
});

export default GarlicSlice.reducer;
export const {SwitchViewMode, SetAccount, SetCurrentGuild} = GarlicSlice.actions