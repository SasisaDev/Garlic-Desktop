import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Guild from "../../Application/Guild";

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
        guilds: new Set<Guild>,
        currentGuild: null,
    },
    reducers: {
        SwitchViewMode(state, mode: PayloadAction<ViewMode>) {
            state.viewMode = mode.payload;
        },

        AddGuild(state, guild: PayloadAction<Guild>) {
            state.guilds.add(guild.payload);
        },
        RemoveGuild(state, guild: PayloadAction<Guild>) {
            state.guilds.delete(guild.payload);
        },

        SetCurrentGuild(state, guild: PayloadAction<Guild>) {
            state.currentGuild = guild.payload;
        }
    }
});

export default GarlicSlice.reducer;
export const {SwitchViewMode} = GarlicSlice.actions