const persona = {
  nombre: "morena",
  edad: 1,
};
console.log(persona);

for (let key in persona) {
  console.log(`campo: ${key} || valor: ${persona[key]}`);
}

/*
Las comillas ` se llaman template literals (plantillas literales).

Dentro de ellas, ${…} evalúa cualquier expresión de JS y la inserta como texto.
*/

/************************************ */

const empleado = {
  legajo: 1,
  nombreApellido: "Morena Lescano",
  area: "guardia",
  fechaIngreso: 2024,
  get tiempoPuesto() {
   const anio =new Date().getFullYear();
    return anio - this.fechaIngreso;
  },
};
console.log(empleado.tiempoPuesto);
