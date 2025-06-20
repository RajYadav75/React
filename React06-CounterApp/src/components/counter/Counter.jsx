import "./Counter.css"
import {useState} from "react";
function Counter() {
    var [count,setCount] = useState(0);
    const increaseCount = () =>{
        setCount(count+1);
    }
    return (
        <div className="counter">
            <h2>Counter App</h2>
            <p>Count Value is :: {count}</p>
            <button onClick={increaseCount}>IncCount</button>
        </div>
    );
}
export default Counter;