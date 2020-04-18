import React from "react";

interface TodoListItemProps {
  todo: {
    text: string,
    complete: boolean;
  };
}

// React.FunctionComponent can be refactored as => React.FC
export const TodoListItem: React.FC = props => {
  return <li>Content</li>;
};