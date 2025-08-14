import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";

export function Products({ products, onAddToCart }) {
  const { cart, addToCart, removeFromCart } = useCart();

  const estaEnCarritoRevisar = (product) => {
    return cart.some((item) => item.id == product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const estaEnCarrito = estaEnCarritoRevisar(product);
          return (
            <li className="product" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong>
              </div>
              <p>${product.price.toFixed(2)}</p>
              <button
                style={{
                  backgroundColor: estaEnCarrito ? "red" : "blue",
                  color: "white",
                }}
                onClick={() =>
                  estaEnCarrito ? removeFromCart(product) : addToCart(product)
                }
              >
                {estaEnCarrito ? <RemoveFromCartIcon /> : <AddToCartIcon />}
              </button>
            </li>
          );
        })}
        {products.length === 0 && <p>No se encontraron productos</p>}
      </ul>
    </main>
  );
}
