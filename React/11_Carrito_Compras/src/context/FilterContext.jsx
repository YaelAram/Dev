import { createContext, useCallback, useState } from "react";
import PropTypes from "prop-types";

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const updateMinPrice = useCallback((newMinPrice) => {
    setFilters((prevState) => ({
      ...prevState,
      ["minPrice"]: newMinPrice,
    }));
  }, []);

  const updateCategory = useCallback((newCategory) => {
    setFilters((prevState) => ({
      ...prevState,
      ["category"]: newCategory,
    }));
  }, []);

  return (
    <FiltersContext.Provider
      value={{ filters, updateCategory, updateMinPrice }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

FiltersProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
