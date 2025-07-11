// UseMemo es un hook que nos permite memorizar un valor calculado, de esta manera evitamos que se vuelva a calcular si no ha cambiado el valor de las dependencias
import { useRef, useState, useMemo } from 'react'
import { buscarPeliculas } from '../services/movies.js'

/* En hooks no vonviene tener vairbales gloables en muchos casos, porque lo que quereos es que sea reutilziable, las vairbales globales y todo se mantiene
independientemente de si volvemos a usar el hook, no es independiente como sus estados dentro, lo cual puede pasar que un en una parte que usemos el hook
cambie el valor y nos afecte en otro aldo donde tambien lo usamos. */

export function useMovies ({ busqueda, sort }) {
  const [peliculas, setPeliculas] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const busquedaPrevia = useRef(busqueda)

  // dEL problema de tener metodos adentro es que cada vez que se renderiza el componente, se borra y se crea una nueva instancia de la función, lo que puede causar problemas de rendimiento si la función se pasa como prop a componentes hijos o se usa en dependencias de efectos.
  // la funcion solo la ocupamos cuando cambia el valor de bsuqueda, por eso podriamos usar un useMemo con esa dependencia y que solo se cree cuando se anecesario, si no se la ponemos memoriza el valor que tuvo en su primera ejecucion pero despues nunca cambia el memorizado porque nunca se vuelve a crear la funcion
  // hay un truco para hacer que solo se cree una vez la funcion, y es pasandole el valor que ocupa directmanete a la funcion, enotnces el valor de bsuqueda se lo pasamos directamente a la funcion cuando la llamemos en luagr de usar el valor que recibimos en el hook, esto necesita dependencias vacias para que solo se cree una vez
  const obtenerPeliculas = useMemo(() => {
    return async ({ busqueda }) => { // Esta funcion se crea una vez y se reutiliza, no se vuelve a crear cada vez que se renderiza el componente, porque antes de creaba ya que nos tenemos que aorgar que bsuqeueda era un esatdo y todo se re-renderizaba cada vez que cambiaba el estado de busqueda
      if (busquedaPrevia.current === busqueda) return
      try {
        setLoading(true)
        const newMovies = await buscarPeliculas({ busqueda })
        busquedaPrevia.current = busqueda // Actualizamos la búsqueda previa
        setPeliculas(newMovies)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
  }, []) // dejamos dependencia vacia, esto indica que solo se ejhcuta lo de adentro una sola vez cuando se monta el compoenente y ya

  // Esto con useMemo ya funciona muy bien, peor hay un hook que es muy parecio enfocado en este caso de funciones llamado useCallback,
  //  que es un hook que nos permite memorizar una función, de esta manera evitamos que se vuelva a crear si no ha cambiado el valor de las dependencias, es lo mismo ya que use un useMemo por debajo pero no permite simplifica la sintaxis 
  // const obtenerPeliculas = useCallback(async ({ busqueda }) => { // Esta funcion se crea una vez y se reutiliza, no se vuelve a crear cada vez que se renderiza el componente
  //   if (busquedaPrevia.current === busqueda) return
  //   try {
  //     setLoading(true)
  //     const newMovies = await buscarPeliculas({ busqueda })
  //     busquedaPrevia.current = busqueda // Actualizamos la búsqueda previa
  //     setPeliculas(newMovies)
  //   } catch (error) {
  //     setError(error.message)
  //   } finally {
  //     setLoading(false)
  //   }
  // }, []) // dejamos dependencia vacia, esto indica que solo se ejhcuta lo de adentro una sola vez cuando se monta el compoenente y ya

  // Importante useMemo porque el cuerpo de esta funcion se ejecuta cada vez que se rendiza, es decir cambia search pero esta funcion no deberia estarse ejecutando cada vez que se renderiza el componente, solo cuando cambie el valor de peliculas o sort, por eso se le pasan las dependencias al segundo parametro del useMemo
  // Aveces sale mejor dejar que algo se re-renderize y no usar useMemo, tenemos que analizar si realmente hay un fallo de rendimeinto coo este ya que si fueran muchas peliculas y se tuvieran que reordenar a cada rato seria un porblema
  const peliculasOrdenadas = useMemo(() => { // Se le pasa una funcion
    return sort
      ? [...peliculas].sort((a, b) => a.Titulo.localeCompare(b.Titulo))
      : peliculas
  }, [peliculas, sort])

  return { peliculas: peliculasOrdenadas, obtenerPeliculas, loading, error }
}
