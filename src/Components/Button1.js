import React from "react";

function Button(props) {

  const deleteHandler = () => {
    props.setTodos(
      props.todos.filter((element) => element.id !== props.todo.id)
    );
    props.setDeletedItems((prevState) => {
      return [...prevState, props.todo];
    });
  };

  const completeHandler = () => {
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todos">
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Button;
