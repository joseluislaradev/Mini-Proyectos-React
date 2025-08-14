import { Products } from "./components/Products.jsx";
import { Header } from "./components/Header.jsx";

import { products } from "./mocks/products.json";
import { Footer } from "./components/Footer.jsx";
import { Cart } from "./components/Cart.jsx";

import { IS_DEVELOPMENT } from "./config.js";

import { useFilters } from "./hooks/useFilters.js";
import { CartProvider } from "./context/cart.jsx";

export const App = () => {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <div>
        <Header />
        <Cart />
        <Products
          products={filteredProducts}
          onAddToCart={(product) => console.log("Added to cart:", product)}
        />
        {IS_DEVELOPMENT && <Footer />}
      </div>
    </CartProvider>
  );
};
