import { useContext } from "react";
import { UsersContext } from "../context";
import { Sort } from "../interfaces";
import { Countries } from "./Countries";

export const Controllers = () => {
  const {
    showColors,
    sorting,
    changeSort,
    restoreInitialUsers,
    toggleShowColors,
  } = useContext(UsersContext);

  return (
    <section>
      <button type="button" onClick={toggleShowColors}>
        {showColors ? "Discolor rows" : "Color rows"}
      </button>
      <button type="button" onClick={() => changeSort(Sort.COUNTRY)}>
        {sorting === Sort.COUNTRY ? "Disorder countries" : "Order By Country"}
      </button>
      <button type="button" onClick={restoreInitialUsers}>
        Restore Users
      </button>
      <Countries />
    </section>
  );
};
