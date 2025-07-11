import './Products.css'
import { AddToCartIcon } from './Icons.jsx'

export function Products ({ products, onAddToCart }) {
  return (
    <main className='products'>
      <ul>
        {products.map(product => (
          <li className='product' key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong>
            </div>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => onAddToCart(product)}>
              <AddToCartIcon />
              Add to Cart
            </button>
          </li>
        ))}
        {products.length === 0 && <p>No se encontrarón productos</p>}
      </ul>
    </main>
  )
}
