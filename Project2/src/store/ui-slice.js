import { createSlice } from "@reduxjs/toolkit"

const useSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: true },
    reducer: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
})

export const uiActions = uiSlice.actions;

export default useSlice;

