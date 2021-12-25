const rsp_arr = ['rock', 'scissors', 'paper'];

console.log(rsp_arr[Math.floor(Math.random() * rsp_arr.length)]);

//1. 시작 버튼을 누름

//2. 상대방(컴퓨터)의 값이 랜덤으로 돌아감

//3. 사용자가 가위,바위 또는 보 버튼을 누름

//4. 컴퓨터 값과 사용자 값을 비교

//4-1. 두 값이 같다 무승부 또는 패배

//4-2. 가위 < 바위, 바위 < 보, 보 < 가위 승리

//4-3. 위와 반대 방향 패배

//5-1. 승리 : 게임을 이어나감

//5-2. 무승부, 패배 : game over

const startBtn = document.querySelector('.start_btn');
const rockBtn = document.querySelector('#rock');
const scissorsBtn = document.querySelector('#scissors');
const paperBtn = document.querySelector('#paper');
console.log(document.querySelector('#coin').value);
const coinVal = document.querySelector('#coin');
console.log(typeof Number(coinVal.value));
let computer_answer = '';
let rsp_action = '';
let resetVal = 0;

function btn_listener(event) {
  computer_answer = document.querySelector('.active').id;
  // rsp_arr[Math.floor(Math.random() * rsp_arr.length)]; 랜덤 뽑기
  console.log(computer_answer);
  if (coinVal.value < 0) {
    alert('game over');
    alert('코인이 없습니다.');
    confirm('코인을 추가 결제 하시겠습니까?');
    let payment = prompt('결제 금액을 입력해주세요');
    coinVal.value = payment;
  } else {
    if (computer_answer != event.target.id) {
      if (computer_answer == 'scissorsPic' && event.target.id == 'rock') {
        coinVal.value = Number(coinVal.value) * 2;
        clearInterval(rsp_action);
        for (let i = 0; i < pic_arr.length; i++) {
          pic_arr[i].classList.remove('active');
        }
        pic_arr[1].classList.add('active');
        resetVal = 0;
        alert('승리');
        return;
      } else if (computer_answer == 'rockPic' && event.target.id == 'paper') {
        coinVal.value = Number(coinVal.value) * 2;
        clearInterval(rsp_action);
        for (let i = 0; i < pic_arr.length; i++) {
          pic_arr[i].classList.remove('active');
        }
        pic_arr[0].classList.add('active');
        resetVal = 0;
        alert('승리');
        return;
      } else if (computer_answer == 'paperPic' && event.target.id == 'scissors') {
        coinVal.value = Number(coinVal.value) * 2;
        clearInterval(rsp_action);
        for (let i = 0; i < pic_arr.length; i++) {
          pic_arr[i].classList.remove('active');
        }
        pic_arr[2].classList.add('active');
        resetVal = 0;
        alert('승리');
        return;
      }
    }
    alert('패배');
    coinVal.value -= 75;
    clearInterval(rsp_action);
    resetVal = 0;
  }
}
//버튼 이벤트
rockBtn.addEventListener('click', btn_listener);
scissorsBtn.addEventListener('click', btn_listener);
paperBtn.addEventListener('click', btn_listener);

console.log(document.getElementsByClassName('pic')[0].className);
const pic_arr = document.getElementsByClassName('pic');
console.log(pic_arr.length);
console.log(document.querySelector('.active').id);

//전부 삭제 후 랜덤 숫자에 맞춰 active 넣기
startBtn.onclick = function () {
  if (resetVal == 0) {
    function rspImg1() {
      for (let i = 0; i < pic_arr.length; i++) {
        if (i == pic_arr.length - 1) {
          i = 0;
          pic_arr[pic_arr.length - 1].classList.remove('active');
          pic_arr[i].classList.add('active');
          ++resetVal;
          return;
        } else {
          if (pic_arr[i].classList.contains('active')) {
            pic_arr[i].classList.remove('active');
            pic_arr[i + 1].classList.add('active');
            ++resetVal;
            return;
          }
        }
      }
    }
  } else {
    console.log(pic_arr);
    return;
  }
  console.log(computer_answer);
  rsp_action = setInterval(rspImg1, 100);
};
