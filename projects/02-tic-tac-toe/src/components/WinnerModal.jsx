
import {Square} from './Square'

export const WinnerModal = ({winner, resetGame}) => {
    if (winner === null) return null; // Si winner es null, no se renderiza nada

    const winnerText = winner === false ? 'EMPATE' : `GANÓ:`;

    return (
        
        <section className='winner'>
            <div className='text'>
            <h2>{winnerText}</h2>

            <header className='win'>
            {winner && <Square>{winner}</Square>}
            </header>

            <footer>
            <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>

            </div>
        </section>
        
    
    )
}