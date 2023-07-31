import { useContext } from "react";

import { useFilters } from "./hooks";
import { Cart, Products, Header } from "./components";
import { CartProvider, ProductsContext } from "./context";

function App() {
  const { products } = useContext(ProductsContext);
  const { filterProducts } = useFilters();

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filterProducts(products)} />
    </CartProvider>
  );
}

export default App;
