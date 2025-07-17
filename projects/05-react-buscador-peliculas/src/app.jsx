// Use ref es un hook que permite crear una referencia mutable que persiste durante todo e ciclo de vida del componete.
// MUy util para guardar valores que no necesitan causar una re-renderización del componente cuando cambian, como por ejemplo un input de búsqueda, adiferencia de useState que causa una re-renderización del componente cuando cambia su valor.
import './app.css'
import { Peliculas } from '../components/Movies.jsx'
import { useMovies } from '../hooks/useMovies.js'
import { useBusquedaPeliculas } from '../hooks/useBusquedaPeliculas.js'
import { useState, useCallback } from 'react' // Importamos useState para gestionar el estado del input de búsqueda
import debounce from 'just-debounce-it'
import { motion } from "motion/react"

export const App = () => {
  const [sort, setSort] = useState(false) // Creamos un estado para el input de búsqueda

  const { busqueda, setBusqueda, error } = useBusquedaPeliculas() // Usamos el hook para gestionar la búsqueda de películas
  const { peliculas, obtenerPeliculas, loading, error: errorObtenerPeliculas } = useMovies({ busqueda, sort }) // Usamos el hook para obtener las películas

  // const inputRef = useRef() // Creamos una referencia mutable para el input de búsqueda, entra parentesis va un valor inicial si se ocupa

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
    obtenerPeliculas({ busqueda }) // Llamamos a la función para obtener las películas
  }

  const debouncedObtenerPeliculas = useCallback(debounce((busqueda) => { // Se pone en un useCallback para que no se vuelva a crear la función cada vez que se renderiza el componente ya que si no se crearia un nuevo debounce cada vez
    obtenerPeliculas({ busqueda }) // Llamamos a la función para obtener las películas con el nuevo valor del input
  }, 500), []) // Creamos una función debounced para evitar llamadas excesivas a la API

  // En esta forma cada que hay un cambio en el input actualizamos el estado
  const handleChange = (e) => {
    const valorInput = e.target.value // Obtenemos el valor del input a través del evento
    setBusqueda(valorInput) // Actualizamos el estado con el valor del input

    // Aqui ocure el problema de race condicion que es que el reusltado depende del orden de ejecucion de la palabra que nos haya respondido antes, no necesariamente la ultima
    // ESto se arregla con un debounce que simplemente es esperar un tantitio a que el suaurio deje de escribri para hacer la llamada correctamente
    // Hay muchas formas de arreglar el debounce, solo vemos una que es como una libreria de jsut amgus, baisucmente como funciona es hace un timeout si vuleve a llamar reincia el time out y si ya no lo llema ejucuta lo que tenga que hacer

    debouncedObtenerPeliculas(valorInput) // Llamamos a la función para obtener las películas con el nuevo valor del input
  }

  const handleSort = () => {
    setSort(!sort) // Invertimos el estado de sortado
  }

  return (
    <div>
      <header>
        <div>
          <span className='material-symbols-outlined'>video_camera_back</span>
          <h1>NETFLIS</h1>
        </div>
        <form className='form' onSubmit={hadleSubmit} autoComplete='off'>
          <input name='search' onChange={handleChange} value={busqueda} type='text' placeholder='Avengers, Star Wars, The Matrix...' style={{ border: '1px solid transparent', borderColor: error ? 'red' : ' transparent' }} />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      {error && <p className='error'>{error}</p>} {/* Si hay un error, lo mostramos */}
      {errorObtenerPeliculas && <p className='error'>{errorObtenerPeliculas}</p>} {/* Si hay un error al obtener las películas, lo mostramos */}

      <main>
        <h2>Resultados de la búsqueda</h2>
        <div className='orden'>
          <label htmlFor='sortTitle'>Titulo</label>
          <input id='sortTitle' type='checkbox' onChange={handleSort} value={sort} />
        </div>
        {loading && <p className='loading'>Cargando...</p>} {/* Si estamos cargando las películas, mostramos un mensaje de carga */}
        <Peliculas peliculas={peliculas} />
      </main>

    </div>
  )
}
