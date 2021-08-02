import React, { useState, useEffect } from "react";
import './App.css';

//components
import Form from "./components/Form";
import List from "./components/List"

function App() {

  //state initializers
  const [inputText, setInputText] = useState('');
  const [list, setList] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [list, status]);

  const filterHandler = () => {

    switch(status) {

      case 'completed':
        setFilteredList(list.filter(todo => todo.completed === true));
        break;

      case 'uncompleted':
        setFilteredList(list.filter(todo => todo.completed === false));
        break;

      default: 
        setFilteredList(list)

    }

  }

  return (
    <div className="App">
      <header>
        <h1>Aryan's To Do List</h1>
      </header>
      <Form inputText={inputText} 
        setInputText={setInputText} 
        list={list} 
        setList={setList} 
        setStatus={setStatus} 
      />
      <List filteredList={filteredList} setList={setList} list={list}/>
    </div>
  );
}

export default App;