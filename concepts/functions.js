//SIN PRAMETROS Y SIN RETORNOS
function sayHello (){
    console.log("HELLO");
}
sayHello();

//CON PRAMETROS Y SIN RETORNOS
function sayHelloTo (name){
    console.log("HELLO" + name);
}
sayHelloTo("Juan");

//CON PRAMETROS Y CON RETORNOS
function sum(num1,num2){
    return num1+num2;
}
const result=sum(5,7);
console.log(result);

//CON PARAMETROS OPCIONALES
function multiply(num1,num2 =1){
    return num1 * num2;
}
console.log(multiply(5));
console.log(multiply(5,3));

//FUNCIONES ANONIMAS
setTimeout(function(){
    console.log("Hola mundo");
},1000);

const duplicate= function(num){
    return num * 2;
}
console.log(duplicate(2));

//ARROW FUNTIONS
//() => {}
const sayHello2 = () => console.log("Hello2")
sayHello2();

const sayHelloTo2 = (name) => console.log("Hello " + name);
sayHelloTo2("Peter");

const sum2 = (num1,num2) => num1 + num2;
const result2=sum2(5,7);

setTimeout(()=> console.log("Holaa mundo"),1000);
