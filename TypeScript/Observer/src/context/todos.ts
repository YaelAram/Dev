import { getInstance } from "../utils";

export const KEY_STORE = "TODOS";

const storedState = JSON.parse(localStorage.getItem(KEY_STORE) ?? "[]");

export const todosContext = getInstance<string[]>(storedState);

export interface TodosType {
  getValue: () => string[];
  setState: (newState: string[]) => void;
}
