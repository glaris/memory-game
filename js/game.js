import { emojis, cards } from './cards.js';
import { movesElement, pairsElement } from './ui.js';

const totalPairs = emojis.length;

const state = {
    firstCard: null,
    secondCard: null,
    moves: 0,
    pairs: 0,
    isLocked: false,
    isGameOver: false
};

function updateCounters() {
    movesElement.textContent = `Moves: ${state.moves}`;
    pairsElement.textContent = `Pairs: ${state.pairs} of ${totalPairs}`;
}

function openCard(cardElement, card) {
    cardElement.classList.add('card--open');
    cardElement.textContent = card.emoji;
}

function checkPair() {
    if (state.firstCard.data.emoji === state.secondCard.data.emoji) {
        state.firstCard.element.classList.add('card--matched');
        state.secondCard.element.classList.add('card--matched');
        state.pairs += 1;
        state.firstCard = null;
        state.secondCard = null;

        if (state.pairs === totalPairs) {
            state.isGameOver = true;
        }
    } else {
        state.isLocked = true;
    }
}

export function handleCardClick(event) {
    const cardElement = event.target.closest('.card');

    if (cardElement === null) {
        return;
    }

    if (state.isLocked || state.isGameOver) {
        return;
    }

    if (cardElement.classList.contains('card--open')) {
        return;
    }

    const cardId = Number(cardElement.dataset.id);
    const card = cards.find((item) => item.id === cardId);

    openCard(cardElement, card);

    if (state.firstCard === null) {
        state.firstCard = { element: cardElement, data: card };
        return;
    }

    state.secondCard = { element: cardElement, data: card };
    state.moves += 1;
    checkPair();
    updateCounters();
}
