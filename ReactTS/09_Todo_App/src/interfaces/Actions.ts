import { FilterValues } from ".";

export enum ActionType {
  ADD_TODO = "add-todo",
  REMOVE_TODO = "remove-todo",
  TOGGLE_TODO = "toggle-todo",
  REMOVE_COMPLETED = "remove-completed",
  CHANGE_FILTER = "change-filter",
}

export type TodoAction =
  | { type: ActionType.ADD_TODO; payload: string }
  | { type: ActionType.CHANGE_FILTER; payload: FilterValues }
  | { type: ActionType.REMOVE_COMPLETED }
  | { type: ActionType.REMOVE_TODO; payload: string }
  | { type: ActionType.TOGGLE_TODO; payload: string };
