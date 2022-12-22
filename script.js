let hours = 0;
let minutes = 0;
let seconds = 0;
let running = false;
const timer = document.querySelector('.timer');
const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');

// Functions
function updateTimer() {
  hoursEl.innerHTML = `${hours}`;
  minutesEl.innerHTML = `${minutes}`;
  secondsEl.innerHTML = `${seconds}`;
  if (seconds < 10) {
    secondsEl.innerHTML = `0${seconds}`;
  }
  if (minutes < 10) {
    minutesEl.innerHTML = `0${minutes}`;
  }
  if (hours < 10) {
    hoursEl.innerHTML = `0${hours}`;
  }
}

function count() {
  if (running) {
    setTimeout(function () {
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
      updateTimer();
      count();
    }, 1000);
  }
}

// Event listeners
document.querySelector('.start').addEventListener('click', function () {
  if (!running) {
    running = true;
    count();
  }
});

document.querySelector('.stop').addEventListener('click', function () {
  running = false;
});

document.querySelector('.reset').addEventListener('click', function () {
  running = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTimer();
});