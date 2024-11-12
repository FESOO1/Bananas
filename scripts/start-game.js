const startTheGameButton = document.getElementById('startTheGameButton');
const startMenuControls = document.querySelector('.game-controls');
const gameItselfContainer = document.querySelector('.game-itself');
const fruitsImages = ["../assets/fruits/fruit1.png","../assets/fruits/fruit2.png","../assets/fruits/fruit3.png","../assets/fruits/fruit4.png", "../assets/fruits/fruit5.png", "../assets/fruits/fruit6.png", "../assets/fruits/fruit7.png"];
let gameIsStarted = false;

// START THE GAME FUNCTION

function startGame() {
    gameIsStarted = true;

    startTheGameButton.textContent = 'Restart';
    startMenuControls.classList.add('game-controls-hidden');
    gameItselfContainer.classList.add('game-itself-active');
};

function randomFruits() {
    for (let i = 0; i < 7; i++) {
        const fruitItself = document.createElement('div');
        fruitItself.classList.add('game-itself-image');
        fruitItself.innerHTML = `
            <img class="game-itself-image-itself" src="${fruitsImages[i]}">
        `;

        gameItselfContainer.appendChild(fruitItself);
    };
};

// START THE GAME BUTTON

startTheGameButton.addEventListener('click', () => {
    startGame();
    randomFruits();
});