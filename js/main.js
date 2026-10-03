import { cards, shuffle } from './cards.js';
import { container, header, counters, board, renderBoard } from './ui.js';
import { handleCardClick } from './game.js';


const shuffledCards = shuffle(cards);

container.append(header, counters, board);
document.body.append(container);

renderBoard(shuffledCards);
board.addEventListener('click', handleCardClick);








