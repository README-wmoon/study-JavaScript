# **코리아 IT 아카데미**
## JavaScript 수업정리

### javascript
- 애니메이션, 화면요소가 이동하거나, 사용자와 상호작용 할 수 있도록 만드는 장치
- 디자인과 관련된건 css로 하자 --> 애니메이션, .. 
- javascript는 데이터를 어떻게 주고 받는지 가 매우매우 매우 중요하다

### 설치
- javascript언어는 설치가 필요없다
- 브라우저가 해석하여 코드를 실행시켜주기 때문에 <br>
독립적으로 실행이 되지 않는다
- 서버쪽으로는 사용하기 부적합,,.?
```
chrome V8 엔진 무료로 open --> node.js 개발 --> javascript를 독립적으로 실행하게 됨..
  --> server쪽도 javascript로 .. ? 
  (flutter dart언어 --> 구글)

  java 의 점유율 80% 이상 왜? 안정화 --> 보안이 좋다 --> 대기업 + 공공기관 
```
### javascript 장점 이자 단점
느슨한 언어(마치 파이썬..!), 데이터의 타입을 스스로 검사하지 않는다..! <br>
--> typescript

### javascript의 타입
```
number 타입 : 21 , 95 , -453 , 3.15 , ...
string 타입 : '안녕하세요', "agpde" , `a` , `215`
undefined 타입 : undefined (값을 정하지 않았음을 나타내기위해서)
```
※ string타입의 값임을 알려주기 위해서는 <br>
'' 혹은 "" 혹은 ``(백틱, 백쿼트) 로 감싸줘야한다!

### javascript의 표기법
한 줄당 명령어 한줄, <br>
명령어 한 줄이 끝나면 마침표역할을 하는 <br>
;(세미콜론)을 붙여도 되고 안붙여도된다 <br>
※ 권장사항(;은 붙이자)

### 컴퓨터의 해석 순서
- 위에서부터 차례대로
- 한 줄이라면 가장 안쪽부터 바깥쪽으로
- 한 줄이라면 우선순위에 따라서

### console.log 함수
1. 인자값 개수:제한없음 타입:any(무슨타입이든X)
2. 동작 : 인자에 전달된 값을 차례대로 출력해준다
3. undefined (함수 사용 결과가 값이 아니에요라는 의미)

### 함수
어떠한 기능을한다(연산자도 함수...)
1. 인자값 개수와 타입
2. 동작
3. 함수사용결과 값과 타입

### 변수
- 값을 재사용 하기 위해서
- 값을 저장하는데에 사용되는 저장 공간
- 값을 나중에 재사용 하기위해서 변수를 사용한다 <br> <br>

지금 변수가 값을 저장하는(저장공간으로 해석하는지)데에 사용되는지 <br>
저장된 값을 조회하는데(값으로 해석하는지) 사용되는지 구분하는것이 <br>
필요하다
1. 대입연산자 왼쪽에 사용되면 저장공간으로 해석한다
2. 그외의경우에 사용되면 저장된 값으로 치환 해서 생각한다

### 변수의 해석방법
= 대입연산자 왼쪽에 쓰여있으면 + 선언되어있으면 값을 저장하는 저장공간 <br>
그 외의 경우에는 저장되어있는 값으로 해석

### 변수의 선언
ES6 이전(ES5 이하 버전)
```
var 변수이름;
ex)
  var abc; // --> abc라는 변수를 메모리에 할당한다


ES6 이상
var 변수이름;
let 변수이름;
ex) 
  let abc; // --> abc라는 변수를 메모리에 할당한다

const 변수이름; // 값을 저장할 건데, 최초로 저장된 값이 수정되지 않도록
                // 만들겠다

ex)
  const abc;
  abc = 로그인한사람의나이; // 평생 값이 변할 수 없다
                           // readonly로 쓰겠다
```

### 대입연산자
1. 인자(피연산자)의 갯수:2개 와 타입 : 앞에는 변수, 뒤에는 any값 <br>
  변수 = 값
2. 연산의 동작 <br>
  왼쪽에 있는 변수(저장공간)에다가 오른쪽에있는 값을 대입해줘(저장해줘)
3. 연산 결과 값의 타입 <br>
  대입된 값이 결과

### var vs let 
var를 사용하면 변수를 재선언 하는 것이 가능하다(재할당도 가능) <br>
let을 사용하면 변수를 재선언 하지 못한다

### let vs const
let을 사용하면 재할당(변수에 처음들어있던 값이 아닌 다른값을 넣는 행위) 가능 <br>
const를 사용하면 재할당 불가능(재선언은 당연히 불가)

## ★☆★☆★☆연산자
1. 피연산자값의 갯수와 타입
2. 동작
3. 연산결과 값과 타입

### 산술연산자
1. 피연산자갯수 2개
2. 동작(각각의 산술 연산을 수행)
3. 연산결과 ??
```
+
  피연산자 중 문자열이 어느 한쪽에라도 있으면 결과는 문자열
  undefined와 같이 연산이 불가능한 값끼리 연산되면
  결과는 NaN 이라는 값이 나온다

-
  숫자모양의문자열(숫자) - 숫자모양의문자열(숫자) --> number
  숫자로바꿀수없는 문자열이 어느 한쪽에라도 포함되어있다면 NaN
*
  숫자모양의문자열(숫자) * 숫자모양의문자열(숫자) --> number
  숫자로바꿀수없는 문자열이 어느 한쪽에라도 포함되어있다면 NaN
/
  숫자모양의문자열(숫자) / 숫자모양의문자열(숫자) --> number
  숫자로바꿀수없는 문자열이 어느 한쪽에라도 포함되어있다면 NaN
  0 혹은 '0' 으로 나누면 음의무한대 -Infinity 혹은 Infinity가
  결과로 나온다
% : 나머지연산자 나누었을 때 나머지를 계산한다
  10 % 3 --> 1
  숫자모양의문자열(숫자) % 숫자모양의문자열(숫자) --> number
  숫자로바꿀수없는 문자열이 어느 한쪽에라도 포함되어있다면 NaN
```

### 자료형(타입)
```
number : 10, -5, 3.1, Infinity, NaN ,.......
string : '', 'dfds', '10', ......
undefined : undefined
boolean : true , false
```

### 관계(비교)연산자
```
피연산자 두개
a > b : a 가 b 보다 크니? 결과는 맞으면 true 틀리면 false
a < b : a 가 b 보다 작니? 결과는 맞으면 true 틀리면 false 
a >= b : a가 b 보다 크거나 같니? 결과는 맞으면 true 틀리면 false 
a <= b : a가 b 보다 작거나 같니? 결과는 맞으면 true 틀리면 false 
a == b : a랑 b랑 같니? 결과는 맞으면 true 틀리면 false 
a != b : a랑 b랑 다르니? 결과는 맞으면 true 틀리면 false 
a === b: a랑 b랑 같니(타입도)? 결과는 맞으면 true 틀리면 false 
a !== b: a랑 b랑 다르니(타입도)? 결과는 맞으면 true 틀리면 false
```

### 논리연산자
```
a && b : and연산(논리곱, 교집합)
    a 그리고 b 둘다 true 라면 결과가 true 아니면 false 
a || b : or연산(논리합, 합집합)
    a 혹은 b 둘 중 하나라도 true가 있다면 결과는 true 아니면 false
!a : 피연산자하나 not연산(논리부정, 여집합)
    a가 true면 결과는 false, a가 false면 결과는 true

num = !(10 % 2 == 0 && 10 - 3 >= 3 - 5) || true
num = true
```

### ☆★☆★☆★☆★☆★☆★우선순위
우선순위에 따라서 차근차근 수행 <br>
**최**우선 연산자 --> () <br>
**단**항연산자 --> ! <br>
**산**술연산자 --> * / %  + - <br>
**쉬**프트연산자  <br>
**관**계연산자  -->  > < >= <= == != === !=== <br>
논**리**연산자  -->  && || <br>
**삼**항연산자    <br>
**대**입연산자  -->  = <br> <br>

### 삼항(조건)연산자
```
a ? b : c 

true ? 10 : '안녕' --> 10
false ? true : false --> false
```
1. 피연산자갯수 : 세개
2. 연산의 동작 : a를 확인했더니 a가 true라면    ///// a를 확인했더니 a가 false라면
3. 연산결과 : b //// c

### prompt 함수
1. 인자갯수 타입 : 0개, 1개-->입력할설명, 2개--> 설명, 기본값
2. 함수 동작 : prompt창을 띄어서 <br>
              입력을 받는다
3. 함수 사용 결과 값 : prompt창에 입력한 값이 prompt함수
    - 사용 결과가 된다
    - 만약 취소버튼을 클릭하면 결과는 <br>
      null 이 된다

### 타입 자료형
```
number      10, 3.1, ... 
string      '10' ,....
boolean     true false 
undefined   undefined 
null        null
```

### typeof 연산자
단항연산자(피연산자가 하나)
```
typeof 값 
  값의 타입을 알려준다
연산결과는 문자열
  만약 값이 number타입이면 --> 'number'
  string타입 --> 'string'
```

### 형변환 함수
타입을 바꿔주는 함수
- Number(a) --> a를 Number타입으로 바꾼 결과가 나온다
- Boolean(a) --> a를 Boolean타입으로 바꾼 결과가 나옴
- String(a) --> a를 String타입으로 바꾼 결과가 나온다

### document.write
인자 문자열 1개 <br>
인자로 전달받은 문자열을 <br>
html문서에 출력한다

### 객체
- 자바스크립트에서는 모든 데이터가 객체로 저장이 된다
- 객체는 key와 value로 이루어져 있다
- 객체의 key와 value를 property(속성)이라고 한다
- 객체를 만들 때는 중괄호를 통해서 만든다
※ 여러개의 값을 한 번에 묶어서 저장할 때 사용 <br>
※ 객체 사용 이유 -> 여러개의 값을 저장하기 위해서
```
book = { title:'대모험', page:200 }

book['title']
book.title
```
### 객체 속에 들어있는 key(property)에 접근하는 방법
1. 하위연산자(.)을 사용한다
2. [] 를 사용한다 <br>
  key가 띄어쓰기가 있거나 숫자로 되어있다면 <br>
  []를 쓸 수 밖에 없다

### 자료형
원시자료형(primitive)
```
number 
string 
undefined
null
boolean
```

### 참조자료형(reference)
object (객체) <br>
변수에 저장이 될 때 변수는 해당 객체의 <br>
위치를 참조하는 형태로 저장이 된다

### 여러개의 값을 저장하는 방법(객체)
- 배열(객체랑 똑같은데 key, property를 만들필요가 없을때)
- 배열은 []를 통해서 만든다
    - 배열을 만들면 자동으로 key가 0부터 시작하게 생성이 된다
    - [10, 20, 30] --> {0:10, 1:20, 2:30, length:3}
    - key가 숫자이기 때문에 .을 통해서 접근할 수는 없고 <br>
      반드시 []로 접근을 할 수밖에 없다
    - 자동으로 만들어지는 key를 배열에서는 index라고 부른다

### 함수
- 기능을 한다
- 여러줄의 코드를 재사용하기 위해서 <br>
  사용한다
```
console.log
alert
confirm
```

### 함수의 정의
세가지를 정의한다
1. 인자를 몇개 쓸수 있는지 정의한다 <br>
    - 함수를 정의할 때 매개변수를 사용하면 <br>
      함수를 사용하는 사람이 소괄호 안에 쓴 인자가 <br>
      매개변수에 각각 순서대로 대입이 된다 <br>
    - 함수를 만드는 입장에서 특정 값을 정할 수 없고 <br>
      함수를 사용하는 사람이 정할수만 있을때  <br>
      매개변수를 통해 값을 전달받는 것이다 <br>
      ex) 경고 메시지
2. 함수가 어떻게 동작하는지를 정의한다
    - 중괄호(body)안쪽에 코드가 위에서부터 차례로 실행된다
3. 함수실행 결과 값이 무엇이 되는지를 정의한다
    - return 값; 을 통해 함수 실행 결과를 값으로 <br>
      되돌려 준다.
    - 함수 실행 결과는 return 옆에있는 값이 되므로 <br>
      치환해서 해석하면 된다
    - return 이 생략되거나 return 옆에 값이 없으면 <br>
      함수 실행 결과는 모두 undefined가 된다
    - 함수 실행결과를 추가적으로 연산하거나 구분 <br>
      해서 사용해야 할때 <br>
      ex) prompt함수
  
### 일반적 함수 정의
1. 전통적인 방식의 함수
```
function 함수이름(매개변수, 매개변수, ...){
  코드..
  코드...
  return 값;
}
```
2. 익명함수를 변수에 담아놓고 사용
```
const 변수 = function (매개변수, ...){
  코드
  코드
  코드
  return 값;
}
```
3. 익명함수(이름이 없는 함수)
    - 일회성으로 사용하기 위해서 만들어준다
```
function (매개변수, 매개변수...){
  코드
  코드
  코드
  return 값;
}
```

### 화살표표현식
매개변수가 한개라면 소괄호가 생략 가능하다 <br> 
body 안쪽의 코드가 한줄이라면 중괄호와 <br>
return이 생략 가능하다
```
a=>console.log(a,'님 안녕하세요')

  (a, b)=>a+b

(매개변수, 매개변수 ...) => {
  코드
  코드
  코드
  return 값;
}
```
- 객체 속에 함수가 들어있을 수 있다
- 객체는 여러개의 값을 저장하기위해서 사용

### DOM(Document Object Model) 객체
html의 모든 요소들은 객체이다 <br>
javascript를 통해서 스타일변경, 이벤트효과, ...주는 것들은 <br>
html 문서 속의 요소를 객체로 받아오고 <br>
그 객체의 key(속성)에 특정 값을 대입하여 변경하는 것 <br><br>

예를들어 p태그의 글씨크기를 20px로 설정
1. p태그를 객체로 받아오기
2. p태그.style.fontSize = '20px'; <br>
예를들어 div태그의 class이름을 변경
1. div태그를 객체로 받아오기 
2. div태그.클래스이름 = '클래스이름';
```
<p id="intro" class="aaa world">안녕하세요</p>
{
  tagName:'p',
  text:'안녕하세요',
  id : 'intro',
  classList : ['aaa', 'world'],
  ...
  ...
}
```
### html 요소를 자바스크립트로 가져오는 함수
```
document.getElementById
  태그의 id 속성값으로 가져오기
  결과는 객체 하나
document.getElementsByClassName
  태그의 class 속성값으로 가져오기 
  결과는 객체가 요소로 들어있는 배열
document.getElementsByTagName
  태그의 이름으로가져오기
  결과는 객체가 요소로 들어있는 배열
...
css 선택자를 통해서 특정 요소를 
가져오는 함수
document.querySelector
  결과가 객체 하나
document.querySelectorAll
  결과가 객체가 요소로 들어있는 배열
```

### 조건문
조건에 따라 서로 다른 코드를 실행시키도록 만들어주는 문법
```
if(조건식){
  조건식이 참일때 실행할 코드;
}else{
  조건식이 거짓일 때 실행할 코드;
}
```

### 이벤트를 주는 방법
모든 html태그들에는 이벤트를 줄 수 있다 <br>
- 이벤트란?
    - 사용자와 컴퓨터 간의 상호작용
    - 마우스클릭, 키보드누르기 , 마우스 더블클릭,.... 
    - 모든 html 태그들에는 이벤트가 발생했을때 실행시키고자 하는 행위를 <br>
      속성에 알려줄 수 있다
```
<input id="email" type="email" class="input" on이벤트명="자바스크립트코드" />
```
ex) <br>
해당 div태그가 클릭 이벤트가 발생한다면 f2() 가 실행됨... <br>
해당 div태그가 더블클릭 이벤트가 발생한다면 f3() 가 실행됨...
```
<div onclick="f2()" ondoubleclick="f3()"></div>
```
※ 만약 버튼이 클릭이 된다면 특정 태그의 글자색상을 붉은색으로 바꿔줘
```
if(조건식){
  조건식이 true일때 실행됨;
}

if(조건식){
  조건식이 true일때 실행됨;
}else{
  조건식이 false일때 실행됨;
}

if(조건식1){
  조건식1이 true일때 실행;
}else{ 
  조건식1이 false일때 실행;
  if(조건식2){
    조건식2가 true일때 실행;
  }else{
    조건식2가 false일때 실행;
  }
}

if(조건식1){
  조건식1이true일때실행;
}else if(조건식2){
  조건식1이 false이고 조건식2가 true일때 실행;
}else if(조건식3){
  조건식1false, 조건식2도 false, 조건식3은 true실행
}...{
  ...
}else{
  위에있는 조건식이 모두 false일때 실행;
}
```

### location 객체(내장객체)
위치와 관련된 여러가지 key와 value들이 들어있다
```
{
  href:'',
  assign:function(){

  },
  replace:function(){

  },
  pathname:'/index.html',
  ...
  ...
}
```
location객체 안의 assign, replace 함수는 <br>
인자로 경로를 받아오며 해당 경로로 페이지를 이동시켜준다 <br>
assign은 뒤로가기가 가능하고, replace는 뒤로가기가 불가능하다
```
각각 인자로 x, y 값을 줘도 되고,
{left : x, top:y, behavior: 'smooth' | 'instant' | 'auto'}
를 한번에 객체로 담아서 줘도 된다

scrollTo()
  절대적인 위치로 이동
scrollBy()
  상대적인 위치로 이동
```

### 정규표현식
문자열이 특정 패턴의 문자열인지 판단할 때 사용하는 방법 <br>
예를 들어 이메일, 휴대폰번호
```
/abc/

/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
```

### 캐러셀(carousel 디자인)(이미지 슬라이드)
- 핵심은 태그를가져와서 스타일을 바꿔준다
- 태그객체.style.css속성 = 'css값';

### ★☆★☆★☆ onload (자바스크립트 코드는 html이 다 로딩이 되고 실행 해라)
script가 아래쪽에 있으면 html이 만들어지고 , javascript 가 실행되기 때문에 웬만하면 오류가 나지 않지만 <br>
간혹 자바스크립트 속도가 더 빨라서 html이 만들어지기 전에 실행되는 경우가 있다. <br>
그려면 querySelector() 를 통해서 태그 객체를 받아와도 html요소가 없으니 null이 결과로 나오는 경우가 있다 <br> <br>
이를 방지하기 위해 javascript 코드 안쪽에서 바로 html을 받아오는 경우에는
```
window.onload = ()=>{
  로딩이 다 되면 실행될 코드;
  로딩이 다 되면 실행될 코드;
  로딩이 다 되면 실행될 코드;
  로딩이 다 되면 실행될 코드;
  로딩이 다 되면 실행될 코드;
}
```

### 칸반
- 칸반보드(디자인은 css역량)
- 드래그 앤드 드랍했을 때 정렬되는 방식

### html 속성 draggable
```
(기본으로 draggable인 요소)
텍스트, img
<div draggable></div>
```
해당 요소가 드래그가 가능하다

### 이벤트 
```
dragstart 
  드래그가 시작되면 발생하는 이벤트
drag
  드래그되고 있다면 발생하는 이벤트
dragenter 
  드래그 되는 요소가 특정 요소 안으로 들어갔을때 발생하는 이벤트
drop
  드래그 요소에 손을 떼었을 때 특정 영역 안에있다면 발생하는 이벤트
  

<div draggable="true" ondragstart="f()" ondrag="f2()">
```

### 자바스크립트의 핵심
객체를 잘 사용한다 --> 객체 인스터화

### 배열
여러개의 값을 저장하기 위해서, key값을 자동으로 0부터 만들어주고, length property(키값)에 <br>
요소의 갯수도 저장되어 있다
```
book = [ '대모험', 200 ]
book[0]

let ar = [10, 20, 30];
```
배열에 값을 새롭게 추가할 때는 Array타입 객체 안에 들어있는 <br>
push 메소드를 사용한다 <br>
ex) ar.push(500); <br>
배열 속에 값을 삭제할 때는 <br>
pop 메소드를 사용한다

### 유사배열
배열처럼 여러개의 값을 저장하기 위해 만든것인데 <br>
특수한 경우에 사용하기 위해 만든 타입들...

### DOMTokenList 타입
- 배열과 같이 여러개의 값을 저장할 때 사용 (value라는 key값이 자동으로 추가됨)
- 새로운 값을 추가하고 싶으면 add메소드를 사용한다
- 객체의 classList라는 key값이 바로 DOMTokenList 타입이다
- 기존에 있는 요소를 삭제하고 싶으면 remove메소드를 사용한다
```
<div class="a b c"></div>

myDiv.classList = ['a', 'b', 'c'];

d라는클래스, e라는클래스랑 f라는 클래스 세개 동시에
['a', 'b', 'c', 'e', 'f']
```

### 존재하는 태그를 조회, 수정
없는 태그를 만들거나 기존에 있는 태그를 삭제
-  이 태그를 만들긴 할것인데 어떤 위치에 만들까?
html태그들은 tree 구조로 관리(포함관계가 있다)가 되고 있다
```
<div id='a'>
  <h1>안녕</h1>
  <div id='b'>
    글자
    <p>내용</p>
    <><>
    <img />
  </div>
</div>
```
1. 존재하는 태그객체를 조회
    - document.querySelector() / document.getElement.....()
    - 함수들을 통해 태그를 가져오고, 그 태그 객체의 key값 속에 들어있는 value를 사용
2. 존재하는 태그객체를 수정
    - 태그를 가져온다
    - 태그 객체의 key를 = 앞에 써서 속에 들어가는 value를 다른 값으로 수정
3. 추가
    - 추가하고자하는 태그객체를 createElement() 통해 만든다
    - 그 후 부모를 찾아와서 appendChild .... 등의 함수를 통해 적절한 위치에 추가
4. 삭제
    - 부모를 찾아서 removeChild를 사용하여 자식 삭제
    - 텍스트인지, 태그객체인지에 따라 구분해서 사용

## 반복문(반복되는 작업을 쉽게 수행)
### for문(반복의 횟수를 알때)
```
코드1;
코드2;
//  초기식;  조건식;  증감식
for(let a = 0 ; a < 10 ; a = a + 1){
  코드4;
  코드5;
}
코드3;
```
※ 컴퓨터는 for문을 만나면 <br>
1. 초기식을 실행한다
2. 조건식을 확인하고
    - 조건식이 true라면 for문 안쪽으로 들어와서 코드를 차례로 수행한다
        - for문이 끝나면 증감식을 실행한다. 조건식을 확인한다
    - 조건식이 false라면 for문 반복 종료, 다음줄 실행

### while문(반복의 횟수를 모르지만 조건을 알때)
```
코드1;
  while(조건식){
    코드2;
    코드3;
}
코드4;
```
※ while문을 만나면
1. 조건식을 확인한다
    - 조건식이 true 라면 while문 안쪽으로 와서 <br>
      코드를 차례로 수행하고, while문이 끝나면 <br>
      조건식을 확인한다(1.반복)
    - 조건식이 false 라면 <br>
      while문 안쪽으로 들어가지 않는다(반복 종료)

### 동적 요소
동적인 요소들은 데이터베이스로부터(백엔드) 받아온다 <br>
보통 백엔드(서버)로부터 데이터를 받아오면 일정한 모양으로 구성된 객체로 받아온다 <br> 
서버로부터 받아온 객체는 Response(응답) 타입이다 응답은 응답에 대한 정보가 들어있는 <br>
header 부분과 실질적으로 원했던 data부분이 존재한다 <br>
※ 응답(ok, 홍길동제목 줄게)
```
{
  header:200,
  key:value,
  ...
  data: '홍길동',
  ...
}
```
※ 데이터베이스의 구조(엑셀, 표)
```
요청(게시글 5번게시글 한개의 정보를 가져다줘)
응답(ok 여깄어)
let res = {
  header:200,
  key:value,
  ...,
  data: {번호:5, 제목:'헬로', 작성자:'최최', 작성일자:'220105'},
}

res.data

요청(게시글 열개 개의 정보를 가져다줘)
응답(ok 여깄어)
let res = {
  header:200,
  key:value,
  ...,
  data: [
    {번호:1, 제목:'안녕', 작성자:'배상엽', 작성일자:'22/0101'},
    {번호:2, 제목:'ㅇㄹㅈ배ㅗㅑㅎ', 작성자:'최최', 작성일자:'220105'},
    {번호:3, 제목:'헬로', 작성자:'최최', 작성일자:'220105'},
    {번호:4, 제목:'헬로', 작성자:'최최', 작성일자:'220105'},
    {번호:5, 제목:'헬로', 작성자:'최최', 작성일자:'220105'},
    {번호:6, 제목:'헬로', 작성자:'최최', 작성일자:'220105'},
    {번호:7, 제목:'헬로', 작성자:'최최', 작성일자:'220105'},
    {번호:8, 제목:'헬로', 작성자:'최최', 작성일자:'220105'},
    {번호:9, 제목:'헬로', 작성자:'최최', 작성일자:'220105'},
    {번호:10, 제목:'헬로', 작성자:'최최', 작성일자:'220105'}
  ],
}

res.data[8].번호 --> 9
```

### http(hyper text transfer protocol) 통신
- html 전송
- text
- xml
```
클라이언트                서버(컴퓨터)
브라우저
핸드폰
태블릿
...
```

### 배열관련 함수
- 원본을 변형시키는 함수가 있고, 원본을 유지하는 함수가 있다
※ 원본이 변한다
```
push
    let ar = [10, 20, 30];
    ar.push(50);
    //ar이 변한다 --> [10, 20, 30, 50]
pop
  let ar = [10, 20, 30];
  ar.pop();
  // ar --> [10, 20];
  
sort
  let ar = [10, 20, 13, 14];
  ar.sort();
  // ar --> [10, 13, 14, 20];
```
※ 원본이 변하지 않는다
```
slice
  let ar = [10, 20, 30, 40];
  ar.slice(0, 3); // [10, 20, 30]
  // ar은 변하지 않는다 --> [10, 20, 30, 40]
```

### 이벤트가 발생시 특정 코드를 실행시키는 방법
1. html에다가 on이벤트 라는 속성에 속성값으로 실행시킬 함수를 쓰기
```
<div onclick = "f()"></div>
```
2. html의 요소를 객체로 받아와서 자바스크립트에서 직접 <br>
객체의 onclick 속성에다가 함수를 넣어주기
```
<div id="box1"></div>

let myDiv = document.querySelector('#box1');
myDiv.className = 'a';
myDiv.onclick = f;
```
3. html요소를 객체로 받아와서 자바스크립트에서 <br>
직접 addEventListener 함수를 사용하여 추가해준다 <br>
요소.addEventListener('이벤트이름', 함수); <br>
※ 삭제할때는
- 요소.removeEventListener('이벤트이름', 함수);

## api
함수, 기능 서버로부터 특정 데이터를 받아오기 위해서 만들어놓은 서버쪽의 기능

### api 명세(docs)
api(함수 사용법) 설명서

### 데이터를 다룰 때 사용하는 필수 요소
```
Create 추가
Update 수정
Read   조회
Delete 삭제
```

### 회원정보 추가, 삭제
- 회원정보 추가
```
www.naver.com/create_new_user
```
- 회원정보 삭제
```
www.naver.com/user_delete_now
```

### api 규칙
api를 만들 때 일종의 규칙을 정해서 만들자 <br>
REST api (open api), 형태는 주소 모양으로 만들자
```
데이터를 추가하는 api라면 
  post 방법
데이터를 삭제하는 api라면 
  delete 방법
데이터를 조회하는 api라면
  get 방법 (브라우저 주소창에 입력하면 get 요청)
데이터를 수정하는 api라면
  put 방법
```

### 회원 user
```
회원정보를 새롭게 추가해주는 api 
www.naver.com/user  post방법

회원정보를 조회해주는 api
www.naver.com/user  get 방법

id가 abc123인 회원정보를 조회해주는 api
www.naver.com/user?id=abc123  get 방법
www.naver.com/user/abc123     get 방법
```
※ 요청시에 데이터를 전달해야 할 필요가 있다면 <br>
데이터는 body 안쪽에 넣어서 전달을 해준다(get방식 을 제외하고)
```
{
  header: 값,
  body: {},
}
```
※ get방식은 body 안쪽에 넣어서 전달 할 수 없기 때문에 주소에 데이터를 넣어서 <br>
  전달해야한다 

### 쿼리 스트링, query-string)
- 기본적인 회원 정보 조회 api 주소
```
www.naver.com/user  get 방식

전달하고싶은 값이 
id
abc123
www.naver.com/user?id=abc123   get요청!

id : abc123
name: 배상엽

www.naver.com/user?id=abc123&name=배상엽              get요청!

id : abc123
name: 배상엽, 홍길동
www.naver.com/user?id=abc123&name=배상엽&name=홍길동        get요청!
```
- 로그인
```
id: abc123 
pw: 1234

www.naver.com/user     post요청!
body:{
  id:'abc123',
  pw:'1234'
}

www.naver.com/user?id=abc123&pw=1234 get요청!
```

### get방식에서 데이터를 전달 하는 방법
path variable
```
id가 abc123인 회원
  www.naver.com/user?id=abc123  get요청(qeury-string 방법)
  www.naver.com/user/abc123     get요청(path variable)

기준
  각각을 유일하게 구분할 수 있으면 pathvariable을 사용하고 
  유일하게 구분할수 없는 값이라면 query-string을 사용

게시글
  www.naver.com/board/5 get --> 5번게시글 조회 
  www.naver.com/board get --> 게시글 전체 조회
  www.naver.com/board?date=20230807 
  www.naver.com/board post 
  www.naver.com/board put
  www.naver.com/board delete
```

### restful api
rest 규칙을 잘 지켜서 만든 api

### 응답전문(header와 body)
```
header에는 응답에 대한 정보들(시간, 상태, 응답한데이터의 타입 등등)
body에는 실질적으로 원하는 데이터 
  html
  글자
  javascript object(객체) notation -->  json(글자 js object 표기법을 지킨 글자)
  xml
```

### js에서 요청하기 
1. 브라우저 내장 함수 fetch함수를 사용하여 요청 (IE XXX)
```
option객체는 선택사항
옵션객체 
{
  method: 'GET' | 'POST' | 'DELETE' | 'PUT',
  headers: {Content-Type: 값,}, 
  body: {키:value, 키:value}
}

옵션객체를 사용하지 않으면 header는 자동으로설정, 
body 는 없고, method 는 get방식 

함수실행결과는 ? fetch('www.naver.com/board/5', 옵션객체)
함수실행결과는 Promise 타입

pending상태 : 아직 요청을 했고, 완료되지 않은 상태
fulfilled 상태 : 데이터를 성공적으로 받아온 상태 
rejected 상태 : 함수사용은 끝났으나 데이터를 받아오지 못한 상태

Promise타입객체 = {
  [[promiseStatus]]: 'pending' | 'fulfilled' | 'rejected',
  [[PromiseResult]]: 값,

  catch: 값,
  then:함수,
  finally:값
}
```
2. 외부 라이브러리 (다른 사람이 만든 함수)를 사용하여 요청
```
axios 
jquery (ajax)
```

### 자바스크립트의 해석 과정
자바스크립트의 해석 과정은 동기적(위에서부터 차례로 수행된다)
```
코드
  a;
  b;
  fetch('/users/abc123');// 서버에서 데이터를 가져와줘!(비동기함수)
  d;

비동기 통신(Async)

동기 통신(sync)  
  Promise<'배상엽'> --> Promise인데, fulfiiled 상태가 되면 
                        PromiseResult에 '배상엽' 이 들어있다
  Promise {
    PromiseStatus:fulfiiled,
    PromiseResult:'배상엽'
  }
  Promise<10>{ 
    status : fulfiiled
    PromiseResult : 10,
    then 
    catch
    finally
  }
  console.log('1');
  fetch().then((a)=>{return 10}).then(()=>{ });
  console.log('2');
```

### then(함수)
then 안에있는 콜백함수는 Promise의 status가 fulfiiled가되면 <br>
실행되는 함수, 그 함수는 매개변수를 받아오는데 <br>
PromiseResult에 있는 값을 매개변수로 전달 받는다 <br>
콜백함수에 return 이 있다면 <br>
return 된 값을 PromsieResult에 담아서 다시 <br>
Promise타입이 결과로 나온다
