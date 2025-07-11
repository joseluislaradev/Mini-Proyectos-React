import { Filters } from './Filters.jsx'
import './Header.css'

export function Header () { // Esto es llamado promp drilling, que es un prop que se pasa desde el padre al hijo
  return (
    <header>
      <h1>Shopping Cart 🛒 </h1>
      <p>Bienevenido a la página de compras más grande de internet!</p>
      <Filters />
    </header>
  )
}
