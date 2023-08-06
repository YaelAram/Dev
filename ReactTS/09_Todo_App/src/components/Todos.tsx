import { Todo } from "./";
import { useContext } from "react";
import { TodosContext } from "../context";
import { TodosState } from "../interfaces";

export const Todos: React.FC = () => {
  const { filteredTodos } = useContext<TodosState>(TodosContext);

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => {
        return (
          <li className={todo.completed ? "completed" : ""} key={todo.id}>
            <Todo todo={todo} />
          </li>
        );
      })}
    </ul>
  );
};
