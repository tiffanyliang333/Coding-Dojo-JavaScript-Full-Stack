const Todo = (props) => {

    <label>Here are your todos:</label>
    const todoClass = [];
        if(props.todo.complete) {
            todoClass.push("line-through");
        }
    return (
        <div>
            <span className={todoClass.join("")}>{props.todo.text}</span>
            <input checked={props.todo.complete} type="checkbox" onChange ={(e) => props.handleToggleComplete(props.i)}/>
            <button onClick={(e) => {
                props.handleTodoDelete(props.i)}} style={{marginLeft:"20px"}}>Delete</button>
        </div>
    )
}

export default Todo;