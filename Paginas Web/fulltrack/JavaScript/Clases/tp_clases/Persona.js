class Persona {
  static contadorPersonas = 0;
  constructor(nombre, apellido, edad) {
    this._idPersona = ++ Persona.contadorPersonas;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }
  get idPersona() {
    return this._idPersona;
  }
  set idPersona(idpersona) {
    this._idPersona = idpersona;
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

  concatenarDatos() {
    return `
     ${this._idPersona}
     ${this._nombre}
     ${this._apellido}
     ${this._edad}`;
  }
}


module.exports = Persona;
const persona = new Persona( "Jazmin", "Narrios", 1);
console.log(persona.concatenarDatos());
