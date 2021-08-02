import React from "react";

const Form = ({ inputText, setInputText, list, setList, setStatus }) => {

    const inputTextHandler = (ev) => {
        console.log(ev.target.value);
        setInputText(ev.target.value);
    }

    const submitToDoHander = (ev) => {

        ev.preventDefault();
        setList([
            ...list,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            },
        ]);

        setInputText(""); //change state to empty text field

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