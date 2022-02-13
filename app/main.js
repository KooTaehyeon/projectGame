const gameSelect = document.querySelector('.game_select');
const gameNext = document.querySelector('#nextGame');
const gameBefore = document.querySelector('#beforeGame');
console.log(gameSelect);
const gameList = ['baseball', 'catch', 'race', 'lotto', 'RSP', 'upDown', 'woup', 'carrot'];

gameNext.onclick = function () {
  for (let i = 0; i < gameList.length; i++) {
    if (gameSelect['src'].includes(`${gameList[i]}`)) {
      if (i + 1 == gameList.length) {
        i = 0;
        gameSelect['src'] = `./games/${gameList[i]}`;
        return;
      } else {
        gameSelect['src'] = `./games/${gameList[i + 1]}`;
        return;
      }
    }
  }
};

gameBefore.onclick = function () {
  for (let i = 0; i < gameList.length; i++) {
    if (gameSelect['src'].includes(`${gameList[i]}`)) {
      if (i - 1 < 0) {
        i = gameList.length - 1;
        console.log(i);
        gameSelect['src'] = `./games/${gameList[i]}`;
        return;
      } else {
        gameSelect['src'] = `./games/${gameList[i - 1]}`;
        return;
      }
    }
  }
};
// const calculate = document.querySelector('#calculate');

// calculate.onclick = function () {
//   const modal1 = document.querySelector('.calculate');
//   modal1.classList.add('active');
// };

// document.querySelector('.cancle_btn').onclick = function () {
//   const modal1 = document.querySelector('.calculate');
//   modal1.classList.remove('active');
// };

//필터를 이용해 게임 띄워주기
//필터를 이용한 window.scrollTo 구현
const filterSelect = document.querySelectorAll('.filter_box');
const viewSet = gameView.offsetLeft;
console.log('찾음 ', filterSelect, viewSet);
for (let i = 0; i < filterSelect.length; i++) {
  filterSelect[i].onclick = function (e) {
    const selected = e.currentTarget.id;
    gameSelect['src'] = `./games/${selected}`;
    gameView.scrollIntoView({ behavior: 'smooth' });
  };
}

// 버튼 누르면 게임분류창으로 이동 js
const filter_down = document.querySelector('.cell_down');
filter_down.onclick = function () {
  filterGame.scrollIntoView({ behavior: 'smooth' });
};

// arrow text
const arrows = document.querySelectorAll('.arrow');
const arrowText = document.querySelector('.arrow_text');
arrows.forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    if (e.target.className.includes('row_left')) {
      arrowText.innerText = '⬅ 이전게임';
    } else if (e.target.className.includes('row_right')) {
      arrowText.innerText = '➡ 다음게임';
    } else if (e.target.className.includes('cell_up')) {
      arrowText.innerText = '⬆ 계산하기';
    } else if (e.target.className.includes('cell_down')) {
      arrowText.innerText = '⬇ 게임종류';
    }
  });
});
