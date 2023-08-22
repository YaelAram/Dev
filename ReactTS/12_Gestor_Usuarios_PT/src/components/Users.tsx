import { useContext } from "react";
import { ListOfUsers } from ".";
import { UsersContext } from "../context";
export const Users = () => {
  const { users, isError, isLoading, nextPage, hasNextPage } =
    useContext(UsersContext);

  return (
    <>
      {users.length > 0 && <ListOfUsers />}
      {isLoading && <strong>Loading...</strong>}
      {isError && <strong>There was a problem</strong>}
      {!isError && users.length === 0 && <strong>No users to show</strong>}
      {!isLoading && !isError && hasNextPage === true && (
        <button type="button" onClick={nextPage}>
          More users
        </button>
      )}
      {!isLoading && !isError && hasNextPage === false && (
        <p>No more results to show</p>
      )}
    </>
  );
};
