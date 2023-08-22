import { useInfiniteQuery } from "@tanstack/react-query";
import { createContext, useEffect, useMemo, useReducer, useRef } from "react";
import {
  UsersContextState,
  initialContext,
  initialState,
  usersReducer,
} from "../helpers";
import { Action, Sort } from "../interfaces";
import { User, UserKeys, UsersInfo, getUsers } from "../services";

export const UsersContext = createContext<UsersContextState>(initialContext);

interface Props {
  children: React.ReactNode;
}

export const UsersProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  const initialUsers = useRef<User[]>([]);

  const { isLoading, isError, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery<UsersInfo>(["users"], getUsers, {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    });

  useEffect(() => {
    if (data) {
      const users: User[] = data.pages?.flatMap((page) => page.users) ?? [];
      initialUsers.current = users;
      dispatch({ type: Action.LOAD_USERS, payload: users });
    }
  }, [data]);

  const countries = useMemo<string[]>(() => {
    const countrySet = new Set(state.users.map(({ country }) => country));
    const countries = Array.from(countrySet);
    countries.sort((country1, country2) => country1.localeCompare(country2));
    return countries;
  }, [state.users]);

  const toggleShowColors = () => dispatch({ type: Action.TOGGLE_SHOW_COLORS });

  const deleteUser = (id: string) => {
    dispatch({ type: Action.DELETE_USER, payload: id });
  };

  const restoreInitialUsers = () => {
    dispatch({ type: Action.LOAD_USERS, payload: initialUsers.current });
  };

  const changeFilterCountry = (country: string) => {
    dispatch({ type: Action.CHANGE_FILTER_COUNTRY, payload: country });
  };

  const changeSort = (sort: Sort) => {
    dispatch({ type: Action.CHANGE_SORTING, payload: sort });
  };

  const nextPage = () => {
    fetchNextPage();
  };

  const filteredUsers = useMemo(() => {
    return state.filterCountry === "all"
      ? state.users
      : state.users.filter((user) => user.country === state.filterCountry);
  }, [state.filterCountry, state.users]);

  const sortedUsers = useMemo(() => {
    if (state.sorting === Sort.NONE) return filteredUsers;
    return filteredUsers.toSorted((user1, user2) =>
      user1[state.sorting as UserKeys].localeCompare(
        user2[state.sorting as UserKeys]
      )
    );
  }, [state.sorting, filteredUsers]);

  return (
    <UsersContext.Provider
      value={{
        countries,
        filterCountry: state.filterCountry,
        hasNextPage: hasNextPage,
        isLoading,
        isError,
        showColors: state.showColors,
        sorting: state.sorting,
        users: sortedUsers,
        changeFilterCountry,
        changeSort,
        restoreInitialUsers,
        toggleShowColors,
        deleteUser,
        nextPage,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
