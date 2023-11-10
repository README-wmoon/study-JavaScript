// 객체는 {} 를 사용하여 만든다
let book1 = {
  title : '대모험' , 
  page:205, 
  author:'김철수',
  publisher:'그린출판사',
  price:35500,
  'book color':'파란색',
  50: '배상엽'
};

// 객체속에있는 property는 .을 통해 접근할수있다
console.log(book1.price);
// []를 통해 접근할 수 있다
// console.log(book1.book color);
console.log(book1['price']);
console.log(book1['book color'])
console.log(book1[50]);


let numbers = [10, 20, 37, 50, 42];
// console.log(numbers.3);
console.log(numbers);
