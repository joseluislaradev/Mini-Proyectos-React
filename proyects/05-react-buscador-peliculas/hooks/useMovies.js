import { useState } from 'react'

export function useMovies ({ busqueda }) {
  const [peliculas, setPeliculas] = useState([])
  const API_KEY = 'a48c4d5a'
  const API_URL = 'https://www.omdbapi.com/'
  const API_SEARCH = `${API_URL}?apikey=${API_KEY}&s=`

  const obtenerPeliculas = async () => {
    const res = await fetch(`${API_SEARCH}${busqueda}`)
    const data = await res.json()
    setPeliculas(data.Search || []) // Si no hay resultados, devolvemos un array vacío
  }

  const peliculasMappeadas = peliculas.map((p) => ({
    Id: p.imdbID,
    Titulo: p.Title,
    Año: p.Year,
    Poster: p.Poster
  }))

  return { peliculas: peliculasMappeadas, obtenerPeliculas }
}
