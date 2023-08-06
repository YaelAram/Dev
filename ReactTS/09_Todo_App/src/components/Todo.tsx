import React, { useContext } from "react";
import { ToDo, TodosState } from "../interfaces";
import { TodosContext } from "../context";

interface Props {
  todo: ToDo;
}

export const Todo: React.FC<Props> = ({ todo }) => {
  const { id, title, completed } = todo;
  const { toggleTodo, handleRemove } = useContext<TodosState>(TodosContext);

  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <label>{title}</label>
      <button
        type="button"
        className="destroy"
        onClick={() => handleRemove(id)}
      />
    </div>
  );
};
