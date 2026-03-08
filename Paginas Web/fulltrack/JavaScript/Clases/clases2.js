//Atributos Estáticos VS No Estáticos en JavaScript

class Persona {
  //Atributo que pertence a la clase y no pertence a ningún  objecto.
  static contadorPersonas = 3;
  // Atributo del objecto
  email = "ingrese el mail";

  static get max_obj() {

     return 5;

  }

  constructor(nombre, edad, sueldo) {
    this._nombre = nombre;
    this._edad = edad;
    this._sueldo = sueldo;
    
    if(Persona.contadorPersonas < Persona.max_obj){
      this.idPersona = ++Persona.contadorPersonas;
    }
    else{
      console.log("No se puede crear mas objectos")    
   
    }

  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get edad() {
    return this._edad;
  }

  set edad(valor) {
    this._edad = valor;
  }
  get sueldo() {
    return this._sueldo;
  }
  set sueldo(valor) {
    this._sueldo = valor;
  }
}

const persona = new Persona("More", 1, 200000);
console.log(persona);
persona.contadorPersona = 567;
console.log(`No se modifica el valor del atributo ${Persona.contadorPersona}`);
persona.contadorPersona = 998;
console.log(`Se modifica el valor del atributo ${Persona.contadorPersona}`);
console.log(persona.email);
const persona2 = new Persona("Melina", 26, 600000);
console.log(persona2);
console.log("valor del contador persona ",Persona.contadorPersonas);

const persona3 = new Persona("Jazmin", 1, 900000);
console.log(persona2);

const persona4 = new Persona("Aida", 1, 900000);
console.log(persona4);

console.log(Persona.max_obj);
Persona.max_obj = 10;
console.log(Persona.max_obj);
