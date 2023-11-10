// console.log(prompt());

// prompt('당신의 이름을 입력하시오', '안녕');
// 사용자에게 아이디를 입력 받는다
// let id = prompt('id를 입력하세요');

// console.log(typeof id);
// // 반갑습니다 OOO님
// console.log('반갑습니다 ' +id + '님');
// console.log(`반갑습니다 ${id}님`)
// // 000님의 포인트는 1,200점 입니다
// console.log(id + '님의 포인트는 1,200점 입니다');
// console.log(`${id}님의 포인트는 1,200점 입니다`);

// prompt 함수 실행결과는 string 혹은 null
// let num1 = Number(prompt('숫자1입력 >> '));
// let num2 = Number(prompt('숫자2입력 >> '));

// document.write(`<h1>두 수를 더한 결과는 ${num1+ num2}입니다</h1>`);
// document.write(`숫자1에 10을 더한 결과는 ${num1 + 10}입니다`);

// 경고 메시지를 띄어주는 함수
// alert('잘못된 접근입니다');

// 확인 메시지를 띄어주는 함수
// 확인을 클릭하면 함수 실행결과는 true
// 취소를 클릭하면 함수 실행 결과는 false
let check = confirm('페이지를 나가시면 수정사항이 다 사라질수있습니다');
document.write(check);