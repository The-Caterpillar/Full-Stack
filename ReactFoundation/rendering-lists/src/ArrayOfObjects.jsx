import { useState } from "react";

function ArrayOfObjects(){
    const [cars, setCars] = useState([{year: 1999, model: "Mustang", make: "Ford"}]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => i !== index));
    }
    function handleYearChange(event){
        setCarYear(event.target.value);
    }
    function handleMakeChange(event){
        setCarMake(event.target.value);
    }
    function handleModelChange(event){
        setCarModel(event.target.value);
    }

    function handleAddCar(){
        const newCar = {year: carYear, make: carMake, model: carModel};
        setCars(c => [...c, newCar]);
        setCarYear();
        setCarMake();
        setCarModel();
    }

    return(<>
    <div>
        <h2>List of car objects: </h2>
        <ul>
            {cars.map((car,i) =>
            <li key = {i}>
                {car.year} {car.make} {car.model}
                <button onClick={() => handleRemoveCar(i)}>Remove</button>
            </li>
            )}
        </ul>

        <input type="number" value={carYear} onChange={handleYearChange} placeholder={new Date().getFullYear()}/> <br></br>
        <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Car make"/> <br></br>
        <input type="text" value={carModel} onChange={handleModelChange} placeholder="Car model"/> <br></br>
        <button onClick={handleAddCar}>Add Car</button>
    </div>
    </>)
}

export default ArrayOfObjects