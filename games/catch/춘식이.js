const square = document.querySelectorAll('.square');
const chun = document.querySelectorAll('.kakao_chun');
console.log(square);
console.log(chun);
console.log(time_left);
console.log(score);



//춘식이 잡으면 점수 주는 것
let result = 0;

//남은 시간 
let currentTime = time_left.innerText;

// 클릭 위치 비교 함수
 let hit;

function randomChun() {
    square.forEach(i => {
        i.classList.remove('chun');
    });
    // 0~15까지 16개 정수를 만들어 저장 
    let radomPosition = square[Math.floor(Math.random() * 16)];
    //해당 위치에 classList로 'kakao_chun 클래스를 만들어준다.
    //예를들어 square[5]가 앞에 저장됬으면 해당 square[5] class='kakao_chun'가 되는것
    radomPosition.classList.add('kakao_chun');
     hit = radomPosition.id
}

//이펙트
// for(let i=0; i<square.length; i++){

// $(function(){
//     $(square)[i].click(function(){
//         $(this)[i].effec('explode');
//     });
// });

// }



//클릭된 곳이 춘식이가 있다면 점수를 올려줌
square.forEach(id => {
    //네모에 클릭 되면 실행되는 이벤트
    id.addEventListener('click', function (e) {
     


        // id와 지정된 춘식이 위치가 같다면 아래 실행~
        console.log(e.target.id);
        // console.log(`id: ${id}`);
        // console.log(`hit: ${hit}`);
        if (id.id === e.target.id) {
           
            if(id.id === hit){

                result++
                score.innerText = result;
            }
            //잡은 춘식이 화면에서 없애기
            id.classList.remove('kakao_chun')
        }
    });
});


//  값이 없는 변수를 선언
let timerId = null;

// 시간마다 춘식이가 짠 하고 나타날 함수
function chunMove() {
    timerId = setInterval(function () {
        randomChun();
        countDown();
    }, 1000);
};

//카운트 다운 함수
function countDown() {
    console.log(`첫번: ${currentTime}`);
  
    if (currentTime == 0) {
        clearInterval(timerId);
        alert('Game over your score is ' + result);
        for (let i = 0; i < square.length; i++) {
            square[i].classList.remove('kakao_chun');
        }

        result = 0;
        score.innerText = result;

        currentTime = 10;
        time_left.innerText = currentTime;
        console.log(currentTime);
        return;
    } 
        currentTime--;
        time_left.innerText = currentTime;
    console.log(currentTime);
}


const btn = document.querySelector('.btn_str');
btn.addEventListener('click', chunMove);