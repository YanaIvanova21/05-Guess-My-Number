'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (myScore) {
  document.querySelector('.score').textContent = myScore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //There is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    /* document.querySelector('.check').disabled = true; */
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '👆 Too high!' : '👇 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('😭 You lost the game!');
      displayScore(0);
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#ba3432';
    }
  }
});

//Reset game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  /* document.querySelector('.check').disabled = false; */
});
