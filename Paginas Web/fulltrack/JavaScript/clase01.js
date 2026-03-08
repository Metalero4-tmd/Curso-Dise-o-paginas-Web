/* Para declarar una variable se usa let, var o const */
let nombre = "Morena";
console.log(nombre);

let edad = 1;
console.log(`la edad es ${edad}`);
/* Para conocer el tipo de dato se usa typeof */
console.log(typeof edad);

/* Variable que referencia un objeto */

let objecto = {
  nombre: "daniel",
};

console.log(objecto.nombre);
/* Cambiar el valor de una propiedad del objeto */
objecto.nombre = "aida";
console.log(`el nuevo nombre es: ${objecto.nombre}`);

/*tipo de dato booleano */

let estado = true;

console.log(estado);

let a = 10;
let b = 20;

/* Tipo de dato Function */
let sumar = function suma(a, b) {
  return a + b;
};

console.log(sumar(a, b));

/* Tipo de dato symbol */
let id = Symbol("id");

let usuario = {
  nombre: "daniel",
  [id]: 300,
};

console.log(usuario.nombre); // "Daniel"
console.log(usuario[id]); // 300
typeof id;

// Typo clase es una function

class datos {
  constructor(nombre, apellido) {
    ((this.nombre = nombre), (this.apellido = apellido));
  }
}

let persona = new datos("Daniel", "Morales");

console.log(persona.nombre);
console.log(persona.apellido);

//=========================================

// Los arreglos en JavaScript son objetos
let autos = ["BMW", "Audi", "Volvo"];
console.log(autos);
console.log(typeof autos); // "object"

// Concatenación de cadenas
let mascota = 'morena';
let raza = 'ovejera belga';

let concatenacion = mascota + ' - ' + raza;
console.log(concatenacion); // morena - ovejera belga

// Otra manera de escribirlo directamente
let concatenacion2 = 'More' + ' - ' + 'ovejera belga';
console.log(concatenacion2); // More - ovejera belga

/* 
Cuando en una variable se combinan distintos tipos de datos, 
JavaScript convierte todo a string si el primer valor es string.
Ejemplo:
*/
let alias = 'morena';
let x = alias + 2 + 5; // "morena25"
console.log(x);

let y = nombre + (2 + 5); // "morena7" porque primero se suman los números dentro de los paréntesis
console.log(y);

/* 
No se puede reasignar un valor a una variable declarada con const.
Si se necesita cambiar el valor, usar let en lugar de const.
Ejemplo:

const bandas = 'Megadeth';
bandas = 'Ozzy'; // ❌ Error: Assignment to constant variable

let bandas2 = 'Megadeth';
bandas2 = 'Ozzy'; // ✅ Funciona correctamente
console.log(bandas2); // Ozzy
*/
