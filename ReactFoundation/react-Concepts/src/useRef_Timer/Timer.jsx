import { useState, useRef } from "react";
const Timer = () => {
    const timeRef = useRef(null);
    const [time,setTime] = useState(0);
    const [isRunning,setIsRunning] = useState(false);
    
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
    }

    return ( <>
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-semibold mt-4">
           ⌛ Timer: {time}
        </h2>

        <span>
            <button onClick={toggleTimer}
            className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                {isRunning ? 'Pause' : 'Start'}
            </button>
            &nbsp;&nbsp;
            <button onClick={resetTimer}
            className="mt-3 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-900">Reset
            </button>
        </span>

    </div>
    </> );
}

export default Timer;