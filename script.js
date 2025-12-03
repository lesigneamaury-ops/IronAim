const startScreenElement = document.getElementById("start-screen");
const charSelectElement = document.getElementById("char-select");
const char1Element = document.getElementById("char1-button");
const char2Element = document.getElementById("char2-button");
const char3Element = document.getElementById("char3-button");
const gameScreenElement = document.getElementById("game-screen");
const gameAreaElement = document.getElementById("game-area");
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");
const ScoreScreenElement = document.getElementById("score-screen");
const propSentenceElement = document.getElementById("prop-sentence");
const scoreRecapElement = document.getElementById("score-recap");
const highestScoresElement = document.getElementById("highest-scores");
const restartButtonElement = document.getElementById("restart-button");
const playerNameInputElement = document.getElementById("player-name");

let playerName = "No One";
let difficulty = "";

char1Element.addEventListener("click", () => {
  playerName = playerNameInputElement.value.trim() || "No One";
  difficulty = "human";
  goToGameScreen();
  createGrid();
  showRandomTargets();
  shuffleIntervalId = setInterval(showRandomTargets, 1800);
  startTimer();
});

char2Element.addEventListener("click", () => {
  playerName = playerNameInputElement.value.trim() || "No One";
  difficulty = "Spidey";
  goToGameScreen();
  createGrid();
  showRandomTargets();
  shuffleIntervalId = setInterval(showRandomTargets, 1300);
  startTimer();
});

char3Element.addEventListener("click", () => {
  playerName = playerNameInputElement.value.trim() || "No One";
  difficulty = "Jarvis";
  goToGameScreen();
  createGrid();
  showRandomTargets();
  shuffleIntervalId = setInterval(showRandomTargets, 900);
  startTimer();
});

restartButtonElement.addEventListener("click", () => {
  restartGame();
});

let score = 0;
let timeRemaining = 30;

function goToGameScreen() {
  startScreenElement.style.display = "none";
  gameScreenElement.classList.add("show-screen");
  timeRemaining = 30;
  score = 0;
  timerElement.innerText = `Time Left: ${timeRemaining}seconds!`;
  scoreElement.innerText = `Score: ${score} points.`;
}

let cells = [];
function createGrid() {
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("click", () => {
      if (cell.classList.contains("target")) {
        scorePoint();
        cell.classList.remove("target");
      }
    });
    gameAreaElement.appendChild(cell);
    cells.push(cell);
  }
}

function showRandomTargets() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("target");
  }
  const usedIndices = [];
  while (usedIndices.length < 3) {
    const randomIndex = Math.floor(Math.random() * cells.length);
    if (!usedIndices.includes(randomIndex)) {
      usedIndices.push(randomIndex);
    }
  }
  for (let i = 0; i < usedIndices.length; i++) {
    const index = usedIndices[i];
    cells[index].classList.add("target");
  }
}

let shuffleIntervalId;
let timerIntervalId;

function startTimer() {
  timerIntervalId = setInterval(() => {
    timeRemaining--;
    timerElement.innerText = `Time Left: ${timeRemaining}seconds!`;
    if (timeRemaining <= 5 && timeRemaining > 0) {
      timerElement.classList.remove("timer-pulse");
      void timerElement.offsetWidth;
      timerElement.classList.add("timer-pulse");
    }
    if (timeRemaining <= 0) {
      clearInterval(timerIntervalId);
      clearInterval(shuffleIntervalId);
      gotoScoreScreen();
    }
  }, 1000);
}

function scorePoint() {
  score++;
  scoreElement.innerText = `Score: ${score} points.`;
}

function gotoScoreScreen() {
  clearInterval(timerIntervalId);
  clearInterval(shuffleIntervalId);
  gameScreenElement.classList.remove("show-screen");
  ScoreScreenElement.style.display = "flex";
  if (difficulty === "human") {
    if (score < 11) {
      propSentenceElement.innerText = `You need to work on your reflexes Grandma!`;
    } else if (11 <= score && score <= 40) {
      propSentenceElement.innerText = `Come on, you can do better than that!`;
    }
    if (score > 40) {
      propSentenceElement.innerText = `Too easy try Spidey`;
    }
  }
  if (difficulty === "Spidey") {
    if (score < 35) {
      propSentenceElement.innerText = `Oh, but you are human! Train in your own field!`;
    } else if (35 <= score && score <= 50) {
      propSentenceElement.innerText = `Spidey sens starts to kick in?`;
    }
    if (score > 50) {
      propSentenceElement.innerText = `Wow! That was Fast!`;
    }
  }
  if (difficulty === "Jarvis") {
    if (score < 11) {
      propSentenceElement.innerText = `Analysis: Human reaction time detected.`;
    } else if (11 <= score && score <= 60) {
      propSentenceElement.innerText = `Analysis: Coding glitched detected`;
    }
    if (score > 60) {
      propSentenceElement.innerText = `Impressive. AI-level efficiency reached.`;
    }
  }
  scoreRecapElement.innerText = `You hit ${score} targets!`;
  highestScoresFromLS = JSON.parse(localStorage.getItem("highest-scores"));
  if (!Array.isArray(highestScoresFromLS)) {
    highestScoresFromLS = [];
  }

  if (
    highestScoresFromLS.length > 0 &&
    typeof highestScoresFromLS[0] === "number"
  ) {
    highestScoresFromLS = [];
  }
  const finalScore = {
    name: playerName,
    score: score,
  };
  highestScoresFromLS.push(finalScore);
  highestScoresFromLS.sort((a, b) => b.score - a.score);
  const topFiveScores = highestScoresFromLS.slice(0, 5);
  localStorage.setItem("highest-scores", JSON.stringify(topFiveScores));
  highestScoresElement.innerHTML = "";
  topFiveScores.forEach((oneScore) => {
    const ourLiElement = document.createElement("li");
    ourLiElement.innerText = `${oneScore.name} — ${oneScore.score}`;
    highestScoresElement.appendChild(ourLiElement);
  });
}

function restartGame() {
  clearInterval(timerIntervalId);
  clearInterval(shuffleIntervalId);
  score = 0;
  timeRemaining = 30;
  cells = [];
  gameAreaElement.innerHTML = "";
  highestScoresElement.innerHTML = "";
  gameScreenElement.classList.remove("show-screen");
  ScoreScreenElement.style.display = "none";
  startScreenElement.style.display = "flex";
}
