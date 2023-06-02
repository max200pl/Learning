
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({ //slice global state for small of piece
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.amount;
        },
        toggleHandler(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});
export default store;

//! Approach when we use only Redux library
// const counterReducer = ((state = initialState, action) => {
// if (action.type === "increment") {
//     //! state.counter++  never use this approach because you mutated state!
//     return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter
//     }

//     if (action.type === "increase") {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === "decrement") {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state
// })

// const store = createStore(counterReducer);

// export default store;