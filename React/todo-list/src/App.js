import './App.css';
import React, { useState } from 'react';

import Todo from './components/Todo';


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
    
    setTodos([... todos, todoItem])
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

        {todos.map((todo, i) => {
            return (
              <Todo 
              key={i} 
              i={i} 
              todo={todo} 
              handleToggleComplete={handleToggleComplete} 
              handleTodoDelete={handleTodoDelete} 
              />
            );
          })}
    </div>
  );
  }

export default App;
