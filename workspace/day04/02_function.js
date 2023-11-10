console.log('2번파일 실행됨');

//안녕하세요출력, 반갑습니다출력
// console.log('안녕하세요');
// console.log('반갑습니다');

//함수 정의(test 함수)
function test(){
  console.log('안녕하세요');
  console.log('반갑습니다');
}

// 함수 실행
test();

// 안녕하세요 출력 배상엽출력 반갑습니다출력
// a라는변수에는 이름 문자열
// b라는변수에는 나이 number
function printName(a, b){
  console.log('안녕하세요');
  console.log(`${a}님 의 나이는 ${b}입니다`);
  console.log('반갑습니다');

}


printName('배상엽', 20);

printName('김철수', 52);

printName('홍길동', 30);

// alert('아이디가 유효하지 않습니다');

// 함수 실행 결과를 값으로 받아오자
function f1(x){
  
  return 2 * x + 1;
}

console.log(f1(f1(5)));


// let myName = prompt('ddd');
// console.log(myName);

// alert 함수는 return 이 없음
// let res = alert('경고');
// console.log(res);


function f2(x){
  return x * 3 + 3;
}

function f3(x){
  x * 3 + 3;
  return undefined;
}

let res1 = f2(3);
let res2 = f3(3);

//배열은 object타입 中 array타입
// 함수도 객체 object 타입
// 중에서도 function 타입
let res3 = f2;
console.log(res3);

// 익명함수
// 이름이 존재하지 않는 함수 : 다시쓰지 않겠다
// 일회성으로 사용하고 버리는 함수
// function (){

// }