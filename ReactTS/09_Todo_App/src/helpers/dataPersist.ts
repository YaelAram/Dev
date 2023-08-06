import { TodosState, initialState } from "./todosReducer";

const STATE_KEY = "todos-state";

export const saveTodosState = (state: TodosState) => {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
};

export const getTodosState = (): TodosState => {
  const state: TodosState | null = JSON.parse(
    localStorage.getItem(STATE_KEY) ?? "null"
  );
  return state ?? initialState;
};
