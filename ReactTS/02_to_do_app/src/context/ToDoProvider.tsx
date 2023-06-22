import { useReducer } from "react";
import { ToDoContext } from "./ToDoContext";
import { toDoReducer } from "./toDoReducer";
import { ToDo, ToDoState } from "../interfaces/ToDo";

const initialState: ToDoState = {
  toDoCount: 2,
  completed: 0,
  pending: 2,
  toDos: [
    { id: '1', desc: 'Call mom', completed: false },
    { id: '2', desc: 'Call dad', completed: false }
  ]
};

interface ToDoProviderProps {
  children: JSX.Element | JSX.Element[]
};

export default function ToDoProvider({ children }: ToDoProviderProps) {
  const [toDoState, dispatch] = useReducer(toDoReducer, initialState);

  const toggleToDo = (id: string) => {
    dispatch({ type: 'toggleToDo', payload: { id } });
  };

  const addToDo = (toDo: ToDo) => {
    dispatch({ type: 'addToDo', payload: toDo });
  };

  return (
    <ToDoContext.Provider value={{ toDoState, toggleToDo, addToDo }}>
      {children}
    </ToDoContext.Provider>
  );
};
