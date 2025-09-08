import { IDIOMA_POR_DEFECTO, IDIOMAS_SOPORTADOS } from '../constants.ts';

export type Idioma = keyof typeof IDIOMAS_SOPORTADOS; //Keyof nos devuelve las claves de un objeto como un union type
export type AutoLenguaje = typeof IDIOMA_POR_DEFECTO; // typeof nos devuelve el tipo de un valor
export type IdiomaConAuto = Idioma | AutoLenguaje;

const idioma: Idioma = 'es'; // Correcto
const idiomaInvalido: Idioma = 'SDFSF'; // Error esperado


export interface State {
  from: string
  to: string
  text: string
  result: string
  loading: boolean
}

export type Action =
  | { type: 'INTERCAMBIAR_IDIOMAS' }
  | { type: 'CAMBIAR_FROM', payload: string }
  | { type: 'CAMBIAR_TO', payload: string }
  | { type: 'CAMBIAR_TEXT', payload: string }
  | { type: 'CAMBIAR_RESULT', payload: string }