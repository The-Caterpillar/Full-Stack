import { useRef } from "react";
import './Timer.css'
const UseRef = () => {
    const inputRef = useRef(null);
    console.log(inputRef);

    const submit = () => {
        console.log(inputRef.current);
        // inputRef.current.focus()
        inputRef.current.value = '';
        inputRef.current.blur();
        console.log(inputRef.current.value);
        inputRef.current.style.backgroundColor = 'green';
        inputRef.current.style.color = 'white';
        inputRef.current.setAttribute('placeholder','Updated...');
    };

    return ( <>
    <div className=" w-md! mx-auto! mt-10! bg-gray-200 p-6! rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4!">useRef Example</h2>

        <input type="text"
                placeholder="Type Something..."
                className="w-full! p-2! border rounded-lg"
                ref={inputRef}/>

        <button onClick={submit}
        className=" mt-2! bg-blue-500 text-white px-4! py-2! rounded hover:bg-blue-600">
            Submit
        </button>
    </div>
    </> );
}

export default UseRef;