const emojis = [
    '\u{1F41E}',    // 🐞
    '\u{1F40D}',     // 🐍
    '\u{1F419}',     // 🐙
    '\u2615\uFE0F',  // ☕️
    '\u{1F48E}',    // 💎
    '\u{1F433}',     // 🐳
    '\u{1F427}',     // 🐧
    '\u{1F439}'    // 🐹
];

const cards = [];

for (const currentEmoji of emojis) {
    cards.push({ id: cards.length, emoji: currentEmoji });
    cards.push({ id: cards.length, emoji: currentEmoji });
}

function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

const shuffledCards = shuffle(cards);

const container = document.createElement('div');
container.classList.add('container');

const header = document.createElement('header');
header.classList.add('header');

const newGameButton = document.createElement('button');
newGameButton.classList.add('button');
newGameButton.textContent = 'New Game';

const leaderboardButton = document.createElement('button');
leaderboardButton.classList.add('button');
leaderboardButton.textContent = 'Leaderboard';

header.append(newGameButton, leaderboardButton);

const counters = document.createElement('div');
counters.classList.add('counters');

const movesElement = document.createElement('span');
movesElement.textContent = 'Moves: 0';

const pairsElement = document.createElement('span');
pairsElement.textContent = 'Pairs 0 of 8';

counters.append(movesElement, pairsElement);

const board = document.createElement('div');
board.classList.add('board');

function renderBoard(cardsToRender) {
    board.replaceChildren();

    for (const card of cardsToRender) {
        const cardElement = document.createElement('button');
        cardElement.classList.add('card');
        cardElement.dataset.id = card.id;
        cardElement.setAttribute('aria-label', 'Card');
        board.append(cardElement);
    }
}

container.append(header, counters, board);
document.body.append(container);

renderBoard(shuffledCards);








