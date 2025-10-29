import { useState } from "react"

function UpdatingLists(){
    const [foods, setFoods] = useState(["Rajma", "Chhole", "Chane", "Broccoli", "Moong"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(key){
        setFoods(foods.filter((_,i)=> i !== key))
    }

    return (<>
        <h1>List of foods:</h1>
        <ul>
            {
                foods.map((f,i) =>
                <li key={i} onClick={() => handleRemoveFood(i)}>
                    {f}
                </li>)
            }
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name: "/>
        <button onClick={handleAddFood}>Add</button>
    </>)
}

export default UpdatingLists