const iniciarButton = document.querySelector(".iniciar");
const pausarButton = document.querySelector(".pausar");
const zerarButton = document.querySelector(".zerar");
const time = document.querySelector(".time");

let startTime;
let timer;
let elapsedTime = 0;

function formatTime(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000) % 60;
    const minutes = Math.floor(milliseconds / (1000 * 60)) % 60;
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Função para remover a classe 'pause' do elemento 'time'
function removePauseClass() {
    if (time.classList.contains('pause')) {
        time.classList.remove('pause');
    }
}

function updateTimer() {
    currentTime = new Date().getTime();
    elapsedTime += currentTime - startTime; // um segundo de cada vez
    startTime = currentTime;
    time.innerHTML = formatTime(elapsedTime);
}

function startTimer() {
    // Garante que a classe 'pause' é removida antes de iniciar
    removePauseClass();

    startTime = new Date().getTime();
    timer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    time.classList.add('pause'); // Adiciona a classe 'pause' ao pausar
}

function resetTimer() {
    // Garante que a classe 'pause' é removida ao resetar
    removePauseClass();

    clearInterval(timer);
    elapsedTime = 0;
    time.innerHTML = '00:00:00';
}

iniciarButton.addEventListener("click", startTimer);
pausarButton.addEventListener('click', pauseTimer);
zerarButton.addEventListener('click', resetTimer);
