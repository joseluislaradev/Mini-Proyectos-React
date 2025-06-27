import { useState } from 'react'
import { consulta } from './consulta.js'

export function useMovies () {
  const [peliculas, setPeliculas] = useState(consulta)
  const API_KEY = 'a48c4d5a'
  const API_URL = 'https://www.omdbapi.com/'
  const API_SEARCH = `${API_URL}?apikey=${API_KEY}&s=`

  const obtenerPeliculas = async (e) => {
    e.preventDefault()
    const res = await fetch(`${API_SEARCH}${e.target.value}`)
    const data = await res.json()
    setPeliculas(peliculas)
  }

  const peliculasMappeadas = peliculas.map((p) => ({
    Id: p.imdbID,
    Titulo: p.Title,
    Año: p.Year,
    Poster: p.Poster
  }))

  return { peliculas: peliculasMappeadas }
}
