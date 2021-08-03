import React from "react";
import axios from "axios";

const Form = ({ inputText, setInputText, list, setList, setStatus, setUpdateList, updateList }) => {

    const inputTextHandler = (ev) => {
        setInputText(ev.target.value);
    }

    const submitToDoHander = (ev) => {

        const url = "http://localhost:5000/api/todo/add";

        ev.preventDefault();
    
        axios.post(url, {
            text: inputText,
            completed: false

        }).then((res) => {
            console.log(res);
            setUpdateList(!updateList);

        });

        setInputText(""); 

    }

    const statusHandler = (ev) => {
        setStatus(ev.target.value);
    }

    return (

        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitToDoHander} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

    );
}

export default Form;