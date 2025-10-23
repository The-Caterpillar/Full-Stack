function List(props){

    const itemsList = props.items;
    const category = props.category;
        // fruits.sort((a,b) => a.name.localeCompare(b.name)) // ALPHABETICAL
        // fruits.sort((a,b) => b.name.localeCompare(a.name)) // Reverse alphabetical
        itemsList.sort((a,b) => a.calories - b.calories) // NUMERIC

        const lowCalFruit = itemsList.filter(fruit => fruit.calories < 100);

    const listItems = lowCalFruit.map(fruit => <li key={fruit.name}>{fruit.name} : {fruit.calories}</li>)

    return (<>
        <h3 className="list-category">Category: {category}</h3>
        <ol className="list-items">{listItems}</ol>
    </>);
}

List.defaultProps = {
    category: "category",
    items: [],
}

export default List