const INTERVAL_MS = 1000 / 60;
let timerID;
let lastTimerStartTimer = 0;
let millisElapsedBeforeLastStart = 0;

// Get Our Data from the DOM
const timer = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

// Use Events
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

// ------- Creating a Functions -------

// 1. startTimer
function startTimer() {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;

  lastTimerStartTimer = Date.now();
  timerID = setInterval(updateTimer, INTERVAL_MS);
}

// 2. stopTimer
function stopTimer() {
  startButton.disabled = false;
  stopButton.disabled = false;
  resetButton.disabled = false;

  millisElapsedBeforeLastStart += Date.now() - lastTimerStartTimer;
  clearInterval(timerID);
}

// 3. resetTimer
function resetTimer() {
  resetButton.disabled = true;
  timer.textContent = "00:00:00";
  millisElapsedBeforeLastStart = 0;
}

// 4. updateTimer
function updateTimer() {
  const millisElapsed =
    Date.now() - lastTimerStartTimer + millisElapsedBeforeLastStart;
  const secondsElapsed = millisElapsed / 1000;
  const minutesElapsed = secondsElapsed / 60;

  const millisText = formateNumber(millisElapsed % 1000, 3);
  const secondsText = formateNumber(Math.floor(secondsElapsed) % 60, 2);
  const minutesText = formateNumber(Math.floor(minutesElapsed), 2);
  timer.textContent = `${minutesText}:${secondsText}:${millisText}`;
}

// 5. formatNumber
function formateNumber(number, desiredLength) {
  const stringNumber = String(number);
  if (stringNumber.length > desiredLength) {
    return stringNumber.slice(0, desiredLength);
  }

  return stringNumber.padStart(desiredLength, "0");
}
