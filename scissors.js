let playerChoice = '';

function selectPlayerChoice(choice) {
    playerChoice = choice;

    // Mostrar la imagen de la elección del jugador
    document.getElementById('playerImage').src = `img/${choice.toLowerCase()}.png`;
    document.getElementById('playerImage').alt = `Jugador: ${choice}`;
    document.getElementById('playerImage').style.display = 'block'; // Mostrar imagen

    // Habilitar el botón "Jugar" después de hacer la elección
    document.getElementById('startButton').disabled = false;
}

function playGame() {
    if (!playerChoice) return;  // Si no hay elección, no hacer nada

    const choices = ['Piedra', 'Papel', 'Tijera'];
    const machineChoice = choices[Math.floor(Math.random() * choices.length)];

    // Mostrar la imagen de la elección de la máquina
    document.getElementById('machineImage').src = `img/${machineChoice.toLowerCase()}.png`;
    document.getElementById('machineImage').alt = `Máquina: ${machineChoice}`;
    document.getElementById('machineImage').style.display = 'block'; // Mostrar imagen

    // Determinar el resultado
    let result = '';

    if (playerChoice === machineChoice) {
        result = 'Empate';
    } else if (
        (playerChoice === 'Piedra' && machineChoice === 'Tijera') ||
        (playerChoice === 'Papel' && machineChoice === 'Piedra') ||
        (playerChoice === 'Tijera' && machineChoice === 'Papel')
    ) {
        result = 'Jugador Gana';
    } else {
        result = 'Máquina Gana';
    }

    // Mostrar el resultado
    document.getElementById('result').textContent = `Resultado: ${result}`;
}
