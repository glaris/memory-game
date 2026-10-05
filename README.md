# Memory Game

A browser-based memory card game where the player finds matching pairs of cards.
 
The game contains 16 cards with 8 matching pairs. Cards are shuffled at the start of each game. The player can track the number of moves and found pairs. After completing the game, the result is saved to the leaderboard. The leaderboard displays up to 10 best results, sorted by the number of moves and date.

The interface is created dynamically with JavaScript, and no image files are used. The cards use Unicode emoji characters as their visual content.

> [!NOTE]
> Emoji may look different depending on the device and operating system.
  
---
## Technologies

HTML, CSS, JavaScript
  
---
## Local Setup 

1. Clone the repository and switch to the `memory-game` branch:

```bash
git clone https://github.com/glaris/memory-game.git
cd memory-game
git checkout memory-game
```

2. Open the project in VS Code and install the **Live Server** extension.
3. Right-click `index.html` and choose **Open with Live Server** (or click **Go Live** in the status bar). 

> [!IMPORTANT] 
> Do not open `index.html` by double-clicking it. The scripts are ES modules, and browsers block them when the page is opened as a local file.

---
## Demo

[Play the game](https://glaris.github.io/memory-game/)