///////////////////////////////////
////Number Guessing Game////
///////////////////////////////////
/*
1. 1과 100사이의 숫자 중 무작위로 추출
2. 1부터 플레이어의 차례를 기록
3. 플레이어에게 숫자를 맞출 수 있게 한다.
4. 숫자를 맞추면 어딘가에 저장, 사용자는 이전의 추축한 숫자를 볼 수 있도록 함.
5. 숫자가 일치한지 확인.
6. 만약 일치하면
  1.축하 메시지를 출력
  2. 더 이상 숫자를 맞출 필요가 없다.
  3. 플레이어가 다시 게임을 할지 묻는다.
7.숫자가 틀렸고, 차례가 남아있다면
  1.틀렸다고 알림
  2. 다른 숫자를 입력할 수 있도록 함.
  3. 차례가 1증가.
8.숫자가 틀렸고, 차례가 없다면
  1.게임이 종료됨을 알림.
  2. 더 이상 숫자를 맞출 필요가 없다.
  3. 플레이어가 게임을 다시할지 물음.
9.게임이 재시작되면, 게임의 구조와 UI는 완전히 리셋, step1부터 다시 로직이 시작.

//남은 생명 보여주기 추가예정
*/

//정답 숫자를 랜덤하게 정함
var randomNumber = Math.floor(Math.random() * 100) + 1;
//플레이어가 입력한 숫자를 저장, 출력할 필드 선택
var guesses = document.querySelector('.guesses');
//플레이어가 입력한 숫자가 틀렸는지 맞았는지 출력
var lastResult = document.querySelector('.lastResult');
//플레이어가 입력한 숫자가 낮은지 높은지 출력
var lowOrHi = document.querySelector('.lowOrHi');
//submit버튼 설정
var guessSubmit = document.querySelector('.guessSubmit');
//플레이어가 입력할 필드 설정
var guessField = document.querySelector('.guessField');
//플레이어가 추측할 카운트 초기화
var guessCount = 1;
//리셋버튼 설정
var resetButton;

//플레이어가 게임 플레이시 진행될 함수 선언
function checkGuess() {
  //플레이어의 입력을 변수에 숫자로 한다.
  var userGuess = Number(guessField.value);
  //플레이어가 게임을 실행시 플레이어가 입력한 숫자를 게임이 종료될때까지 보여준다.
  if(guessCount === 1){
    guesses.textContent = 'Previous guesses: ';

  }
  guesses.textContent += userGuess + ' ';
//플레이어가 추측한 답이 정해진 답과 `완전히` 같다면 아래와 같이 if문을 돌린다.
  if(userGuess === randomNumber){
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = ' ';
//플레이어가 게임을 끝낸 후 다시 게임을 할지 묻는다.
    setGameOver();
//플레이어가 정답을 맞추지 못하고 게임이 종료되면 아래와같이 보여준다.
  }else if(guessCount === 10){
    lastResult.textContent = '!!! GAME OVER !!!';
//플레이어가 게임을 끝낸 후 다시 게임을 할지 묻는다.
    setGameOver();
  }else{
//게임 도중 틀렸다면 아래와같이 보여준다.
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
//게임 도중 추측한 답이 정답보다 낮으면 아래와 같이 글을 보여준다.
    if(userGuess < randomNumber){
      lowOrHi.textContent = 'Last guess was too low!';
      lowOrHi.style.color= '#9c88ea';
//게임 도중 추측한 답이 정답보다 높으면 아래와 같이 글을 보여준다.
    }else if(userGuess > randomNumber){
      lowOrHi.textContent = 'Last guess was too high!';
      lowOrHi.style.color= 'red';
    }
  }
//유저의 카운트를 늘린다.
  guessCount++;
  guessField.value= '';
  guessField.focus();
}


// Add EventListener
guessSubmit.addEventListener('click', checkGuess);

//Set GameOver Func
function setGameOver(){
//게임오버가 되면 모든 필드를 비활성화 한다.
  guessField.disabled = true;
  guessSubmit.disabled = true;
//게임 오버가 되면 다시 시작할지 묻는 버튼을 생성한다.
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
//게임을 다시시작할지 묻는 버튼에 이벤트를 생성한다.
  resetButton.addEventListener('click', resetGame);
}

// Set resetGame func
function resetGame(){
// guessCount var set to 1
  guessCount = 1;
//make result P to for
  var resetParas = document.querySelectorAll('.resultParas p');
  for(var i = 0; i < resetParas.length; i++){
    resetParas[i].textContent = '';
  }
// remove resetButton on code
resetButton.parentNode.removeChild(resetButton);
// focus in guessField, empty guessField.
guessField.disabled = false;
guessSubmit.disabled = false;
guessField.value = '';
guessField.focus();
// lastResult color chnage
lastResult.style.backgroundColor = 'white';
// randomNumber appointed again
randomNumber = Math.flaor(Math.random()*10)+1;
}