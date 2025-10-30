/**
 - useEffect() : React hook which tells React to do something when :
    ~ The component re-renders
    ~ The component mounts (MOUNT : create and append it to the DOM)
    ~ The state of a value changes

You use it when your component needs to do something outside of rendering, like:
- Updating the page title
- Fetching data from an API
- Working with timers, animations, or event listeners


* useState = remembers values
* useEffect = reacts to changes
* Component = the full “function” that controls its UI + logic


useEffect(function, [dependencies]) (think of it as side-effect code, when something happens-
                                        can also call it SIDE-CODE)

1. useEffect(() => {}) // runs after every re-render
2. useEffect(() => {}, []) // runs sonly on mount and not on every re-render
3. useEffect(() => {}, [value]) // runs on mount and  + when value changes

USES:
#1. Event listeners
#2. DOM Manipulation
#3. Subscriptions to real time updates
#4. Fetching data from API
#5. cleanup when a component unmounts (unmounting : remove a component from the DOM)
 */

import { useState, useEffect } from "react";

function MyComponent() {

    const [count,setCount] = useState(0);
    const [color, setColor] = useState("green");

    // SYNTAX: useEffect(function, [dependency array])

    // This will run on every render
    // useEffect(() =>
    // {
    //     document.title = `Count: ${count}`;
    // })

    // This will run only on first render
    // useEffect(() =>
    // {
    //     document.title = `Count: ${count}`;
    // }, [])

    // runs only when the component mounts OR the count variable is changed
    // If something else changes in the component, it does not bother.
    useEffect(() =>
    {
        document.title = `Count: ${count} ${color}`;

        return () => {
            // Cleanup code
        }
    }, [count]) // if count variable updates, perform a side code

    function addCount(){
        setCount(c => c + 1);
    }
    function subtractCount(){
        setCount(c => c-1);
    }

    function changeColor(){
        setColor(c => c === "green" ? c = "red" : c = "green");
    }

    return(<>
    <p style={{color: color}}>COUNT: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}> Subtract</button>
    <br></br>

    <button onClick={changeColor}>change Color</button>
    </>)
}

export default MyComponent;