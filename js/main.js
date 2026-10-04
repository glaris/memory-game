import { container, header, counters, board, renderBoard, newGameButton } from './ui.js';
import { handleCardClick, startNewGame } from './game.js';

container.append(header, counters, board);
document.body.append(container);

startNewGame();
board.addEventListener('click', handleCardClick);
newGameButton.addEventListener('click', startNewGame);








