import React from "react"

//components 
import ToDo from "./ToDo"

const List = ({ list, setList, filteredList, updateList, setUpdateList }) => {  
   
    console.log(list);

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredList.map((todo) => (
                    <ToDo setList={setList} 
                        list={list} 
                        key={todo._id} 
                        todo={todo} 
                        text={todo.text}
                        updateList={updateList}
                        setUpdateList={setUpdateList}
                     />
                ))}
            </ul>
        </div>

    );
}

export default List;