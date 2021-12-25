// 춘식이 안녕
const chunsicBtn = document.querySelector('#btnChun');
console.log(chunsicBtn);
chunsicBtn.onclick = function () {
  chunsicBtn.classList.toggle('active');
};

let rate = 3;

const user = new Array(4);
user[0] = '라이언';
user[1] = '어피치';
user[2] = '무지';
user[3] = '네오 ';

const speed = new Array(4);
speed[0] = new Array(4);
speed[1] = new Array(4);
speed[2] = new Array(4);
speed[3] = new Array(4);

const rally = new Array(4);
rally[0] = 0;
rally[1] = 0;
rally[2] = 0;
rally[3] = 0;

//화면 왼쪽에서 출발, 3/1 지점까지 1단계속도, 2/1 지점까지 2단계 속도, 나머지는 3단계 속도
let goal = 700; // 경기장 길이

let goal1 = goal / 4;
let goal2 = goal / 2;
let goal3 = (goal * 3) / 4;

let gage = 0; // 단계
let best = 0; //제일 빠른놈
let j = 0;

let player = new Array(4);

let winner = 0; //1등

// 버튼누르면 출발함
function gogo() {
  //각 단계별 속도를 지정함
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      speed[i][j] =
        // Math.random() * (1) +
        Math.random() * (j + 1) + 1; //단계별 속도
    }
  }
  console.log(speed);
  race();
}
// 경기 진행

function race() {
  // 동물의 DIV
  player[0] = document.getElementById('img1');
  player[1] = document.getElementById('img2');
  player[2] = document.getElementById('img3');
  player[3] = document.getElementById('img4');

  if (gage < goal) {
    // 결승선 통과를 안했다면
    //단계별 속도변화 제일 빠른 동물 기준
    if (gage > goal1) j = 1;
    if (gage > goal2) j = 2;
    if (gage > goal3) j = 3;

    for (let i = 0; i < 4; i++) {
      rally[i] += speed[i][j];
      if (best < rally[i]) {
        best = rally[i]; //젤빠른놈
        winner = i;
      }
      // 현재 위치에 따라 표시
      player[i].style.left = rally[i] + 'px'; // 현재 위치
    } // for
    console.log(rally[0]);
    gage = best;
    setTimeout(function () {
      race();
    }, 8); // 게임시간(프렌즈들이 달리는 시간)
  } else {
    // 경기 종료
    alert(user[winner] + '가 이겼습니다 !');
    for (var i = 0; i < 4; i++) {
      rally[i] = 0;
      gage = 0;
      best = 0;

      // 현재 위치에 따라 표시
      player[i].style.left = rally[i] + 'px'; // 현재 위치 리셋 처음으로

      chunsicBtn.classList.remove('active');
    }
  }
}
