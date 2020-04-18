import React from "react";
import { Todo } from "./types";

interface TodoListItemProps {
  todo: Todo;
}

// React.FunctionComponent can be refactored as => React.FC
export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.complete} />
        {todo.text}
      </label>
    </li>
  );
};