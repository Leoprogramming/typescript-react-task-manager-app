import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = props ({ todos }) => {
  return ( 
    <ul>
      {todos.map(todo => {
      return <TodoListItem todo={todo} />;
      })}
    </ul>
  );
}