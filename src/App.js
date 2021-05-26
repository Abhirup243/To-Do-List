import React, { useState, useEffect } from "react";
import FormToDoList from "./Components/FormToDoList";
import ToDoList from "./Components/ToDoList";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [deletedItems, setDeletedItems] = useState([]);

  useEffect(() => {
    filterTodoHandler();
  }, [todos, filter]);


  const filterTodoHandler = () => {
    switch (filter) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;

      case "Incomplete":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>ToDo-List </h1>
      </header>
      <FormToDoList
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        filter={filter}
        setFilter={setFilter}
      />
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        deletedItems={deletedItems}
        setDeletedItems={setDeletedItems}
      />
      <Footer />
    </div>
  );
}

export default App;
