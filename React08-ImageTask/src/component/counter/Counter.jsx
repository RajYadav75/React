import "./Counter.css"
import {useState} from "react";

function Counter() {
    var [count, setCount] = useState(0);
    console.log("Re-Rendering Counter");
    const increaseCount = () => {

        /*count=count + 1;
        console.log(count);
        setCount(count+1);
        // What happen if setcount() call 3 times
        setCount(count+1);
        setCount(count+1);
        //-----------------
        setCount(count+1);
        setCount(count+2);
        setCount(count+3);
        //-----------------
        setCount(count+3);
        setCount(count+2);
        setCount(count+1);*/
        setCount((prevState) => {  // 0
            return prevState + 1;  // 1
        }); //1- re-render
        setCount((prevState) => { // 1
            return prevState + 1; // 2
        });
        setCount((prevState) => { // 2
            return prevState + 1; // 3
        });
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