import React, {useState} from 'react'
import Todo from '../components/Todo'

 const  TodoList = ({todos, setTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(ele => (
    
            <Todo 
            setTodos={setTodos} 
            id={ele.id} 
            text={ele.text}
            todo={ele}
            todos={todos} />
    ))}
          
            </ul>
        </div>
    )
}


export default TodoList