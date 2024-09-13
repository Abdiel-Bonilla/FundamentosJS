//Hi I´m Abdiel and I´m from Teacalco

const name = "Abdiel";
const city = 'Teacalco';

console.log("Hi! I´m " + name + " \n and I'm from " + city); // con \n para salto de linea

console.log('Hi! I\'m' + name + ' \n and I\'m from' + city);


//TEMPLATE LITERALS
console.log(`Hi! I'm ${name}
and I'm from ${city}`);

const message = (`Hi! I'm ${name} and I'm from ${city}`);

console.log(message.length);
console.log(message.toLocaleUpperCase());
console.log(message.toLowerCase());
console.log(message.includes('from'));
console.log(message.startsWith('Hi!'));
console.log(message.indexOf("Abdiel"));
console.log(message.split(' '));
console.log(" ༼ つ ◕_◕ ༽つ ❤".repeat(5));
