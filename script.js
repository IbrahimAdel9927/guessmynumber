'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}


const check = () => {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('⛔ No number!');
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
}

document.querySelector('.check').addEventListener('click', check);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        check();
    }
});

document.querySelector('.again').addEventListener('click', () => {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.desc').addEventListener('click', () => {
    document.querySelector('.overlay').classList.remove('hidden');
    document.querySelector('.description').classList.remove('hidden');
});

const close = () => {
    document.querySelector('.description').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
}

document.querySelector('.close').addEventListener('click', close);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        close();
    }
});

