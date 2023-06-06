import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";


const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter); // when component update we have receive latest version store
    const show = useSelector(state => state.counter.showCounter);

    const incrementHandler = () => {
        // dispatch({ type: "increment" });
        dispatch(counterActions.increment())
    };

    const increaseHandler = () => {
        // dispatch({ type: "increase", amount: 5 })
        dispatch(counterActions.increase(10)); //default redux-tul_kit ->  {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
    }

    const decrementHandler = () => {
        // dispatch({ type: "decrement" });
        dispatch(counterActions.decrement())
    };

    const toggleCounterHandler = () => {
        // dispatch({ type: 'toggle' })
        dispatch(counterActions.toggleCounter())
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>

            {show && <div className={classes.value}>{counter}</div>}

            <div>
                <button onClick={incrementHandler}>increment</button>
                <button onClick={increaseHandler}>increase</button>
                <button onClick={decrementHandler}>decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

// class Counter extends Component {

//     incrementHandler() {
//         this.props.increment();
//     }

//     decrementHandler() {
//         this.props.decrement();
//     }

//     toggleCounterHandler() { }

//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>increment</button><button onClick={this.decrementHandler.bind(this)}>decrement</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//             </main>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         counter: state.counter
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch({ type: 'increment' }),
//         decrement: () => dispatch({ type: "decrement" })
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
