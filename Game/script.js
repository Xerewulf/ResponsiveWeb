
let level = 1;
let timeLimit = 5000; 
let clicksRequired = 3;
let timerId;
let timeIntervalId;

const clickButton = document.getElementById('click-button');
const levelDisplay = document.getElementById('level');
const timeDisplay = document.getElementById('time-remaining');
const gameArea = document.getElementById('game-area');

function startLevel() {
  levelDisplay.textContent = level;
  clicksRequired = 3;
  timeLimit = (level === 1) ? 5000 : (timeLimit - (level) * 100);
  updateTimerDisplay(timeLimit);
  timerId = setTimeout(() => {
    endLevel(false);
  }, timeLimit);
  timeIntervalId = setInterval(() => {
    timeLimit -= 1000;
    updateTimerDisplay(timeLimit);
  }, 1000);
}

function endLevel(success) {
  clearInterval(timeIntervalId);
  clearTimeout(timerId);
  if (success) {
    level++;
    startLevel();
  } else {
    alert('Game Over');
  }
}

function handleClick() {
  clicksRequired--;
  if (clicksRequired === 0) {
    endLevel(true);
  }
  const x = Math.floor(Math.random() * (300));
  const y = Math.floor(Math.random() * (300));
  clickButton.style.position = "absolute"; 
  clickButton.style.left = `${x}px`;
  clickButton.style.top = `${y}px`;
  if (level < 6) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      endLevel(false);
    }, timeLimit);
  }
}

function updateTimerDisplay(time) {
  const seconds = time / 1000;
  timeDisplay.textContent = `${seconds} seconds`;
}

// Add event listeners
clickButton.addEventListener('click', handleClick);

// Start the game
startLevel();