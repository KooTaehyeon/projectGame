const hambugerBtn = document.querySelector('.ham');
const memu = document.querySelector('.nav_memu_ul');
const toggle = document.querySelectorAll('.drop_memu');
const toggle0 = document.querySelector('.memu_drop_toggle');
console.log(memu);
memu.addEventListener('click', (e) => {
  if (e.target) {
    toggle.forEach((element) => {
      console.log(element);
      element.classList.toggle('drop_memu_toggle');
    });
  }
});
console.log(toggle);

// const hambugerMenu = document.querySelector('.navMainUl_sub');

// hambugerBtn.onclick = function () {
//   hambugerMenu.classList.toggle('active');
// };

// const hambugerBtn2 = document.querySelector('.ham2');
// hambugerBtn2.onclick = function () {
//   hambugerMenu.classList.toggle('active');
// };
// //지우기

// const item = document.querySelectorAll('.underline');
// const itemList = document.querySelectorAll('.newsUi li');
// function indicator(e, item) {
//   console.log(e.offsetLeft, e.offsetWidth);
//   item.style.left = e.offsetLeft + 'px';
//   item.style.width = e.offsetWidth + 'px';
//   // console.log(item);
// }

// itemList.forEach((link) => {
//   link.addEventListener('mouseover', (e) => {
//     const underline = e.target.parentNode.querySelector('.underline');
//     //console.log(underline);
//     indicator(e.target, underline);
//   });
// });

// const backBtn = document.querySelector('ham');
// const backback = document.querySelector('.subMenu_back');

// backBtn.onclick = function () {
//   backback.classList.toggle('active');
//   console.log(dd);
// };
