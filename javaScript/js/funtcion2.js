///////////////////////////////////
////Number Guessing Game////
///////////////////////////////////

var randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var resetButton;


function checkGuess() {
  var userGuess = Number(guessField.value);
  if(guessCount === 1){
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if(userGuess === randomNumber){
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = ' ';
    setGameOver();
  }else if(guessCount === 10){
    lastResult.textContent = '!!! GAME OVER !!!';
    setGameOver();
  }else{
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber){
      lowOrHi.textContent = 'Last guess was too low!';
      lowOrHi.style.color= '#9c88ea';
    }else if(userGuess > randomNumber){
      lowOrHi.textContent = 'Last guess was too high!';
      lowOrHi.style.color= 'red';
    }
  }

  guessCount++;
  guessField.value= '';
  guessField.focus();
}


// Add EventListener
guessSubmit.addEventListener('click', checkGuess);

//Set GameOver Func
function setGameOver(){
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
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