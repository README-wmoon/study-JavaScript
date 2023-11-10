let a = document.getElementById('intro');
console.log(a);
let b = document.querySelector('body > p#intro');
console.log(b);
b.style.color = 'red';

// 클래스이름으로 가져오기
let c = document.getElementsByClassName('em');
console.log(c);

let d = document.querySelectorAll('.em');
console.log(d);


// 태그이름으로 가져오기
let e = document.getElementsByTagName('p');
console.log(e);

let f = document.querySelectorAll('p');
console.log(f);


const buttonClick = ()=>{
  console.log('버튼클릭됨');
  // 첫버째 p 태그를 가져와서
  // 글자 색상을 빨간색으로 변경
  let firstP = document.querySelector('p');
  firstP.style.color = 'red';
}

const login =()=>{
  let idInput = document.querySelector('#id');
  let idValue = idInput.value; //사용자가 input 안에 입력한 값이 문자열로 들어있음
  console.log(idValue);
  let errP = document.querySelector('#id-err');
  console.log(errP);
  if(idValue === ''){
    // idValue가 '' 이라면 id-err 를 display block으로 바꿔주기
    errP.style.display = 'block';
  }else{
    // idValue가 ''이 아니라면 id-err를 display none으로 바꿔주기
    errP.style.display = 'none';
  }



  // console.log([idInput]);
}

