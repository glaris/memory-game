import { emojis, cards, shuffle } from './cards.js';
import { movesElement, pairsElement, renderBoard } from './ui.js';

const totalPairs = emojis.length;
const closeAfterMs = 1000;

const state = {
    firstCard: null,
    secondCard: null,
    moves: 0,
    pairs: 0,
    isLocked: false,
    isGameOver: false,
    timerId: null
};

function updateCounters() {
    movesElement.textContent = `Moves: ${state.moves}`;
    pairsElement.textContent = `Pairs: ${state.pairs} of ${totalPairs}`;
}

export function startNewGame() {
    clearTimeout(state.timerId);

    state.firstCard = null;
    state.secondCard = null;
    state.moves = 0;
    state.pairs = 0;
    state.isLocked = false;
    state.isGameOver = false;
    state.timerId = null;

    updateCounters();
    renderBoard(shuffle(cards));
}

function openCard(cardElement, card) {
    cardElement.classList.add('card--open');
    cardElement.textContent = card.emoji;
}

function closeCard(cardElement) {
    cardElement.classList.remove('card--open');
    cardElement.textContent = '';
}

function closeUnmatchedPair() {
    closeCard(state.firstCard.element);
    closeCard(state.secondCard.element);
    state.firstCard = null;
    state.secondCard = null;
    state.isLocked = false;
    state.timerId = null;
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
        state.timerId = setTimeout(closeUnmatchedPair, closeAfterMs);
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


