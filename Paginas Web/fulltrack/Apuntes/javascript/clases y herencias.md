📘 Clases y Herencia en JavaScript (ES6)
🟦 1️⃣ Clase Base → Persona
class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  // GET
  get nombre() {
    return this._nombre;
  }

  // SET
  set nombre(valor) {
    this._nombre = valor;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(valor) {
    this._apellido = valor;
  }
}
🔵 Conceptos Clave

🟢 class → Define una plantilla (molde) para crear objetos.
🟢 constructor() → Se ejecuta al crear el objeto con new.
🟢 this → Hace referencia al objeto actual.
🟢 _nombre → Convención para indicar atributo “interno” (pseudo-privado).
🟢 get / set → Permiten controlar acceso y modificación de atributos.

Nota: 

El constructor en una clase de JavaScript es un método especial que se ejecuta automáticamente al crear una nueva instancia (objeto) con la palabra clave new. Su función principal es inicializar los atributos del objeto, asignando valores iniciales y preparando el estado del objeto antes de usarlo. 

🟪 2️⃣ Clase Hija → Empleado
class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido); // llama al constructor padre
    this._departamento = departamento;
  }

  get departamento() {
    return this._departamento;
  }

  set departamento(valor) {
    this._departamento = valor;
  }
}
🟣 Conceptos Clave

🟡 extends → Permite heredar de otra clase.
🟡 super() → Llama al constructor de la clase padre.
🟡 El hijo hereda:

Atributos

Métodos

Getters / Setters

🧠 Diagrama Conceptual de Herencia
            ┌───────────────┐
            │   Persona     │
            │───────────────│
            │ _nombre       │
            │ _apellido     │
            │───────────────│
            │ get/set       │
            └───────▲───────┘
                    │
               extends
                    │
            ┌───────────────┐
            │   Empleado    │
            │───────────────│
            │ _departamento │
            │───────────────│
            │ get/set       │
            └───────────────┘
🟢 Creación de Objetos
const persona = new Persona("daniel", "Morena");
persona.nombre = "Melina";
persona.apellido = "Barrios";

const empleado1 = new Empleado("Jazmin", "Barrios", "Es vaga");
⚙️ Qué está pasando internamente
🔹 Cuando hacés:
new Empleado(...)

Se crea el objeto vacío.

Se ejecuta super() → inicializa nombre y apellido.

Se agrega _departamento.

El objeto final tiene TODO lo del padre + lo propio.

🎯 Síntesis Final

✔ Una clase es un molde.
✔ constructor inicializa atributos.
✔ get y set controlan acceso.
✔ extends permite heredar.
✔ super() es obligatorio en el constructor del hijo.
✔ El hijo puede:

Usar métodos del padre.

Agregar nuevos.

Sobrescribir métodos si quiere.


============================================================================

// Ejercicio 2
class Animal {
  constructor(nombre, tipo) {
    this._nombre = nombre;
    this._tipo = tipo;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(valor) {
    this._nombre = valor;
  }

  get tipo() {
    return this._tipo;
  }
  set tipo(valor) {
    this._tipo = valor;
  }

  //Devuelve una cadena string
  descripcion() {
    return "Mi mascota se llama " + this._nombre + " es " + this._tipo;
  }
}

const animal = new Animal("Morena", "Ovejera belga");
console.log(animal);
console.log(animal.descripcion());

class Mascota extends Animal {
  constructor(nombre, tipo, edad) {
    super(nombre, tipo);
    this._edad = edad;
  }

  get edad() {
    return this._edad;
  }

  set edad(valor) {
    this._edad = valor;
  }
  mostrarInfo() {
    this.nombre;
    return super.descripcion() + ` tiene la edad ${this.edad}`;
  }
  descripcion() {
    return super.descripcion() + ` tiene la edad ${this.edad}`;
  }
}

const mascota = new Mascota("More", "perra", 1);

console.log(mascota.descripcion());

==========================================================================================

Clase Object, Método toString, Sobreescritura y Polimorfismo en JavaScript

la clase  object tiene varios metodos, si no ponemos de manera explicita extend, javaSccript hace un extend de la clase object  

ejemplo
Object.prototype.toString();
class Animal {
  constructor(nombre, tipo) {
    this._nombre = nombre;
    this._tipo = tipo;
  }
}

prototype ==> nos permite agregar atributos o metodos de forma dinamica a nuestra clases



Object.prototype.toString();

// Ejercicio 2
class Animal {
  constructor(nombre, tipo) {
    this._nombre = nombre;
    this._tipo = tipo;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(valor) {
    this._nombre = valor;
  }

  get tipo() {
    return this._tipo;
  }
  set tipo(valor) {
    this._tipo = valor;
  }

  //Devuelve una cadena string
  descripcion() {
    return "Mi mascota se llama " + this._nombre + " es " + this._tipo;
  }
  toString(){
         return this.descripcion();

  }
}

const animal = new Animal("Morena", "Ovejera belga");
console.log(animal);
console.log(animal.descripcion());

class Mascota extends Animal {
  constructor(nombre, tipo, edad) {
    super(nombre, tipo);
    this._edad = edad;
  }

  get edad() {
    return this._edad;
  }

  set edad(valor) {
    this._edad = valor;
  }
  mostrarInfo() {
    this.nombre;
    return super.descripcion() + ` tiene la edad ${this.edad}`;
  }
  descripcion() {
    return super.descripcion() + ` tiene la edad ${this.edad}`;
  }
}

const mascota = new Mascota("More", "perra", 1);

console.log(mascota.descripcion());
console.log(mascota.toString());

========================================================

🧱 1️⃣ Herencia

Qué es:
Una clase reutiliza estructura y comportamiento de otra.

Qué hace:
Comparte código.

Ejemplo mental:
Mascota hereda de Animal.
Mascota obtiene nombre, tipo y descripcion().

👉 Herencia es relación estructural.

🔄 2️⃣ Sobrescritura (Override)

Qué es:
Una clase hija redefine un método que ya existía en el padre.

Qué hace:
Cambia o extiende el comportamiento heredado.

Ejemplo mental:
Animal tiene descripcion().
Mascota redefine descripcion().

👉 Sobrescritura es modificación de comportamiento heredado.

🎭 3️⃣ Polimorfismo

Qué es:
La capacidad de distintos objetos de responder al mismo mensaje de manera diferente.

Qué hace:
Permite tratar objetos distintos como si fueran del mismo tipo.

Ejemplo mental:

let lista = [new Animal(...), new Mascota(...)];

lista.forEach(x => x.descripcion());

El mensaje es el mismo.
El comportamiento cambia según el objeto real.

👉 Polimorfismo es comportamiento dinámico.


Polimorfismo es:

El mismo mensaje enviado a diferentes objetos puede producir comportamientos distintos, porque cada objeto tiene su propia implementación.


✅ Definición correcta y clara

Polimorfismo es:

La capacidad de distintos objetos de responder al mismo mensaje con su propia implementación, sin que el código que envía el mensaje necesite saber de qué tipo concreto es el objeto.

🔎 La parte importante de la definición

Hay dos ideas clave ahí:

Mismo mensaje
Ejemplo: area(), descripcion(), toString().

Sin preguntar el tipo
No hay:

if (obj instanceof Cuadrado)

No hay switch.

El objeto decide cómo responder.

🎯 La versión más corta (por si querés algo más directo)

Polimorfismo es:

Mismo método, distinto comportamiento según el objeto que lo recibe.

🔥 Y esto es muy importante (lo que vos dijiste)

Cuando metés un if o un switch para decidir qué hacer según el tipo:

if (tipo === "cuadrado") { ... }

Ya no estás usando polimorfismo.

Estás centralizando la decisión en otro lado.

En cambio, con polimorfismo:

Cada clase sabe qué hacer.
No necesitás preguntar nada.

🧠 Cómo podrías explicarlo con tus palabras

Podrías decir algo así:

Polimorfismo es cuando distintos objetos comparten el mismo método, pero cada uno lo implementa a su manera, y el sistema ejecuta automáticamente la versión correcta según el objeto real.

Eso suena técnico y correcto.

=============================================================

class Notificacion {
  enviar() {
    return "Enviando notificación genérica";
  }
}

class Email extends Notificacion {
  enviar() {
    return "Enviando email";
  }
}

class SMS extends Notificacion {
  enviar() {
    return "Enviando SMS";
  }
}

let recorrer = [new Notificacion(),new Email(),new SMS()];
recorrer.forEach((recorrer)=>recorrer.enviar() );
 

       ┌─────────────────────────────┐
       │ Array: recorrer             │
       │ [Notificacion, Email, SMS]  │
       └─────────────┬───────────────┘
                     │
                     ▼
             ┌───────────────┐
             │ forEach()     │
             │ Recorre array │
             └───────┬───────┘
                     │
     ┌───────────────┼────────────────┐
     ▼               ▼                ▼
┌──────────────┐ ┌─────────────┐ ┌────────────┐
│ Notificacion │ │ Email       │ │ SMS        │
│ enviar()     │ │ enviar()    │ │ enviar()   │
│ "Enviando    │ │ "Enviando   │ │ "Enviando  │
│ notificación │ │ email"      │ │ SMS"       │
│ genérica"    │ │             │ │            │
└───────┬──────┘ └───────┬─────┘ └───────┬────┘
        │                │                 │
        ▼                ▼                 ▼
   console.log()   console.log()     console.log()
     imprime         imprime           imprime
     "Enviando       "Enviando        "Enviando
      notificación    email"           SMS"
      genérica"



 =========================================================

                      ┌──────────────────────────────┐
                     │       Clase Padre             │
                     │      Notificacion            │
                     │ método: enviar()             │
                     │ "Enviando notificación genérica" │
                     └─────────────┬────────────────┘
                                   │
                  ┌────────────────┴─────────────────┐
                  ▼                                  ▼
         ┌─────────────────┐                 ┌────────────────┐
         │ Clase Hija:     │                 │ Clase Hija:    │
         │ Email           │                 │ SMS            │
         │ enviar()        │                 │ enviar()       │
         │ "Enviando email"│                 │ "Enviando SMS" │
         └─────────────────┘                 └────────────────┘
                   │                                  │
                   └──────────────┬───────────────────┘
                                  ▼
                     ┌──────────────────────────────┐
                     │       Array de objetos        │
                     │ recorrer = [Notificacion,    │
                     │           Email, SMS]        │
                     └─────────────┬────────────────┘
                                   │
                                   ▼
                     ┌──────────────────────────────┐
                     │ forEach()                     │
                     │ recorrer.forEach(obj =>       │
                     │   console.log(obj.enviar()) ) │
                     └─────────────┬────────────────┘
                                   │
                                   ▼
                ┌───────── Polimorfismo en acción ─────────┐
                │ - Mismo método "enviar()"                │
                │ - Diferente salida según el objeto       │
                │   Notificacion → "Enviando notificación"│
                │   Email         → "Enviando email"      │
                │   SMS           → "Enviando SMS"        │
                └─────────────────────────────────────────┘


                    

🔑 Conceptos clave del esquema

Herencia:

Email y SMS son hijas de Notificacion.

Usan extends y pueden sobrescribir métodos.

Sobrescritura:

Cada clase hija redefine enviar().

Polimorfismo:

Llamás el mismo método en distintos objetos.

Cada objeto responde según su clase.

Array + forEach:

Permite recorrer todos los objetos automáticamente y aplicar el mismo flujo de llamada.

Muy útil cuando tenés muchos objetos.   

Ejemplo

class Notificacion {
  enviar() {
    return "Enviando notificación genérica";
  }
}

class Email extends Notificacion {
  enviar() {
    return "Enviando email";
  }
}

class SMS extends Notificacion {
  enviar() {
    return "Enviando SMS";
  }
}

let recorrer = [new Notificacion(),new Email(),new SMS()];
recorrer.forEach((recorrer)=>console.log(recorrer.enviar()) );
 
//Alternativa

let recorrer2 = new Notificacion();
console.log(recorrer2.enviar());

let recorrer3 = new Email();
console.log(recorrer3.enviar());

let recorrer4 = new SMS();
console.log(recorrer4.enviar());

===============================================================================
Palabra static en JavaScript

Dentro de una clase se crea un metodo static ===> Es pasa que sea solo utilizado por la clase, por el cual no puede ser invocado a 

traves de un objecto 


Object.prototype.toString();

// Ejercicio 2
class Animal {
  constructor(nombre, tipo) {
    this._nombre = nombre;
    this._tipo = tipo;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(valor) {
    this._nombre = valor;
  }

  get tipo() {
    return this._tipo;
  }
  set tipo(valor) {
    this._tipo = valor;
  }

  //Devuelve una cadena string
  descripcion() {
    return "Mi mascota se llama " + this._nombre + " es " + this._tipo;
  }
  toString(){
         return this.descripcion();

  }

  static saludar(){
    return "Saludos solo desde la clase"
    
  }
}

const animal = new Animal("Morena", "Ovejera belga");

console.log(animal);
console.log(animal.descripcion());
console.log(Animal.saludar());


class Mascota extends Animal {
  constructor(nombre, tipo, edad) {
    super(nombre, tipo);
    this._edad = edad;
  }

  get edad() {
    return this._edad;
  }

  set edad(valor) {
    this._edad = valor;
  }
  mostrarInfo() {
    this.nombre;
    return super.descripcion() + ` tiene la edad ${this.edad}`;
  }
  descripcion() {
    return super.descripcion() + ` tiene la edad ${this.edad}`;
  }
}

const mascota = new Mascota("More", "perra", 1);

console.log(mascota.descripcion());
console.log(mascota.toString());


===========================
ALternativa
=========================

Object.prototype.toString();

// Ejercicio 2
class Animal {
  constructor(nombre, tipo) {
    this._nombre = nombre;
    this._tipo = tipo;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(valor) {
    this._nombre = valor;
  }

  get tipo() {
    return this._tipo;
  }
  set tipo(valor) {
    this._tipo = valor;
  }

  //Devuelve una cadena string
  descripcion() {
    return "Mi mascota se llama " + this._nombre + " es " + this._tipo;
  }
  toString() {
    return this.descripcion();
  }

  static saludar() {
    return "Saludos solo desde la clase";
  }

  static saludar2(persona) {
    return persona.nombre + " "+ persona.tipo;
  }
}

const animal = new Animal("Morena", "Ovejera belga");
console.log(animal);
console.log(animal.descripcion());
console.log(Animal.saludar());

class Mascota extends Animal {
  constructor(nombre, tipo, edad) {
    super(nombre, tipo);
    this._edad = edad;
  }

  get edad() {
    return this._edad;
  }

  set edad(valor) {
    this._edad = valor;
  }
  mostrarInfo() {
    this.nombre;
    return super.descripcion() + ` tiene la edad ${this.edad}`;
  }
  descripcion() {
    return super.descripcion() + ` tiene la edad ${this.edad}`;
  }
}

const mascota = new Mascota("More", "perra", 1);

console.log(mascota.descripcion());
console.log(mascota.toString());
Animal.saludar2(animal);

console.log(Animal.saludar2(animal));
============================================================================

📘 Atributos Estáticos vs No Estáticos en JavaScript
🧠 1️⃣ Concepto General

En una clase en JavaScript existen dos tipos de propiedades:

🔵 Estáticas (static) → Pertenecen a la clase.

🟢 De instancia (no estáticas) → Pertenecen a cada objeto creado.

🏗 2️⃣ Ejemplo Base
class Persona {

  // 🔵 Atributo estático (de la clase)
  static contadorPersona = 0;

  // 🟢 Atributo de instancia (del objeto)
  email = "ingrese el mail";

  constructor(nombre, edad, sueldo) {
    this._nombre = nombre;
    this._edad = edad;
    this._sueldo = sueldo;

    Persona.contadorPersona++;
  }
}
🔵 3️⃣ Atributos Estáticos
📌 Características

Pertenecen a la clase.

No pertenecen a los objetos.

Se acceden usando el nombre de la clase.

Son compartidos por todas las instancias.

✅ Acceso correcto
Persona.contadorPersona
❌ Acceso incorrecto
persona.contadorPersona
🟢 4️⃣ Atributos de Instancia
📌 Características

Pertenecen al objeto.

Cada instancia tiene su propia copia.

Se acceden desde la variable del objeto.

✅ Acceso correcto
persona.email
🔍 5️⃣ Cómo funciona internamente (Diagrama Mental)

Cuando hacemos:

const persona = new Persona("More", 1, 200000);

Internamente ocurre algo así:

              🔵 CLASE Persona
              ───────────────────
              contadorPersona = 1
                     │
                     │
              prototype
                     ▲
                     │
              🟢 OBJETO persona
              ───────────────────
              _nombre
              _edad
              _sueldo
              email

📌 El objeto NO tiene acceso directo al atributo static.

⚙ 6️⃣ ¿Qué pasa si modifico desde el objeto?
persona.contadorPersona = 567;

🔴 Esto NO modifica el static.

Lo que hace es crear una nueva propiedad dentro del objeto:

🟢 OBJETO persona
───────────────────
contadorPersona = 567   ← NUEVA propiedad

Pero la clase sigue así:

🔵 CLASE Persona
───────────────────
contadorPersona = 1
🔎 7️⃣ Lookup de Propiedades (Muy Importante)

Cuando JavaScript evalúa:

persona.contadorPersona

Sigue este orden:

1️⃣ ¿Existe en el objeto?
    ✔ Sí → lo usa
    ❌ No → sigue buscando

2️⃣ ¿Existe en el prototype?
    ✔ Sí → lo usa

3️⃣ Nunca busca en los static

⚠ Static y Prototype son mundos distintos.

🧩 8️⃣ Ejemplo Comparativo
Persona.contadorPersona = 100;

console.log(persona.contadorPersona);
console.log(Persona.contadorPersona);
Resultado:
persona.contadorPersona → 567 (si lo creaste en el objeto)
Persona.contadorPersona → 100

Son propiedades distintas aunque tengan el mismo nombre.

🔐 9️⃣ Static Privado

Si quiero que no se pueda modificar desde afuera:

class Persona {

  static #contadorPersona = 0;

  static get contador() {
    return this.#contadorPersona;
  }

  constructor() {
    Persona.#contadorPersona++;
  }
}

Ahora esto da error:

Persona.#contadorPersona = 100; // ❌
🧠 10️⃣ Resumen Final
Tipo	Vive en	Acceso	¿Se comparte?
🔵 Static	Clase	Persona.prop	Sí
🟢 Instancia	Objeto	persona.prop	No
🔒 Static Privado	Clase	Solo interno	Sí
          

Muy buena pregunta 👏 vamos directo al punto.

Sí.

Cuando ves esto:

constructor() {
  Persona.#contadorPersona++;
}

Lo que está haciendo es:

👉 Sumar 1 cada vez que se crea una nueva instancia.

🧠 ¿Cuándo se ejecuta eso?

El constructor se ejecuta automáticamente cada vez que hacés:

const p1 = new Persona();

Entonces pasa esto internamente:

1️⃣ Se crea el objeto
2️⃣ Se ejecuta el constructor
3️⃣ Se incrementa el contador
🔢 Ejemplo paso a paso

Si el contador empieza en:

static #contadorPersona = 0;

Y hacés:

const p1 = new Persona(); // suma 1
const p2 = new Persona(); // suma 1
const p3 = new Persona(); // suma 1

El valor termina siendo:

3
🎯 ¿Por qué se hace esto?

Es un patrón típico para:

Contar cuántas instancias existen

Llevar estadísticas

Asignar IDs automáticos

Por ejemplo:

constructor() {
  Persona.#contadorPersona++;
  this.id = Persona.#contadorPersona;
}

Así cada objeto recibe un ID único.

🔎 Importante

Si no pusieras esto en el constructor:

Persona.#contadorPersona++;

El contador nunca cambiaría.
Se quedaría siempre en 0.

Porque los static no se modifican solos.
Alguien tiene que actualizarlos.          

=====================================================
Variable estatica y que no sea modificable
