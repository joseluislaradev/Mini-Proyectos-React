import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from './Icons.jsx'
import { useId } from 'react'
import './Cart.css'

export function Cart () {
  const cartCheckboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img src='https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp' alt='Manzana' />
            <div>
              <strong>iPhone</strong> - $1499
            </div>
            <footer>
              <small>
                Qty: 1
              </small>
              <button> + </button>
            </footer>
          </li>
        </ul>
      </aside>

    </>
  )
}
