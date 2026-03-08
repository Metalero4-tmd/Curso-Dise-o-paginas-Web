import Persona from "./Persona.js";

export default class Empleado extends Persona {
  static contadorLegajo = 0;
  static porcentajeAumento = 1.1;
  constructor(nombre, apellido, edad, sueldo, puesto) {
    super(nombre, apellido, edad);
    this._idLegajo = ++Empleado.contadorLegajo;
    this._sueldo = sueldo;
    this._sueldoActualizado = 0;
    this._puesto = puesto;
  }

  get sueldo() {
    return this._sueldo;
  }
  set sueldo(sueldo) {
    this._sueldo = sueldo;
  }

  get puesto() {
    return this._puesto;
  }

  set puesto(puesto) {
    this._puesto = puesto;
  }

  get sueldoBruto() {
    return this._sueldo * 1.17;
  }

  aumentarSueldo(valor) {
    //this._sueldoActualizado = this._sueldo * valor;
    this._sueldoActualizado = this.sueldoBruto * valor;
  }

  mostrarInfo() {
    return `${super.mostrarInfo()} - Sueldo: ${this._sueldo} - Puesto: ${this._puesto} - Sueldo Bruto: ${this.sueldoBruto} Sueldo Actualizado: ${this._sueldoActualizado}`;
  }
}

//Fuera de la clase
function imprimir(tipo) {
  console.log(tipo.mostrarInfo());
  if (tipo instanceof Empleado)
  {
    console.log("objeto es instancia de esa clase Empleado");
  } 
  else{

      console.log("objeto es instancia de esa clase Persona");
  } 
}

const empleado = new Empleado("daniel", "More", 45, 1000, "Desarrollado jr");

empleado.aumentarSueldo(Empleado.porcentajeAumento); // aplica el aumento

imprimir(empleado);
console.log(empleado instanceof Empleado);