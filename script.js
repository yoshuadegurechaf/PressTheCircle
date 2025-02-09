let score = 0;
const scoreDisplay = document.getElementById("score");
const circle = document.getElementById("circle");

function updateScore() {
    score++;
    scoreDisplay.textContent = "Puntaje: " + score;
    moveCircle();
}

function resetScore() {
    score = 0;
    scoreDisplay.textContent = "Puntaje: " + score;
}

function moveCircle() {
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
}

circle.addEventListener("click", updateScore);
moveCircle();
