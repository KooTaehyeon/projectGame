const filterE = document.querySelectorAll('.filter_main_container a');
const Btn_bg = document.querySelectorAll('.gameBtn');
console.log(Btn_bg);

btnAll.addEventListener('click', gameFilter);
btns1.addEventListener('click', gameFilter1);
btns2.addEventListener('click', gameFilter2);
btns3.addEventListener('click', gameFilter3);

//버튼 효과
for (let i = 0; i < Btn_bg.length; i++) {
  Btn_bg[i].addEventListener('click', (e) => {
    for (let j = 0; j < Btn_bg.length; j++) {
      if (e.target.innerText === Btn_bg[j].innerText) {
        console.log('여긴옴');
        Btn_bg[j].classList.add('btn_color');
      } else if (e.target.innerText != Btn_bg[j].innerText) {
        console.log('아니라면');
        Btn_bg[j].classList.remove('btn_color');
      }
    }
  });
}

function gameFilter() {
  for (let i = 0; i < filterE.length; i++) {
    filterAni(filterE[i], 'filter_box');
  }
}

function gameFilter1() {
  for (let i = 0; i < filterE.length; i++) {
    filterAni(filterE[i], 'percentage');
  }
}
function gameFilter2() {
  for (let i = 0; i < filterE.length; i++) {
    filterAni(filterE[i], 'casual');
  }
}

function gameFilter3() {
  for (let i = 0; i < filterE.length; i++) {
    filterAni(filterE[i], 'sport');
  }
}

const boxGame = document.querySelectorAll('.filter_box');

const search = document.querySelector('.main_search_inp');
const searchBtn = document.querySelector('.main_search_btn');
const filter_container = document.querySelector('.filter_main_container');

// 검색기능

searchBtn.addEventListener('click', function (e) {
  console.log(search.value);
  for (let i = 0; i < boxGame.length; i++) {
    if (search.value.trim() == '') {
      alert('공백을 허용하지 않아요!');
      return;
    } else if (search.value.length == 1) {
      alert('두글자 이상입니다!');
      return;
    } else if (boxGame[i].innerText.includes(`${search.value}`)) {
      filterE[i].style.display = 'block';
    } else {
      filterE[i].style.display = 'none';
    }
  }
  filter_container.scrollIntoView({ behavior: 'smooth' });
});

// 필터 효과
function filterAni(target, game) {
  target.classList.add('ani');
  setTimeout(() => {
    target.classList.remove('ani');
    target.classList.contains(game);

    if (target.classList.contains(game)) {
      target.style.display = 'block';
    } else {
      target.style.display = 'none';
    }
  }, 500);
}

// 게임 Hover
const filterGames = document.querySelector('.filter_main_container');

filterGames.addEventListener('mouseover', (e) => {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const target = e.target.parentNode;
  const $description = target.querySelector('.description');
});
