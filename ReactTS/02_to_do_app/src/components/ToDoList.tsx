import { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";
import { ToDo } from "../interfaces/ToDo";
import { ToDoItem } from "./ToDoItem";

export function ToDoList() {
  const { toDoState } = useContext(ToDoContext);
  const { toDos } = toDoState;

  return (
    <ul>
      {toDos.map((toDo: ToDo) => <ToDoItem key={toDo.id} toDo={toDo} />)}
    </ul>
  );
};
