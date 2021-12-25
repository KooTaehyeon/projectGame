const weapon_text = document.querySelector('.text_box2');
const weapon_name = document.querySelector('.text_box1');
const texts = document.querySelector('.text')
console.log(weapon_text);
console.log(weapon_name);
console.log(texts);
let momey_nem = 1000;
momey.innerText = '소지금:' + `${momey_nem}` + '원';
let up_momey = 0; //강화 성공하면 쌓인 포인트
//소지금

weapon_name.innerText = '무기';
momey_p.innerText = '강화 성공비:' + `${up_momey}` + '원';
weaponUp.addEventListener('click', enhancement);
let weaponLevel = 0;
let weaponPer = 80;
function enhancement() {
  weapon_name.classList.add('text_on');
  if (momey_nem <= 0) {
    weapon_text.innerHTML = '돈이 없어서 게임을 못해요 ㅜ.ㅜ  <br>' + '<a href="#"> 소지금을 충전해주세요 </a>';
    return;
  }
  momey_nem -= 100;
  let percentage = Math.floor(Math.random() * 99) + 1;
  console.log('weaponPer:', weaponPer, 'percentage:', percentage);
  if (weaponPer > percentage) {
    weaponLevel++;
    weaponPer = weaponPer - 4;
    weapon_text.innerHTML = '강회 성공<br><br>';
    weapon_name.innerText = '무기 +' + weaponLevel;
    console.log(weaponPer);
    console.log(weaponLevel);
    up_momey += 400;
  } else {
    weapon_text.innerHTML = '강회에 실패<br><br>';
    weapon_name.innerText = '무기';
    weaponPer = 80;
    weaponLevel = 0;
    up_momey = 0;
  }
  momey.innerText = '소지금' + `${momey_nem}` + '원';
  momey_p.innerText = '강화 성공비:' + `${up_momey}` + '원';
}

// 강화를 멈추면 받는 포인트
weaponEnd.addEventListener('click', endweapon);
function endweapon() {
  weapon_name.classList.remove('text_on');
  momey_nem += up_momey;
  momey.innerText = '소지금' + `${momey_nem}` + '원';
  up_momey = 0;
  weaponLevel = 0;
  weapon_name.innerText = '무기';
  momey_p.innerText = '강화 성공비:' + `${up_momey}` + '원';
}
