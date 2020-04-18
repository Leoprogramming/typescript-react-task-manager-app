import React from 'react';
import { TodoListItem } from './TodoListItem';

const todos: Array<Todo> = [
  { text: "Study", complete: true }, 
  { text: "Code", complete: false }
];

const App: React.FC = () => {
  return (
    <React.Fragment>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </React.Fragment>
  );
};

export default App
