console.log('연결확인');

// 전통적인 방식의 함수
function printName(a){
  console.log('안녕하세요');
  console.log(a);
  console.log('반갑습니다');
}

printName('배상엽');

//이름없는 함수, 바로 실행
(function (a){
  console.log('안녕하세요');
  console.log(a);
  console.log('반갑습니다');
})('김철수');

// 이름없는 함수는 변수에 저장해놓고 사용
let tmp = function (a){
  console.log('안녕하세요');
  console.log(a);
  console.log('반갑습니다');
}


tmp('홍길동');


// 화살표표현식을 통한 익명함수
((a) => {
  console.log('안녕하세요');
  console.log(a);
  console.log('반갑습니다');
})('박영희');

let tmp2 = (a)=>{
  console.log('안녕하세요');
  console.log(a);
  console.log('반갑습니다');
}

let tmp3 = a=>console.log(a,'님 안녕하세요');
tmp3('김영희');

let tmp4 = (a, b)=>a+b;
console.log(tmp4(50, 90));

// 객체 속에 함수
// 150 값과 '배상엽' 값과 함수를 저장하겠다

let person = {
  age:150,
  title:"배상엽",
  f: ()=>console.log('안녕하세요')
}

console.log(person.age);
console.log(person.title);
person.f();

// 책 제목, 가격, 저자
// 생성자함수, 객체를 생성해주는 함수
function Book(a, b, c){
  this.price = a;
  this.title = b;
  this.author = c;
}

// new 생성자() --> 객체가 만들어진다
let b1 = new Book(100, '홍길동전', '미상');
console.log(b1);
console.log(typeof b1);

// 날짜 객체
// 년도, 월, 일, 요일, 시, 분, 초
let dday = new Date('2020-01-01');
console.log(dday);
console.log(dday.getDate());
console.log(dday.getDay());