import { use } from 'react'
import './Footer.css'
import { useFilters } from '../hooks/useFilters'

export function Footer () {
  // const { filters } = useFilters()

  const { filters } = useFilters()

  return (
    <footer className='footer'>
      <p>Filtros Actuales:</p>
      <ul>
        <li>Precio mínimo: {filters.minPrice}</li>
        <li>Categoría: {filters.category}</li>
      </ul>
    </footer>
  )
}
