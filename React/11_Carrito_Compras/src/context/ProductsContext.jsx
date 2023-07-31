import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

import { products as initialProducts } from "../mocks/products.json";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products] = useState(initialProducts);

  const maxPrice = useMemo(() => {
    const prices = products.map((product) => product.price);
    return Math.max(...prices);
  }, [products]);

  const categories = useMemo(() => {
    const setCategories = new Set();
    products.forEach((product) => setCategories.add(product.category));
    return Array.from(setCategories);
  }, [products]);

  return (
    <ProductsContext.Provider value={{ products, maxPrice, categories }}>
      {children}
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
