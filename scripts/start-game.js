const startTheGameButton = document.getElementById('startTheGameButton');
const startMenuControls = document.querySelector('.game-controls');
const gameItselfContainer = document.querySelector('.game-itself');
let gameIsStarted = false;

// START THE GAME FUNCTION

function startGame() {
    gameIsStarted = true;

    startTheGameButton.textContent = 'Restart';
    startMenuControls.classList.add('game-controls-hidden');
    gameItselfContainer.classList.add('game-itself-active');
};

// START THE GAME BUTTON

startTheGameButton.addEventListener('click', startGame);