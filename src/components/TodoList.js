import React from "react";
import Todo from "../components/Todo";

const TodoList = ({ todos, filteredTodos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((ele) => (
          <Todo
            setTodos={setTodos}
            id={ele.id}
            text={ele.text}
            todo={ele}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
