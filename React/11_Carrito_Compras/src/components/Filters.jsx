import { useId } from "react";

import { useFilterControls } from "../hooks";

import "./Filters.css";

export function Filters() {
  const {
    filters,
    categories,
    maxPrice,
    handleChangeCategory,
    handleChangeMinPrice,
  } = useFilterControls();
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId} title={`Min price to filter`}>
          Price
        </label>
        <input
          type="range"
          name="priceBox"
          id={minPriceFilterId}
          onChange={handleChangeMinPrice}
          value={filters?.minPrice}
          max={maxPrice}
        />
        <span>{filters?.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId} title="Category to filter ">
          Category
        </label>
        <select
          name="category"
          id={categoryFilterId}
          onChange={handleChangeCategory}
        >
          <option value="all" defaultValue={true}>
            ALL
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.toUpperCase().replaceAll("-", " ")}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
