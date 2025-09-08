import { type State, type Action, type IdiomaConAuto, type Idioma } from '../types.d';
import { useReducer } from 'react';


//1. Definir el estado inicial
const inicialState: State = {
  from: 'auto',
  to: 'es',
  text: '',
  result: '',
  loading: false,
}

//2. Crear el reducer
function reducer(state: State, action: Action): State {
  const { type } = action; //El dispatch nos manda que vamos a hacer y con que lo vamos a cambiar
  switch(type) {
    case 'INTERCAMBIAR_IDIOMAS':
      return {
        ...state,
        from: state.to,
        to: state.from
      }
    case 'CAMBIAR_FROM':
      return {
        ...state,
        from: action.payload
      }
    case 'CAMBIAR_TO':
      return {
        ...state,
        to: action.payload
      }
    case 'CAMBIAR_TEXT':
      return {
        ...state,
        loading: true,
        text: action.payload,
        result: ''
      }
    case 'CAMBIAR_RESULT':
      return {
        ...state,
        loading: false,
        result: action.payload,
      }
    default:
      return state;
  }
}

// 4. Crear el custom hook para usar el reduce, evolviendo el estado y funcions que podemos hacer
//ES mala preatica devolver el dispatch y que el compoenente lo eidte directamente porque asi el compoennete sabe que hacemos por detras y si ya no queremos un dia usar useReducerel componete tendria que cambiar, no es un buen encapsulamiento
export function useStore() {
    const [{
    from, to, text, result, loading
    }, dispatch] = useReducer(reducer, inicialState); // 3. Usar el reducer (se le pasa el reducer y el estado inicial). Genera el dispatch para enviar acciones

   const cambiarDeIdioma = () => {
      dispatch({ type: 'INTERCAMBIAR_IDIOMAS' });
   }
    const cambiarFrom = (from: IdiomaConAuto) => {
      dispatch({ type: 'CAMBIAR_FROM', payload: from });
   }
    const cambiarTo = (to: Idioma) => {
      dispatch({ type: 'CAMBIAR_TO', payload: to });
    }
    const cambiarText = (text: string) => {
      dispatch({ type: 'CAMBIAR_TEXT', payload: text });
    }
    const cambiarResult = (result: string) => {
      dispatch({ type: 'CAMBIAR_RESULT', payload: result });
    }

   return {
       from,
       to,
       text,
       result,
       loading,
       cambiarDeIdioma,
       cambiarFrom,
       cambiarTo,
       cambiarText,
       cambiarResult
   }
}
