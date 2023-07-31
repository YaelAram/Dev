import { useContext, useId } from "react";

import { CartIcon, ClearCartIcon } from "./Icons";

import "./Cart.css";
import { CartContext } from "../context";

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, addToCart, clearCart, deleteFromCart } =
    useContext(CartContext);

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />
      <aside className="cart">
        <ul>
          {Array.from(cart.values()).map(({ product, numberOfUnits }) => {
            return (
              <li key={product.id}>
                <img
                  src={product.thumbnail}
                  alt={`${product.title} thumbnail`}
                />
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <footer>
                  <small>Units: {numberOfUnits}</small>
                  <button
                    type="button"
                    onClick={() => addToCart(product, 1)}
                    disabled={numberOfUnits === product.stock}
                  >
                    +1
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteFromCart(product.id)}
                  >
                    Remove
                  </button>
                </footer>
              </li>
            );
          })}
        </ul>
        <button type="button" className="btn" onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
