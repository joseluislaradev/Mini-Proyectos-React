  import { WINNER_COMBOS } from '../constants.js'
  
  //COmo esta funcion es javascript puro es buena practica separarla puesto que esot permite una reutilizacion ya que es puro javascript indendientemente del lenguaje, por ejemplo se podria usar en angular, vue, etc
  export const checkEndGameFrom = (board) => {
    // Si no hay espacios vacíos en el tablero, significa que el juego ha terminado
    return board.every((square) => square !== null)
  }


  export const checkWinnerFrom = (board) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }
    return null
  }
