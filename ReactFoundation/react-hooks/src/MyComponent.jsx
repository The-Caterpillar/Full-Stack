import {useState} from 'react'

function MyComponent(){
    const [name,setName] = useState("GUEST");
    const [age, setAge] = useState(0);
    const [isEmployed, setisEmployed] = useState("True");

    const updateName = () => {
        setName("SpongeBob");
    }

    const updateAge = () => {
        setAge(age+1);
    }

    const updateIsEmployed = () => {
        if(isEmployed === "True")
            {setisEmployed("False")}
        else
            {setisEmployed("True")}
    }

    return(<>
    <div>
        <p>
            Name: {name}
            <br></br>
            <button onClick={updateName}>Set Name</button>
        </p>

        <p>
            Age: {age}
            <br></br>
            <button onClick={updateAge}>Set Age</button>
        </p>

        <p>
            Employed?: {isEmployed}
            <br></br>
            <button onClick={updateIsEmployed}>Toggle Employed status</button>
        </p>
    </div>
    </>);
}

export default MyComponent