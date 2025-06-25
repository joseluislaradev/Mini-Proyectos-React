import './App.css'
import { useCatFact } from '../hooks/useCatFact.js'

export function App () {
  // Nomlamente cuando vemos un estado o useEffect de react deberiamos preguntarnos si sdeberia ser un custom hook, porque normalmente tiene logica que nos gustaria seprar para poder reutilizarla en otros componentes
  const { primeraPalabra, esperando, cambiarPalabra } = useCatFact()
  const apiImagen = `https://cataas.com/cat/says/${primeraPalabra}?fontSize=50&fontColor=red`

  return (
    <main>
      <h1>Prueba técnica de React</h1>
      <p data-testid='fact'>{primeraPalabra}</p>
      {esperando && (
        <div className='spinner-border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      )}
      <button onClick={cambiarPalabra} disabled={esperando}>Cambiar palabra</button>
      <div style={{ display: esperando ? 'none' : 'block' }}>
        <img src={apiImagen} />
      </div>
    </main>
  )
}
