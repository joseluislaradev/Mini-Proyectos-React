
import { useState, useEffect } from "react"
import './App.css'
import confetti from 'canvas-confetti';


import { WinnerModal } from './components/WinnerModal.jsx'
import { Tablero } from './components/Tablero.jsx'
import { Turnos } from './components/Turnos.jsx';

import { TURNS } from './constants.js'

import { checkWinnerFrom, checkEndGameFrom } from './logic/board.js'
import { getBestMove } from './logic/getBestMove.js';



function App() {

  //Aqui podriamos poner que if localStorage tiene un tablero guardado, si no lo tiene, se inicializa con un array de 9 elementos nulos
  //ESto esta mal, nungun hook puede estar dentro de un if, ya que react guarda la posicon de cada array de hooks, y si se pone dentro de un if, no se sabe en que posicion esta cada uno, se pregunta porque si antes de ejecuto este ahora no
  //Asi que un hook siempre debe estar en el cuerpo del componente, no dentro de un if o un bucle, por eso lo hacemos con una funcion, con el hook afuera y lo que cambia es su valor inicial
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board'); //ESte no se pone por fuera porque si no se renderiza a acada rato, y es lento pues leer de localstorage es sincrono y bloquea. 
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ? turnFromStorage : TURNS.X; //Si no hay turno guardado, se inicia con X
  });

  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    // Crea una copia del tablero actual, ya que en React no se debe mutar el estado directamente
    const newBoard = [...board];
    // Asigna el turno actual (X u O) a la casilla seleccionada, si se modificara directamente, React no detectaría el cambio
    newBoard[index] = turn;
    // Actualiza el estado del tablero con la nueva jugada
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //GUardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);


    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti(); // Llama a la función de confetti para celebrar al ganador
      setWinner(newWinner); //La actualizacion de lso estados es asincrona, asi que no se bloquea el flujo normal, tendiramos que esperar
    } else if (checkEndGameFrom(newBoard)) {
      setWinner(false); // Si todas las casillas están ocupadas y no hay ganador, es un empate
    }
  }


  useEffect(() => {
    if (turn === TURNS.O) {
      const index = getBestMove(board, TURNS.O);
      if (index !== undefined) {
        setTimeout(() => {
          updateBoard(index);
        }, 500); // Simula un "pensamiento"
      }
    }
  }, [turn]);


  //Casi en todo lo de react para regresa al estado inicial, se utiliza un useState con el valor inicial
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    window.localStorage.removeItem('board'); // Elimina el tablero guardado en localStorage
    window.localStorage.removeItem('turn'); // Elimina el turno guardado en localStorage
  }


  return (
    <>
      <main className='board'>

        <Tablero resetGame={resetGame} updateBoard={updateBoard} board={board} />
        <Turnos turn={turn} />
        <WinnerModal winner={winner} resetGame={resetGame} />

      </main>
    </>
  )
}

export default App

