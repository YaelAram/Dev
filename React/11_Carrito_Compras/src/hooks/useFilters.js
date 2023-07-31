import { useContext } from "react";
import { FiltersContext } from "../context/FilterContext";

export const useFilters = () => {
  const { filters } = useContext(FiltersContext);

  const filterProducts = (products = []) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return {
    filterProducts,
  };
};
