import { use } from "react";
import "./Footer.css";
import { useFilters } from "../hooks/useFilters";
import { useCart } from "../hooks/useCart";

export function Footer() {
  // const { filters } = useFilters()

  const { filters } = useFilters();
  const { cart } = useCart();

  return (
    <footer className="footer">
      <p>Filtros Actuales:</p>
      <ul>
        <li>Precio mínimo: {filters.minPrice}</li>
        <li>Categoría: {filters.category}</li>
      </ul>
      <p>Productos en el carrito: {JSON.stringify(cart)}</p>
    </footer>
  );
}
