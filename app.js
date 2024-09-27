//apuntar al div
const ball= document.querySelector('div');
const message = document.querySelector('h1');

const eightball= () => {
    // TODO
    // crear número aleatorio (0 - 7)
    //switch case para mensajes distintos
    message.innerText = " "
    const number = Math.floor(Math.random() * 7);
    switch (number) {
        case 0:
            message.innerText += " Intento uno "
            break;
        case 1:
            message.innerText += " Parte dos de este cuento"
            break;
        case 2:
            message.innerText += " Eran 3 alpinos "
            break;
        case 3:
            message.innerText += " Fueron felices los 4 :( ) "
            break;
        case 4:
            message.innerText += " Ya casi terminamos "
            break;
        case 5:
            message.innerText += " En este no se que poner "
            break;
        case 6:
            message.innerText += " Colorincolorado!!"
            break;
        default:
            console.log("Ayudaaaaaa no jalooo!!!");
            break;
    }

}

ball.addEventListener('click', eightball);