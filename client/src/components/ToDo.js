import React from "react"

const ToDo = ({ text, todo, list, setList }) => {

    const deletionHandler = () => {
        setList(list.filter((elem) => elem.id !== todo.id));
    };

    const completionHandler = () => {
        setList(list.map(elem => {
            if(elem.id === todo.id){
                return {
                    ...elem, completed: !elem.completed
                }
            }
            return elem;  
        }))

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