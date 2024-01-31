
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlice from './auth';


const store = configureStore({
    reducer: { counter: counterSlice, auth: authSlice } // added  counter reducer to global reducer 
});



export default store;









// ! Approach when we use only Redux library
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