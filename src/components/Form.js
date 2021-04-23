import React from 'react'

const Form = ({setInputText,inputText, todos, setTodos}) => {

  //To handle input text
  const inputTextHandler = e => {
    setInputText(e.target.value)
  }

  //To handle submit text
  const submitTodoHandler = (e) => {
    e.preventDefault()
    setTodos([
      ...todos, {
        text: inputText,
        completed: false,
        id: Math.random()*1000
      }
    ])
  }
    return (
        <form>
        <input onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    )
}

export default Form
