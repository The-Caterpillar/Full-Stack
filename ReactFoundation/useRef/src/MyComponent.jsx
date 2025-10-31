import { useState, useEffect, useRef } from "react"


function MyComponent(){
    // const [number, setNumber] = useState(0);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);


    // console.log(ref);

    useEffect(()=>{
        console.log("Component rendered");
        console.log(inputRef1)
    })
    function handleClick1(){
        // setNumber(n => n+1)
        // ref.current = ref.current + 1;
        // console.log(ref.current)
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "pink";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";

    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "pink";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "pink";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    }
    return(<>
      <button onClick={handleClick1}>Click me 1</button>
      <input ref={inputRef1}/> <br/>

      <button onClick={handleClick2}>Click me 1</button>
      <input ref={inputRef2}/> <br/>

      <button onClick={handleClick3}>Click me 3</button>
      <input ref={inputRef3}/> <br/>
    </>)
}

export default MyComponent