import React from "react";

const Form = ({ setStatus, setInputText, inputText, todos, setTodos }) => {
  //To handle input text
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  //To handle submit text
  const submitTodoHandler = (e) => {
    e.preventDefault();
    console.log(inputText.trim(" "));

    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        pending: true,
        abandoned: false,
        inprogress: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };

  //Filter handling
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">Today`s Tasks</option>
          <option value="pending">Pending</option>
          <option value="abandoned">Abandoned</option>
          <option value="completed">Completed</option>
          <option value="inprogress">Inprogress</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
