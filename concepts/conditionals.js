//if else if else

let age = 18;
if (age >= 18) {
    console.log("Es mayor de edad");
} else if (age >= 15) {
    console.log("Es un niño");
} else {
    console.log("Es un bodoque con patas");
}
console.log("Fin del programa");



let sale = true;
if (sale) {
    console.log("Time to buy!");
} else {
    console.log("Time to wait for a sale.");
}

let hungerlevel = 7;
if (hungerlevel > 7) {
    console.log("Time to eat!");
} else {
    console.log("We can wait.");
}

let mood = "sleepy";
let tirednesslevel = 6;
if (mood === "sleepy" && tirednesslevel > 8) {
    console.log("Time to sleep!");
} else {
    console.log("Not bed time yet.");
}


let myVariable = "";
if (myVariable) {
    console.log(myVariable);
} else {
    console.log("The variable does not exist.");
}

//TRTHY AND FALSY
//myNum = 0 --> false
//myNum > 0 --> true
//myStr = '' --> false
//myStr = 'Hi' --> true


//Asignar usuario por default
let username = '';
let defaultName;

if (username !== '') {
    defaultName = username;
} else {
    defaultName = 'Invitado';
}
//Otra forma de hacerlo
if(username){
    defaultName = username;
}else{
    defaultName = 'Invitado';
}

defaultName= username || 'Invitado';

/**
 * expresion ? true: false;
 */

//operador ternario
(age>= 18)
    ? console.log("Es mayor de edad")
    : console.log("Es menor de edad");

defaultName = username ? username : 'Invitado';
console.log(defaultName);

//switch case
const day =Math.floor(Math.random() * 7);
switch (day) {
    case 0:
        console.log("Es Domingo");
        break;
    case 1:
        console.log("Es Lunes");
        break;
    case 2:
        console.log("Es Martes");
        break;
    case 3:
        console.log("Es Miercoles");
        break;
    case 4:
        console.log("Es Jueves");
        break;
    case 5:
        console.log("Es Viernes");
        break;
    case 6:
        console.log("Es Sabado");
        break;
    default:
        console.log("Dia no existente");
        break;
}