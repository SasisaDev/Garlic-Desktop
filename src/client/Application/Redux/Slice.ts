import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
        screen: ScreenView.Guilds
    },
    reducers: {
        SwitchViewMode(state, mode: PayloadAction<ViewMode>) {
            state.viewMode = mode.payload;
        }
    }
});

export default GarlicSlice.reducer;
export const {SwitchViewMode} = GarlicSlice.actions