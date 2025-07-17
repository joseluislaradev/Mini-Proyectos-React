const ListaPeliculas = ({ peliculas }) => {
  return (

    peliculas.map((p) => (
      <div className='pelicula' key={p.Id}>
        <div className='pelicula-img'>
          <img src={p.Poster} alt={p.Titulo} />
          <div className='contenedor-iconos'>
            <span className='material-symbols-outlined'>play_arrow</span>
            <span className='material-symbols-outlined'>info_i</span>
          </div>
        </div>
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
  console.log('Las pleiculas recibidas son', peliculas)
  const tienePeliculas = peliculas.length > 0
  return (
    <div className='peliculas'>
      {tienePeliculas ? <ListaPeliculas peliculas={peliculas} /> : <NoMoviesResult />}
    </div>
  )
}
