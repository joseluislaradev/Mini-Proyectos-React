import { createRoot } from 'react-dom/client'
import { App } from './app.jsx'
import { FilterProvider } from './context/filter.jsx'

createRoot(document.getElementById('app')).render(
  <FilterProvider>
    <App />
  </FilterProvider>
)
