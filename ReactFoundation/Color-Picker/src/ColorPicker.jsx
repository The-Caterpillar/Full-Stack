import { useState } from "react"

function ColorPicker(){

    const [color,setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value)
    }

return <>
<div className="color-picker-container">
    <h1>Color Picker</h1>
    <div className="color-display" style={{backgroundColor: color}}>
        <p>{color}</p>
    </div>
    <label>Select a color: </label>
    <div className="color-wrapper">
        <input type="color" value={color} onChange={handleColorChange}></input>
    </div>
</div>
</>;
}

export default ColorPicker