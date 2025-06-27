import './app.css'
import { Peliculas } from '../components/Movies.jsx'
import { useMovies } from '../hooks/useMovies.js'

// Use ref es un hook que permite crear una referencia mutable que persiste durante todo e ciclo de vida del componete.
// MUy util para guardar valores que no necesitan causar una re-renderización del componente cuando cambian, como por ejemplo un input de búsqueda, adiferencia de useState que causa una re-renderización del componente cuando cambia su valor.
import { useEffect, useRef, useState } from 'react'

export const App = () => {
  const { peliculas } = useMovies()
  // const inputRef = useRef() // Creamos una referencia mutable para el input de búsqueda, entra parentesis va un valor inicial si se ocupa
  const [query, setQuery] = useState('') // Creamos un estado para el input de búsqueda
  const [error, setError] = useState('') // Creamos un estado para el error

  /* Aqui estamos gestionando el formulario de manera descrontrolada que significa que lo gestionamos directmanete desde el DOM y no es controaldo por react, recuperando datos, ya sea asi o con useRef
  casi siempre en las mejor forma, su unica desventja es que es un poc ams dificil de validar el fomrulario pero no tanto, pero es mas rapida y optima
  const hadleSubmit = (e) => {
    e.preventDefault() // Evitamos que el formulario se envíe y recargue la página
    // ESta primera forma no es la mejor ya que hay una forma nativa de hacerlo con javaScript
    // const valorInput = inputRef.current.value // Obtenemos el valor del input a través de la referencia mutable, inputRef.current hace referencia al elemento DOM del input

    // es mejor esta porque es nativa, no dependes de ract y un hook y ademas si quisieramos agregar mas campos es tan simple porque ya lo sacamos todos del fgomrulario y no tenemos que agregar mas referencias
    const fiels = new FormData(e.target) // Obtenemos los datos del formulario
    const valorInput = fiels.get('search') // Obtenemos el valor del input
    console.log(fiels) // ESto es un obejtoFormData
    console.log(valorInput) // Mostramos el valor en la consola

    // Otra menera es recuperando directamente todos los valores en un objeto, muy util cuando son muchos
    const valores = Object.fromEntries(new FormData(e.target)) // Convertimos los datos del formulario en un objeto
    console.log(valores) // Mostramos el objeto que sera clave valor con el nombre del input y su valor escrito
  }
  */

  /* Aqui lo gestionamos de forma controlada, significa que usamos el estado de react para controlar lo que se escribe en lso inputs  */
  // Su principal desventaja es que se re-renderiza el componente cada vez que se cambia el valor del input, lo que puede ser menos eficiente si hay muchos campos o si el componente es complejo.
  const hadleSubmit = (e) => {
    e.preventDefault() // Evitamos que el formulario se envíe y recargue la página
    console.log(query) // Mostramos el valor del input en la consola
  }

  // En esta forma cada que hay un cambio en el input actualizamos el estado
  const handleChange = (e) => {
    const valorInput = e.target.value // Obtenemos el valor del input a través del evento
    setQuery(valorInput) // Actualizamos el estado con el valor del input

    if (valorInput.length > 10) {
      setError('El texto es muy largo, máximo 10 caracteres') // Si el texto es muy largo mostramos un error
      return
    }

    if (valorInput === '') {
      setError('¿Qué estás buscando?') // Si el input está vacío mostramos un error
      return
    }

    // N buscar pelicula con numero
    if (!isNaN(valorInput)) {
      setError('No puedes buscar una película con un número') // Si el input es un número mostramos un error
      return
    }

    setError('') // Si no hay errores, limpiamos el estado de error
  }

  return (
    <div>
      <header>
        <h1>NETFLIS</h1>
        <form className='form' onSubmit={hadleSubmit}>
          <input name='search' onChange={handleChange} value={query} type='text' placeholder='Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      {error && <p className='error'>{error}</p>} {/* Si hay un error, lo mostramos */}

      <main>
        <h2>Resultados de la búsqueda</h2>
        <Peliculas peliculas={peliculas} />
      </main>

    </div>
  )
}
