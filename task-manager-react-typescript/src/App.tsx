import React from 'react';
import { TodoListItem } from './TodoListItem';

const todos: Array<Todo> = [
  { text: "Study", complete: true }, 
  { text: "Code", complete: false }
];

const App: React.FC = () => {
  return <TodoListItem todo={todos[0]} />;
};

export default App
