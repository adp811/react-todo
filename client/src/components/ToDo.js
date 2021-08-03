import axios from "axios";
import React from "react"

const ToDo = ({ text, todo, list, setList, updateList, setUpdateList }) => {

    const deletionHandler = () => {

        const url = "http://localhost:5000/api/todo/delete"
        const id = todo._id;
    
        axios.delete(`${url}/${id}`).then((res) => {
            console.log(res);
            setUpdateList(!updateList);
            alert('Deleted Todo!');
                
        });

    };

    const completionHandler = () => {
        
        const url = "http://localhost:5000/api/todo/complete";
        const id = todo._id;
        const completed = todo.completed;

        axios.patch(`${url}/${id}`, {
            completed: !completed

        }).then((res) => {
            console.log(res);
            setUpdateList(!updateList);

        });
        
    }

    return (

        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`} >{text}</li>

            <button onClick={completionHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>

            <button onClick={deletionHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>

        </div>

    );
}

export default ToDo