function Persona(nombre, apellido, mail, sueldo) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.mail = mail;
  this.sueldo = sueldo;
  this.sueldoBruto = function () {
    return this.sueldo * 1.17;
  };
}

const padre = new Persona();
padre.sueldo = 40000;
console.log(`El sueldo del padre es: ${padre.sueldo}`);
console.log(padre.sueldoBruto());

/*********** Uso de Prototype en JavaScript **************************/

function Empleados(legajo, apellido, sueldo) {
  this.legajo = legajo;
  this.apellido = apellido;
  this.sueldo = sueldo;
}

// Método compartido (AFUERA)
Empleados.prototype.sueldoBruto = function () {
  return this.sueldo * 1.17;
};

const empleados = new Empleados();
empleados.sueldo = 20000;

console.log(empleados.sueldoBruto());

const empleados2 = new Empleados(2, "Perez", 40000);

/************** Uso de Call en JavaScript ***************/
const datos = {
  nombre: "daniel",
  edad: 20,
  sueldo: 140000,
  calcularSueldo: function(){

    return this.sueldo * 1.21;

  }
};

console.log(datos.calcularSueldo());

const datos2={
nombre: "More",
  edad: 1,
  sueldo: 50000
}

