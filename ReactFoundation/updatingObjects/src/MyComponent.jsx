// updating state of objects through recat
import { useState } from "react";

function MyComponent(){
    const [car,setCar] = useState({year:2024,make:"ford",model:"mustang"});

    function handleYearChange(event){
        setCar( c => ({...c, year:event.target.value})); // { year:2024,make:"ford",model:"mustang",year:2017 }
        // looks like this after the spread operator is used: ^
        // multiple similar keys are not allowed so only last one is considered.
    }
    function handleMakeChange(event){
        setCar(c => ({...c,make: event.target.value}));
    }
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
    }

    return (<>
        <p> Your favourite car is: {car.year} {car.make} {car.model} </p>

        <input type="number" value={car.year} onChange={handleYearChange}/> <br/>
        <input type="text" value={car.make} onChange={handleMakeChange}/> <br/>
        <input type="text" value={car.model} onChange={handleModelChange}/> <br/>
    </>)
}

export default MyComponent