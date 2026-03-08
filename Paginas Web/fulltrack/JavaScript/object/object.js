let persona = {
  nombre: "daniel",
  apellido: "No se sabe no contesta",
  edad: 45,
  mombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

//directamente cambio el valor asi

persona.apellido = "Lescano";

//viene de una variable ajena "Es una forma decir"

// console.log(persona.apellido);

// let apellidosExecpcion = "d' elie";

// persona["apellido"] = apellidosExecpcion;
// console.log(persona["apellido"]);

/* Otra forna

Es útil cuando el nombre de la propiedad no lo sabés de antemano.

Por ejemplo, cuando lo traés de un formulario, un loop, o un JSON dinámico.

Pero si ya conocés la propiedad, agregar la variable es innecesario y solo complica un poco el código.
*/

let campo = "apellido";
let valor = "d' elie";
persona[campo] = valor;
console.log(`Ahora su nombre es: ${persona[campo]}`);

//agregar otra propiedad al objecto

persona.email = "delpalonuestro@gmail.com";
console.log(persona);

/*Ese for...in recorre las propiedades del objeto.

No recorre valores.
No recorre posiciones.
Recorre los nombres de las propiedades.
*/
for (bucle in persona) {
  console.log(bucle);
}

/*
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

*/

//para borrar la propiedad edad
delete persona.edad;
//muestro por consola
console.log(persona);
//agrego la propiedad con un valor
persona.edad = 23;
console.log(persona.edad);
