/*
- onChange event handler: primarily used with form elements
- ex: <input>, <textarea>, <select>, etc.
- Triggers a function every time the value of input changes
*/

import { use, useState } from "react"

function MyComponent(){

    const [name,setName] = useState("GUEST");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment,setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    return (<>
    <div>
        <input value={name} onChange={handleNameChange}></input>
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number"></input>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"/>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value='visa'>Visa</option>
            <option value='Mastercard'>Mastercard</option>
            <option value='Giftcard'>Giftcard</option>
        </select>
        <p>payment = {payment}</p>

        <div>
            <label>
                <input  type="radio" value="Pick up" checked={shipping === "Pick up"} onChange = {handleShippingChange}/>
                Pick up
            </label>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery 
            </label>
            <p>Shipping: {shipping}</p>
        </div>

    </div>
    </>)
}

export default MyComponent