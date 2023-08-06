import {
  FilterValues,
  TODO_FILTERS,
  ToDo,
  TodoAction,
  ActionType,
} from "../interfaces";

import { saveTodosState } from "./";

export interface TodosState {
  todos: ToDo[];
  filterSelected: FilterValues;
}

export const initialState: TodosState = {
  todos: [],
  filterSelected: TODO_FILTERS.ALL,
};

export const todosReducer = (
  state: TodosState,
  action: TodoAction
): TodosState => {
  switch (action.type) {
    case ActionType.ADD_TODO: {
      const newTodo: ToDo = {
        id: crypto.randomUUID(),
        title: action.payload,
        completed: false,
      };

      const todos = [...state.todos, newTodo];
      const newState = {
        ...state,
        todos,
      };

      saveTodosState(newState);

      return newState;
    }
    case ActionType.CHANGE_FILTER: {
      const newState = {
        ...state,
        filterSelected: action.payload,
      };

      saveTodosState(newState);

      return newState;
    }
    case ActionType.REMOVE_COMPLETED: {
      const todos = state.todos.filter((todo) => !todo.completed);
      const newState = {
        ...state,
        todos,
      };

      saveTodosState(newState);

      return newState;
    }
    case ActionType.REMOVE_TODO: {
      const todos = state.todos.filter((todo) => todo.id !== action.payload);
      const newState = {
        ...state,
        todos,
      };

      saveTodosState(newState);

      return newState;
    }
    case ActionType.TOGGLE_TODO: {
      const todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });

      const newState = {
        ...state,
        todos,
      };

      saveTodosState(newState);

      return newState;
    }
    default: {
      return state;
    }
  }
};
