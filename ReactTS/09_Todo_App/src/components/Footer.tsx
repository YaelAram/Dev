import { useContext } from "react";

import { Filters } from "./";
import { TodosContext } from "../context";
import { TodosState } from "../interfaces";

export const Footer: React.FC = () => {
  const { activeTodos, completedTodos, deleteCompleted } =
    useContext<TodosState>(TodosContext);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodos}</strong> items left
      </span>
      <Filters />
      {completedTodos > 0 && (
        <button className="clear-completed" onClick={deleteCompleted}>
          Delete completed
        </button>
      )}
    </footer>
  );
};
