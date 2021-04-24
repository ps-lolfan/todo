import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  //Delete handler
  const deleteHandler = () => {
    setTodos(todos.filter((ele) => ele.id !== todo.id));
  };

  //Complete handler
  const completeHandler = (e) => {
      switch(e.target.name) {
          case 'inprogress': 
          setTodos(
            todos.map((item) => {
              if (item.id === todo.id) {
                return {
                  ...item,
                  completed: false,
                  pending: false,
                  abandoned: false,
                  inprogress: true
                };
              }
              return item;
            })
          );

        break;

        case 'abandoned': 
          setTodos(
            todos.map((item) => {
              if (item.id === todo.id) {
                return {
                  ...item,
                  completed: false,
                  pending: false,
                  abandoned: true,
                  inprogress: false
                };
              }
              return item;
            })
          );

        break;

        case 'completed': 
          setTodos(
            todos.map((item) => {
              if (item.id === todo.id) {
                return {
                  ...item,
                  completed: true,
                  pending: false,
                  abandoned: false,
                  inprogress: false
                };
              }
              return item;
            })
          );

        break;

        default: break;

      }
    
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed && "completed"}`}>{text} <i class="fas fa-hourglass"></i>
      </li>
      <button name="inprogress" onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check">in pro</i>
      </button>
      
      <button name="abandoned" onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check">ab</i>
      </button>
      <button name="completed" onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check">comple</i>
      </button>
   
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
