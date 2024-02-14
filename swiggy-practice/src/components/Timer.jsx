import  { useState, useRef } from "react";

const Timer = () => {
    const [count, setCount] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);
    const timerRef = useRef();
    console.log(count);

    const startTimer = () => {
        setTimerRunning(true);
        timerRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);
    };

    const stopTimer = () => {
        setTimerRunning(false);
        clearInterval(timerRef.current);
    };

    const reset = () => {
        setCount(0);
        clearInterval(timerRef.current);
        setTimerRunning(false);
    };

    return (
        <div>
            <h2>Count : {count}</h2>
            {!timerRunning ? (
                <button onClick={startTimer}>Start</button>
            ) : (
                <button onClick={stopTimer}>Stop</button>
            )}
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Timer;
