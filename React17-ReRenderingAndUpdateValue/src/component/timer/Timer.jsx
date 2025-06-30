import React, {useState} from 'react';

function Timer() {
    let [timer, setTimer] = useState(0);
    var [timerId, setTimerId] = useState(); //This is not valid ways
    const startTimer = () => {
        timerId = setTimerId(
            setInterval(() => {
                // setTimer(timer+1); // 0 + 1 = 1
                setTimer((prevTime) => prevTime + 1); // 0 + 1 = 1
                //console.log("Working");
                // console.log(timer);
            }, 1000)
        )
        ;
    }
    const stopTimer = () => {
        clearInterval(timerId);
    }
    const clearTimer = () => {
        setTimer(0);
    }
    return (
        <div style={{width: "500px", margin: "100px auto", textAlign: "center", boxShadow: "0 0 10px black"}}>
            <h2>Timer Value is :: {timer}</h2>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={clearTimer}>Clear</button>
        </div>

    );
}

export default Timer;