const random = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p'); // Create new p element instead of selecting existing one
let prevGuess = [];
let numofGuess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateMethod(guess);
  });
}

function validateMethod(guess) {
  if (isNaN(guess)) {
    // Fixed the NaN check
    alert('please enter valid number');
  } else if (guess < 1) {
    // Changed to 1 since random starts from 1
    alert('please enter number more than 0');
  } else if (guess > 100) {
    alert('please enter number less than 100');
  } else {
    prevGuess.push(guess);
    if (numofGuess >= 11) {
      // Changed === to >= for safety
      displayGuess(guess);
      displayMessage(`Game over, Random number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMessage(`Your guess was correct`);
    endGame();
  } else if (guess < random) {
    displayMessage(`Your guess is too low`);
  } else if (guess > random) {
    displayMessage(`Your guess is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessslot.innerHTML += `${guess}, `;
  numofGuess++;
  remaining.innerHTML = `${11 - numofGuess}`;
}

function displayMessage(message) {
  // Fixed typo in function name (was displaymessage)
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p); // Append the p element, not a string
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numofGuess = 1;
    guessslot.innerHTML = '';
    remaining.innerHTML = `${11 - numofGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p); // Remove the p element
    playGame = true;
  });
}
