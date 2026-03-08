/*
Funciones Callback en JavaScript
================================
Dentro de funcion se puede llamr a otra función a traves de callback recibiendo como argmento esta funcion 
*/

let a = 5;
let b = 356;

console.log(`El primer numero ingresado es : ${a}`);
console.log(`El segundo numero ingresado es : ${b}`);

const resultado = (a, b, callBack) => {
  const suma = a + b;
  callBack(`La suma es ${suma}`);
};

const imprimir = (mensaje) => console.log(mensaje);
resultado(a, b, imprimir);

/******** Verificar si es par o impar el numero ***********/

let valor = 1565;
console.log(`El numero ingresado: ${valor}`);
/*
console.log(`El valor ingresado es ${valor}`);
if (valor % 2 != 0) {
  console.log("Es numero ingresado es impar");
} else {
  console.log("Es numero ingresado es par");
}
*/

const divisible = (valor, callBack) => {
  if (valor % 2 != 0) {
    callBack(`El numero es Impar: ${valor}`);
  } else {
    callBack(`El numero es Par: ${valor}`);
  }
};

divisible(valor, imprimir);

//manera mas profesionarl
setTimeout(imprimir, 3000, "Esto se demoró");

setTimeout(()=>
imprimir("Esto se va a demorar"),2000
);



