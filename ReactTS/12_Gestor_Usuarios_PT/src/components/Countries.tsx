import { useContext } from "react";
import { UsersContext } from "../context";

export const Countries = () => {
  const { countries, filterCountry, changeFilterCountry } =
    useContext(UsersContext);

  return (
    <select
      value={filterCountry}
      onChange={(evt) => changeFilterCountry(evt.target.value)}
    >
      <option value="all">All</option>
      {countries.map((country) => (
        <option value={country} key={country}>
          {country}
        </option>
      ))}
    </select>
  );
};
