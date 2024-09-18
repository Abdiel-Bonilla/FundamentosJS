//COLECCION DE OBJETOS
//[1,2,3,4]

const numbers=[1,2,3,4];
console.log(numbers);
console.log(numbers[2]);
console.log(numbers[3]);
numbers[4] = "four";
numbers[0] =10;
console.log(numbers);

//COLAS ARRAYS EN JS
const queue=[];
//IINSERTAR AL FINAL PUSH
queue.push(1);
console.log(queue);
queue.push(2);
console.log(queue);
queue.push(3);
console.log(queue);

//EXTRAER AL INICIO
console.log(queue.shift());
console.log(queue);
console.log(queue.shift());
console.log(queue);

//PILA ARRAYS EN JS
const stack=[];
// insertamos al final
stack.push(1);
console.log(stack);
stack.push(2);
console.log(stack);
stack.push(3);
console.log(stack);
stack.push(4);
console.log(stack);
//EXTRAER AL FINAL
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);

//INTEGRAR ELEMENTOS DE UNA ARRAY
const pairs=[2,4,6,8,10];
for(let i=0; i<pairs.length; i++){
    console.log(pairs[i]);
}
for (num of pairs){
    console.log(num);
}
