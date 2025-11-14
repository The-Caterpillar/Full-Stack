import Button from "../Buttons/Button";
import { useEffect, useRef } from "react";
const TimerDisplay = ({time, resetTimer, toggleTimer, isRunning}) => {

    const startButtonRef = useRef(null);

    useEffect(() => {
        if(startButtonRef.current){
            startButtonRef.current.focus();
        }
    },[]);

    return ( <>
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-semibold mt-4">
           ⌛ Timer: {time}
        </h2>

        <span>
            <Button onClick={toggleTimer}
            className="bg-green-500 hover:bg-green-600">
                {isRunning ? 'Pause' : 'Start'}
            </Button>
            &nbsp;&nbsp;
            <Button onClick={resetTimer}
            className="bg-red-700 hover:bg-red-900">Reset
            </Button>
        </span>

    </div>
    </> );
}

export default TimerDisplay;