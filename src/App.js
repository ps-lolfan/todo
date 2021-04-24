import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //State stuff. Later move this to Redux
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //useEffect to get from local storage
  useEffect(() => {
   getLocalStorage();
  }, [])

  //useEffect to maintain filters
  useEffect(() => {
    filterHandler();
    saveLocalStorage();
  }, [todos, status]);
  //Fucntions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;

     
    
        case "pending":
        setFilteredTodos(todos.filter((todo) => todo.pending === true));
        break;

        case "inprogress":
        setFilteredTodos(todos.filter((todo) => todo.inprogress === true));
        break;

        case "abandoned":
          setFilteredTodos(todos.filter((todo) => todo.abandoned === true));
          break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //local storage for persistance
  const saveLocalStorage = () =>{
  
      localStorage.setItem('todos', JSON.stringify(todos))
    
  }

  const getLocalStorage = () =>{
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let localTodos = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)))
      setTodos(localTodos)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Schedule Your Day</h1>
      </header>
      <Form
        setStatus={setStatus}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
