import { useState, useEffect } from 'react'
import { getRandomFirstWordFact } from '../services/facts.js'

/* UN custom hook es simplmente logica de componentes que extraemos para usar en otros compoenentes */
/* La diferencia con las funciones es que en un custo podemos usar otro hooks dentro, en als funciones no se pueden usar hooks, no tiene sentido */
/* ES buena practoca que ssi opcupa aprametros de los pasemos como objeto, esto no rpermite pasarlos en cualquier orden porque nos obliga a usar parametros nombrados, es decir que tengan wel mismo nombre que en la declaracion */
/* LOS CUSTOM HOOKS SON COMO UNA CAJA NEGRA, NO SABEMOS COMO LO AHCEN PERO LO HACEN, NO PODEMOS PONERLES NOMBRE O DE ALGUNA MANERA HACER QUE EL CUSTOM HOOKS DEPENDA DE SU IMPLEMENTACION, DEBE DE PODER SER CUALQUIERA MIENTRAS NOS RETRNE LO QUE OCUPAMOS
su nombre por ejemplo, no debe indicar nada de su implemntacion como decir fetch poruqe despues podriamos cambiarlo a axios, etc */
/*  ES importnate que nucna devuelvan estados los hooks, que lo hagan dentro y asi para que no dependa de nada y se pueda reutilziar mas facil. */

export function useCatFact () { /* Todos los hooks empiezan por use */
  const [primeraPalabra, setPrimeraPalabra] = useState('')
  const [esperando, setEsperando] = useState(false)

  const cambiarPalabra = () => {
    setEsperando(true)
    /*
    Una forma de manejar la funcion asincrónica
    const primera = await getRandomFirstWordFact()
    setPrimeraPalabra(primera)
    setEsperando(false)
    */
    getRandomFirstWordFact().then(primera => {
      setPrimeraPalabra(primera)
      setEsperando(false)
    })
  }

  useEffect(cambiarPalabra, [])

  return { primeraPalabra, esperando, cambiarPalabra }
}
