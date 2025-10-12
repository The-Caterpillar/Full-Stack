/*
Now we will use inline CSS for styling the Button:
- Convenient, easy to use, best for minimal styling use
- No global naming conflicts because we are not dealing with imports or classNames
- Great for isolated components with minimum styling
- Less maintainable in large components with a lot of styling, becomes less readable
- not great for complex styling like responsive CSS
*/

function Button2() {
    const styles = {
        color: "white",
        backgroundColor: "aqua",
        padding: "10px",
        margin: "10px",
        font: "Arial, sans-serif",
        boxShadow: "5px 5px 5px #7350503a",
    }
    return(
        <>
        <button style={styles}>click me!</button>
        </>
    );
}
export default Button2