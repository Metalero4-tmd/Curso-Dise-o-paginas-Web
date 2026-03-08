======================================
Tipos de datos en java
======================================


📘 Tipos de datos en JavaScript
🔹 1️⃣ Tipos Primitivos (Immutable – se copian por valor)

Son datos simples.
No son objetos.

Tipo
| Tipo        | Qué representa      | Ejemplo         | Detalle importante                  |
| ----------- | ------------------- | --------------- | ----------------------------------- |
| `string`    | Texto               | `"Hola"`        | Siempre entre comillas              |
| `number`    | Números             | `10`, `3.14`    | No hay int / float separados        |
| `boolean`   | Verdadero / falso   | `true`, `false` | Muy usado en condiciones            |
| `undefined` | Variable sin valor  | `let x;`        | Valor automático                    |
| `null`      | Vacío intencional   | `let y = null;` | Se asigna a propósito               |
| `symbol`    | Identificador único | `Symbol("id")`  | Avanzado                            |
| `bigint`    | Números muy grandes | `123n`          | Para números fuera del rango normal |

🔹 2️⃣ No Primitivos (Tipo Referencia)

Todo lo demás en JavaScript es un objeto.
Ejemplo


| Tipo       | Qué representa   | Ejemplo              | Detalle importante        |
| ---------- | ---------------- | -------------------- | ------------------------- |
| `object`   | Objeto general   | `{ nombre: "Juan" }` | Colección de propiedades  |
| `array`    | Lista ordenada   | `[1, 2, 3]`          | Técnicamente es un objeto |
| `function` | Función          | `function(){}`       | También es un objeto      |
| `date`     | Fecha            | `new Date()`         | Objeto especial           |
| `map`      | Mapa clave-valor | `new Map()`          | Colección moderna         |
| `set`      | Valores únicos   | `new Set()`          | No permite duplicados     |

⚠ Importante:

array NO es primitivo.

function NO es primitivo.

Ambos son objetos.

typeof "Hola"       // string (primitivo)
typeof 10           // number (primitivo)
typeof true         // boolean (primitivo)
typeof undefined    // undefined (primitivo)
typeof null         // object ⚠ (bug histórico)
typeof {}           // object
typeof []           // object
typeof function(){} // function

typeof null devuelve "object"
Eso es un bug histórico de JavaScript, pero null sigue siendo primitivo.

Ejemplos

/* Para declarar una variable se usa let, var o const */
let nombre = "Morena";
console.log(nombre);

let edad = 1;
console.log(`la edad es ${edad}`);
/* Para conocer el tipo de dato se usa typeof */
console.log(typeof edad );

/* Variable que referencia un objeto */

let objecto = {
  nombre: "daniel",
};

console.log(objecto.nombre);
/* Cambiar el valor de una propiedad del objeto */
objecto.nombre= "aida";
console.log(`el nuevo nombre es: ${objecto.nombre}`);


========================================

🔗 Concepto CLAVE: referencia

Cuando hacés:

const celular = { modelo: "motorola one" };


Lo correcto es decir:

celular es una variable que contiene una referencia a un objeto

📌 El objeto vive en memoria
📌 La variable apunta a él

3️⃣ ¿Qué pasa si NO pongo const / let / var?
celular = { modelo: "motorola one" };


Esto NO es declarar.

La terminología correcta es:

❌ Asignación a una variable no declarada

Y en JS moderno:

eso es un error

o una creación implícita de variable global (mala práctica)

👉 No es un tipo
👉 No es una referencia válida
👉 Es un error de declaración

🧩 Léxico oficial (resumen)

| Frase correcta        | Qué significa                                        |
| --------------------- | ---------------------------------------------------- |
| Declarar una variable | Usar `const / let / var`                             |
| Asignar un valor      | Darle algo con `=`                                   |
| Referencia            | Lo que guarda una variable cuando apunta a un objeto |
| Objeto                | Estructura `{ clave: valor }`                        |
| Propiedad             | `objeto.nombre`                                      |

================================================================
para saber el tipo de datos

console.log(typeof(variable));


==============================================================

📌 Uso de Symbol en objetos (Explicación completa)
let id = Symbol("id");

let usuario = {
  nombre: "Daniel",
  [id]: 300
};

console.log(usuario.nombre); // "Daniel"
console.log(usuario[id]);    // 300

typeof id;                    // "symbol"

1️⃣ Paso a paso
1. Creación del símbolo
let id = Symbol("id");


Symbol("id") → crea un identificador único

La descripción "id" solo sirve para debugging, no afecta la unicidad

Tipo de dato: primitivo

typeof id; // "symbol"


Visualización mental:

id ---> Symbol("id")  (valor único)

2. Crear objeto con Symbol como clave
let usuario = {
  nombre: "Daniel",
  [id]: 300
};


[id] → los corchetes dicen: “usar el valor de la variable id como clave”

usuario ahora tiene 2 propiedades:

Clave	Valor	Comentario
"nombre"	"Daniel"	propiedad normal (string)
Symbol("id")	300	propiedad con clave única

Diagrama mental:

usuario
 ├─ nombre → "Daniel"
 └─ [Symbol("id")] → 300

3. Acceso a las propiedades
console.log(usuario.nombre); // "Daniel"


Accede como siempre con .nombre (string literal)

console.log(usuario[id]);    // 300


Accede con la variable que contiene el símbolo

Sin corchetes, o usando usuario.Symbol → undefined

4. Tipo de dato del símbolo
typeof id; // "symbol"


Confirma que id es un tipo primitivo nuevo en JS

Único y no colisiona con strings u otras propiedades

🔑 Puntos clave para apuntes

[variable] → se usa para evaluar la variable como clave, necesario para Symbols.

Symbol() → siempre genera un valor único, incluso si la descripción es igual.

Acceso a la propiedad → usuario[id], nunca usuario.Symbol ni usuario["id"].

Se usa sobre todo para propiedades internas, privadas o librerías, no para variables comunes.

======================================================

1️⃣ Constructor = método especial
class Datos {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}


Es un método, pero especial → no se llama como cualquier función, se ejecuta automáticamente cuando usás new.

No devuelve un valor explícito con return (en realidad, devuelve el objeto recién creado, de forma implícita).

Su trabajo principal: reservar espacio en memoria y asignar propiedades al objeto.

2️⃣ Diferencia con una función normal
function suma(a, b) {
    return a + b;
}


suma → función normal → devuelve un valor (return)

constructor → método especial → devuelve automáticamente el objeto instanciado, no usás return normalmente

3️⃣ Lo que hace new
let usuario = new Datos("Daniel", "Morales");


Reserva memoria para un nuevo objeto

Ejecuta constructor → asigna las propiedades nombre y apellido en ese objeto

Devuelve el objeto → usuario apunta a esa dirección de memoria

📌 Diferencia clave: no le pasás un valor de retorno como a una función normal, le pasás parámetros que el constructor usa para inicializar el objeto.

4️⃣ Resumen conceptual
Concepto	Función normal	Constructor / Clase
Qué es	Función	Método especial de clase
Retorno	return valor	Devuelve automáticamente el objeto creado
Parámetros	Datos para calcular	Datos para inicializar propiedades
Memoria	No reserva por sí sola	Reserva espacio para el objeto

💡 Frase para grabar a fuego

“Un constructor es un método especial que inicializa un objeto y reserva memoria para sus propiedades. No es un objeto ni devuelve un valor explícito, aunque el objeto recién creado se retorna implícitamente.”

ejemplo

class Datos {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let usuario = new Datos("Daniel", "Morales");

          ┌───────────── Clase ─────────────┐
          │          Datos                  │
          │────────────────────────────────│
          │ constructor(nombre, apellido)  │
          │ 🟢 this.nombre = nombre         │
          │ 🔵 this.apellido = apellido    │
          └───────────────┬───────────────┘
                          │
        new Datos("Daniel","Morales")  🟣
                          │
                          ▼
                 ┌──────────────────────────┐
usuario ──────▶ │ Objeto en memoria         │
                 │──────────────────────────│
                 │ 🟢 nombre: "Daniel"       │
                 │ 🔵 apellido: "Morales"    │
                 └──────────────────────────┘


2️⃣ Conceptos clave
Concepto	Qué hace
class	Define la plantilla del objeto
constructor	Método especial que inicializa propiedades y reserva espacio en memoria
new Clase()	Crea un objeto real en memoria basado en la clase
this.propiedad	Asigna las propiedades del objeto recién creado
Parámetros (nombre, apellido)	Datos que se usan para inicializar el objeto
Retorno	No hace return explícito, el objeto creado se devuelve automáticamente
console.log(usuario.nombre);   // "Daniel"
console.log(usuario.apellido); // "Morales"
usuario → variable que apunta al objeto en memoria

.nombre y .apellido → acceden a las propiedades de ese objeto

4️⃣ Nota conceptual importante
El constructor no es un objeto, es un método

La variable usuario no es la clase, es el objeto instanciado en memoria

Los parámetros del constructor inicializan las propiedades, no se usan como retorno
==========================================

```js
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
=================================================================
/* =====================================================
   🧠 OPERADORES EN JAVASCRIPT — SÍNTESIS RÁPIDA
   ===================================================== */

/* ➕➖ OPERADORES ARITMÉTICOS */
let a = 10;
let b = 3;

a + b; // suma → 13
a - b; // resta → 7
a * b; // multiplicación → 30
a / b; // división → 3.33
a % b; // módulo (resto) → 1


/* 🔼🔽 INCREMENTO Y DECREMENTO */
let i = 5;

i++; // incrementa en 1 → 6
i--; // decrementa en 1 → 5

++i; // primero suma, luego usa el valor
i++; // primero usa el valor, luego suma


/* 🟰 OPERADORES DE ASIGNACIÓN */
let x = 10;

x = 10;   // asignación
x += 5;   // x = x + 5 → 15
x -= 3;   // x = x - 3 → 12
x *= 2;   // x = x * 2 → 24
x /= 4;   // x = x / 4 → 6


/* 🔍 OPERADORES DE COMPARACIÓN
   (devuelven true o false) */
5 == "5";    // true  (compara solo valor)
5 === "5";   // false (compara valor y tipo)
5 != 4;      // true
5 !== "5";   // true
5 > 3;       // true
5 < 10;      // true
5 >= 5;      // true
5 <= 4;      // false


/* 🔍 OPERADORES DE COMPARACIÓN
   (devuelven true o false) */

==    // igual en valor (no compara tipo)
===   // igual en valor y tipo
!=    // distinto en valor
!==   // distinto en valor o tipo
>     // mayor que
<     // menor que
>=    // mayor o igual que
<=    // menor o igual que


/* 🧩 OPERADORES LÓGICOS */

// AND (&&) → todas deben ser verdaderas
true && true;    // true
true && false;   // false

// OR (||) → con que una sea verdadera alcanza
true || false;   // true
false || false;  // false

// NOT (!) → niega el valor
!true;  // false
!false; // true


/* 🧠 EJEMPLO REAL */
let edad = 20;
let tieneDNI = true;

if (edad >= 18 && tieneDNI) {
  console.log("Puede ingresar");
}


/* ⚡ TRUTHY Y FALSY */

// FALSY (equivalen a false)
false;
0;
"";
null;
undefined;
NaN;

// TRUTHY (equivalen a true)
true;
1;
"hola";
{};
[];


/* OR COMO VALOR POR DEFECTO */
let nombre = "";

let resultado = nombre || "Invitado";
console.log(resultado); // "Invitado"


/* 🧭 PRIORIDAD DE OPERADORES (simplificada)
   1. !
   2. * / %
   3. + -
   4. > < >= <=
   5. === !==
   6. &&
   7. ||

   👉 Si hay dudas: usar paréntesis
*/

====================================================================
// En JavaScript los decimales se escriben con PUNTO
let numero = 10.5;

// Las divisiones y porcentajes pueden devolver muchos decimales
let resultado = 10 / 3; // 3.3333333333333335

// Limitar decimales (DEVUELVE STRING)
resultado.toFixed(2); // "3.33"
resultado.toFixed(3); // "3.333"

// Si necesitás seguir operando, volver a number
let num2 = Number(resultado.toFixed(2));

// Alternativa que devuelve NUMBER
let redondeado = Math.round(resultado * 100) / 100; // 3.33

// Porcentajes
let porcentaje = (50 * 100) / 200; // 25
porcentaje.toFixed(2); // "25.00"

=======================================================================
# 📌 Bucles en JavaScript: `for`, `while` y `do...while`

> 🧠 **Idea clave**  
> No se trata de cuál es “mejor”, sino de **qué intención querés expresar** con el código.

---

## 🔵 `for` — Iteraciones controladas y precisas

<span style="color:#1e90ff"><b>Usalo cuando sabés cómo vas a iterar</b></span>

### 👉 Cuándo usar `for`
- Tenés un **contador claro**
- Sabés:
  - desde dónde empezás
  - hasta dónde llegás
  - cómo avanzás
- Pensás en **cantidad de vueltas**

### 📘 Ejemplos mentales
- “recorrer 10 veces”
- “iterar un array”
- “sumar de a 5 hasta llegar a X”
- “buscar un valor en una lista”

### 🧩 Sintaxis típica
```js
for (let i = 0; i < 10; i++) {
    // lógica
}

✅ Ventajas

Todo el control del loop está en una sola línea

Muy predecible

continue y break funcionan de forma natural

Reduce errores de loops infinitos

<span style="color:green"><b>✔ Ideal para búsquedas, recorridos y cálculos iterativos</b></span>

🟠 while — Iteración basada en condición

<span style="color:#ff8c00"><b>Usalo cuando sabés cuándo parar, pero no cuántas vueltas habrá</b></span>

👉 Cuándo usar while

No sabés cuántas iteraciones habrá

El corte depende de un estado lógico

El contador no es lo importante

📘 Ejemplos mentales

“mientras el usuario no cancele”

“mientras haya datos”

“mientras no ocurra un error”

“mientras la condición sea válida”

while (condicion) {
    // lógica
}

⚠️ Ojo importante

Si la condición empieza siendo falsa → no se ejecuta nunca

El incremento suele estar dentro del cuerpo

continue puede anular el incremento si no se piensa bien

<span style="color:red"><b>⚠ Requiere más cuidado con el flujo</b></span>

🟣 do...while — Al menos una ejecución garantizada

<span style="color:#8a2be2"><b>Usalo cuando la acción debe ejecutarse sí o sí una vez</b></span>

👉 Cuándo usar do...while

Necesitás ejecutar el bloque antes de validar

La condición se chequea al final

📘 Ejemplos mentales

“mostrá el menú al menos una vez”

“pedí datos y después validá”

“ejecutá y luego preguntá si sigue”

🧩 Sintaxis
do {
    // lógica
} while (condicion);

✅ Característica clave

Se ejecuta al menos una vez, siempre

🔁 break vs continue
🔴 break

<span style="color:red"><b>Corta completamente el loop</b></span>

if (condicion) {
    break;
}


👉 Usalo cuando:

“cuando lo encuentre, paro”

“ya no tiene sentido seguir”

🟡 continue

<span style="color:#daa520"><b>Salta a la siguiente iteración</b></span>

if (!condicion) {
    continue;
}


👉 Usalo cuando:

“esto no aplica, seguí”

“omití esta vuelta”

⚠ En while / do while puede anular el incremento
✔ En for es más seguro porque el incremento está en la estructura

🧠 Regla mental de oro

<span style="color:green"><b>Primero claridad, después elegancia. Nunca al revés.</b></span>

for → sé cuántas veces itero

while → sé cuándo parar

do...while → tiene que pasar al menos una vez

break → corto todo

continue → salto esta vuelta


=====================================================================================

let nota1 = 3;

let nota2 = 4,
  nota3 = 3;

let calificacion = (nota1 + nota2 + nota3) / 3;

console.log(`La nota final es: ${calificacion.toPrecision(3)}`);

if (calificacion >= 7 && calificacion <= 10) {
  console.log("Aprobo la materia la materia!!!");
} else if (calificacion >= 4 && calificacion < 7) {
  console.log("Se lleva la materia a dicimbre!!!");
} else {
  console.log("Se lleva la materia a Marzo!!!");
}

let edad = 18;
let tieneDNI = false;

// Puede ingresar si:
// (edad >= 18 Y tieneDNI)
// O está acompañado

if (edad >= 18 && tieneDNI) {
  console.log("Puede ingresar");
} else {
  console.log("No puede ingresar");
}

/*
👉 Este es CLAVE, se usa todo el tiempo.

🧩 EJERCICIO 6 — OR (||)
let esAdmin = false;
let esEditor = true;
Puede acceder si es admin O editor
*/
let esAdmin = false;
let esEditor = false;
if (esAdmin || esEditor) {
  console.log("Puede acceder");
} else {
  console.log("No puede acceder");
}

/*
🔼 EJERCICIO 3 — Incremento
let contador = 0;

 Incrementar contador 3 veces
 Mostrar el valor final

*/

// let i = 0;

// do {

//     if (i === 3) {
//         console.log("Se encontro el numero");
//         break;
//     }

//     else {
//         console.log(i);

//     }
//     i++;

// } while (i < 5);

let i = 0;

do {
  if (i < 3) {
    console.log(i);
  } else {
    console.log("Se encontro el numero");
    break;
  }

  i++;
} while (i < 5);


let suma = 0;

for (let indice = 0; indice <10; indice++)
  {
        if( suma != 45)
        {
            suma = suma+ 5;
            console.log(suma);
            continue;
        } 
 
         else { 
           console.log(`Se encontro el numero: ${suma}`);     
           break;
         }  
  

  } ;   


==============================================================================
arreglos

=============================
# 📦 Arrays en JavaScript  
## `push()` vs `length`

---

## 🔹 ¿Qué es un array?
Un array es una estructura de datos **indexada**, es decir, cada elemento tiene una **posición numérica** (índice).

```js
let autos = ["BMW", "Ferrari", "Toyota"];


🔵 push() — Agregar al final

<span style="color:green"><strong>push() es un MÉTODO del array</strong></span>.

autos.push("Volvo");

✔ Qué hace push():

Agrega el elemento siempre al final

Actualiza el length automáticamente

Es seguro y legible

Devuelve el nuevo largo del array

// Resultado
["BMW", "Ferrari", "Toyota", "Volvo"]


🧠 Idea mental

“Array, agregá esto al final”

🟠 length — Cantidad de elementos

<span style="color:orange"><strong>length es una PROPIEDAD</strong></span>, no un método.

autos.length


Indica cuántos elementos hay

No agrega ni quita elementos por sí solo

🔴 Usar length para agregar (manual)
autos[autos.length] = "Cadillac";

✔ Qué está pasando:

autos.length apunta a la siguiente posición libre

Vos decidís dónde escribir

El array crece

// Resultado
["BMW", "Ferrari", "Toyota", "Cadillac"]


🧠 Idea mental

“En la posición que hoy es la última + 1, poné este valor”

⚠️ Diferencia clave (importante)
push()	length
Método	Propiedad
Siempre agrega al final	Solo informa cantidad
JS decide la posición	Vos decidís la posición
Seguro	Podés cometer errores
Recomendado	Uso puntual
🚨 Peligro usando length
autos[10] = "Ford";


Resultado:

["BMW", "Ferrari", "Toyota", <7 empty items>, "Ford"]


❌ Se crean huecos vacíos
✔ Con push() esto nunca pasa

🧭 Regla de oro

<span style="color:blue"><strong>

Para agregar elementos → push()

Para saber cuántos hay → length

length no agrega, solo cuenta

📘 Funciones en JavaScript
🟦 1️⃣ Función Tradicional (Declaración)
function sumar(a, b) {
  return a + b;
}

✅ Características

Se declara con la palabra reservada <span style="color:cyan">function</span>

Siempre usa <span style="color:orange">{ }</span>

Si queremos devolver algo → usamos <span style="color:yellow">return</span>

Tiene <span style="color:lightgreen">hoisting</span> (se puede usar antes de declararla)

🔎 Ejemplo
console.log(sumar(2, 3));


✔ Funciona aunque esté antes en el código.

🟩 2️⃣ Función Guardada en Variable
const sumar = function(a, b) {
  return a + b;
};

✅ Características

Es una <span style="color:lightgreen">variable</span> que contiene una función

Necesita <span style="color:cyan">const</span>, <span style="color:cyan">let</span> o <span style="color:cyan">var</span>

No tiene hoisting

Se comporta como cualquier variable

🟪 3️⃣ Funciones Flecha (Arrow Functions)

Introducidas en ES6.

🔹 Forma básica
const sumar = (a, b) => {
  return a + b;
};

🔹 Forma simplificada (Return implícito)

Si la función tiene una sola expresión, no necesita llaves ni return:

const sumar = (a, b) => a + b;

🧠 Regla clave
Sintaxis	¿Necesita return?
Sin {}	❌ No (retorno automático)
Con {}	✅ Sí (return obligatorio)
🟥 4️⃣ Flecha con Lógica Compleja

Si la función tiene:

if

else if

else

Varias líneas de código

Entonces necesita:

<span style="color:orange">{ }</span>

<span style="color:yellow">return</span> en cada camino lógico

Ejemplo conceptual:

const evaluar = (numero) => {
  if (numero > 10) {
    return "Mayor";
  } else if (numero === 10) {
    return "Igual";
  } else {
    return "Menor";
  }
};


✔ Sigue siendo flecha
✔ Solo que ahora es versión "larga"

🟨 5️⃣ ¿Cuándo usar cada una?
Situación	Recomendación
Función simple	Flecha corta
Varias condiciones	Flecha con llaves o tradicional
Mucha lógica compleja	Tradicional (más clara)
Necesito hoisting	Tradicional
🟫 6️⃣ Concepto CLAVE

Una función puede:

Ejecutar código

Devolver un valor

No devolver nada (→ devuelve <span style="color:red">undefined</span>)

Si no tiene return, JavaScript devuelve automáticamente:

undefined

🟧 7️⃣ Resumen Mental Rápido

<span style="color:cyan">function</span> → clásica, clara, con hoisting

<span style="color:lightgreen">const nombre = function</span> → función dentro de variable

<span style="color:violet">const nombre = () =></span> → versión moderna

Sin llaves → retorno automático

Con llaves → return obligatorio

🧠 Nivel conceptual que ya entendés

✔ Variable puede guardar resultado
✔ Variable puede guardar función
✔ Cada camino lógico debe devolver algo
✔ return corta la ejecución
✔ Si no hay return → undefined


========================================================================

Parámetros y Argumentos en Funciones de JavaScript
========================================================================

let sumar = (x,y) =>{return x+y};

console.log(sumar(4,9));


🟦 Parámetros

Son las variables que recibe la función cuando la definimos.

En tu ejemplo:

(x, y)


👉 Esos son parámetros.
👉 Son como “espacios vacíos” que esperan recibir un valor.
👉 Solo existen dentro de la funció

🟩 Argumentos

Son los valores reales que enviamos cuando llamamos a la función.

En tu ejemplo:

sumar(4, 9)


👉 4 y 9 son los argumentos.
👉 Son los valores que ocupan los parámetros x e y.



🧠 Regla mental simple

-Parámetro → variable en la definición.
-Argumento → valor en la ejecución.


===============================================================

Perfecto 💪 te lo armo en formato Markdown tipo apunte, prolijo y claro para que lo guardes.

📘 El Objeto arguments en JavaScript
🟦 ¿Qué es arguments?

arguments es un objeto especial que JavaScript crea automáticamente dentro de las funciones tradicionales.

Contiene todos los argumentos que se pasaron cuando la función fue llamada.

🟩 Ejemplo básico
function ejemplo(a, b) {
  console.log(arguments);
}

ejemplo(10, 20);


🔎 Internamente:

arguments[0] → 10
arguments[1] → 20

🟨 Acceder a un argumento específico
function ejemplo(a, b) {
  console.log(arguments[0]);
}

ejemplo(50, 100);


Salida:

50


👉 arguments[0] = primer argumento
👉 arguments[1] = segundo argumento

🟧 Diferencia entre Parámetro y arguments
function ejemplo(x) {
  console.log(x);            // Parámetro
  console.log(arguments[0]); // Argumento real
}

ejemplo(9);


En este caso ambos muestran 9.

Pero:

x → es el parámetro

arguments[0] → es el valor enviado realmente

🟥 IMPORTANTE

arguments:

✅ Funciona en funciones tradicionales (function)

❌ NO funciona en funciones flecha (=>)

❌ No existe fuera de una función

🟪 Ejemplo donde NO funciona
const ejemplo = (a) => {
  console.log(arguments[0]); // ❌ Error
};


Las arrow functions no tienen su propio arguments.

🟫 ¿Por qué se usaba?

Antes se usaba cuando no sabías cuántos argumentos iba a recibir la función.

Ejemplo:

function sumar() {
  console.log(arguments.length);
}

sumar(1, 2, 3, 4);


Esto mostraba cuántos valores llegaron.

🧠 ¿Es un Array?

No.

Es un objeto "array-like".

Tiene:

índices (0,1,2...)

propiedad .length

Pero no tiene métodos como:

.map()

.filter()

.reduce()

🟩 Concepto Clave

Cuando ejecutás:

miFuncion(10, 20, 30);


JavaScript crea internamente:

arguments = {
  0: 10,
  1: 20,
  2: 30,
  length: 3
}

🟦 Resumen Rápido

Vive solo dentro de funciones tradicionales

Guarda todos los argumentos enviados

Se accede con índice: arguments[0]

No es un array real

No existe en funciones flecha


===========================================

let valor = function (h){

  console.log(arguments[0]);
  return h * 1.33; 
} 

console.log(valor(55));

=========================================

let exponer = function ( t,h,y){

  return t+h+y * arguments[2] ;

}

console.log(exponer(3,6,2));



otro ejemplo

function sumarte() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sumarte(1, 2, 3, 4)); // 10
=========================================================================================


1️⃣ ¿Qué significa que arguments no tiene métodos?

Cuando decimos que algo “tiene métodos”, hablamos de cosas como:

.map()
.filter()
.reduce()
.forEach()


Esos métodos pertenecen a los arrays reales.

Ejemplo:

let numeros = [1, 2, 3];

numeros.map(n => n * 2);


Eso funciona porque numeros es un array real.

2️⃣ ¿Qué es arguments entonces?

arguments es un objeto especial que:

Se parece a un array

Tiene índices (arguments[0])

Tiene .length

Pero…

❌ No es un array real
❌ No tiene .map()
❌ No tiene .filter()
❌ No tiene .reduce()

Ejemplo:

function prueba() {
  console.log(arguments.map(x => x * 2)); // ❌ ERROR
}


Te va a romper.

Porque arguments no es un array verdadero.

3️⃣ Ahora viene el rest operator (...)

Cuando hacés esto:

function prueba(...numeros) {
  console.log(numeros);
}


numeros SÍ es un array real.

Entonces esto funciona perfecto:

function prueba(...numeros) {
  return numeros.map(n => n * 2);
}

console.log(prueba(1, 2, 3));


Salida:

[2, 4, 6]


Porque numeros es un array verdadero.

4️⃣ Entonces la diferencia mental correcta es:
arguments	...rest
Objeto especial	Array real
Más viejo (ES5)	Moderno (ES6+)
No tiene métodos de array	Tiene todos los métodos
No funciona en arrow functions	Sí funciona
5️⃣ Lo importante

No es que hoy “se pasan parámetros normales y listo”.

Lo que pasa es:

Si sabés cuántos parámetros vas a usar → declarás normales:

function suma(a, b) {}


Si no sabés cuántos van a llegar → usás rest:

function suma(...numeros) {}

=====================================================

🔹 ¿Qué significa eso?

En JavaScript, los arrays son objetos que ya vienen con herramientas incorporadas.

Ejemplo:

let numeros = [1, 2, 3];


Ese array tiene métodos disponibles, como:

.map()

.filter()

.reduce()

.forEach()

📌 ¿Para qué sirven?
1️⃣ .map() → transformar elementos
let numeros = [1, 2, 3];

let dobles = numeros.map(n => n * 2);

console.log(dobles);


Salida:

[2, 4, 6]


👉 Toma cada elemento y lo transforma.

2️⃣ .filter() → filtrar elementos
let numeros = [1, 2, 3, 4];

let mayores = numeros.filter(n => n > 2);

console.log(mayores);


Salida:

[3, 4]


👉 Devuelve solo los que cumplen la condición.

3️⃣ .reduce() → acumular en un solo valor
let numeros = [1, 2, 3, 4];

let total = numeros.reduce((acc, n) => acc + n, 0);

console.log(total);


Perfecto 💪
Te armo un apunte en formato Markdown, todo en un solo bloque, con ejemplos y usando colores con HTML (porque Markdown puro no soporta colores).

Podés copiarlo y guardarlo como map_y_funciones.md.

📘 Funciones como argumento y método .map() en JavaScript
🟢 1️⃣ ¿Qué es .map()?

<span style="color:green"><strong>.map()</strong></span> es un método de los arrays.

Sirve para:

Recorrer un array y devolver un nuevo array transformado.

🟢 2️⃣ Ejemplo básico
let numeros = [1, 2, 3];

let dobles = numeros.map(n => n * 2);

console.log(dobles);


📌 Resultado:

[2, 4, 6]

🟡 3️⃣ ¿Qué es esa n?
n => n * 2


Eso es una <span style="color:orange"><strong>función flecha (arrow function)</strong></span>.

Es lo mismo que escribir:

function(n) {
  return n * 2;
}


🔹 n es el parámetro de la función.
🔹 Representa cada elemento del array.
🔹 Puede llamarse como quieras.

Ejemplo equivalente:

numeros.map(x => x * 2);
numeros.map(t => t * 2);
numeros.map(numero => numero * 2);

🔵 4️⃣ ¿Qué hace .map() internamente?

Si el array es:

[1, 2, 3]


Internamente hace algo conceptual como:

funcion(1)
funcion(2)
funcion(3)


Y arma un nuevo array con los resultados.

🟣 5️⃣ Versión más explícita
function duplicar(n) {
  return n * 2;
}

let dobles = numeros.map(duplicar);


Es exactamente lo mismo que:

numeros.map(n => n * 2);

🔴 6️⃣ No está fijo lo que hace .map()

.map() no multiplica por 2 automáticamente.

Vos le decís qué hacer.

Ejemplo más complejo:

numeros.map(t => {
  if (t % 2 === 0) {
    return t * 10;
  } else {
    return t;
  }
});

🟤 7️⃣ Podés devolver cualquier cosa
Devolver booleanos
numeros.map(t => t > 1);


Resultado:

[false, true, true]

Devolver objetos
numeros.map(t => {
  return {
    original: t,
    doble: t * 2
  };
});


Resultado:

[
  { original: 1, doble: 2 },
  { original: 2, doble: 4 },
  { original: 3, doble: 6 }
]

🧠 Concepto Clave

<span style="color:blue"><strong>.map() recibe una función como argumento.</strong></span>

Lo que va dentro del paréntesis:

numeros.map( ACA );


Es una función.

No es algo fijo del método.

🟢 8️⃣ Diferencia con for
Con for
let dobles = [];

for (let i = 0; i < numeros.length; i++) {
  dobles.push(numeros[i] * 2);
}

Con .map()
let dobles = numeros.map(n => n * 2);


🔹 for → más explícito
🔹 .map() → más declarativo y limpio

Ambos son válidos.

//==  Paso por Referencia en Funciones de JavaScript

******************************************************
 Paso por Referencia en Funciones de JavaScript
******************************************************
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

============================================================
Perfecto 💪
Te armo el apunte en un solo archivo MD, con colores usando HTML embebido (compatible con la mayoría de visores Markdown).

Podés guardarlo como:
paso_por_valor_y_referencia.md

📘 Paso por Valor vs Paso por Referencia en JavaScript
🟢 1️⃣ Concepto General

En JavaScript existen dos formas en que los datos se pasan a una función:

<span style="color:green"><strong>Paso por valor</strong></span>

<span style="color:blue"><strong>Paso por referencia</strong></span>

Entender esto es fundamental para evitar bugs.

🟢 2️⃣ Paso por Valor (Tipos Primitivos)

Los tipos primitivos se pasan por valor:

Number

String

Boolean

Null

Undefined

BigInt

Symbol

🔹 Ejemplo
let numero = 10;

function cambiar(n) {
  n = 50;
}

cambiar(numero);

console.log(numero);


📌 Resultado:

10

🔎 ¿Qué pasó?

Cuando llamamos a la función:

cambiar(numero);


Se hace una copia del valor.

numero = 10

n = 10  (copia)


Cuando modificamos n, no afecta a numero.

🧠 Regla

<span style="color:green"><strong>Los primitivos se copian.</strong></span>

🔵 3️⃣ Paso por Referencia (Objetos y Arrays)

Los objetos y arrays se comportan distinto.

🔹 Ejemplo con Objeto
const persona = {
  nombre: "Daniel",
  apellido: "More"
};

function cambiarValor(p) {
  p.nombre = "Aida";
  p.apellido = "Lescano";
}

cambiarValor(persona);

console.log(persona);


📌 Resultado:

{ nombre: "Aida", apellido: "Lescano" }

🔎 ¿Qué pasó?

Cuando pasamos el objeto:

cambiarValor(persona);


No se copia el objeto.

Se pasa la referencia (la dirección en memoria).

Visualmente:

persona ───► { nombre: "Daniel", apellido: "More" }
               ▲
               │
               p


p y persona apuntan al mismo objeto.

🧠 Regla

<span style="color:blue"><strong>Los objetos y arrays comparten referencia.</strong></span>

🔴 4️⃣ Importante sobre const

Esto:

const persona = { ... }


NO significa que el objeto sea inmutable.

Significa que no podés reasignar la variable.

❌ Esto no se puede:

persona = {};


✔️ Pero esto sí:

persona.nombre = "Nuevo Nombre";

🟣 5️⃣ Arrays también se comportan igual
const numeros = [1, 2, 3];

function modificar(arr) {
  arr.push(4);
}

modificar(numeros);

console.log(numeros);


📌 Resultado:

[1, 2, 3, 4]


Porque el array también es un objeto.

🟠 6️⃣ Cómo evitar modificar el original (Copia)

Podemos crear una copia con el operador spread.

🔹 Copia de objeto
function cambiarValor(p) {
  let copia = { ...p };
  copia.nombre = "Aida";
  return copia;
}

🔹 Copia de array
let copia = [...numeros];


Esto crea un nuevo objeto/array en memoria.

🔥 7️⃣ Precisión Técnica Importante

JavaScript técnicamente funciona así:

<span style="color:red"><strong>Siempre pasa por valor.</strong></span>

Pero:

En primitivos → se copia el valor.

En objetos → se copia la referencia.

Por eso a veces se dice:

“Paso por valor de la referencia.”

No es exactamente como C++ o Java puro.

📊 8️⃣ Resumen Visual
Tipo	Se copia	Se comparte
Number	✔️	❌
String	✔️	❌
Boolean	✔️	❌
Object	❌	✔️
Array	❌	✔️
🎯 9️⃣ Regla Mental Final

Si modificás una propiedad:

obj.prop = ...


Y el objeto vino como parámetro...

👉 Estás modificando el original.

🧠 10️⃣ ¿Por qué esto es tan importante?

Este concepto es clave para:

React (estado)

Backend

APIs

Manipulación de datos

Debugging

Evitar efectos colaterales

Muchísimos bugs en producción vienen de no entender referencias.

========================================================================

📘 return en JavaScript — Resumen Conceptual
🔵 1️⃣ Idea Principal

<span style="color:#4CAF50"><strong>Una función NO cambia variables externas.</strong></span>
Una función:

Recibe un valor.

Trabaja con una copia.

Devuelve un resultado (si tiene return).

El cambio externo solo ocurre si vos reasignás.

🟡 2️⃣ Sin return
let edad = 30;

function cambiar(e) {
  e = 40;
}

cambiar(edad);
console.log(edad);

🔎 ¿Qué pasa?

edad vale 30.

Se copia en e.

e cambia a 40.

La función termina.

La copia desaparece.

<span style="color:#f44336"><strong>Resultado: edad sigue valiendo 30.</strong></span>

No hubo reasignación.
No hubo efecto externo.

🟠 3️⃣ Con return pero SIN reasignar
function cambiar(e) {
  return 50;
}

cambiar(edad);
console.log(edad);

🔎 ¿Qué pasa?

La función devuelve 50.

Pero nadie lo guarda.

<span style="color:#f44336"><strong>edad sigue valiendo 30.</strong></span>

El valor 50 existió…
pero se perdió.

🟢 4️⃣ Con return Y reasignando
edad = cambiar(edad);
console.log(edad);

🔎 ¿Qué pasa?

La función devuelve 50.

Ahora reemplazás el valor original.

<span style="color:#4CAF50"><strong>edad ahora vale 50.</strong></span>

🧠 Concepto Clave

<span style="color:#2196F3"><strong>return NO obliga a cambiar la variable externa.</strong></span>

El que decide cambiarla es quien llama a la función.

🔥 Transformar vs Forzar
✅ Transformación (correcto y reutilizable)
function cambiar(e) {
  return e + 10;
}


✔ Depende del valor que entra.
✔ Es reutilizable.
✔ Es una función pura.

⚠️ Resultado fijo (forzado)
function cambiar(e) {
  return 50;
}


✔ Siempre devuelve 50.
✔ No depende del valor recibido.

Pero igual:

<span style="color:#9C27B0"><strong>No cambia nada afuera si no reasignás.</strong></span>

📊 Flujo Mental Correcto
edad (30)
   ↓
cambiar(edad)
   ↓
return nuevoValor
   ↓
¿reasignás?
   ├─ NO → edad sigue igual
   └─ SÍ → edad toma el nuevo valor

🏁 Frase Final Para Recordar

Las funciones no modifican variables externas.
Devuelven valores.
Yo decido si reemplazo el valor original.

=========================================================================
📘 Apunte — switch vs Objeto como tabla de mapeo en JavaScript
🟦 1️⃣ switch en JavaScript
📌 ¿Cuándo usarlo?

✔ Cuando tenés una variable
✔ Con múltiples valores posibles
✔ Y querés ejecutar distintos bloques según ese valor

🧠 Sintaxis básica
switch (expresion) {
    case valor1:
        // código
        break;

    case valor2:
        // código
        break;

    default:
        // código si no coincide ningún caso
        break;
}

🟢 Ejemplo práctico — Código de errores
let codigo = 404;

switch (codigo) {
    case 400:
        console.log("Solicitud incorrecta");
        break;

    case 404:
        console.log("No encontrado");
        break;

    case 500:
        console.log("Error interno");
        break;

    default:
        console.log("Error desconocido");
        break;
}

🟥 Puntos importantes

<span style="color:#e74c3c"><strong>• Usa comparación estricta (===)</strong></span>
El tipo importa.

case "404"  // NO es igual a 404


<span style="color:#e74c3c"><strong>• El break es necesario</strong></span>
Si no lo ponés, hay fall-through:

case 404:
    console.log("No encontrado");
case 500:
    console.log("Error interno");


Imprime ambos.

<span style="color:#f39c12"><strong>• En el default no es obligatorio el break si está último</strong></span>
Pero es buena práctica ponerlo igual.

🟩 2️⃣ Alternativa Moderna — Objeto como tabla de mapeo

Este es el “golazo” 👇

En vez de usar switch, podemos usar un objeto como diccionario.

🧠 Concepto

En vez de pensar:

“Si pasa esto, hago esto…”

Pensamos:

“Ya tengo una tabla que asocia valores con resultados.”

🟢 Ejemplo equivalente al switch anterior
const errores = {
    400: "Solicitud incorrecta",
    404: "No encontrado",
    500: "Error interno"
};

let codigo = 404;

console.log(errores[codigo] || "Error desconocido");

🔎 ¿Qué está pasando acá?
errores[codigo]


Es equivalente a:

errores["404"]


Porque las claves numéricas en objetos se convierten en string internamente.

Si existe → devuelve el mensaje.
Si no existe → devuelve undefined.

Y como undefined es falsy, entra:

|| "Error desconocido"

🟦 Comparación Visual
🔹 Con switch

✔ Más estructurado
✔ Ideal si hay lógica compleja
✔ Similar a C

🔹 Con objeto

✔ Más corto
✔ Más limpio
✔ Más mantenible
✔ Más “JavaScript style”
✔ Ideal cuando solo es valor → resultado

🟪 Regla mental para elegir
Situación	Usar
Solo mapeo de valores	🟢 Objeto
Hay lógica dentro de cada caso	🔵 switch
Muchos valores fijos	🟢 Objeto
Necesitás estructura clara tipo C	🔵 switch
🧠 Conclusión técnica importante

switch es estructura de control.

Objeto es estructura de datos.

Uno decide flujo.
El otro almacena relaciones.


=========================================================

🔹 1️⃣ JavaScript no tiene paso por referencia real

Esto es lo primero que hay que limpiar mentalmente.

En JavaScript:

🔥 Todo se pasa por valor.

La diferencia es qué valor se copia.

🔹 2️⃣ Con primitivos
let x = 10;

function cambiar(n) {
  n = 20;
}

cambiar(x);
console.log(x); // 10


Se copia el valor 10.
Nunca podés modificar el original desde la función.

Con primitivos no hay discusión posible.

🔹 3️⃣ Con objetos (lo que te generó la confusión)
let persona = { edad: 30 };

function cambiar(obj) {
  obj.edad = 40;
}

cambiar(persona);
console.log(persona.edad); // 40


Acá parece “paso por referencia”.

Pero técnicamente es:

Se pasa por valor de la referencia.

Se copia la dirección de memoria.

Por eso podés modificar propiedades.

🔥 La conclusión correcta (bien dicha)

No es:

“Para paso por referencia tengo que usar objetos”

Es:

“Si quiero que una función pueda modificar algo externo sin return, tiene que ser un objeto (porque comparte referencia)”

Eso es distinto.


==================================================================

📘 Paso de Datos en Funciones – JavaScript
🧠 1️⃣ Regla General (LA MÁS IMPORTANTE)

🔥 En JavaScript TODO se pasa por valor.

No existe paso por referencia real.

Lo que cambia es qué valor se copia.

🔹 2️⃣ Primitivos

Tipos primitivos:

number

string

boolean

null

undefined

bigint

symbol

Ejemplo:

let edad = 30;

function cambiar(e) {
  e = 50;
}

cambiar(edad);
console.log(edad);


Resultado:

30


¿Por qué?

Porque:

Se copia el valor 30.

La función modifica la copia.

La variable original nunca cambia.

✅ Cómo se modifica un primitivo correctamente
function cambiar(e) {
  return 50;
}

edad = cambiar(edad);


✔ Devuelve un nuevo valor.
✔ Vos decidís reemplazar el original.

🔹 3️⃣ Objetos

Ejemplo:

let persona = { edad: 30 };

function cambiar(obj) {
  obj.edad = 50;
}

cambiar(persona);
console.log(persona.edad);


Resultado:

50


¿Por qué?

Porque:

Se copia la referencia (dirección en memoria).

Ambas variables apuntan al mismo objeto.

Modificar una propiedad modifica el objeto compartido.

🔥 4️⃣ El Error Clásico
function cambiar(obj) {
  obj.edad = 50;
  obj = { edad: 100 };
}


Resultado final:

50


¿Por qué NO es 100?

Porque:

✔ obj.edad = 50 → modifica el objeto original.
❌ obj = { edad: 100 } → solo cambia la variable local.

Reasignar el parámetro NO afecta al original.

📌 Regla Fundamental
Acción	¿Cambia afuera?
Modificar propiedad	✅ Sí
Reasignar el parámetro	❌ No
Primitivo sin return	❌ No
Primitivo con return + reasignar	✅ Sí
🎯 Frases que tenés que recordar

Las funciones no modifican variables externas mágicamente.

Devuelven valores.

El que decide reemplazar el valor original es quien llama a la función.

En objetos se comparte la referencia, no el objeto.

Reasignar el parámetro NO modifica el objeto original.

🏁 Conclusión Final

Si querés modificar algo sin usar return, tiene que ser un objeto y modificar sus propiedades.

Si es un primitivo, siempre necesitás:

variable = funcion(variable);


====================================================

Pre incremento y post incremento

let contador = 0;
let resultado = contador++;

console.log(`Resultado post incremento ${resultado}`);


let contador2 = 0;
let resultado2 =++ contador2;

console.log(`Resultado pre incremento ${resultado2}`);


Te lo dejo en una versión ultra clara y definitiva:

x++ → devuelve el valor viejo

++x → devuelve el valor nuevo

El incremento siempre ocurre.
