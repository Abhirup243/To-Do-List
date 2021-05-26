import React from 'react'
import Button1 from './Button1'

function ToDoList(props) {
    const undoHandler=()=>{
        if(props.deletedItems.length===0)
        {
            alert("Nothing to undo!")
        }
        else{
        props.setTodos([...props.todos,props.deletedItems.pop()])
        }
    }
    const clearListHandler=()=>{
        if(props.todos.length===0){
            alert("Nothing to delete :)")
        }
        else if(window.confirm("Are you sure?")){
            alert("Consider it done!!")
        props.setTodos([])
        }
        else{
            alert("The list is intact!")
        }
    }
    return (
        <div className="todo-container">
            <ul className="todo-List">
             {props.filteredTodos.map(
                  (todo)=>
                  <li className={`todo-item ${todo.completed ? "completed" : ""}`} key={todo.id}>
                      <b>{todo.text}</b>
                  <Button1 todo={todo} todos={props.todos} setTodos={props.setTodos} 
                  deletedItems={props.deletedItems} setDeletedItems={props.setDeletedItems}/>
                  </li>
              )}
               
            </ul>
            
            <button onClick={undoHandler}>Undo</button>
            <button onClick={clearListHandler}>Clear List</button>
        </div>
    )
}

export default ToDoList
