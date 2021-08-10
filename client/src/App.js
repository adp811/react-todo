import axios from "axios";
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
  const [updateList, setUpdateList] = useState(false);

  useEffect(() => { 
    console.log('Querying All Todos...');
    getTodos();
    
  }, []); 

  useEffect(() => {
    getTodos();
  }, [updateList]);

  useEffect(() => {
    filterHandler();
  }, [list, status]);

  const getTodos = () => {

    const url = "http://localhost:5000/api/todo/all"

    axios.get(url).then((res) => {
      setList(res.data);
    }); //find a way to query based on timestamp
    
  }

  const filterHandler = () => {

    switch(status) {

      case 'completed':

        const filter1 = list.filter(todo => {
          return(
              todo.completed === true && 
              todo.archived === false
          )});

        setFilteredList(filter1);
        break;

      case 'uncompleted':

        const filter2 = list.filter(todo => {
          return(
              todo.completed === false && 
              todo.archived === false
          )});

        setFilteredList(filter2);
        break;
      
      case 'archived': 
        setFilteredList(list.filter(todo => todo.archived === true));  
        break;

      default: 
        setFilteredList(list.filter(todo => todo.archived === false));

    }

  }

  return (
    <div className="App">
      <Form inputText={inputText} 
        setInputText={setInputText} 
        list={list} 
        setList={setList} 
        setStatus={setStatus}
        setUpdateList={setUpdateList} 
        updateList={updateList}
      />
      <List filteredList={filteredList}
       setList={setList}
       list={list}
       setUpdateList={setUpdateList}
       updateList = {updateList}
      />
    </div>
  );
}

export default App;