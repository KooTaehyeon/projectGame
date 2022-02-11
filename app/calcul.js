// 숫자 클릭 시 casioHead와
// 연산 클릭 시 casioHead에 출력
// = 클릭 시 연산 결과값 casioHead와 casioInput에 출력
const btn_num = document.querySelectorAll('.casio_num');
const numli = document.querySelector('#casioHead');
const btn_oper = document.querySelectorAll('.casio_oper');
const numResult = document.querySelector('#casioInput');

let num1;
let num2;
let oper;
for (let i = 0; i < btn_num.length; i++) {
  btn_num[i].onclick = function () {
    if (
      btn_num[i].innerText == '*' ||
      btn_num[i].innerText == '/' ||
      btn_num[i].innerText == '+' ||
      btn_num[i].innerText == '-'
    ) {
      if (oper) {
        return;
      } else if (num1) {
        oper = btn_num[i].innerText;
        numli.innerText += oper;
        console.log(oper);
      } else {
        alert('숫자부터 입력하세요');
      }
    } else if (oper === '*' || oper === '/' || oper === '+' || oper === '-') {
      num2 = btn_num[i].innerText;
      numli.innerText += num2;
      console.log(num2);
    } else {
      if (numResult.innerText) {
        numResult.innerText = '';
        numli.innerText = '';
        num1 = btn_num[i].innerText;
        numli.innerText += num1;
      } else {
        num1 = btn_num[i].innerText;
        numli.innerText += num1;
        console.log(num1);
      }
    }
  };
}

document.querySelector('#casioResult').onclick = function () {
  numResult.innerText = eval(numli.innerText);
  numli.innerText = eval(numli.innerText);
  oper = '';
};

document.querySelector('#casioReset').onclick = function () {
  numResult.innerText = '';
  numli.innerText = '';
  num1 = '';
  num2 = '';
  oper = '';
};

// let num1="";
// let num2="";
// let oper="";
// btn_num[i].onclick=function(){
//   if(oper===("*" || "/" || "+" || "-")){
//     oper=btn_num[i].innerText;
//     numli.innerText+=oper;
//     console.log(oper);
//   }else if(oper!=("*" || "/" || "+" || "-")) {
//     num1=btn_num[i].innerText;
//     numli.innerText+=num1;
//     console.log(num1);
//   }else {
//     num2=btn_num[i].innerText;
//     numli.innerText+=num2;
//     console.log(num2);
//   }

//   }
// }

// eval........

// typeof(Number(btn_num[i].innerText))=="number"

// for (let i = 0; i < btn_oper.length; i++) {
//   let oper="";
// btn_oper[i].onclick=function(){
//   console.log(btn_oper[i].innerText);
//   oper+=btn_oper[i].innerText;
//   numli.innerText+=oper;
//   num=0;

// }
// }
