import { Action, ActionType, Sort } from "../interfaces";
import { User } from "../services";

export interface UsersState {
  users: User[];
  showColors: boolean;
  sorting: Sort;
  filterCountry: string;
}

export const initialState = {
  users: [],
  showColors: false,
  sorting: Sort.NONE,
  filterCountry: "all",
};

export const usersReducer = (
  state: UsersState,
  action: ActionType
): UsersState => {
  switch (action.type) {
    case Action.CHANGE_FILTER_COUNTRY: {
      return {
        ...state,
        filterCountry: action.payload,
      };
    }
    case Action.CHANGE_SORTING: {
      const sorting =
        state.sorting === action.payload ? Sort.NONE : action.payload;

      return {
        ...state,
        sorting,
      };
    }
    case Action.DELETE_USER: {
      const newUsers = state.users.filter((user) => user.id !== action.payload);

      return {
        ...state,
        users: newUsers,
      };
    }
    case Action.TOGGLE_SHOW_COLORS: {
      return {
        ...state,
        showColors: !state.showColors,
      };
    }
    case Action.LOAD_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
