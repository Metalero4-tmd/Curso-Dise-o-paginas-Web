const Persona = require("./Persona");
console.log("Estoy ejecutando el archivo");
class Empleado extends Persona {
  static contadorEmpleado = 0;
  constructor(nombre, apellido, edad, sueldo) {
    //“En el constructor de Empleado se ejecuta el constructor de Persona mediante super(), y ahí se crean los atributos heredados.”
    super(nombre, apellido, edad);
    this._idEmpleado = ++Empleado.contadorEmpleado;
    this._sueldo = sueldo;
  }
  get sueldo() {
    return this._sueldo;
  }
  set sueldo(sueldo) {
    this._sueldo = sueldo;
  }

  DatosEmpleado() {
    return `${this.nombre} ${this.apellido}  ${this.edad} ${this.sueldo}`;
  }
}

const empleado = new Empleado("More", "Perez", 33, 50000);
console.log(empleado.DatosEmpleado());
