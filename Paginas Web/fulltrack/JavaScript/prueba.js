//Ej 1
function saludo(nombre) {
  console.log(`Hola: ${nombre}`);
}

let prueba = saludo("daniel");

console.log(prueba);
//devuelve undefined

//Ej 2

function mostrarSaludo(nombre) {
  console.log(`Mi nombre es: ${nombre}`);
}

mostrarSaludo("More");

// Ej 6 Calcular iva

function calcularIVA(precio) {
  return precio * 1.21;
}

console.log(calcularIVA(100));

//Eje 7

let num = 15;

console.log(`El numéro ingrasado es: ${num}`);

function esPar(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(`El booleano devuelto es: ${esPar(num)}`);

if (esPar(num) === true) {
  console.log("Es un numero par");
} else {
  console.log("Es un numero Impar");
}
//explico en udemy esta manera, me parece muy rebuscado

let sumar = function (a, b) {
  return a + b;
};
resultado = sumar(2, 6);
console.log(resultado);

//mas facil y menos enquilombados!!!

function altSumar(a, b) {
  return a + b;
}

console.log(altSumar(20, 69));

/***************************** */

let nota1 = 4;
nota2 = 5;
nota3 = 7;

let notasFinales = function (nota1, nota2, nota3) {
  return nota1 + nota2 + nota3;
};

let promedio = notasFinales(nota1, nota2, nota3) / 3;

console.log(promedio);

/**funcionces con flechas */

const total = (a, b) => a + b;

console.log(`La suma total es:  ${total(3, 897)}`);

/*************************************** */

let x = (valores) => {
  if (valores < 10 && valores >= 7) {
    return 1;
  } else if (valores < 7 && valores >= 4) {
    return 2;
  } else {
    return 3;
  }
};

console.log(x(2));

let vertice = (x, y) => {
  return x + y;
};

console.log(vertice(4, 9));

let valor = function (h) {
  console.log(arguments[0]);
  return h * 1.33;
};

console.log(valor(55));

//===========================================
let exponer = function (t, h, y) {
  return (t + h + y) * arguments[1];
};

console.log(`El valor actual es: ${exponer(3, 6, 2)}`);
//========================================

function sumarte() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sumarte(1, 2, 3, 4)); // 10

//=======================================
let numeros = [1, 2, 3];

let dobles = numeros.map((n) => n * 2);

console.log(dobles);

//========================================

let calc = [1, 2, 3, 4, 5];

console.log(calc);

let mult = calc.map((t) => t * 3);
console.log(mult);

//=====================================

let w = 10;

function cambiarValor(a) {
  a = 20;
}

cambiarValor(w);
console.log(w);

//=============================================
//Creamos un objecto
const personas = {
  nombre: "Daniel",
  apellido: "More"
}

function cambiarValor(p) {
  p.nombre = "Aida";
  p.apellido="Lescano"; 
}

cambiarValor(personas);
console.log(personas);

