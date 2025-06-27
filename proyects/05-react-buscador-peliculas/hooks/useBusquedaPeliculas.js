import { useState, useEffect, useRef } from 'react'

export function useBusquedaPeliculas () {
  const [busqueda, setBusqueda] = useState('') // Creamos un estado para el input de búsqueda
  const [error, setError] = useState('') // Creamos un estado para el error
  const esPrimerRender = useRef(true) // Creamos una referencia mutable para saber si es el primer render

  useEffect(() => {
    if (esPrimerRender.current) {
      esPrimerRender.current = busqueda === '' // No renderiza el render como un estado ya que solo ocupamos controlar la primera vez que se renderiza el componente
      return
    }

    if (busqueda.length === 0) {
      setError('No se puede buscar un input vacio') // Si el input está vacío, limpiamos el estado de error
      return
    }

    if (busqueda.length > 15) {
      setError('El texto es muy largo, máximo 15 caracteres') // Si el texto es muy largo mostramos un error
      return
    }

    // N buscar pelicula con numero
    if (busqueda.match(/^\d+$/)) {
      setError('No puedes buscar una película con un número') // Si el input es un número mostramos un error
      return
    }

    setError('') // Si no hay errores, limpiamos el estado de error
  }, [busqueda]) // Este efecto se ejecuta cada vez que cambia el estado de búsqueda

  return { busqueda, setBusqueda, error }
}
