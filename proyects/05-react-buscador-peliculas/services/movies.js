const API_KEY = 'a48c4d5a'
const API_URL = 'https://www.omdbapi.com/'
const API_SEARCH = `${API_URL}?apikey=${API_KEY}&s=`

export const buscarPeliculas = async ({ busqueda }) => {
  try {
    const res = await fetch(`${API_SEARCH}${busqueda}`)
    const data = await res.json()

    const peliculas = data.Search || []

    return peliculas?.map((p) => ({
      Id: p.imdbID,
      Titulo: p.Title,
      Año: p.Year,
      Poster: p.Poster
    }))
  } catch (error) {
    throw new Error('Error al buscar las películas')
  }
}
