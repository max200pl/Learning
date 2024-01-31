import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({ //slice global state for small of piece
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload; // action.payload --> Extra date props 
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions; //increment(), decrement()...
export default counterSlice.reducer