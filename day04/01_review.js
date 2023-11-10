console.log('연결확인');

// '대모험', 200 두개의 값을 저장(객체)
let book = {title:'대모험', price:200};
console.log(book);
console.log(book['title']);
console.log(book.title);

// '대모험', 200 두개의 값을 저장(배열)
let myBook = ['대모험', 200];
console.log(myBook);
console.log(myBook[0]);

let books = [ 
  {
    title:'대모험', 
    price:200
  }, 
  {
    title:'곰세마리', 
    price:150
  }, 
  {
    title:'홍길동전',
    price:500
  }
];

console.log(books);
// '대모험' 출력
console.log(books[0].title);
console.log(books[0]['title']);