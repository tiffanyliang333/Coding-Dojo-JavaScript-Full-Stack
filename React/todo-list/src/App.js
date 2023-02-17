import './App.css';
import React, { useState } from 'react';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    
    if (newTodo.length == 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }
    
    setTodos([... todos, newTodo])
    setNewTodo("");
  };

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i != delIdx;
    });

    setTodos(filteredTodos);
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if(idx == i) {
        todo.complete = !todo.complete;
      }

      return todo;
    });

    setTodos(updatedTodos);
    }


  return (
    <div className="App">
        <form onSubmit={(e) => {
          handleNewTodoSubmit(e);
        }}>
          <div>
            <label>Your To-Do List!</label>
          </div>
          <input type="text" value ={newTodo} onChange={(e) => {
            setNewTodo(e.target.value);
          }}/>
          <div><button>Add</button></div>
        </form>

        <label>Here are your todos:</label>
        {todos.map((todo, i) => {
            return (
              <div key = {i}>
                <span>{todo.text}</span>
                <input checked={todo.complete} type="checkbox" onChange ={(e) => handleToggleComplete(i)}/>
                <button onClick={(e) => {
                  handleTodoDelete(i)}} style={{marginLeft:"20px"}}>Delete</button>
              </div>
            );
          })}
    </div>
  );
  }

export default App;
