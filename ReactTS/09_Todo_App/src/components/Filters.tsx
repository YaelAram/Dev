import { useContext } from "react";
import { FILTERS_BUTTONS, FilterValues, TodosState } from "../interfaces";
import { TodosContext } from "../context";

export const Filters: React.FC = () => {
  const { filterSelected, changeFilter } = useContext<TodosState>(TodosContext);

  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => (
        <li key={key}>
          <a
            className={filterSelected === key ? "selected" : ""}
            href={href}
            onClick={(event) => {
              event.preventDefault();
              changeFilter(key as FilterValues);
            }}
          >
            {literal}
          </a>
        </li>
      ))}
    </ul>
  );
};
