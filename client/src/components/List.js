import React from "react"

//components 
import ToDo from "./ToDo"

const List = ({ list, setList, filteredList }) => {  
   
    console.log(list);

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredList.map((todo) => (
                    <ToDo setList={setList} list={list} key={todo.id} todo={todo} text={todo.text} />
                ))}
            </ul>
        </div>

    );
}

export default List;