import { useState } from "react";
function ToDoList(){
    const [tasks,setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== "")
        {
            setTasks(t => [...t,newTask]);
            setNewTask("");
        }
        else alert("You did not enter anything");
    }

    function deleteTask(index){
        setTasks(tasks.filter((_,i) => i !== index));
    }

    function moveTaskUp(index){
        if(index > 0)
        {
            let updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
        else
        {
            alert("This is the most 'up' we can move buddy!! ")
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1)
        {
            let updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
        else
        {
            alert("This is the most 'down' we can move buddy!! ")
        }
    }

return(<>
    <div className="toDoList">
        <h1>TO DO LIST</h1>

        <div>
            <input
                type="text"
                placeholder="new task"
                value={newTask}
                onChange={handleInputChange}
            />
            <button className="Add-Button" onClick={addTask}>Add</button>
        </div>

        <ol>
            {tasks.map((task,index) =>
            <li key={index}>
                <span className="text">{task}</span> &nbsp;&nbsp;
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button> &nbsp;&nbsp;
                <button className="move-button" onClick={() => moveTaskUp(index)}>👆</button> &nbsp;&nbsp;
                <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
            </li>
            )}
        </ol>
    </div>
</>)
}

export default ToDoList;