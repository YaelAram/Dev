export const CART_KEY = "CART";
export const initialState =
  new Map(JSON.parse(localStorage.getItem(CART_KEY))) ?? new Map();

export const actionTypes = {
  add: "ADD_TO_CART",
  delete: "DELETE_FROM_CART",
  clear: "CLEAR_CART",
};

const updateCartLocalStorage = (state) => {
  localStorage.setItem(CART_KEY, JSON.stringify(Array.from(state.entries())));
};

export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.add: {
      const newState = structuredClone(state);
      const { product, numberOfUnits } = payload;
      if (newState.has(product?.id)) {
        const productToUpdate = newState.get(product.id);
        productToUpdate.numberOfUnits += numberOfUnits;
      } else newState.set(product.id, { product, numberOfUnits });

      updateCartLocalStorage(newState);
      return newState;
    }
    case actionTypes.delete: {
      const { productId } = payload;
      if (state.has(productId)) {
        const newState = structuredClone(state);
        newState.delete(productId);

        updateCartLocalStorage(newState);
        return newState;
      }
      return state;
    }
    case actionTypes.clear: {
      const newState = new Map();
      updateCartLocalStorage(newState);
      return newState;
    }
    default: {
      return state;
    }
  }
};
