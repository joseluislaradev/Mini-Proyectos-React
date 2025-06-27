import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//StrictMode ayuda a detectar problemas en la aplicación, no es necesario para el funcionamiento de la app
// LO que hace es que renderiza el componente dos veces para detectar problemas de renderizado, verificar codigo antiguo o incorrecto
// LO que hace en efectos es ejecutarlo, luego el cleanup y luego el efecto de nuevo, esto solo es para ayudar a detectar problemas en desarrollo en productcion no pasa
createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <App />
  </StrictMode>,
)
