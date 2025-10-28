/**
 * updater functions: A function passed as an argument to the setState()
 * Example: for [year,setYear],
   - when we need to increase the year count, we do setYear(year + 1), which does work
   - But a better practice is to use an updater function.
   - ex: setYear(updater function) ; usually it is represented as an arrow function i.e. setYEar(arrow function)
 * Allows for safe updates based on previous state
 * Used with multiple state updates an asynchronous functions
 * Good practice to use updater functions
 */

import { useState } from "react";

function MyComponent() {
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count+1); // Works:  uses the original count value when the program was loaded to update count.
        setCount(count + 1); // Does not WOrk: Again uses the original value, hence this will not work.
        setCount(c => c + 1); // Works: Now this will use the previous count value as reference and not the original val. so this works.
        // always use arrow functions, no matter what. In the name of GOOD PRACTICE hehehe (:-P)
        setCount(c=> c+3); // now this increment() function should add 5 each time.
    }
    function decrement() {
        setCount(count-1);
    }
    function reset(){
        setCount(0);
    }
    
    return(<>
    <div className="main-container">
        <button value={count} onClick={reset}>Reset</button>
        <button value={count} onClick={increment}>increment</button>
        <button value={count} onClick={decrement}>decrement</button>
        <p style={{fontSize:"1.2em", fontWeight:"bold" ,padding: "1em 2em", backgroundColor:"black", borderRadius:"1em" }}>Value: {count} </p>
    </div>
    </>)
}

export default MyComponent