const startTheGameButton = document.getElementById('startTheGameButton');
const startMenuControls = document.querySelector('.game-controls');
const gameItselfContainer = document.querySelector('.game-itself');
const gameItselfScoreText = document.querySelector('.game-itself-score');
const gameItselfMissedText = document.querySelector('.game-itself-missed');
const fruitsImages = ["../assets/fruits/fruit1.png","../assets/fruits/fruit2.png","../assets/fruits/fruit3.png","../assets/fruits/fruit4.png", "../assets/fruits/fruit5.png", "../assets/fruits/fruit6.png", "../assets/fruits/fruit7.png"];
let gameIsStarted = false;
let scorePoint = 0;
let missedPoint = 0;

// START THE GAME FUNCTION

function startGame() {
    gameIsStarted = true;
    
    startTheGameButton.textContent = 'Restart';
    startMenuControls.classList.add('game-controls-hidden');
    gameItselfContainer.classList.add('game-itself-active');
};

function randomFruits() {
    for (let i = 0; i < 7; i++) {
        const top = '100%';
        const randomTop = Math.floor(Math.random() * 250);
        const fruitItself = document.createElement('div');
        fruitItself.classList.add('game-itself-image');
        fruitItself.innerHTML = `
            <img draggable="false" class="game-itself-image-itself" src="${fruitsImages[i]}">
        `;

        gameItselfContainer.appendChild(fruitItself);

        // 
        fruitItself.classList.add('game-itself-image-dropping');

        // RANDOM DROPPING
        fruitItself.style.left = Math.floor(Math.random() * 100) + '%';
        fruitItself.style.top = '-' +  randomTop + 'px';
        /* fruitItself.style.animation = Math.floor(Math.random() * 25) + 's fruit-image-dropping'; */

        // CLICK ON A FRUIT
        fruitItself.addEventListener('click', () => {
            scorePoint += 50;
            gameItselfScoreText.textContent = `Score: ${scorePoint}`;
            fruitItself.classList.remove('game-itself-image-dropping');
            /* fruitItself.style.animation = 'none'; */
            fruitItself.style.top = '-' +  randomTop + 'px';
            fruitItself.style.left = Math.floor(Math.random() * 100) + '%';
            setTimeout(() => {
                fruitItself.classList.add('game-itself-image-dropping');
                /* fruitItself.style.animation = Math.floor(Math.random() * 25) + 's fruit-image-dropping'; */
            }, 100);
        });
    };
};

// START THE GAME BUTTON

startTheGameButton.addEventListener('click', () => {
    startGame();
    randomFruits();
});