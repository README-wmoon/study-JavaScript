console.log('02파일 실행됨');
console.log('======덧셈연산자=======');
// number + number --> number
console.log('10 + 20 :' , 10 + 20);
// string + string --> string
console.log('10' + '안녕');

// string + undefined --> string
console.log(undefined + '안녕')

// string + number --> string
console.log(10 + '안녕');
console.log(50 + '50');

// NaN
// let a = NaN;
console.log(undefined + 10);


console.log('=======뺄셈연산자======');
console.log('50' - '10'); // NaN

// string - number --> number
// number - string --> number
console.log('10' - 2); // number타입 8결과

console.log(undefined - 1);

console.log(10 / 0); // Infinity(number타입)
console.log(-10 / 0); // -Infinity(number타입)


console.log('종료');