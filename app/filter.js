const filterE = document.querySelectorAll('.filter_main_container a');

btnAll.addEventListener('click', gameFilter);
btns1.addEventListener('click', gameFilter1);
btns2.addEventListener('click', gameFilter2);
btns3.addEventListener('click', gameFilter3);

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

const search = document.querySelector('.filterSearch');
const searchBtn = document.querySelector('.searchBtn');

// 검색기능

searchBtn.addEventListener('click', function (e) {
  console.log(search.value);
  for (let i = 0; i < boxGame.length; i++) {
    if (search.value.trim() == '') {
      alert('공백을 허용하지 않아요!');
      return;
    } else if (search.value.length == 1) {
      alert('두글자 이상입니다!');
      console.log('이프문');
      return;
    } else if (boxGame[i].innerText.includes(`${search.value}`)) {
      filterE[i].style.display = 'block';
<<<<<<< HEAD
=======
  
>>>>>>> a5814277474a3ee105111a22d815e4790546be2f
    } else {
      filterE[i].style.display = 'none';
    }
  }
});

// 필터 효과
function filterAni(target, game) {
  console.log(target);
  target.classList.add('ani');
  setTimeout(() => {
    target.classList.remove('ani');
    target.classList.contains(game);
    console.log(target.classList.contains(game));

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
