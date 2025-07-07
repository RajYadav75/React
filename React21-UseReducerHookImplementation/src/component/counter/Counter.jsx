import "./Counter.css"
import {useReducer} from "react";
import counterReducer from "./counterReducer.js";

function Counter() {
    let [state,dispatch] = useReducer(counterReducer,{count:0});
    const incCount = () => {
        dispatch({type: "INC"});
    }
    const desCount = () => {
        dispatch({type: "DEC"});
    }
    const clearCount = () => {
        dispatch({type:"CLEAR"});
    }
    return (
        <div className="counter">
            <h2>Counter App using UseReducer() Hook : {state.count}</h2>
            <button onClick={incCount}>Increment</button>
            <button onClick={desCount}>Decrement</button>
            <button onClick={clearCount}>Clear</button>
        </div>
    );
}
export default Counter;