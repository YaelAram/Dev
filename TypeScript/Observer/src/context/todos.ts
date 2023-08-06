import { createValue } from "../utils";

export const KEY_STORE = "TODOS";

const storedState: string[] = JSON.parse(
  localStorage.getItem(KEY_STORE) ?? "[]"
);
export const state = createValue<string[]>(storedState, KEY_STORE);
export type StateType = typeof state;
