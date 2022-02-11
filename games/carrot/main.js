'use strict';

const gameBtn = document.querySelector('.game__btn');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();

const popUp = document.querySelector('.pop-up');
const popUpBtn = document.querySelector('.pop-up__btn');
const popUpMessage = document.querySelector('.pop-up__message');

const gamePoint = document.querySelector('.game__point');

const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const TIME_DURATION_SEC = 5;
const MOVE_DURATION_SEC = 500;
const LEVEL = 1;

const x1 = fieldRect.width - CARROT_SIZE;
const y1 = fieldRect.height - CARROT_SIZE;

let start = false;
let timer = 3;
let score = 0;
let win = true;
let level = 1;
let point = 0;
let moveTimer = 0;
let bugCount = BUG_COUNT;
let carrotCount = CARROT_COUNT;
let gameTime = TIME_DURATION_SEC;
let gameMove = MOVE_DURATION_SEC;

field.addEventListener('click', (e) => {
  if (!start) {
    return;
  }
  const target = e.target;
  if (target.className === 'carrot') {
    target.remove();
    score++;
    point += 10;
    gamePoint.innerText = `${point}점`;
    updateScore(carrotCount);
    if (score === carrotCount) {
      win = true;
      winSetting(win);
      finishGame(win);
    }
  } else if (target.className === 'bug') {
    win = false;
    winSetting(win);
    finishGame(win);
    point = 0;
  }
});

function winSetting() {
  if (win) {
    level++;
    bugCount = bugCount + BUG_COUNT;
    carrotCount = carrotCount + CARROT_COUNT;
    gameTime = gameTime + 1;
  } else {
    level = 1;
    bugCount = BUG_COUNT;
    carrotCount = CARROT_COUNT;
    gameTime = TIME_DURATION_SEC;
  }
}

function updateScore() {
  gameScore.innerText = carrotCount - score;
}

popUpBtn.addEventListener('click', (e) => {
  startGame();
  hiddenPopUp();
});

gameBtn.addEventListener('click', (e) => {
  if (!start) {
    startGame();
  } else {
    stopGame();
  }
});

function finishGame(win) {
  stopTimer();

  showPopUpWithMessage(
    win ? '다음 LEVEL 도전!' : `당신의 점수는 ${point}점 입니다`
  );
  hiddenStopButton();
  moveStop();
  start = false;
}

function startGame() {
  init();
  showStopButton();
  showTimerAndScore();
  startTimer();
  start = true;
}

function stopGame() {
  stopTimer();
  showPopUpWithMessage('Replay?');
  hiddenStopButton();
  moveStop();
  point = point - score * 10;
  start = false;
}

function hiddenPopUp() {
  popUp.style.visibility = 'hidden';
}

function stopTimer() {
  clearInterval(timer);
}

function hiddenStopButton() {
  gameBtn.style.visibility = 'hidden';
}

function showPopUpWithMessage(msg) {
  popUp.style.visibility = 'visible';
  popUpMessage.innerText = `${msg}`;
}

function startTimer() {
  let remainTime = gameTime;
  updateTimerText(remainTime);
  timer = setInterval(() => {
    updateTimerText(--remainTime);
    if (remainTime === 0) {
      win = false;
      finishGame(win);
    }
  }, 1000);
}

function updateTimerText(sec) {
  const minute = Math.floor(sec / 60);
  const second = sec % 60;
  gameTimer.innerText = `${minute}:${second}`;
}

function showTimerAndScore() {
  gameTimer.style.visibility = 'visible';
  gameScore.style.visibility = 'visible';
}

function showStopButton() {
  gameBtn.style.visibility = 'visible';
  const icon = document.querySelector('.game__btn .fas');
  icon.classList.remove('fa-play');
  icon.classList.add('fa-stop');
}

function addItem(className, count, imgPath) {
  const x2 = 0;
  const y2 = 0;
  for (let i = 0; i < count; i++) {
    const item = document.createElement('img');
    item.setAttribute('src', imgPath);
    item.classList.add(className);

    const x = randomNum(x1, x2);
    const y = randomNum(y1, y2);

    item.style.position = 'absolute';
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;

    field.appendChild(item);
  }
}

function randomNum(max, min) {
  return Math.random() * (max - min) + min;
}

function move() {
  const bugs = document.querySelectorAll('.bug');
  moveTimer = setInterval(() => {
    bugs.forEach((bug) => {
      const x = randomNum(-50, 50);
      const y = randomNum(-50, 50);
      bug.style.transition = 'all 2000ms ease';

      let newX = parseFloat(bug.style.left);
      newX += x;
      if (newX > 0 && newX < x1) {
        bug.style.transform = `translateX(${x}px)`;
      }

      let newY = parseFloat(bug.style.top);
      newY += y;
      if (newY > 0 && newY < y1) {
        bug.style.transform = `translateY(${y}px)`;
      }
    });
  }, MOVE_DURATION_SEC);
}

function moveStop() {
  clearInterval(moveTimer);
}

function init() {
  score = 0;
  field.innerHTML = ``;
  gamePoint.innerText = `${point}점`;
  gameScore.innerText = carrotCount;
  addItem('carrot', carrotCount, './img/carrot.png');
  addItem('bug', bugCount, './img/bug.png');
  move();
}
