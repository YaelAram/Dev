import { useContext } from "react";

import PropTypes from "prop-types";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";

import { CartContext } from "../context";
import "./Products.css";

export function Products({ products }) {
  const { isProductInCart, addToCart, deleteFromCart } =
    useContext(CartContext);

  const handleButtonClick = (isInCart, product) => {
    if (isInCart) deleteFromCart(product.id);
    else addToCart(product, 1);
  };

  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const isInCart = isProductInCart(product.id);

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={`${product.title} thumbnail`} />
              <div>
                <strong>
                  {product.title} - ${product.price}
                </strong>
              </div>
              <div>
                <button
                  type="button"
                  title={`Add ${product.title} product to cart`}
                  onClick={() => handleButtonClick(isInCart, product)}
                >
                  {isInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
};
