
import React, { useState } from 'react';
import './App.css';

import Form from "./components/form"
import Todo from './components/todo';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div>
<header>
      <h1>Dimas Todo List</h1>
    </header>
    <Form inputText = {inputText} todos={todos}setTodos={setTodos} setInputText ={setInputText}/>
    <Todo/>
    </div>


  );
}

export default App;
