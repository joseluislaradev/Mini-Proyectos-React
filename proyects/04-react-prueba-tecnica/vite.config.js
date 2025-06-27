// Importa la función defineConfig desde Vite
import { defineConfig } from 'vite'
// Importa el plugin de React para Vite
import react from '@vitejs/plugin-react'

// Exporta la configuración de Vite
export default defineConfig({
  // Agrega el plugin de React a la configuración
  plugins: [react()]
})
