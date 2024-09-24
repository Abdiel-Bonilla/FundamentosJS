let playerChoice = '';

function startGame() {

    const buttons = document.querySelectorAll('.options button');
    buttons.forEach(button => {
        button.disabled = false;
    });


    document.getElementById('startButton').disabled = true;

    document.getElementById('playerImage').src = '';
    document.getElementById('machineImage').src = '';
    document.getElementById('result').textContent = '';


    document.getElementById('playerImage').style.display = 'none';
    document.getElementById('machineImage').style.display = 'none';
}


function selectPlayerChoice(choice) {
    playerChoice = choice;
    document.getElementById('playerImage').src = `img/${choice.toLowerCase()}.png`;
    document.getElementById('playerImage').alt = `Jugador: ${choice}`;
    document.getElementById('playerImage').style.display = 'block'; 


    playGame();
}


function playGame() {
    if (playerChoice === '') return; 

    const choices = ['Piedra', 'Papel', 'Tijera'];
    const machineChoice = choices[Math.floor(Math.random() * choices.length)];


    const images = {
        'Piedra': 'img/piedra.png',
        'Papel': 'img/papel.png',
        'Tijera': 'img/tijera.png'
    };

    document.getElementById('machineImage').src = images[machineChoice];
    document.getElementById('machineImage').alt = `Máquina: ${machineChoice}`;
    document.getElementById('machineImage').style.display = 'block'; // Mostrar imagen de la máquina

    let result = '';


    switch (playerChoice + machineChoice) {
        case 'PiedraPiedra':
        case 'PapelPapel':
        case 'TijeraTijera':
            result = 'Empate';
            break;
        case 'PiedraTijera':
        case 'PapelPiedra':
        case 'TijeraPapel':
            result = 'Jugador Gana';
            break;
        case 'PiedraPapel':
        case 'PapelTijera':
        case 'TijeraPiedra':
            result = 'Máquina Gana';
            break;
    }


    document.getElementById('result').textContent = `Resultado: ${result}`;


    const buttons = document.querySelectorAll('.options button');
    buttons.forEach(button => {
        button.disabled = true;
    });

    document.getElementById('startButton').disabled = false;
}
