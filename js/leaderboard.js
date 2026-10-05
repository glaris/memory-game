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

function formatDateToString(timestamp) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}

function createTableCell(tagName, text) {
    const cell = document.createElement(tagName);
    cell.classList.add('leaderboard__cell');
    cell.textContent = text;

    return cell;
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

    const table = document.createElement('table');
    table.classList.add('leaderboard__table');

    const tableHead = document.createElement('thead');
    const tableHeadRow = document.createElement('tr');
    tableHeadRow.append(
        createTableCell('th', 'Rank'),
        createTableCell('th', 'Moves'),
        createTableCell('th', 'Date')
    );
    tableHead.append(tableHeadRow);

    const tableBody = document.createElement('tbody');

    for (let i = 0; i < results.length; i++) {
        const tableBodyRow = document.createElement('tr');
        tableBodyRow.append(
            createTableCell('td', i + 1),
            createTableCell('td', results[i].moves),
            createTableCell('td', formatDateToString(results[i].finishedAt))
        );
        tableBody.append(tableBodyRow);
    }

    table.append(tableHead, tableBody);
    leaderboard.append(table);

    return leaderboard;
}