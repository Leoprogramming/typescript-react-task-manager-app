import React, { useState } from 'react';
import { TodoList } from "./TodoList";
import { AddTodoForm } from './AddTodoForm';

const initialTodos: Array<Todo> = [
  { text: "Study", complete: true }, 
  { text: "Code", complete: false }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodos);
  };

  const addTodo: AddTodo = newTodo => {
    setTodos([...todos, {  text: newTodo, complete: false  }]);
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App
