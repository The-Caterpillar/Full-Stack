// Learning event parameter

function Button2() {

    const handleClick = (event)  => event.target.textContent = "OUCHIE!!";

return(<>
<button onDoubleClick={(event) => handleClick(event)}>Do'nt Click Me</button>
</>)
}

export default Button2