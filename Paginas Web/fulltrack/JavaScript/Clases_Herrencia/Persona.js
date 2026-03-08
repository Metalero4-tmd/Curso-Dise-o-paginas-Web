export default class Persona {
  static contadorPersona = 0;

  constructor(nombre, apellido, edad) {
    this._idPersona = ++Persona.contadorPersona;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }

  get edad() {
    return this._edad;
  }

  set edad(edad) {
    this._edad = edad;
  }
  
  mostrarInfo(){
   return `idPersona: ${this._idPersona} - Nombre : ${this._nombre} - Apellido: ${this._apellido} - Edad: ${this._edad}`
  }  
}

const persona1 = new Persona ("Melina","four",26);
console.log(persona1.mostrarInfo());

const persona2 = new Persona ("Aida","Pul",78);
console.log(persona2.mostrarInfo());

