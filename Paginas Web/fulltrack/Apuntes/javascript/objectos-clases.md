El tipo de datos primitivos no contiene propiedades o metodos propios

ejemplo

let x = 10;
console.log(x.length)

devuelve undefine

==========================


//variable de tipo object
let persona = {
  nombre: "daniel",
  apellido: "mm",
  edad: 45,
  mombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};
//se cambia un valor de una propiedad
persona.nombre = "Morena";
//Se muestra el object persona por consola
console.log(persona);
//Se accede a la function nombreCompleto
console.log(persona.mombreCompleto());
//

//Crea un objecto vacio
let persona2= new Object();

persona2.nombre = "Isa";
persona2.celular = "11-4567-8654";

console.log(persona2);


================================================================

🔹 Lo que eso significa para objetos en JavaScript

Usá notación punto siempre que sea posible

persona.nombre
persona.apellido
persona.edad


✅ Simple, legible y directo.
✅ Lo que usan todos los proyectos “serios”.

Usá corchetes solo en casos especiales

Cuando el nombre de la propiedad viene de una variable:

let campo = "apellido";
console.log(persona[campo]);


Cuando la propiedad tiene espacios o caracteres raros:

persona["nombre completo"] = "Daniel Morales";


Todo lo demás, evitá corchetes para no hacer quilombo.

Evitar complicaciones innecesarias

Si empezás a usar corchetes y cosas dinámicas sin necesidad, tu código puede volverse ilegible muy rápido.
Y como vos dijiste: cuando el código crece, lo que parecía “ingenioso” termina siendo un dolor de cabeza.

🎯 Regla práctica que te sirve ya:

Notación punto → regla general

Corchetes → excepción justificada

Así siempre tu código va a ser fácil de leer, de entender y de mantener.

//agregar otra propiedad al objecto

persona.email= "delpalonuestro@gmail.com" 
console.log(persona);
==============================================================
Ese for...in recorre las propiedades del objeto.

No recorre valores.
No recorre posiciones.
Recorre los nombres de las propiedades.

for(bucle in persona){

    console.log(bucle);
}
==================================================================

Sirve cuando:

No sabés qué propiedades tiene el objeto

Querés recorrerlo dinámicamente

Querés imprimir todo

Querés copiar datos

Querés validar campos

Es muy común cuando trabajás con:

Objetos grandes

JSON

Datos de APIs

Formularios

============================================

//para borrar la propiedad edad
delete persona.edad;
//muestro por consola
console.log(persona);
//agrego la propiedad con un valor
persona.edad = 23;
console.log(persona.edad);

==========================================


/*
//Recorre a todas las propidedades del objecto y mustra los valores de cada uno
for (let recorrerOject in persona) {
  console.log(persona[recorrerOject]);
}
//Muestra las propiedades que tiene el objecto
for (let recorrerOject2 in persona) {
  console.log("campo:", recorrerOject2);
}

//Recorre el objecto  y muestra las propiedades y valores, es mas profesional
for (let recorrerOject3 in persona) {
  console.log(recorrerOject3, ":", persona[recorrerOject3]);
}
// covertir a un cadena string

let cadenaString = JSON.stringify(persona);
console.log(cadenaString);
*/

//solo que muestre todo de una sola vez
for (let key in persona) {
  console.log(`Campo: ${key} | Valor: ${persona[key]}`);
}



=========================================================
Método set en Objetos de JavaScrip
=========================================================
🎯 Entonces, versión conceptualmente perfecta:

Un setter es un mecanismo que intercepta la asignación de una propiedad y me permite ejecutar lógica personalizada antes de decidir qué hacer con el valor.

Esa definición está impecable.

🧠 Y ahora te lo conecto con tu forma de razonar

Vos venías pensando:

“Valida, transforma, da un marco…”

Eso está bien como uso práctico.

Ahora ya lo estás pensando más correctamente:

“Intercepta la asignación y ahí puedo aplicar lógica.”

Eso es nivel conceptual sólido.

Exterior → Setter → Objeto

=========================================================

Ahora que ya tenés claro el concepto de setter y getter y cómo interactúan:

El setter controla, valida o transforma los datos antes de guardarlos.

El getter devuelve valores calculados o transformados sin modificar nada.


=========================================================
ejemplo con get y set en objectos

==========================================================
const usuario = {
  nombre: "Morena",
  edad: 25,

  set setEdad(valor) {
    if (typeof valor === "number" && valor >= 0) {
      this.edad = valor;
      console.log("Cumple con la condición");
    } else {
      console.log("No cumple con la condición");
    }
  },
};

usuario.setEdad = 10; // ✅ cumple
usuario.setEdad = -5; // ❌ no cumple
usuario.setEdad = "10"; // ❌ no cumple (es string)
usuario.setEdad = true; // ❌ no cumple
usuario.setEdad = NaN; // ❌ no cumple

// Ej 2

const producto = {
  precio: 30,

  set precioFinal(valor) {
    //La función Math.round()retorna el valor de un número redondeado al entero más cercano.
    this.precio = Math.round(valor);
  },
};

producto.precioFinal = 1996.5;
console.log(producto.precio);
//==> vi que si pones  1996.49 ,lo pone en 1996 y es correcto, eso lo hace la calculadora cientiica

/**************************** */
const temperatura = {
  celsius: 0,
  set celsiusSet(valor) {
    this.celsius = ((valor - 32) * 5) / 9;
  },
  get fahrenheitGet() {
    return (this.celsius * 9) / 5 + 32;
  },
};

temperatura.celsiusSet = 21600;
console.log(temperatura.fahrenheitGet);

//=========================================

const cuentaBancaria = {
  saldo: 10,

  set cuentaBancariaSet(valor) {
    if (typeof valor === "number" && valor > 0) {
      this.saldo = this.saldo + valor;
      console.log("Se sumo el saldo actual!!");
    } else {
      console.log("El saldo ingresado NO es invalido!!!");
    }
  },
  get verSaldo(){

    return this.saldo;

  } 

};
cuentaBancaria.cuentaBancariaSet = 500;
cuentaBancaria.cuentaBancariaSet = 600;
//console.log(cuentaBancaria.verSaldo);

//solo que muestre todo de una sola vez
for( key in cuentaBancaria){
console.log(`campo: ${key} | valor: ${cuentaBancaria[key]}`); 

}

============================================================
Setter (set)

Es una propiedad especial de un objeto que se ejecuta cuando asignás un valor.

Su función principal: controlar, validar o transformar el valor antes de guardarlo en una propiedad interna.

Se llama como si fuera una propiedad, no como una función.

No devuelve nada.

Ejemplo conceptual:

set nombreSet(valor) {
  this.nombre = valor.toUpperCase(); // transforma a mayúscula antes de guardar
}

Getter (get)

Es una propiedad especial de un objeto que se ejecuta cuando querés leer un valor.

Su función principal: calcular o transformar la información antes de devolverla.

Se usa como propiedad, no como función.

Devuelve un valor, nunca modifica directamente la propiedad interna.

Ejemplo conceptual:

get nombreGet() {
  return this.nombre + "!";
}
🔑 Resumen rápido para apuntes

| Característica | Setter (`set`)                 | Getter (`get`)                  |
| -------------- | ------------------------------ | ------------------------------- |
| Acción         | Se ejecuta al asignar un valor | Se ejecuta al leer un valor     |
| Devuelve       | Nada                           | Valor calculado                 |
| Uso            | `obj.prop = valor`             | `obj.prop`                      |
| Función        | Validar, transformar, guardar  | Calcular, transformar, devolver |


💡 Idea clave para apuntes

Setter: “lo que entra al objeto” → controla / valida / transforma

Getter: “lo que sale del objeto” → calcula / transforma / devuelve

===========================================================

Método Constructor Objetos en JavaScript

- Es una funcion especial que vamos a trabajar con object js
- Se usa la palabra new para reservar espacio de memoria
- Un constructor es una función que actúa como plantilla para crear múltiples objetos con la misma estructura, pero con datos independientes.

ejemplo

function Persona (nombre,apellido,mail){

this.nombre = nombre;
this.apellido = apellido;
this.mail = mail;

}

this.nombre ==> Es la propiedad del objecto
nombre ===> es la variable del parametro

forma de ingresar datos

const persona = new Persona("Morena","Morales","more2024@gmail.com");

Persona ===> ahora es un metodo

✅ Correcto:

El constructor es uno solo (la plantilla).

Después podés crear 10, 100 o 1000 objetos con new.

Cada objeto tiene sus propios datos.

Pero lo importante es que lo central ya lo entendiste:

✔ Constructor = molde
✔ new = crea objeto independiente
✔ Cada objeto tiene sus propios datos

======================================

📘 Apunte: Getter y Setter en Constructores
1️⃣ Constructor

Un constructor es una función que actúa como plantilla (molde) para crear múltiples objetos.

function Persona(nombre, sueldo) {
  this.nombre = nombre;
  this.sueldo = sueldo;
}


No es un objeto.

Es una fábrica de objetos.

Se usa con new.

const padre = new Persona("Juan", 20000);
const madre = new Persona("Ana", 50000);


Cada objeto creado:

Tiene sus propios datos.

Es independiente de los demás.

2️⃣ ¿Qué pasa con get y set en un constructor?

👉 El constructor no reemplaza a los getters y setters.
👉 Son conceptos distintos.

Constructor → crea objetos.

Getter/Setter → controlan cómo se accede a las propiedades.

Se pueden usar perfectamente juntos.

3️⃣ Diferencia entre Método y Getter en un Constructor
🔹 Método (función normal)
function Persona(nombre, sueldo) {
  this.nombre = nombre;
  this.sueldo = sueldo;

  this.sueldoBruto = function() {
    return this.sueldo * 1.17;
  }
}


Se usa así:

padre.sueldoBruto()


✔ Lleva paréntesis
✔ Es una función
✔ Se ejecuta manualmente

Esto NO es un getter.

🔹 Getter real

Un getter se define con la palabra clave get.

function Persona(nombre, sueldo) {
  this.nombre = nombre;
  this.sueldo = sueldo;
}

Object.defineProperty(Persona.prototype, "sueldoBruto", {
  get: function() {
    return this.sueldo * 1.17;
  }
});


Se usa así:

padre.sueldoBruto


✔ No lleva paréntesis
✔ Se accede como propiedad
✔ Internamente ejecuta código

4️⃣ Concepto clave

Constructor y getter/setter no compiten.

Podemos resumirlo así:

Constructor = fábrica de objetos.

Getter = controla lo que sale.

Setter = controla lo que entra.

5️⃣ Idea importante sobre memoria

Si una función se define dentro del constructor con this:

this.calcular = function() { ... }


Cada objeto creado tendrá su propia copia de esa función en memoria.

Si el comportamiento es el mismo para todos, conviene definirlo en el prototype.

🧠 Frase final para entender todo

El constructor define la estructura común.
Cada objeto tiene sus propios datos.
Los getters y setters controlan cómo se accede a esos datos.

=======================================================
📘 Diferencia entre Método y Getter en JavaScript
1️⃣ Método

Un método es una función que pertenece a un objeto.

🔹 Características:

Se define como una función.

Se ejecuta con paréntesis ().

Puede recibir parámetros.

Se usa para realizar acciones o cálculos.

🔹 Ejemplo:
const persona = {
  sueldo: 20000,
  calcularSueldoBruto: function() {
    return this.sueldo * 1.17;
  }
};

persona.calcularSueldoBruto(); // ← lleva ()


✔ Necesita () para ejecutarse
✔ Es una función común dentro del objeto

2️⃣ Getter

Un getter es una propiedad especial que ejecuta código cuando se accede a ella.

🔹 Características:

Se define con la palabra clave get.

NO lleva paréntesis al usarse.

No recibe parámetros.

Se usa para obtener un valor calculado.

🔹 Ejemplo:
const persona = {
  sueldo: 20000,
  get sueldoBruto() {
    return this.sueldo * 1.17;
  }
};

persona.sueldoBruto; // ← sin ()


✔ No lleva ()
✔ Se accede como si fuera una propiedad
✔ Internamente ejecuta código

🔥 Diferencia clave

| Método                   | Getter                    |
| ------------------------ | ------------------------- |
| Se llama con `()`        | Se accede sin `()`        |
| Puede recibir parámetros | No recibe parámetros      |
| Es una función explícita | Es una propiedad especial |
| Se usa para acciones     | Se usa para obtener datos |

🧠 Forma simple de recordarlo

Método → “hacer algo”

Getter → “obtener algo”

🎯 Regla mental rápida

Si ves esto:

obj.algo()


👉 Es método.

Si ves esto:

obj.algo


👉 Puede ser propiedad normal o getter.
==========================================

📘 ¿Qué es Prototype en JavaScript?

En JavaScript, prototype es el mecanismo que permite que los objetos compartan comportamiento.

Es la forma en que JavaScript implementa la herencia.

=======================================================

# 📚 Resumen: JavaScript y uso de `call()` / `apply()` / `this`

---

## 🔹 1. Contexto: Qué es `this` en JS

- `this` es **el objeto que está ejecutando la función**
- Cambia dependiendo de cómo se llame la función

```js
const obj = { nombre: "Daniel" };
function saludar() {
  console.log(this.nombre);
}
saludar.call(obj); // "Daniel"

💡 Regla clave: call() y apply() permiten cambiar el this de una función.

🔹 2. call() vs apply()

| Método    | Qué hace                                  | Cómo se pasan argumentos      |
| --------- | ----------------------------------------- | ----------------------------- |
| `call()`  | Llama la función con un `this` específico | Argumentos separados por coma |
| `apply()` | Llama la función con un `this` específico | Argumentos en un **array**    |


function sumar(a, b) { return a + b; }

sumar.call(obj, 2, 3);  // 5
sumar.apply(obj, [2, 3]); // 5
🔹 3. Uso práctico con objetos

const datos = {
  nombre: "Daniel",
  sueldo: 140000,
  calcularSueldo: function() {
    return this.sueldo * 1.21;
  }
};

const datos2 = { nombre: "More", sueldo: 50000 };

const resultado = datos.calcularSueldo.call(datos2);
console.log(resultado); // 60500

✅ Claves:

La función no se toca

Cambia el objeto sobre el que actúa (this)

Devuelve un valor que podemos guardar o mostrar

🔹 4. Principios importantes

Función devuelve → hay que usar el valor
(guardar, mostrar, asignar)

Función es genérica → no depende de un objeto específico

this define el contexto → call() y apply() cambian ese contexto

No hace falta tocar la función cuando cambian los datos


===================================================

📘 apply() en JavaScript — Borrador de Apuntes
🧠 1. ¿Qué es apply()?

apply() es un método que permite:

✅ Ejecutar una función

✅ Definir manualmente qué objeto será this

✅ Pasar los argumentos como un array

🎯 Sintaxis
funcion.apply(thisArg, [arg1, arg2, arg3])
Parámetro	Qué es
thisArg	El objeto que queremos que sea this
[ ]	Array con los argumentos
🔹 2. Ejemplo Base
const empleado = {
  nombre: "Daniel",
  sueldo: 1000
};

function mostrar(prefijo) {
  console.log(prefijo + " " + this.nombre + " cobra " + this.sueldo);
}
❌ Sin apply (this perdido)
const f = mostrar;
f(">>");

Resultado:

>> undefined cobra undefined

🔴 Porque this ya no apunta a empleado.

✅ Con apply
mostrar.apply(empleado, [">>"]);

Resultado:

>> Daniel cobra 1000
📊 3. Diagrama Visual de lo que pasa
🔹 Llamada normal
empleado.mostrar(">>");
empleado ───▶ mostrar()
                this = empleado
🔹 Función separada
const f = empleado.mostrar;
f();
f() ───▶ mostrar()
          this = ❌ undefined
🔹 Con apply
f.apply(empleado);
f.apply(empleado)
        │
        ▼
mostrar()
this = empleado ✅
🎨 4. Mapa Mental en Colores

<span style="color:red">🔴 Problema:</span> this se pierde cuando la función se separa del objeto.

<span style="color:green">🟢 Solución:</span> apply() fuerza manualmente el this.

<span style="color:blue">🔵 Extra:</span> Los parámetros deben ir en array.

5. Comparación rápida

| Método | Cambia `this` | Argumentos | Ejecuta ya | Devuelve nueva función |
| ------ | ------------- | ---------- | ---------- | ---------------------- |
| normal | automático    | normales   | ✅          | ❌                      |
| call   | manual        | separados  | ✅          | ❌                      |
| apply  | manual        | array      | ✅          | ❌                      |
| bind   | manual        | separados  | ❌          | ✅                      |

🔥 6. Caso real donde tiene sentido

Cuando la función:

Se pasa como callback

Se ejecuta desde otro módulo

Se desacopla del objeto

Querés reutilizarla en otro objeto

Ejemplo reutilización:

const otroEmpleado = {
  nombre: "Lucía",
  sueldo: 2000
};

mostrar.apply(otroEmpleado, [">>"]);

Salida:

>> Lucía cobra 2000
🧩 7. Idea Clave Final

apply() no cambia la función.
Solo cambia el contexto (this) en el momento de ejecutarla.