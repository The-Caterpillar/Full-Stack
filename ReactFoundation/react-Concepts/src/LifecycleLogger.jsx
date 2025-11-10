import { useState, useEffect } from "react";
const LifecycleLogger = (props) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(c => c + 1);
  }

  useEffect(()=>{
    console.log('component mounted');

    // component will unmount
    return () => {
        console.log("Component unmounted");
    };
  },[])

//   component did update
  useEffect(()=>{
    if(count > 0)
        {
            console.log('component did update');
        }
  },[count]);

  return (
    <>
      <div className="logger-container">
        <h2>LifecycleLogger (Functional Component)</h2>
        <p> {props.message} </p>
        <p>Count: {count}</p>

        <button onClick={() => incrementCount()} className="secondary-btn">
          Update
        </button>
      </div>
    </>
  );
};

export default LifecycleLogger;
