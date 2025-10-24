function Button(){
    let count = 0;

    const handleClick = () => console.log("OUCH!!");

    const handleClick2 = (name) => {
        if(count < 3)
        {
            count++;
            console.log(`${name}, you clicked me ${count} times`);
        }
        else{
             console.log(`${name} Stop clicking me!!`);
        }
    };

    return (<>
    <button onClick={handleClick}>OUCH</button><br></br>
    <button onClick={()=>handleClick2("girl")}>Don't Click me</button> 
{/* When we have a parameter in onClick event, we have wrap the evenHandler within a func expression
or arrow function */}
    </>)
}

export default Button;