import React from "react";

function FormToDoList(props) {
  const SubmitHandler = (e) => {
    e.preventDefault();
    if(props.inputText.trim().length!==0){
    props.setTodos([
      ...props.todos,
      { text: props.inputText, completed: false, id: Math.random() * 1000 },
    ]);
  }
  else{
    alert("Input text cannot be empty or contain only spaces")
  }
    props.setInputText("");
  };

  const filterHandler=(e) =>{
  props.setFilter(e.target.value)
  }

  return (
    <form onSubmit={SubmitHandler}>
      <input
        value={props.inputText}
        onChange={(e) => props.setInputText(e.target.value)}
        type="text"
      ></input>
      <button type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={filterHandler} name="todos" className="filter-todo">
          <option value="All">All</option>
          <option value="Incomplete">Incomplete</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </form>
  );
}

export default FormToDoList;
