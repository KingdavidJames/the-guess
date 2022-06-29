'use strict';

let secretNumber = Math.trunc(Math.random() *20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!'

    // When a player's guess is correct
    } else if (guess === secretNumber) {
        document.querySelector('.question').textContent = secretNumber;
    
        document.querySelector('.message').textContent = '🎉 Correct Number!';

        document.querySelector('.note').textContent = '👏 Congratulations, you won!';

        document.querySelector('body').style.backgroundColor = '#60b347';
    
        document.querySelector('.question').style.width = '15rem';
    
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    // When a player's guess is too high
    } else if (guess > secretNumber) {
        if (score > 16) {
          document.querySelector('.message').textContent = '📈 Too high';
          score--;
          document.querySelector('.score').textContent = score;
        } else {
          document.querySelector('.message').textContent = '💣 You lost the game';

          document.querySelector('.note').textContent = '❌ Trials exhaused! Better luck next time.';

          document.querySelector('.score').textContent = '0';
        }
    // When a player's guess is too low
    } else if (guess < secretNumber) {
        if (score > 16) {
          document.querySelector('.message').textContent = '📉 Too low';
          score--;
          document.querySelector('.score').textContent = score;
        } else {
          document.querySelector('.message').textContent = '💣 You lost the game';
          
          document.querySelector('.note').textContent = '❌ Trials exhaused! Better luck next time.';
          
          document.querySelector('.score').textContent = '0';
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';

    document.querySelector('.question').textContent = '?';

    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = '?'

    document.querySelector('.note').textContent = '(You have 5 trials. Goodluck! 😉)';

    // To clear the input field.
    // const guessReset = document.querySelector('.guess');
    // guessReset.value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    
    document.querySelector('.question').style.width = '15rem';
});
