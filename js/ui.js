export const container = document.createElement('div');
container.classList.add('container');

export const header = document.createElement('header');
header.classList.add('header');

export const newGameButton = document.createElement('button');
newGameButton.classList.add('button');
newGameButton.textContent = 'New Game';

export const leaderboardButton = document.createElement('button');
leaderboardButton.classList.add('button');
leaderboardButton.textContent = 'Leaderboard';

header.append(newGameButton, leaderboardButton);


export const counters = document.createElement('div');
counters.classList.add('counters');

export const movesElement = document.createElement('span');
movesElement.textContent = 'Moves: 0';

export const pairsElement = document.createElement('span');
pairsElement.textContent = 'Pairs: 0 of 8';

counters.append(movesElement, pairsElement);


export const board = document.createElement('div');
board.classList.add('board');

export function renderBoard(cardsToRender) {
    board.replaceChildren();

    for (const card of cardsToRender) {
        const cardElement = document.createElement('button');
        cardElement.classList.add('card');
        cardElement.dataset.id = card.id;
        cardElement.setAttribute('aria-label', 'Card');
        board.append(cardElement);
    }
}