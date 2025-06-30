import React, {useState,useRef} from 'react';
import Header from "../Header/Header.jsx";

function Timer(props) {
    let [timer, setTimer] = useState(0);
    let timerId = useRef(); //timerId ={current:undefined} //TimerId.current = new value
    const startTimer = () => {
        timerId.current = setInterval(() => {
            setTimer((prevTime) => prevTime + 1); // 0 + 1 = 1
        }, 1000);

    }
    const stopTimer = () => {
        clearInterval(timerId.current);
    }
    const clearTimer = () => {
        setTimer(0);
    }
    return (
        <div style={{width: "500px", margin: "100px auto", textAlign: "center", boxShadow: "0 0 10px black"}}>
            <Header/>
            <h2>Timer Value is :: {timer}</h2>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={clearTimer}>Clear</button>
        </div>

    );
}

export default Timer;