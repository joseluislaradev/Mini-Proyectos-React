import { ClearCartIcon, CartIcon } from "./Icons.jsx";
import { useId } from "react";
import "./Cart.css";
import { useCart } from "../hooks/useCart.js";

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  console.log(cart);

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => {
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}</strong> - {product.price}
                </div>
                <footer>
                  <small>Qty: {product.quantity}</small>
                  <button
                    onClick={() => {
                      removeFromCart(product);
                    }}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <button
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    {" "}
                    +{" "}
                  </button>
                </footer>
              </li>
            );
          })}
        </ul>

        {cart.length > 0 && (
          <button
            onClick={() => {
              clearCart();
            }}
          >
            <ClearCartIcon />
          </button>
        )}

        {cart.length == 0 && <p>Sin elementos</p>}
      </aside>
    </>
  );
}
