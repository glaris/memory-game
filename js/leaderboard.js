const storageKey = 'memory-game-results';
const maxResults = 10;

function loadResults() {
    const saved = localStorage.getItem(storageKey);

    if (saved === null) {
        return [];
    }

    return JSON.parse(saved);
}

function getTopResults(results) {
    const sorted = [...results].sort((a, b) => {
        if (a.moves !== b.moves) {
            return a.moves - b.moves;
        }

        return a.finishedAt - b.finishedAt;
    });

    return sorted.slice(0, maxResults);
}

export function saveResult(moves) {
    const saved = localStorage.getItem(storageKey);
    const results = loadResults();

    results.push({ moves, finishedAt: Date.now() });
    localStorage.setItem(storageKey, JSON.stringify(getTopResults(results)));
}

export function createLeaderboardContent() {
    const results = getTopResults(loadResults());

    const leaderboard = document.createElement('div');
    leaderboard.classList.add('leaderboard');

    if (results.length === 0) {
        const empty = document.createElement('p');
        empty.classList.add('leaderboard__empty');
        empty.textContent = 'No results yet';
        leaderboard.append(empty);

        return leaderboard;
    }

    const list = document.createElement('ul');
    list.classList.add('leaderboard__list');

    for (const result of results) {
        const item = document.createElement('li');
        item.classList.add('leaderboard__item');
        item.textContent = `Moves: ${result.moves}`;
        list.append(item);
    }

    leaderboard.append(list);

    return leaderboard;
}