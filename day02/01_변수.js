console.log('연결됨');

// var를 통한 변수의 선언
var variable1;
// var을 통해 값을 선언만 했을 경우 기본적으로 변수 안에는 undefined가 들어가 있다
console.log(variable1);
// 대입연산자를 사용하여 값을 대입한다
// (대입연산자는 방향성있기 때문에 오른쪽에서 왼쪽으로 해석한다)
variable1 = 10;
console.log(variable1);

variable1 = '배상엽';
console.log(variable1);

variable1 = 50;
console.log(variable1);

console.log('끝')

// 재선언을 하면 기존 변수를 활용하여 사용하게 된다..
var variable1;
console.log(variable1);

// let을 통한 선언 ES6
console.log('==================');
let variable2;
// 선언후 최초로 대입한 값이 없다면 undefined가 들어가 있다
console.log(variable2);
variable2 = '김철수'; // 값을 최초로 대입하는 행위 : 초기화
console.log(variable2);

// 재선언 불가능 
// let variable2;

// 변수를 선언하면서 동시에 초기화를 해줘야 한다
const variable3 = '배상엽';
// variable3 = 20; // 재할당 불가능
