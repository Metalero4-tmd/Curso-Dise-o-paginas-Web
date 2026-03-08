// Es una función constructora (forma clásica antes de class en JavaScript).
function datos(nombre, edad, sueldo) {
  this.nombre = nombre;
  this.edad = edad;
  this.sueldo = sueldo;
}

datos.prototype.sueldoBruto = function () {
  return this.sueldo * 1.17;
};

const datosValores = new datos();
datosValores.sueldo = 600000;

console.log(datosValores.sueldoBruto());
//console.log(datosValores);

/*****  uso de call **********/

const persona = {
  legajo: 1,
  edad: 22,
  sueldo: 58000,
  calcularSueldo: function () {
    return this.sueldo * 1.3;
  },
};

const persona2 = {
  legajo: 2,
  edad: 39,
  sueldo: 30000,
};

const resultado = persona.calcularSueldo.call(persona2);

console.log(resultado);
/************Metodo Apply ***************** */

const personas1 = {
  nombre: "daniel",
};

const personas2 = {
  nombre: "daniel",
};

function saludo(saludar) {
  console.log(saludar + " " + this.nombre);
}

saludo.apply(personas1,["Buen día!!!"]);

//Ejemplo alternativo 

const empleado3 = {
  nombre: "Daniel",
  sueldo: 1000,
  mostrarSueldo: function() {
    console.log(this.nombre + " cobra " + this.sueldo);
  }
};

//empleado3.mostrarSueldo.apply(empleado3);

empleado3.mostrarSueldo();
