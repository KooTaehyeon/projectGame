const gameinp = document.getElementById('gameConsole');
const gameText = document.querySelector('.geme_ex_text>p');

txtBtn.addEventListener('click', gameExp);
function gameExp() {
  if (gameinp.value.trim() == '') {
    gameText.innerText = '게임이름을 적어야 설명을 하지';
  } else if (gameinp.value == '강화확률') {
    console.log('오냐');
    gameText.innerText =
      '강화 게임은 무기를 강화하면' + '강화 성공비를 얻습니다 강화가 높은 무기일수록 강화확률은 점점 줄어들게 됩니다 .';
  } else if (gameinp.value == '로또') {
    gameText.innerText = 'lotto' + '로또(빙고(bingo) 비슷한 숫자 맞추기 게임)	복권';
  } else if (gameinp.value == '카카오경마') {
    gameText.innerText = '귀여운 카카오 프렌즈들이 달리기 하는 게임입니다' + '1등을 할거 같은친구를 골라주세요';
  } else if (gameinp.value == '야구') {
    gameText.innerText = '숫자야구 게임입니다';
  } else if (gameinp.value == '춘식이잡기') {
    gameText.innerText = '귀여운 춘식이를 잡아보아요';
  } else if (gameinp.value == '업&다운') {
    gameText.innerText = '1~100까지 수에서 정해진 숫자를 7번 안 맞추는 게임입니다';
  } else if (gameinp.value == '가위바위보') {
    gameText.innerText =
      '가위는 보를이기고 바위에게 지고' +
      '바위는 가위를이기고 보에게 지고 보는 바위를이기고 가위한테 지는' +
      '그런 게임입니다.';
  } else if (gameinp.value) {
    gameText.innerText = '제대로 적어줄래요?';
  }
}

//  설명창 토글
const aside_chat = document.querySelector('.aside_wrap');

extBtn.onclick = function () {
  aside_chat.classList.toggle('sideActive');
};
