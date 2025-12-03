<img src="./images/IronAimLetterLogo.png" height=200px/>

# IronAim 🎯

IronAim is a browser-based mini shooting game built with **JavaScript** as part of the **Ironhack Web Development course**.

The goal is simple:  
choose a difficulty, aim fast, click the targets before time runs out, and try to achieve the highest score possible.

---

## 🎮 Game Concept

IronAim challenges the player’s **reaction time and accuracy**.

- Targets appear randomly inside a grid.
- Each successful click increases the score.
- The game ends when the timer reaches zero.
- The final score is displayed on a dedicated results screen.
- High scores are saved using **localStorage**.

---

## 🕹️ How to Play

1. **Start Screen**

   - Select a character/difficulty:
     - 👤 **Human** (easy)
     - 🕷️ **Spidey** (medium)
     - 🤖 **Jarvis** (hard)
   - The game starts immediately after selection.

2. **Game Screen**

   - Targets appear at random positions inside the grid.
   - Click on targets as fast as possible to score points.
   - A **timer** shows the remaining time.
   - A **score counter** updates in real time.

3. **Score Screen**
   - Displays:
     - Final score
     - A custom feedback message
     - Stored best scores
   - A **Restart** button allows the player to play again.

---

## ⚙️ Difficulty Levels

Difficulty levels affect the **target spawn speed**.

Example behavior:

- **Human**

  - Slower target appearance
  - Ideal for beginners

- **Spidey**

  - Faster spawn rate
  - Requires more precision and speed

- **Jarvis**
  - Very fast target appearance
  - High difficulty, reaction-based gameplay

Technically, difficulty is handled by adjusting the interval delay used by `setInterval()`.

---

## 💾 High Scores & Persistence

IronAim uses the **Web Storage API (`localStorage`)** to store player scores.

- Scores are saved locally in the browser.
- Data persists even after refreshing or reopening the page.
- Stored scores can be retrieved and displayed on the score screen.

---

## Ressources used

-Iron hack lessons

- MDN – Manipulation du DOM
  - <https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction>
  - <https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector>
- MDN – `addEventListener`

  - <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener>

- MDN – `setInterval` / `clearInterval`
  - <https://developer.mozilla.org/en-US/docs/Web/API/setInterval>
  - <https://developer.mozilla.org/en-US/docs/Web/API/clearInterval>
- MDN – `Math.random()`
  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random>
- Wikipedia – Fisher–Yates shuffle <https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle>

-AI Assistant: ChatGPT 5.1 : Reviewing code syntax error, generate assets, CSS styling
