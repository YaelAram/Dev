import { Sort } from "../interfaces";
import { User } from "../services";

export interface UsersContextState {
  countries: string[];
  filterCountry: string;
  showColors: boolean;
  sorting: Sort;
  users: User[];
  changeFilterCountry: (country: string) => void;
  changeSort: (sort: Sort) => void;
  restoreInitialUsers: () => void;
  toggleShowColors: () => void;
  deleteUser: (id: string) => void;
}

export const initialContext: UsersContextState = {
  countries: [],
  filterCountry: "all",
  showColors: false,
  sorting: Sort.NONE,
  users: [],
  changeFilterCountry: () => {},
  changeSort: () => {},
  restoreInitialUsers: () => {},
  toggleShowColors: () => {},
  deleteUser: () => {},
};
