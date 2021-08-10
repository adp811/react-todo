import axios from "axios";
import React from "react";
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';



const ToDo = ({ text, todo, list, setList, updateList, setUpdateList }) => {

    const deletionHandler = () => {

        const url = "http://localhost:5000/api/todo/delete"
        const id = todo._id;
    
        axios.delete(`${url}/${id}`).then((res) => {
            console.log(res);
            setUpdateList(!updateList);
            alert('Permanently deleted todo!');
                
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

    const archiveHandler = () => {

        const url = "http://localhost:5000/api/todo/archive";
        const id = todo._id;
        const archived = todo.archived;

        axios.patch(`${url}/${id}`, {
            archived: !archived

        }).then((res) => {
            console.log(res);
            setUpdateList(!updateList);

        });

    }

    return (

        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`} >{text}</li>

            <button onClick={completionHandler} className="complete-btn">
                <CheckCircleIcon color='white' style={{ fontSize: 35 }}/>
            </button>
            <button onClick={archiveHandler} className="archive-btn">
                <ArchiveIcon color='white' style={{ fontSize: 35 }}/>
            </button>
            <button onClick={deletionHandler} className="trash-btn">
                <DeleteForeverIcon color='white' style={{ fontSize: 35 }}/>
            </button>
           

        </div>

    );
}

export default ToDo