import { useEffect, useState } from "react";

function MyComponent2(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    // When only using eventListener, the code still works but the event lister gets add numerous times,
    // as we resize the window.
    // window.addEventListener("resize", handleResize);
    // console.log(addEventListener);

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        console.log(addEventListener);

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed")
        }
    },[])
    // Every time the window resizes, the event listener 'listens for the resize' and calls the handleResize
    // function which updates the width height variables and hence re-renders the component.


    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
        <p>
            window width : {width}px
        </p>

        <p>
            height : {height}px
        </p>
    </>)
}

export default MyComponent2;