'use strict';

const $result = document.querySelector('#result');
const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $try = document.querySelector('.try');

let answer;
let tries = 0;
let myValue;
let out = 0;

function getRandomNumber() {
  const candidate = Array(10)
    .fill()
    .map((v, i) => i);
  let newArray = [];
  for (let i = 0; i < 4; i++) {
    newArray.push(candidate.splice(Math.floor(Math.random() * candidate.length - i), 1)[0]);
  }
  return newArray;
}

answer = getRandomNumber();

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(answer);
  console.log(myValue);
  if ($input.value === answer.join('')) {
    $result.textContent = '홈런!!!';
    answer = getRandomNumber();
    tries = 0;
    alert('홈런! 게임을 다시 시작합니다');
    trie.textContent = '';
  } else {
    let myArray = myValue.split('').map((v) => Number(v));
    let ball = 0;
    let strike = 0;
    if (tries >= 9) {
      $result.textContent = `10번 실패 했습니다...정답은 ${answer.join('')} 였습니다`;
      answer = getRandomNumber();
      tries = 0;
      $try.textContent = '';
      alert('ㅠㅠ다시 시작 합니다');
    } else {
      if (out < 2) {
        myArray.forEach((v, i) => {
          if (v === answer[i]) {
            strike += 1;
          } else if (answer.indexOf(v) !== -1) {
            ball += 1;
          }
        });
        if (strike === 0 && ball === 0) {
          out += 1;
        }
        const trie = document.createElement('li');
        trie.classList.add('basebll_list');
        tries += 1;
        trie.textContent = `${tries}차 시도 : ${strike}스트라이크 ${ball}볼 / ${out}아웃 입니다 / ${myValue}`;
        $try.append(trie);
      } else {
        $result.textContent = `3아웃...정답은 ${answer.join('')} 였습니다`;
        answer = getRandomNumber();
        tries = 0;
        out = 0;
        $try.textContent = '';
        alert('3아웃...다시 시작 합니다');
      }
    }
  }
  $input.value = '';
});

$input.addEventListener('change', (e) => {
  myValue = e.target.value;
});
