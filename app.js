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
            message.innerText += " Este es el segundo"
            break;
        case 2:
            message.innerText += " Tres de tres"
            break;
        case 3:
            message.innerText += " Vamos en el ombligo!!"
            break;
        case 4:
            message.innerText += " Cinco 5 :)"
            break;
        case 5:
            message.innerText += " En este no se que poner "
            break;
        case 6:
            message.innerText += " Cualquier cosa "
            break;
        case 7:
            message.innerText += " Colorincoloradooo!!!"
            break;
        default:
            console.log("Ayudaaaaaa no jalooo!!!");
            break;
    }

}

ball.addEventListener('click', eightball);