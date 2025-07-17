import { createContext, useState } from 'react'

// el useContext es una forma de pasar datos a traves de la jerarquia de componentes sin tener que pasar props manualmente en cada nivel
// ES algo que esta completamente separado de nuestor arbol de componenetes y puede accdeder cualquiera que lo necesite
// cuanod usamos useContext, primero creamos el contexto (lo que se consume), proveemos el cotexto (indicamos quien puede acceder) y consumimos el contexto (lo que lo usa)
// useCOntext como estado global esta pensado para estados que no cambian mucho, como el idioma, el tema, etc. y que cambian muchas cosas de la aplicacion.

// Este es el contexto que vamos a consumir
export const FilterContext = createContext()

// Este es el proveedor del contexto, que es el que va a proveer los datos a los componentes que lo consuman
export function FilterProvider ({ children }) {
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: 'all'
  })

  return (
    <FilterContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FilterContext.Provider>
  )
}
