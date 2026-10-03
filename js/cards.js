export const emojis = [
    '\u{1F41E}',    // 🐞
    '\u{1F40D}',     // 🐍
    '\u{1F419}',     // 🐙
    '\u2615\uFE0F',  // ☕️
    '\u{1F48E}',    // 💎
    '\u{1F433}',     // 🐳
    '\u{1F427}',     // 🐧
    '\u{1F439}'    // 🐹
];

export const cards = [];

for (const currentEmoji of emojis) {
    cards.push({ id: cards.length, emoji: currentEmoji });
    cards.push({ id: cards.length, emoji: currentEmoji });
}

export function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}


