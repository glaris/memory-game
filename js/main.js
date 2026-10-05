import { container, header, counters, board, newGameButton, leaderboardButton } from './ui.js';
import { handleCardClick, startNewGame } from './game.js';
import { openModal } from './modal.js';
import { createLeaderboardContent } from './leaderboard.js';

container.append(header, counters, board);
document.body.append(container);

function showLeaderboard() {
    openModal(createLeaderboardContent());
}

startNewGame();
board.addEventListener('click', handleCardClick);
newGameButton.addEventListener('click', startNewGame);
leaderboardButton.addEventListener('click', showLeaderboard);