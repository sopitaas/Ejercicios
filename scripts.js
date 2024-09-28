let isTimerRunning = false; // Para verificar si un temporizador está activo
let isResting = false; // Para verificar si se está en período de descanso

function startTimer(seconds, exerciseNumber) {
    if (isResting) {
        alert("Debes descansar 30 segundos antes de iniciar otro ejercicio.");
        return;
    }

    if (isTimerRunning) {
        alert("Por favor, espera a que termine el ejercicio actual.");
        return;
    }

    isTimerRunning = true;
    let timerDisplay = document.getElementById('timer' + exerciseNumber);
    let time = seconds;
    const interval = setInterval(() => {
        timerDisplay.textContent = `Tiempo restante: ${time} segundos`;
        time--;
        if (time < 0) {
            clearInterval(interval);
            timerDisplay.textContent = "¡Tiempo completo!";
            isTimerRunning = false;
            startRestTimer(exerciseNumber);
        }
    }, 1000);
}

function startRestTimer(exerciseNumber) {
    isResting = true;
    let restTime = 30;
    let timerDisplay = document.getElementById('timer' + exerciseNumber);
    const restInterval = setInterval(() => {
        timerDisplay.textContent = `Descanso: ${restTime} segundos restantes`;
        restTime--;
        if (restTime < 0) {
            clearInterval(restInterval);
            timerDisplay.textContent = "Puedes comenzar el siguiente ejercicio.";
            isResting = false;
        }
    }, 1000);
}
