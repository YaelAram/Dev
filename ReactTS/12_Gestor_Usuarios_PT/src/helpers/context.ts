import { Sort } from "../interfaces";
import { User } from "../services";

export interface UsersContextState {
  countries: string[];
  filterCountry: string;
  hasNextPage?: boolean;
  isLoading: boolean;
  isError: boolean;
  showColors: boolean;
  sorting: Sort;
  users: User[];
  changeFilterCountry: (country: string) => void;
  changeSort: (sort: Sort) => void;
  restoreInitialUsers: () => void;
  toggleShowColors: () => void;
  deleteUser: (id: string) => void;
  nextPage: () => void;
}

export const initialContext: UsersContextState = {
  countries: [],
  filterCountry: "all",
  hasNextPage: true,
  isLoading: false,
  isError: false,
  showColors: false,
  sorting: Sort.NONE,
  users: [],
  changeFilterCountry: () => {},
  changeSort: () => {},
  restoreInitialUsers: () => {},
  toggleShowColors: () => {},
  deleteUser: () => {},
  nextPage: () => {},
};
