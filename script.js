let randomNumber = Math.floor(Math.random() * 10) + 1;
let guesses = document.querySelector('.guesses')
let lastResult = document.querySelector('.lastResult');
let lowOrHigh = document.querySelector('.lowOrHigh'  );
let guessSubmit = document.querySelector('.guessSubmit')
let guessField = document.querySelector('.guessField')
let guessCount = 1;
let resetbutton;

guessField.focus()
function checkGuess () {
    let userGuess = Number(guessField.value);
    if(guessCount === 1){
        guess.textContent = 'Previous Guesses: '; 
    }
    guess.textContent += userGuess + ' ';
    if(userGuess === randomNumber) {
        lastResult.textContent ='congratulations! you got it right!'
         lastResult.style.backgroundColor= 'green'
         lowOrHigh.textContent = '';
         setGameOver()
    } else if(guessCount === 5) {
        lastResult.textContent = '!!! GAME OVER!!!';
        lowOrHigh.textContent = '';
        setGameOver();  
    }
}
