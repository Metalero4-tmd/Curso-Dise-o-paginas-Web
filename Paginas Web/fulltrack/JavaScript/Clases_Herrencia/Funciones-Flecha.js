//Ejercicio 1
let valor = 8;
console.log(`El numero ingreado es: ${valor}`);
const multiplicado = (valor) => valor * 3;

console.log(`Multiplicado x 3 es: ${multiplicado(valor)}`);

//Ejercicio 2

let num1 = 100;
let num2 = 100;

console.log(`El primer numero ingreado es: ${num1}`);
console.log(`El segundo numero ingreado es: ${num2}`);
const mayor = (num1, num2) => {
  if (num1 === num2) {
   return "Son iguales" 
  } else if (num1 > num2) {
     return num1;
  } else {
    return num2;
  }
}

console.log(`El numero mayor: ${mayor(num1,num2)}`);

