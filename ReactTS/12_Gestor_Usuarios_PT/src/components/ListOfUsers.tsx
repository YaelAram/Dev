import { useContext } from "react";
import { UsersContext } from "../context";
import { Sort } from "../interfaces";

export const ListOfUsers = () => {
  const { users, showColors, deleteUser, changeSort } =
    useContext(UsersContext);

  return (
    <table className="users-table">
      <thead>
        <tr>
          <th>Picture</th>
          <th className="order-column" onClick={() => changeSort(Sort.NAME)}>
            Name
          </th>
          <th
            className="order-column"
            onClick={() => changeSort(Sort.LAST_NAME)}
          >
            Last Name
          </th>
          <th className="order-column" onClick={() => changeSort(Sort.COUNTRY)}>
            Country
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, name, lastName, picture, country }, index) => {
          const color = index % 2 === 0 ? "#333" : "#555";
          const backgroundColor = showColors ? color : "transparent";

          return (
            <tr key={id} style={{ backgroundColor }}>
              <td>
                <img
                  src={picture}
                  alt={`${name} ${lastName} photo`}
                  className="profile-img"
                />
              </td>
              <td>{name}</td>
              <td>{lastName}</td>
              <td>{country}</td>
              <td>
                <button type="button" onClick={() => deleteUser(id)}>
                  Delete User
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
