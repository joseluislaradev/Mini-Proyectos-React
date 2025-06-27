const ListaPeliculas = ({ peliculas }) => {
  return (

    peliculas.map((p) => (
      <div className='pelicula' key={p.Id}>
        <img src={p.Poster} alt={p.Titulo} />
        <h3>{p.Titulo}</h3>
        <p>{p.Año}</p>
      </div>
    ))

  )
}

const NoMoviesResult = () => {
  return (
    <div className='no-result'>
      <p>No se encontraron resultados</p>
    </div>
  )
}

export const Peliculas = ({ peliculas }) => {
  const tienePeliculas = peliculas.length > 0
  return (
    <div className='peliculas'>
      {tienePeliculas ? <ListaPeliculas peliculas={peliculas} /> : <NoMoviesResult />}
    </div>
  )
}
