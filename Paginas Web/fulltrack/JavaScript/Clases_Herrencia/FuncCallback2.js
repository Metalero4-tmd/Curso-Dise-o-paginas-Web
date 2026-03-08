/*
Funciones Callback en JavaScript
================================
Dentro de funcion se puede llamr a otra función a traves de callback recibiendo como argmento esta funcion 
*/

/*
let num1 = 5;
let num2 = 8;
console.log(`El primer numero ingresado es: ${num1} y el segundo numero es: ${num2}`);
const multiplicar= (num1,num2,callback)=>{

let x = 0;
x = num1 * num2;
callback (`El resultado de la multiplicacion es: ${x}`);

}

const imprimir =(mensaje)=>{console.log(mensaje)}; 

multiplicar(num1,num2,imprimir); 

setTimeout(imprimir,3000,"Demoro 3 segundos");
*/

//Ejercicio solicitado


let numero1 = 5;
let numero2 = 4;
console.log(
  `El primer numero ingresado es: ${numero1} y el segundo numero es: ${numero2}`,
);

const multiplicar = (numero1, numero2, callback) => {
  setTimeout(() => {
    let x = 0;

    x = numero1 * numero2;
    callback(`El resultado de la multiplicacion es: ${x}`);
  }, 2000, "no veo el mensaje")
}

const imprimirInfo = (mensaje) => console.log(mensaje);

multiplicar(numero1, numero2, imprimirInfo);

// Usar setInterval

let reloj = ()=>{

let fecha = new Date();

console.log(`${fecha.getHours()} - ${fecha.getMinutes()} - ${fecha.getSeconds()}`);
} 


setInterval (reloj,1000);

