import { useEffect, useState } from 'react';

function App() {

  const [activo, setActivo] = useState(false);

  useEffect(() => {
    console.log('effect', {activo});
    
  }, [activo]);


  const desactivar = () => {
    setActivo(!activo);
  }

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(0px, 0px)`
      }}
      />  
      <button onClick={desactivar}> 
        {activo ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </main>

  )
}

export default App
