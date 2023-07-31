import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

import { cartReducer, initialState, actionTypes } from "../helpers/cartReducer";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product, numberOfUnits) =>
    dispatch({ type: actionTypes.add, payload: { product, numberOfUnits } });

  const deleteFromCart = (productId) =>
    dispatch({ type: actionTypes.delete, payload: { productId } });

  const clearCart = () => dispatch({ type: actionTypes.clear });

  const isProductInCart = (productId) => cart.has(productId);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, deleteFromCart, clearCart, isProductInCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
