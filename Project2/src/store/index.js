import { configureStore } from "@reduxjs/toolkit";
import useSlice from "./ui-slice";

const store = configureStore({
    reducer: { ui: useSlice.reducer }
})

export default store