import { Sort } from ".";
import { User } from "../services";

export enum Action {
  LOAD_USERS = "load-users",
  DELETE_USER = "delete-user",
  TOGGLE_SHOW_COLORS = "toggle-show-colors",
  CHANGE_SORTING = "change-sorting",
  CHANGE_FILTER_COUNTRY = "change-filter-country",
}

export type ActionType =
  | { type: Action.DELETE_USER; payload: string }
  | { type: Action.TOGGLE_SHOW_COLORS }
  | { type: Action.CHANGE_FILTER_COUNTRY; payload: string }
  | { type: Action.CHANGE_SORTING; payload: Sort }
  | { type: Action.LOAD_USERS; payload: User[] };
