import {useState} from "react";
import "./Counter.css";
function Counter() {
    let [count,setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1);
    };
    return (
       <div className="counter">
           <h2>Counter App</h2>
           <p>Counter value is :: {count}</p>
           <button onClick={increaseCount}>IncreaseCount</button>
       </div>
    );
}
export default Counter;