/*
persona = {
  nombre: "Melina",
  edad: 26,
  anioNacimiento: function () {
    return 2026 - this.edad;
  },
};
persona.anioNacimiento();
console.log(persona);

*/

/*
persona = {
  nombre: "Melina",
  edad: 26,
  anioNacimiento:0 
};

//persona.anioNacimiento= 2026-persona.edad;


const fechaActual = (edad) =>{return 2026-edad;}
persona.anioNacimiento = fechaActual(persona.edad);
console.log(persona);


 
*/

persona = {
  nombre: "Melina",
  edad: 26,
  anioNacimiento: function () {
    // return 2026 - this.edad;
    return new Date().getFullYear() - this.edad;
  },
  fecha: 0,
};
persona.fecha = persona.anioNacimiento();
console.log(persona);

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