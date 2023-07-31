import { useCallback, useContext } from "react";

import { FiltersContext, ProductsContext } from "../context";

export const useFilterControls = () => {
  const { filters, updateCategory, updateMinPrice } =
    useContext(FiltersContext);
  const { maxPrice, categories } = useContext(ProductsContext);

  const handleChangeMinPrice = useCallback(
    (evt) => {
      const newMinPrice = evt.target.value;
      updateMinPrice(Number(newMinPrice));
    },
    [updateMinPrice]
  );

  const handleChangeCategory = useCallback(
    (evt) => {
      const newCategory = evt.target.value;
      updateCategory(newCategory);
    },
    [updateCategory]
  );

  return {
    filters,
    categories,
    maxPrice,
    handleChangeCategory,
    handleChangeMinPrice,
  };
};
