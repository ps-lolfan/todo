import React from "react";
import StatusDisplay from './StatusDisplay'
import ReactTooltip from "react-tooltip";


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
      <li className={`todo-item ${todo.abandoned  === true ?  "completed" : ''}`}>{text} 
      {<sup>{' '}
       <StatusDisplay status={`${todo.completed  === true ? 'Completed': todo.inprogress  === true ? "In progress" : todo.pending === true ? "Pending" : "Abandoned"}`} />
        </sup>  }
      </li>
      <button name="inprogress"  data-tip data-for="registerTip" onClick={completeHandler} className="inprogress-btn">
      <i className="fas fa-hourglass"></i>
      </button>
      <ReactTooltip id="registerTip" place="bottom" effect="solid">
        Take up task
      </ReactTooltip>

      <button data-tip data-for="abb" name="abandoned" onClick={completeHandler} className="abandon-btn" >
      <i className="fas fa-times-circle"></i>     
       </button>
       <ReactTooltip id="abb" place="bottom" effect="solid">
        Abandon task 🗙
      </ReactTooltip>

      <button data-tip data-for="completed" name="completed" onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <ReactTooltip id="completed" place="bottom" effect="solid">
        Complete task ✅
      </ReactTooltip>
   
      <button data-tip data-for="delete" onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
      <ReactTooltip id="delete" place="bottom" effect="solid">
        Delete task ❌
      </ReactTooltip>
    </div>
  );
};

export default Todo;
