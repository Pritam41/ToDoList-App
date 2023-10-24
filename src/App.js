import "./App.css";
import Header from "./My Components/Header";
import Todos from "./My Components/Todos";
import Footer from "./My Components/Footer";
import AddTodo from "./My Components/AddTodo";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App(todo) {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let srn;
    if (todos.length == 0) {
      srn = 1;
    } else {
      srn = todos[todos.length - 1].srn + 1;
    }

    const myTodo = {
      srn: srn,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My ToDosList" searchBar={false} />
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
