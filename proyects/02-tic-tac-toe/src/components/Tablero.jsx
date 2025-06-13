import { Square } from "./Square";




export const Tablero = ({ resetGame, updateBoard, board }) => {
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reiniciar el juego</button>
      <section className='game'>
        {
          board.map((value, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {value}
              </Square>
            )
          })
        }
      </section>
    </>
  )
}