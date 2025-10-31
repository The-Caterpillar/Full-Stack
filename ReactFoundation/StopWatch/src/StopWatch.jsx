import { useState, useRef, useEffect } from "react";

function StopWatch(){

    const [isRunning,setIsRunning] = useState(false);
    const [elapsedTime,setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0)

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(()=>{
                setElapsedTime(Date.now() - startTimeRef.current);
            },10)
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    },[isRunning]);

    function start(){
        console.log("Start")
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){

        let hours = String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(2,0);
        let minutes = String(Math.floor(elapsedTime / (1000 * 60) % 60)).padStart(2,0);
        let seconds = String(Math.floor(elapsedTime / (1000) % 60)).padStart(2,0);
        let milliseconds = String(Math.floor((elapsedTime % 1000)/10)).padStart(2,0) ;

        return `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
    }

    return(<>
    <div className="stop-watch">
        <div className="display">
            {formatTime()}
        </div>
        <div className="controls">
            <button className="start-button" onClick={start}>Start</button>
            <button className="stop-button" onClick={stop}>Stop</button>
            <button className="reset-button" onClick={reset}>RESET</button>
        </div>
    </div>
    </>)
}

export default StopWatch;