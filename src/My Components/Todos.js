import React from "react";
import Todo from "./Todo";

export default function Todos(props) {
  // if (!props.todos || props.todos.length === 0) {
  //   return <div>No todos found</div>;
  // }
  let myStyle = {
    minHeight: "70vh",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="">Todos List</h3>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <Todo todo={todo} key={todo.srn} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}
