const leftBtn = document.querySelector("#left-btn");
const rightBtn = document.querySelector("#right-btn");
const cat = document.querySelector("#cat")

leftBtn.addEventListener("click", moveLeft);
rightBtn.addEventListener("click", moveRight);

function moveLeft() {
    let currentRightPixels = parseFloat(window.getComputedStyle(cat).right);
    let bodyWidth = document.body.clientWidth;
    let currentRightPercent = (currentRightPixels / bodyWidth) * 100;

    const newRightPercent = currentRightPercent + 1;

    console.log('Current Right Percent:', currentRightPercent, 'New Right Percent:', newRightPercent);

    cat.style.right = newRightPercent + '%';
}

function moveRight() {
    let currentRightPixels = parseFloat(window.getComputedStyle(cat).right);
    let bodyWidth = document.body.clientWidth;
    let currentRightPercent = (currentRightPixels / bodyWidth) * 100;

    const newRightPercent = currentRightPercent - 1;

    console.log('Current Right Percent:', currentRightPercent, 'New Right Percent:', newRightPercent);

    cat.style.right = newRightPercent + '%';
}