import {combineReducers, configureStore} from "@reduxjs/toolkit"
import GarlicSlice from "./Slice"

const rootReducer = combineReducers({
    garlic: GarlicSlice
});

export const reduxStore = configureStore({
    reducer: rootReducer
});