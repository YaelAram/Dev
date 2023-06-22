import { createContext } from 'react';
import { ToDo, ToDoState } from '../interfaces/ToDo';

export type ToDoContextProps = {
  toDoState: ToDoState;
  toggleToDo: (id: string) => void;
  addToDo: (toDo: ToDo) => void;
};

export const ToDoContext = createContext<ToDoContextProps>({} as ToDoContextProps);
