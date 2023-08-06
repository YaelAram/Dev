import { FilterValues, TODO_FILTERS, ToDo } from "./";

export interface TodosState {
  activeTodos: number;
  addTodo: (title: string) => void;
  changeFilter: (filter: FilterValues) => void;
  completedTodos: number;
  deleteCompleted: () => void;
  filteredTodos: ToDo[];
  filterSelected: FilterValues;
  handleRemove: (id: string) => void;
  toggleTodo: (id: string) => void;
}

export const defaultValue: TodosState = {
  activeTodos: 0,
  addTodo: () => {},
  changeFilter: () => {},
  completedTodos: 0,
  deleteCompleted: () => {},
  filteredTodos: [],
  filterSelected: TODO_FILTERS.ALL,
  handleRemove: () => {},
  toggleTodo: () => {},
};
