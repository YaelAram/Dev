import { createContext, useReducer } from "react";

import {
  ActionType,
  FilterValues,
  TODO_FILTERS,
  TodosState,
  defaultValue,
} from "../interfaces";
import { initialState, todosReducer, getTodosState } from "../helpers";

export const TodosContext = createContext<TodosState>(defaultValue);

interface Props {
  children: React.ReactNode;
}

export const TodosProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState, () =>
    getTodosState()
  );

  const addTodo = (title: string) => {
    dispatch({ type: ActionType.ADD_TODO, payload: title });
  };

  const changeFilter = (filter: FilterValues) => {
    dispatch({ type: ActionType.CHANGE_FILTER, payload: filter });
  };

  const deleteCompleted = () => {
    dispatch({ type: ActionType.REMOVE_COMPLETED });
  };

  const handleRemove = (id: string): void => {
    dispatch({ type: ActionType.REMOVE_TODO, payload: id });
  };

  const toggleTodo = (id: string): void => {
    dispatch({ type: ActionType.TOGGLE_TODO, payload: id });
  };

  const activeTodos = state.todos.filter((todo) => !todo.completed).length;
  const completedTodos = state.todos.length - activeTodos;

  const filteredTodos = state.todos.filter((todo) => {
    return (
      state.filterSelected === TODO_FILTERS.ALL ||
      (state.filterSelected === TODO_FILTERS.ACTIVE && !todo.completed) ||
      (state.filterSelected === TODO_FILTERS.COMPLETED && todo.completed)
    );
  });

  return (
    <TodosContext.Provider
      value={{
        activeTodos,
        addTodo,
        changeFilter,
        completedTodos,
        deleteCompleted,
        filteredTodos,
        filterSelected: state.filterSelected,
        handleRemove,
        toggleTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
