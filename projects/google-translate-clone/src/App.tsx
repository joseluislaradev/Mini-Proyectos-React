import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStore } from './hooks/useStore';

function App() {

  const { from, to, text, result, loading, cambiarDeIdioma, cambiarFrom, cambiarTo, cambiarText, cambiarResult } = useStore();

  return (
    <>
      <div className="App">
        <h1>Google Translate Clone</h1>
        {from} - {to}
        <button onClick={() => cambiarFrom("es")}>Cambiar from</button>
        <button onClick={() => cambiarTo('en')}>Cambiar to</button>
      </div>
    </>
  )
}

export default App
