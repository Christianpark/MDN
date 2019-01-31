//change User name
/*
1. 변수 선언 및 변수에 content 담기
2. 실행할 이벤트 생성
3. 함수 선언 및 파라미터 입력  
*/
var para = document.querySelector('p');
para.addEventListener('click', changeName);
function changeName(){
  var name = prompt ('Eenter a new name');
  para.textContent = 'Player1 : '+ name;
}


//buttton create 
// 1)
/*
1. 함수생성
2. 변수 선언 + 변수에 담을 엘리먼트 선택 및 생성
3. 변수에 담은 엘리먼트를 텍스트로 표기
4. 바디 안에 3번을 추가 생성
*/
function crPh(){
  var pora1 = document.createElement('p');
    pora1.textContent = 'You Clicked PORA1';
    document.body.appendChild(pora1);
}

// 2)
function createParagraph() {
  var pora = document.createElement('p');
  pora.textContent = 'You clicked the pora!';
  document.body.appendChild(pora);
}
/*
1)
  1. 변수안에 담을 객체 선언
  2. 생성되는 엘리먼트를 반복 검색하여 onclick 속성 사용 안하고 호출
*/
var buttons = document.getElementsByClassName('button');
  for(var i = 0; i < buttons.length ; i ++){
    buttons[i].addEventListener('click',createParagraph);
  }

