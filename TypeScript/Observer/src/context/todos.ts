import { Observable } from "../utils";

export const KEY_STORE = "TODOS";

const storedState: string[] = JSON.parse(
  localStorage.getItem(KEY_STORE) ?? "[]"
);
export const state = new Observable<string[]>(storedState, KEY_STORE);
