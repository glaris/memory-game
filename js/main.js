import { container, header, counters, board, newGameButton, leaderboardButton } from './ui.js';
import { handleCardClick, startNewGame } from './game.js';
import { openModal } from './modal.js';

container.append(header, counters, board);
document.body.append(container);

function showLeaderboard() {
    const content = document.createElement('p');
    content.textContent = 'Leaderboard is coming here';
    openModal(content);
}

startNewGame();
board.addEventListener('click', handleCardClick);
newGameButton.addEventListener('click', startNewGame);
leaderboardButton.addEventListener('click', showLeaderboard);