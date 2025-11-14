import { useState, useRef, useEffect } from "react";
import TimerDisplay from "./TimerDisplay";
const Timer = () => {
    const timeRef = useRef(null);
    const [isRunning,setIsRunning] = useState(false);

    const [time,setTime] = useState(() => {
        return Number(localStorage.getItem('time') || 0)
    });
    useEffect(()=>{
        localStorage.setItem('time',time);
    },[time])

    function toggleTimer(){
        if(isRunning){
            clearInterval(timeRef.current);
            timeRef.current = null;
        }
        else{
            timeRef.current = setInterval(()=>{
                setTime((prevTime) => prevTime + 1)
            },1000);
        }
        setIsRunning(!isRunning);
    }

    // reset timer
    function resetTimer(){
        clearInterval(timeRef.current);
        setIsRunning(false);
        setTime(0);
        timeRef.current = null;
        localStorage.removeItem('time');
    }

    return ( <>
    <TimerDisplay time={time} isRunning={isRunning}
    resetTimer={resetTimer} toggleTimer={toggleTimer}/>
    </> );
}

export default Timer;