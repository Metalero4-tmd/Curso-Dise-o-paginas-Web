1️⃣ ¿Qué es if / else y cómo funciona?

La idea es simple:

Si se cumple una condición → hago algo
Si no → hago otra cosa

Estructura básica
if (condicion) {
  // código si la condición es true
} else {
  // código si la condición es false
}


Ejemplo mínimo:

let edad = 20;

if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}


📌 La condición siempre devuelve true o false
Y ahí entran los operadores lógicos y de comparación.

else if (cuando hay más de una condición)
let nota = 8;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 6) {
  console.log("Aprobado");
} else {
  console.log("Desaprobado");
}

2️⃣ Ejercicios prácticos (los importantes de verdad)

👉 Tip:
Hacé un solo archivo ejercicios.js
Resolvé uno debajo del otro, con console.log.

🧮 EJERCICIO 1 — Suma y resta
let a = 10;
let b = 5;

// Mostrar en consola:
// suma
// resta

➗ EJERCICIO 2 — División con if
let num1 = 20;
let num2 = 0;

// Si num2 es distinto de 0, mostrar la división
// Si es 0, mostrar "No se puede dividir por cero"


👉 Acá usás: if + !==

🔼 EJERCICIO 3 — Incremento
let contador = 0;

// Incrementar contador 3 veces
// Mostrar el valor final


👉 Usá ++

🔍 EJERCICIO 4 — Comparación simple
let edad = 17;

// Si es mayor o igual a 18 → "Puede entrar"
// Si no → "No puede entrar"

🧩 EJERCICIO 5 — AND (&&)
let edad = 25;
let tieneEntrada = true;

// Solo puede entrar si:
// edad >= 18 Y tieneEntrada es true


👉 Este es CLAVE, se usa todo el tiempo.

🧩 EJERCICIO 6 — OR (||)
let esAdmin = false;
let esEditor = true;

// Puede acceder si es admin O editor
|
❗ EJERCICIO 7 — NOT (!)
let estaLogueado = false;

// Si NO está logueado, mostrar "Debe iniciar sesión"


👉 Usás !

🧠 EJERCICIO 8 — Mezcla real
let edad = 20;
let tieneDNI = true;
let estaAcompaniado = false;

// Puede ingresar si:
// (edad >= 18 Y tieneDNI)
// O está acompañado


👉 Acá mezclás &&, || y paréntesis (muy real).

🧭 Regla mental para no volverte loco

=== para comparar

&& cuando todo debe cumplirse

|| cuando con uno alcanza

! para negar

Paréntesis cuando dudás