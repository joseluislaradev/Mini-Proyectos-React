import './Filters.css'
import { useState, useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'

// UseID es un hook que genera un id unico para cada componente, esto es util para los labels y los inputs
// Esto es util para que no tengamos que preocuparnos de que el id sea unico, ya que aveces si lo ponemos manual y tenemos muchos componentes puede que se repitan sin querer y la liemos

export function Filters () {
  const { filters, setFilters } = useFilters() // Importamos el hook que nos da acceso a los filtros y la funcion para setearlos

  const minPrecioId = useId() // Genera un id unico para el input de precio minimo
  const categoriaId = useId() // Genera un id unico para el select de categoria

  // Esto funciona pero huele mal puesto que  estamos pasando el estado nativa del padre
  // ESto hace que tengamos que saber el contrato de como esta el estado del padre, ademas que el hijo sabe que es su estado y no deberia
  // LO mejor es una pequeña abstarccion entre el padre y el hijo
  // ESte hook no sirve para key en mapeos, ya que no es un id unico, es un id que se genera cada vez que se renderiza el componente pero es el mismo porque asigna el id dependiendo de la psiciion del hook en el componente, que sabemos que siempre es la misma.
  const handlePriceChange = (event) => {
    const newPrice = event.target.value
    setFilters((filters) => ({
      ...filters,
      minPrice: newPrice
    }))
  }

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value
    setFilters((filters) => ({
      ...filters,
      category: newCategory
    }))
  }

  return (
    <section className='filters'>

      <div>
        <label htmlFor={minPrecioId}>Precio minimo</label>
        <input type='range' id={minPrecioId} min='0' max='1000' onChange={handlePriceChange} value={filters.minPrice} />
        <span>{filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoriaId}>Categoria:</label>
        <select onChange={handleCategoryChange} id={categoriaId}>
          <option value='all'>Todo</option>
          <option value='groceries'>Golosinas</option>
          <option value='electronics'>Electronicos</option>
          <option value='clothing'>Ropa</option>
        </select>
      </div>

    </section>
  )
}
