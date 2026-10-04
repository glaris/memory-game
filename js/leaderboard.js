const storageKey = 'memory-game-results';

export function saveResult(moves) {
    const saved = localStorage.getItem(storageKey);
    let results = [];

    if (saved !== null) {
        results = JSON.parse(saved);
    }

    results.push({ moves, finishedAt: Date.now() });
    localStorage.setItem(storageKey, JSON.stringify(results));
}