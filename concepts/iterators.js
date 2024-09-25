//high oerder functions
//funciones de orden superior
//funcuiones que reciben como parametros otras funciones
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const calculator = (a,b, callback) => {
    const result = callback(a, b);
    console.log(result);
}


calculator(15, 9, suma);
calculator(15, 9, resta);
calculator(15, 9, (a, b) => a * b);
calculator(15, 9, (a, b) => a / b);

const foods = ['tamales','pizza','chilaquiles','pozole',
                'tacos','maruchan'];

foods.forEach(food => console.log(food));
foods.forEach(food => console.log(food.length));
foods.forEach(food => console.log(food.includes('a')));

const FOODS = foods.map(food => food.toUpperCase());
console.log(FOODS);

const foodsEmojis = foods.map(food => food + '🍗');
console.log(foodsEmojis);

const sdoof =foods.map(food => {
    const separated = food.split(''); //separar
    const reversed = separated.reverse(); //voltear
    const joined = reversed.join('');//unir
    return joined;
//food=> food.split('').reverse().join('');
});

console.log(sdoof);


const numbers = [1,2,3,4,5,6,7,8,9,10];

const cuadros = numbers.map(number => number*number);
const mitades = numbers.map(number => number/2);
const cubos = numbers.map(number => Math.pow(number,3));

console.log('cubos ' + cuadros);
console.log('mitades ' + mitades);
console.log('cubos ' + cubos);

const gifts = ['cat', 'game', 'socks']

function wrapping(gifts) {
    const envueltos=[];
    for(let gift of gifts){
        const tapa ='*'.repeat(gift.length + 2);
        envueltos.push(`${tapa}\n*${gift}*\n${tapa}`);
    }
    return envueltos;
}
const wrapped = wrapping(gifts)

function wrapping(gifts) {
    return gifts.map(gift => {
        const tapa ='*'.repeat(gift.length + 2);
        return `${ tapa }\n*${ gift }*\n${ tapa }`;
    });
}

const foods = ['tamales','pizza','chilaquiles','pozole',
    'tacos','maruchan'];

const wrappeds = wrapping(foods);
wrappeds.forEach(item => console.log(item));


const foods = ['tamales','pizza','chilaquiles','pozole',
    'tacos','maruchan'];

//Filtros
const containsZ = foods.filter(food => food.includes('z'));
console.log(containsZ);

const endsWithS = foods.filter(food => food.endsWith('s'));
console.log(endsWithS);


//pares, impares, menores a 5 y mayores a 5
const numbers = [1,2,3,4,5,6,7,8,9,10];
const pares = numbers.filter(number => number % 2 === 0);
console.log('pares: ' + pares);
const impares = numbers.filter(number => number % 2 !== 0);
console.log('impares: ' + impares);
const menores = numbers.filter(number => number < 5);
console.log('menores de 5: ' + menores);
const mayores = numbers.filter(number => number > 5);
console.log('mayores a 5: ' +  mayores);


//reduce
const numeros = [1,2,3,4,5,6,7,8,9,10];
const sumatoria = numeros.reduce((a,b) => a + b );
const factorial = numeros.reduce((a,b) => a * b);
console.log(numeros);
console.log(sumatoria);
console.log(factorial);

//some (or) every(and)
const positivos = numeros.every(n => n > 0);
console.log(positivos);
const negativo = numeros.every(n => n < 0);
console.log(negativo);

const ages = [20,21,25,17,18];
const algunos_mayores = ages.some(n => n >= 18);
console.log(algunos_mayores);
const algunos_menores = ages.some(n => n < 18);
console.log(algunos_menores);


// findIndex
const fruits = ['🍎','🍏','🍊','🍑','🍒'];
const index_durazno = fruits.findIndex (f => f=== '🍑')
console.log(fruits  [index_durazno]);