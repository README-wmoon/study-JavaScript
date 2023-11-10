let tbl_posts = [
  {
    id:654, 
    title:'냉방병',
    content:'더운 여름철에 환기가 잘 되지 않는 밀폐된 공간에서 냉방이 지속될 경우 가벼운 감기, 몸살, 권태감 같은 증상이 나타나는 것을 말한다. 다시 말해 냉방병이란 어떤 질병을 가리키는 용어라기보다는 유사한 증상을 나타내는 여러 질환군을 총칭하는 증후군의 일종이라고 말할 수 있다.',
    writerId:'abc123@naver.com',
    createdAt:'2023-07-28 15:31',
    updatedAt:'2023-07-28 15:51', 
    like:3
  },
  {
    id:200, 
    title:'열사병',
    content:'과도한 고온 환경에 노출되거나, 더운 환경에서 작업, 운동 등을 시행하면서 신체의 열 발산이 원활히 이루어지지 않아 고체온 상태가 되면서 발생하는 신체 이상을 말한다. 고전적인 열사병의 정의는 40℃ 이상의 심부체온, 중추신경계 기능 이상, 무한증(땀이 나지 않는 것)의 세 가지를 모두 가지고 있어야 하지만, 무한증은 나타나지 않을 수도 있다. 고체온증과 중추신경계 기능 이상을 보이는 환자는 열사병을 반드시 의심해야 하는데, 여러 장기를 손상시키는 응급 상황이므로 즉각적으로 처치하지 못하면 매우 높은 사망률을 보인다.',
    writerId:'test@naver.com',
    createdAt:'2023-07-30 15:31',
    updatedAt:'2023-07-30 15:51', 
    like:5
  },
  {
    id:700, 
    title:'저체온증',
    content:'저체온증은 임상적으로 중심체온(심부체온)이 35℃ 이하로 떨어진 상태를 말한다. 인체의 열 생산이 감소되거나 열 소실이 증가될 때, 또는 두 가지가 복합적으로 발생할 때 초래되며, 저체온증은 갑자기 생기거나 점차적으로 발생할 수 있다. 체온이 정상보다 낮아지면 혈액 순환과 호흡, 신경계의 기능이 느려진다.',
    writerId:'test@naver.com',
    createdAt:'2023-07-05 15:31',
    updatedAt:'2023-07-05 15:51', 
    like:3
  },
  {
    id:1, 
    title:'저체온치료',
    content:'더운 여름철에 환기가 잘 되지 않는 밀폐된 공간에서 냉방이 지속될 경우 가벼운 감기, 몸살, 권태감 같은 증상이 나타나는 것을 말한다. 다시 말해 냉방병이란 어떤 질병을 가리키는 용어라기보다는 유사한 증상을 나타내는 여러 질환군을 총칭하는 증후군의 일종이라고 말할 수 있다.',
    writerId:'abc123@naver.com',
    createdAt:'2023-07-11 15:31',
    updatedAt:'2023-07-28 15:51', 
    like:3
  },
  {
    id:2, 
    title:'치료',
    content:'과도한 고온 환경에 노출되거나, 더운 환경에서 작업, 운동 등을 시행하면서 신체의 열 발산이 원활히 이루어지지 않아 고체온 상태가 되면서 발생하는 신체 이상을 말한다. 고전적인 열사병의 정의는 40℃ 이상의 심부체온, 중추신경계 기능 이상, 무한증(땀이 나지 않는 것)의 세 가지를 모두 가지고 있어야 하지만, 무한증은 나타나지 않을 수도 있다. 고체온증과 중추신경계 기능 이상을 보이는 환자는 열사병을 반드시 의심해야 하는데, 여러 장기를 손상시키는 응급 상황이므로 즉각적으로 처치하지 못하면 매우 높은 사망률을 보인다.',
    writerId:'test@naver.com',
    createdAt:'2023-07-15 15:31',
    updatedAt:'2023-07-30 15:51', 
    like:5
  },
  {
    id:3, 
    title:'심근경색증',
    content:'저체온증은 임상적으로 중심체온(심부체온)이 35℃ 이하로 떨어진 상태를 말한다. 인체의 열 생산이 감소되거나 열 소실이 증가될 때, 또는 두 가지가 복합적으로 발생할 때 초래되며, 저체온증은 갑자기 생기거나 점차적으로 발생할 수 있다. 체온이 정상보다 낮아지면 혈액 순환과 호흡, 신경계의 기능이 느려진다.',
    writerId:'test@naver.com',
    createdAt:'2023-07-17 15:31',
    updatedAt:'2023-07-05 15:51', 
    like:3
  },
  {
    id:4, 
    title:'워맨스',
    content:'더운 여름철에 환기가 잘 되지 않는 밀폐된 공간에서 냉방이 지속될 경우 가벼운 감기, 몸살, 권태감 같은 증상이 나타나는 것을 말한다. 다시 말해 냉방병이란 어떤 질병을 가리키는 용어라기보다는 유사한 증상을 나타내는 여러 질환군을 총칭하는 증후군의 일종이라고 말할 수 있다.',
    writerId:'abc123@naver.com',
    createdAt:'2023-07-16 15:31',
    updatedAt:'2023-07-28 15:51', 
    like:3
  },
  {
    id:5, 
    title:'당기순이익',
    content:'과도한 고온 환경에 노출되거나, 더운 환경에서 작업, 운동 등을 시행하면서 신체의 열 발산이 원활히 이루어지지 않아 고체온 상태가 되면서 발생하는 신체 이상을 말한다. 고전적인 열사병의 정의는 40℃ 이상의 심부체온, 중추신경계 기능 이상, 무한증(땀이 나지 않는 것)의 세 가지를 모두 가지고 있어야 하지만, 무한증은 나타나지 않을 수도 있다. 고체온증과 중추신경계 기능 이상을 보이는 환자는 열사병을 반드시 의심해야 하는데, 여러 장기를 손상시키는 응급 상황이므로 즉각적으로 처치하지 못하면 매우 높은 사망률을 보인다.',
    writerId:'test@naver.com',
    createdAt:'2023-07-15 15:31',
    updatedAt:'2023-07-30 15:51', 
    like:5
  },
  {
    id:6, 
    title:'파킨슨 법칙',
    content:'저체온증은 임상적으로 중심체온(심부체온)이 35℃ 이하로 떨어진 상태를 말한다. 인체의 열 생산이 감소되거나 열 소실이 증가될 때, 또는 두 가지가 복합적으로 발생할 때 초래되며, 저체온증은 갑자기 생기거나 점차적으로 발생할 수 있다. 체온이 정상보다 낮아지면 혈액 순환과 호흡, 신경계의 기능이 느려진다.',
    writerId:'test@naver.com',
    createdAt:'2023-07-05 15:31',
    updatedAt:'2023-07-05 15:51', 
    like:3
  },
  {
    id:7, 
    title:'네이버',
    content:'더운 여름철에 환기가 잘 되지 않는 밀폐된 공간에서 냉방이 지속될 경우 가벼운 감기, 몸살, 권태감 같은 증상이 나타나는 것을 말한다. 다시 말해 냉방병이란 어떤 질병을 가리키는 용어라기보다는 유사한 증상을 나타내는 여러 질환군을 총칭하는 증후군의 일종이라고 말할 수 있다.',
    writerId:'abc123@naver.com',
    createdAt:'2023-07-08 15:31',
    updatedAt:'2023-07-28 15:51', 
    like:3
  },
  {
    id:8, 
    title:'다음',
    content:'과도한 고온 환경에 노출되거나, 더운 환경에서 작업, 운동 등을 시행하면서 신체의 열 발산이 원활히 이루어지지 않아 고체온 상태가 되면서 발생하는 신체 이상을 말한다. 고전적인 열사병의 정의는 40℃ 이상의 심부체온, 중추신경계 기능 이상, 무한증(땀이 나지 않는 것)의 세 가지를 모두 가지고 있어야 하지만, 무한증은 나타나지 않을 수도 있다. 고체온증과 중추신경계 기능 이상을 보이는 환자는 열사병을 반드시 의심해야 하는데, 여러 장기를 손상시키는 응급 상황이므로 즉각적으로 처치하지 못하면 매우 높은 사망률을 보인다.',
    writerId:'test@naver.com',
    createdAt:'2023-07-06 15:31',
    updatedAt:'2023-07-30 15:51', 
    like:5
  },
  {
    id:9, 
    title:'구글',
    content:'저체온증은 임상적으로 중심체온(심부체온)이 35℃ 이하로 떨어진 상태를 말한다. 인체의 열 생산이 감소되거나 열 소실이 증가될 때, 또는 두 가지가 복합적으로 발생할 때 초래되며, 저체온증은 갑자기 생기거나 점차적으로 발생할 수 있다. 체온이 정상보다 낮아지면 혈액 순환과 호흡, 신경계의 기능이 느려진다.',
    writerId:'test@naver.com',
    createdAt:'2023-07-01 15:31',
    updatedAt:'2023-07-05 15:51', 
    like:3
  },
  {
    id:10, 
    title:'삼성',
    content:'더운 여름철에 환기가 잘 되지 않는 밀폐된 공간에서 냉방이 지속될 경우 가벼운 감기, 몸살, 권태감 같은 증상이 나타나는 것을 말한다. 다시 말해 냉방병이란 어떤 질병을 가리키는 용어라기보다는 유사한 증상을 나타내는 여러 질환군을 총칭하는 증후군의 일종이라고 말할 수 있다.',
    writerId:'abc123@naver.com',
    createdAt:'2023-07-02 15:31',
    updatedAt:'2023-07-28 15:51', 
    like:3
  },
  {
    id:11, 
    title:'카카오',
    content:'과도한 고온 환경에 노출되거나, 더운 환경에서 작업, 운동 등을 시행하면서 신체의 열 발산이 원활히 이루어지지 않아 고체온 상태가 되면서 발생하는 신체 이상을 말한다. 고전적인 열사병의 정의는 40℃ 이상의 심부체온, 중추신경계 기능 이상, 무한증(땀이 나지 않는 것)의 세 가지를 모두 가지고 있어야 하지만, 무한증은 나타나지 않을 수도 있다. 고체온증과 중추신경계 기능 이상을 보이는 환자는 열사병을 반드시 의심해야 하는데, 여러 장기를 손상시키는 응급 상황이므로 즉각적으로 처치하지 못하면 매우 높은 사망률을 보인다.',
    writerId:'test@naver.com',
    createdAt:'2023-07-05 15:31',
    updatedAt:'2023-07-30 15:51', 
    like:5
  },
  {
    id:12, 
    title:'자동차 타기',
    content:'저체온증은 임상적으로 중심체온(심부체온)이 35℃ 이하로 떨어진 상태를 말한다. 인체의 열 생산이 감소되거나 열 소실이 증가될 때, 또는 두 가지가 복합적으로 발생할 때 초래되며, 저체온증은 갑자기 생기거나 점차적으로 발생할 수 있다. 체온이 정상보다 낮아지면 혈액 순환과 호흡, 신경계의 기능이 느려진다.',
    writerId:'test@naver.com',
    createdAt:'2023-07-06 15:31',
    updatedAt:'2023-07-07 15:51', 
    like:3
  },
]

// 게시글 여러개를(목록) 가져오는 함수(API 백엔드개발자가 만드는 함수)
// page : 보고자 하는 페이지
// limit : 한 페이지당 게시물 갯수
// ordby : 
//  'like' 좋아요내림차순정렬, 
//  'date' : 작성일 내림차순(최신순), (안썼을 때의 기본)
//  'dateAsc' : 작성일 오름차순(오래된순)
function fetchPosts(page, limit, ordby){
  //tbl_posts 는 15개의 객체가 들어있는 배열이다 
  if(ordby === 'like'){// 좋아요순 정렬
    tbl_posts.sort((a, b)=> b.like - a.like);
  }else if(ordby === 'dateAsc'){// 오래된순
    tbl_posts.sort((a, b)=>new Date( a.createdAt) - new Date(b.createdAt))
  }else {// 최신순 정렬
    tbl_posts.sort((a, b)=>new Date( b.createdAt) - new Date(a.createdAt))
  }

  // tbl_posts는 정렬이 잘 되었구나
  // console.log(tbl_posts);
  // page : 1       2         page
  // limit : 10     10        m
  // 인덱스 : 0-9    10-19     (page-1)*limit <=  < page*limit
  let res = tbl_posts.slice((page-1)*limit, page*limit);
  // console.log(res);

  return {
    status:200,
    data : {
      totalCount: tbl_posts.length,
      records : res
    }
  };
}

// 한 페이지 당 보여줄 게시물의 갯수
let limit = 2;

// 특정 페이지의 게시물을 그려주는 함수
const getPosts = (page)=>{
  // console.log('getPosts함수가 정상적으로 실행됨');
  // db에서 내가 필요한 게시물 2개를 가져온다
  let res = fetchPosts(page, limit, 'date');

  // console.log('내가 필요한 게시물', res);

  // tableDiv에 보여지고 있는 두개의 게시물 행을 삭제를 한다
  let tableDiv = document.querySelector('#table');
  // console.log('내가 가져온 tableDiv', tableDiv);
  // tableDiv.children 에는 tableDiv의 자식들이 들어있다
  // [ 제목행] 

  let cnt = tableDiv.children.length - 1; // 2
  while(tableDiv.children.length > 1){
    tableDiv.removeChild(tableDiv.children[cnt]);
    cnt--; // 0
  }
  // for(let i = 0; i < tableDiv.children.length-1; i++){
  //   tableDiv.removeChild(tableDiv.children[2-i]);

  // }
  // console.log('확인1', tableDiv.children);
  // tableDiv.removeChild(tableDiv.children[1]);
  // console.log('확인2');

  // 두번반복
  // 첫번째 반복때는 tableDiv에다 첫번째게시물행추가
  // 두번째 반복때는 tableDiv에다 두번째게시물행추가
  for(let i = 0; i < res.data.records.length; i++){
    let newRow = document.createElement('div');
    newRow.className = "table-row";
    
    // 첫번째 반복때는 i : 0
    // 두번째 반복때는 i : 1
    //res.data.records[i].id
    // cell1 div 만들기
    let cell1 = document.createElement('div');
    cell1.className = 'cell cell10';
    cell1.textContent = res.data.records[i].id;
    newRow.appendChild(cell1);
  
    // cell2 만들기
    let cell2 = document.createElement('div');
    cell2.className = 'cell cell40';
    cell2.textContent = res.data.records[i].title;
    newRow.appendChild(cell2);
    
    // cell3 만들기
    let cell3 = document.createElement('div');
    cell3.className = 'cell cell10';
    cell3.textContent = res.data.records[i].writerId;
    newRow.appendChild(cell3);
  
    // cell4 만들기
    let cell4 = document.createElement('div');
    cell4.className = 'cell cell10';
    cell4.textContent = res.data.records[i].like;
    newRow.appendChild(cell4);
    
    // cell5 만들기
    let cell5 = document.createElement('div');
    cell5.className = 'cell cell15';
    cell5.textContent = res.data.records[i].createdAt;
    newRow.appendChild(cell5);
   
    // cell6 만들기
    let cell6 = document.createElement('div');
    cell6.className = 'cell cell15';
    cell6.textContent = res.data.records[i].updatedAt;
    newRow.appendChild(cell6);
  
    // id가 table인 div를 가져와서
    // div 추가하기
    tableDiv.appendChild(newRow);
  }
}

let res = fetchPosts(1, limit, 'date');
console.log(res);
// 총필요한 페이지 : 
// 전체게시글 20, 한페이지당 5 --> 1, 2, 3, 4
// 전체게시글 16, 한페이지당 5 --> 1, 2, 3, 4
// 전체게시글 15, 한페이지당 5 --> 1, 2, 3
let totalPage =  Math.ceil( res.data.totalCount / limit);

let btnWrap = document.querySelector('#button-wrap');
for(let i = 0; i < totalPage; i++){
  let newBtn = document.createElement('button');
  newBtn.textContent = i+1;
  newBtn.onclick = ()=> {
    getPosts(i+1);
  }
  btnWrap.appendChild(newBtn);
}

for(let i = 0; i < limit; i++){
  let newRow = document.createElement('div');
  newRow.className = "table-row";
  
  // 첫번째 반복때는 i : 0
  // 두번째 반복때는 i : 1
  //res.data.records[i].id
  // cell1 div 만들기
  let cell1 = document.createElement('div');
  cell1.className = 'cell cell10';
  cell1.textContent = res.data.records[i].id;
  newRow.appendChild(cell1);

  // cell2 만들기
  let cell2 = document.createElement('div');
  cell2.className = 'cell cell40';
  cell2.textContent = res.data.records[i].title;
  newRow.appendChild(cell2);
  
  // cell3 만들기
  let cell3 = document.createElement('div');
  cell3.className = 'cell cell10';
  cell3.textContent = res.data.records[i].writerId;
  newRow.appendChild(cell3);

  // cell4 만들기
  let cell4 = document.createElement('div');
  cell4.className = 'cell cell10';
  cell4.textContent = res.data.records[i].like;
  newRow.appendChild(cell4);
  
  // cell5 만들기
  let cell5 = document.createElement('div');
  cell5.className = 'cell cell15';
  cell5.textContent = res.data.records[i].createdAt;
  newRow.appendChild(cell5);
 
  // cell6 만들기
  let cell6 = document.createElement('div');
  cell6.className = 'cell cell15';
  cell6.textContent = res.data.records[i].updatedAt;
  newRow.appendChild(cell6);

  // id가 table인 div를 가져와서
  // div 추가하기
  let tableDiv = document.querySelector('#table');
  tableDiv.appendChild(newRow);
  console.log([tableDiv])
}
