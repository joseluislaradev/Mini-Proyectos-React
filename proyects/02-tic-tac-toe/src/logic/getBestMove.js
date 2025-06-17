import { TURNS } from '../constants.js';
import { checkWinnerFrom, checkEndGameFrom } from './board.js';

export const getBestMove = (board, turn) => {
  const opponent = turn === TURNS.X ? TURNS.O : TURNS.X;

  const minimax = (board, currentTurn) => {
    const winner = checkWinnerFrom(board);
    if (winner === turn) return { score: 1 };
    if (winner === opponent) return { score: -1 };
    if (checkEndGameFrom(board)) return { score: 0 };

    const moves = [];

    board.forEach((cell, index) => {
      if (cell === null) {
        const newBoard = [...board];
        newBoard[index] = currentTurn;

        const result = minimax(newBoard, currentTurn === TURNS.X ? TURNS.O : TURNS.X);
        moves.push({ index, score: result.score });
      }
    });

    if (currentTurn === turn) {
      // Maximizar
      const best = moves.reduce((acc, move) => (move.score > acc.score ? move : acc), { score: -Infinity });
      return best;
    } else {
      // Minimizar
      const best = moves.reduce((acc, move) => (move.score < acc.score ? move : acc), { score: Infinity });
      return best;
    }
  };

  return minimax(board, turn).index;
};
