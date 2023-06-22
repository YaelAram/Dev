import { ToDo, ToDoState } from "../interfaces/ToDo";

type ToDoActions = { type: 'addToDo', payload: ToDo } | { type: 'toggleToDo', payload: { id: string } };

export const toDoReducer = (state: ToDoState, { type, payload }: ToDoActions): ToDoState => {
  switch (type) {
    case 'addToDo':
      return {
        ...state,
        toDos: [...state.toDos, payload]
      };
    case 'toggleToDo':
      return {
        ...state,
        toDos: state.toDos.map(({ ...toDo }) => {
          if (toDo.id === payload.id) toDo.completed = !toDo.completed;
          return toDo;
        })
      };
    default:
      return state;
  }
};
