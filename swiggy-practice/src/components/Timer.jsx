import  { useState, useRef } from "react";

const Timer = () => {
    const[count,setCount] = useState(0);
    const[timerRunning,setTimerRunning] = useState(false)
    const timerRef = useRef();

    const startTimer = () =>{
        timerRef.current = setInterval(() => {
            setCount(prev => prev +1)
            setTimerRunning(true)
        }, 1000);
    }
    console.log(count);
    
    const stopTimer = () =>{
        clearInterval(timerRef.current);
        setTimerRunning(false)
    }
    
    const clearTimer = () =>{
        setCount(0)
        clearInterval(timerRef.current)
        setTimerRunning(false)
    }
    

    return (
        <div className="timer">
            <h2>Count : {count}</h2>
            <button disabled={timerRunning} onClick={startTimer}>Start</button>
            <button disabled={!timerRunning} onClick={stopTimer}>Stop</button>
            <button disabled={count==0} onClick={clearTimer}>Reset</button> 
        </div>
    );
};

export default Timer;
