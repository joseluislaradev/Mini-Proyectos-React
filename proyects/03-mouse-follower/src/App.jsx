import { useEffect, useState } from 'react';



//Use effect es un  hook que ejecuta codigo arbitrario despues de que el componente se renderiza y las dependencias qeu le decimos cambien.
//EL useEffect se utilzia en el cuerpo de componenete, y como todo hook es una funcion y esta recibe dos parametros, una funcion con el codigo a ejecutar y un array de dependencias(si no se pone se ejecuta cada vez que se renderice).
//como minimo se ejecuta una vez, porque cuando se monta el componeente se ejecuta.

//Las dependencias son variables que si cambian, se vuelve a ejecutar el useEffect, si no cambian, no se vuelve a ejecutar.
//Si se pone un array vacio, se ejecuta una vez al inicio, y ya no se vuelve a ejecutar
//Si se pone un array con varias variables, se ejecuta al inicio y cada vez que alguna de esas variables cambie.
//SI se pone undefined, se ejecuta cada vez que se renderiza el componente, es decir, cada vez que se actualiza el estado o las props del componente.

const FollowMouse = () => {
  const [activo, setActivo] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0});

  //EL use effect tambien se suele usar para susbcriviros a un evento, ya que sabes cuando y como se ejecta el codigo del useEffect
  //los windows.addEventListener se ejecuta una vez que el componente se ha montado, si se pone afuera seria cada vez que se renderiza elc omponenete
  useEffect(() => {
    console.log('effect', {activo});


    const handleMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    }
    
    if(activo) {
      window.addEventListener('pointermove', handleMove)
    } 


    //El return del useEffect hace limpieza para regresar al compoenete como nuevo,
    //  se ejecuta cuando el componente se desmonta o cuando cambian las dependencias antes de ejecutar el useEffect de nuevo
    return () => {
      window.removeEventListener('pointermove', handleMove);
    }
  }, [activo]);


  useEffect(() => {
    document.body.classList.toggle('follow-mouse', activo);

    return () => {
      document.body.classList.remove('follow-mouse');
    }
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
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />  
      <button onClick={desactivar}> 
        {activo ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </main>

  )
}



function App() {
  const [mounted, setMounted] = useState(false);
  return (
    <main>
      {mounted && <FollowMouse/> }
      <button onClick={() => setMounted(!mounted)}>
        {mounted ? "Desmontar" : "Montar"} followMouse
      </button>
    </main>
  )
}

export default App
