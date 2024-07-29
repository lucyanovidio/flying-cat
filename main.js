const leftBtn = document.querySelector("#left-btn");
const rightBtn = document.querySelector("#right-btn");
const cat = document.querySelector("#cat")

let direction;

// Move para a esquerda no mousedown direction left
leftBtn.addEventListener("mousedown", () => {
    direction = 'left';
    startMoving();
});

// Move para a direita no mousedown direction right
rightBtn.addEventListener("mousedown", () => {
    direction = 'right';
    startMoving();
});

// No mouseup para de mover o gato
document.addEventListener("mouseup", stopMoving);

// Chama função para mover quando usar as setas do teclado
document.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowLeft') {
        direction = 'left';
        startMoving();
    } else if (event.key === 'ArrowRight') {
        direction = 'right';
        startMoving();
    }
});

// Ao tirar o dedo do teclado nas setas, para de mover
document.addEventListener("keyup", (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        stopMoving();
    }
});

function moveLeft() {
    let currentRightPixels = parseFloat(window.getComputedStyle(cat).right);
    let gameWrapperWidth = document.querySelector(".game-wrapper").clientWidth;
    let currentRightPercent = (currentRightPixels / gameWrapperWidth) * 100;

    const newRightPercent = currentRightPercent + 1;

    console.log('Current Right Percent:', currentRightPercent, 'New Right Percent:', newRightPercent);

    cat.style.right = newRightPercent + '%';
}

function moveRight() {
    let currentRightPixels = parseFloat(window.getComputedStyle(cat).right);
    let gameWrapperWidth = document.querySelector(".game-wrapper").clientWidth;
    let currentRightPercent = (currentRightPixels / gameWrapperWidth) * 100;

    const newRightPercent = currentRightPercent - 1;

    console.log('Current Right Percent:', currentRightPercent, 'New Right Percent:', newRightPercent);

    cat.style.right = newRightPercent + '%';
}
// Inicia o movimento com base na direção
function startMoving() {
    if (direction === 'left') {
        moveInterval = setInterval(moveLeft, 30); // Move a cada 30 milissegundos
    } else if (direction === 'right') {
        moveInterval = setInterval(moveRight, 30); // Move a cada 30 milissegundos
    }
}

// Para o movimento
function stopMoving() {
    clearInterval(moveInterval);
}