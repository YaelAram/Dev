import { useContext } from "react";
import { ToDo } from "../interfaces/ToDo"
import { ToDoContext } from "../context/ToDoContext";

interface ToDoItemProps {
  toDo: ToDo
};

export function ToDoItem({ toDo }: ToDoItemProps) {
  const { toggleToDo } = useContext(ToDoContext);
  const { id, desc, completed } = toDo;

  const handleToggle = () => {
    toggleToDo(id);
  };

  return (
    <li onDoubleClick={handleToggle} style={{
      cursor: 'pointer',
      textDecoration: (completed) ? 'line-through' : ''
    }}>
      {desc}
    </li>
  )
};
