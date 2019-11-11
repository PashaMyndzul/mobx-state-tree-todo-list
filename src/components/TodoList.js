import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => (
  <React.Fragment>
    {props.todoArray.map((todo, index) => (
      <TodoItem key={index} handleRemove={props.handleRemove}>{todo}</TodoItem>
    ))}
  </React.Fragment>
);



export default TodoList;