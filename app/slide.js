//박스에 css를 추가해 이동시키기
//

const slideLi = document.getElementsByClassName('slide_li');

function slide() {
  let box0 = 0;
  let box1 = 0;
  let box2 = 0;
  let box3 = 0;

  for (let i = 0; i < slideLi.length; i++) {
    if (slideLi[i].classList.contains('box0')) {
      slideLi[i].classList.remove('box0');
      box0 = i;
    }
  }
  for (let i = 0; i < slideLi.length; i++) {
    if (slideLi[i].classList.contains('box1')) {
      slideLi[i].classList.remove('box1');
      box1 = i;
    }
  }
  for (let i = 0; i < slideLi.length; i++) {
    if (slideLi[i].classList.contains('box2')) {
      slideLi[i].classList.remove('box2');
      box2 = i;
    }
  }
  for (let i = 0; i < slideLi.length; i++) {
    if (slideLi[i].classList.contains('box3')) {
      slideLi[i].classList.remove('box3');
      box3 = i;
    }
  }
  for (let i = 0; i < slideLi.length; i++) {
    if (slideLi[i].classList.contains('box4')) {
      slideLi[i].classList.remove('box4');
      box4 = i;
    }
  }
  for (let i = 0; i < slideLi.length; i++) {
    if (slideLi[i].classList.contains('box5')) {
      slideLi[i].classList.remove('box5');
      box5 = i;
    }
  }
  for (let i = 0; i < slideLi.length; i++) {
    if (slideLi[i].classList.contains('box6')) {
      slideLi[i].classList.remove('box6');
      box6 = i;
    }
  }

  box0 = box0 + 1 == slideLi.length ? 0 : ++box0;
  box1 = box1 + 1 == slideLi.length ? 0 : ++box1;
  box2 = box2 + 1 == slideLi.length ? 0 : ++box2;
  box3 = box3 + 1 == slideLi.length ? 0 : ++box3;
  box4 = box4 + 1 == slideLi.length ? 0 : ++box4;

  slideLi[box0].classList.add('box0');
  slideLi[box1].classList.add('box1');
  slideLi[box2].classList.add('box2');
  slideLi[box3].classList.add('box3');
  slideLi[box4].classList.add('box4');
  slideLi[box3].classList.add('box5');
  slideLi[box4].classList.add('box6');
}

window.setInterval(slide, 4000);
// for (let j = 0; j < 5; j++) {
//   if (slideLi[i].className == `slide_li box${j}`) {
//     slideLi[i].classList.remove(`box${j}`);
//     slideLi[i].classList.add(`box${j + 1}`);
//     console.log(slideLi);
//   }
