class random extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <div class="game">
    <div class="game_setting">
      <input type="text" class="game_input" placeholder="번호 입력" />
      <input type="text" class="game_money" placeholder="배팅할 금액" />
      <button type="button" class="game_btn">게임시작!</button>
    </div>

    <div class="startGame">
      <div class="startGame_menu">
        <h3>당첨번호</h3>
        <ul class="number"></ul>
        <h3>보너스</h3>
        <div class="bonus"></div>
        <div class="result">
          <div class="myInfo">
            <h4>내 번호</h4>
            <span></span>
          </div>
          <div class="myGain">
            <h4>맞은 번호</h4>
          </div>
          <div class="myGetPoint">
            <h4>흭득한 포인트</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
  }
}
customElements.define('lotto-game', random);

const $startGame = document.querySelector('.startGame');
const $number = document.querySelector('.number');
const $bonus = document.querySelector('.bonus');

const $gameSetting = document.querySelector('.game_setting');
const $money = document.querySelector('.game_money');
const $input = document.querySelector('.game_input');
const $btn = document.querySelector('.game_btn');

const $results = document.querySelector('.result');
const $myInfo = document.querySelector('.myInfo');
const $myGain = document.querySelector('.myGain');
const $myGetPoint = document.querySelector('.myGetPoint');

let getNumber = getNumbers();
let timeout;
let i = 0;
let myNum = [];
let myGain = [];
let point;
let same = [];
let check = true;
console.log(getNumber);

$btn.addEventListener('click', () => {
  const myArray = $input.value.split(' ');

  // 6자리 예외처리
  if (myArray.length !== 6) {
    alert('한칸씩 띄워서 6개의 번호를 입력하세요');
    $input.value = '';
    $input.focus();
    return;
  }

  // 중복 숫자 예외처리
  myArray.forEach((item) => {
    if (same.includes(item)) {
      check = false;
    }
    same.push(item);
  });

  if (!check) {
    alert('중복된 숫자는 입력이 안됩니다');
    $input.value = '';
    $input.focus();
    same = [];
    reutrn;
  }

  // 배팅 금액 예외처리
  if (!$money.value) {
    alert('배팅 금액을 입력하세요');
    return;
  }

  point = Number($money.value);
  myNum = myArray.map((item) => Number(item));
  $startGame.style.display = 'block';
  $gameSetting.style.display = 'none';
  gameStart();
});

// 순서대로 번호가 나오고, 당첨 결과과 나옴
function gameStart() {
  for (let i = 0; i < getNumber.length - 1; i++) {
    timeout = setTimeout(() => {
      const num = document.createElement('li');
      num.classList.add('num');
      num.textContent = getNumber[i];
      num.style.backgroundColor = numBakground(num.textContent);
      $number.append(num);
    }, 1000 * (i + 1));
  }

  timeout = setTimeout(() => {
    const bon = document.createElement('span');
    bon.classList.add('num');
    bon.textContent = getNumber[getNumber.length - 1];
    bon.style.backgroundColor = numBakground(bon.textContent);
    $bonus.append(bon);
  }, 7000);

  timeout = setTimeout(() => {
    $results.style.opacity = '1';
  }, 8000);

  // 내가 입력한 번호
  const infoSpan = document.createElement('span');
  infoSpan.textContent = myNum.join(' ');
  $myInfo.append(infoSpan);

  // 내가 맞춘 번호
  myGain = getNumber.filter((item) => myNum.includes(item));
  if (myGain.length > 0) {
    myGain.forEach((item) => {
      const gainSpan = document.createElement('span');
      gainSpan.classList.add('gainNum');
      gainSpan.textContent = item;
      gainSpan.style.backgroundColor = numBakground(gainSpan.textContent);
      $myGain.append(gainSpan);
    });
  } else {
    const notSpan = document.createElement('span');
    notSpan.textContent = '꽝!';
    $myGain.append(notSpan);
  }

  // 포인트 주기
  const getPoint = document.createElement('span');
  getPoint.classList.add('pointNum');
  if (myGain.length === 1) {
    point = point * 2;
  } else if (myGain.length === 2) {
    point = point * 5;
  } else if (myGain.length === 3) {
    point = point * 10;
  } else if (myGain.length === 4) {
    point = point * 50;
  } else if (myGain.length === 5) {
    point = point * 100;
  } else if (myGain.length === 5 && myGain.includes(getNumber.length - 1)) {
    point = point * 200;
  } else if (myGain.length === 6) {
    point = point * 1000;
  }
  console.log(point);
  getPoint.innerText = `${point} 포인트 흭득!!!`;
  $myGetPoint.append(getPoint);
}

// 공 배경색 주기
function numBakground(num) {
  num = Number(num);
  let background;
  if (num < 10) {
    background = 'red';
  } else if (num < 20) {
    background = 'yellow';
  } else if (num < 30) {
    background = 'blue';
  } else if (num < 40) {
    background = 'orange';
  } else {
    background = 'pink';
  }
  return background;
}

// 랜덤 번호 뽑기
function getNumbers() {
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  let shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const number = shuffle.slice(0, 6).sort((a, c) => a - c);
  const bonus = shuffle[shuffle.length - 1];
  number.push(bonus);
  return number;
}
