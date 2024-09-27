let playerChoice = '';

function selectPlayerChoice(choice) {
    playerChoice = choice;

    document.getElementById('playerImage').src = `img/${choice.toLowerCase()}.png`;
    document.getElementById('playerImage').alt = `Jugador: ${choice}`;
    document.getElementById('playerImage').style.display = 'block';

    document.getElementById('startButton').disabled = false;
}

function playGame() {
    if (!playerChoice) return;

    const choices = ['Piedra', 'Papel', 'Tijera'];
    const machineChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('machineImage').src = `img/${machineChoice.toLowerCase()}.png`;
    document.getElementById('machineImage').alt = `Máquina: ${machineChoice}`;
    document.getElementById('machineImage').style.display = 'block';


    let result = '';

    if (playerChoice === machineChoice) {
        result = 'Empate';
    } else if (
        (playerChoice === 'Piedra' && machineChoice === 'Tijera') ||
        (playerChoice === 'Papel' && machineChoice === 'Piedra') ||
        (playerChoice === 'Tijera' && machineChoice === 'Papel')
    ) {
        result = '¡Jugador Gana!';
    } else {
        result = 'Máquina Gana';
    }


    document.getElementById('result').textContent = `Resultado: ${result}`;
}
