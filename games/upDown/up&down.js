//요소 선택
const inp = document.querySelector('.random_inp');
let num_name = document.querySelector('.num_name');
let result_name = document.querySelector('.result_name');
const img = document.querySelector('.up_down_img');
//up&down에 필요한 숫자 변수
let randoms = Math.floor(Math.random() * 99) + 1;
let min = 1;
let max = 100;
let count = 0;

console.log('정답:' + randoms);
randomBtn.onclick = function () {
  console.log(inp.value);
  if (count == 8) {
    console.log('아1');
    img.src = './up&down img/실패.jpg';
    result_name.innerText = '모든 기회를 사용하셧습니다.';
    return;
  } else if (randoms == inp.value) {
    img.src = './up&down img/클리어.jpg';
    num_name.innerText = '정답:' + randoms;
    result_name.innerText = count + '번 만에 정답 입니다!!';
  } else if (randoms > inp.value) {
    max = Number(inp.value);
    img.src = './up&down img/업.jpg';
    num_name.innerText = max + ' 보다 더 큽니다';
    result_name.innerText = 'UP!!';
  } else if (randoms < inp.value) {
    min = Number(inp.value);
    img.src = './up&down img/다운.jpg';
    num_name.innerText = min + '보다 더 작습니다';
    result_name.innerText = 'Down!!';
  }
  console.log(count);
  count++;
};
