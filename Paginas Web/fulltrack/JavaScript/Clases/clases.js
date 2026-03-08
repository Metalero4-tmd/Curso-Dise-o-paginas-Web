class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }
  get nombre() {
    return this._nombre;
  }

  set nombre(valor) {
    this._nombre = valor;
  }
  //Get recuperar el valor del atributo
  get apellido() {
    return this._apellido;
  }
  //Set para modificar el valor del atributo
  set apellido(valor) {
    this._apellido = valor;
  }

  nombreCompleto(){
  
     return this._nombre + this._apellido;
  }
}

/************** Crear una clase Hija "HERENCIA" ***************** */

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    //Se usa super() ,llamamos al constructor padre en este caso Persona
    super(nombre, apellido);

    this._departamento = departamento;
  }
  get departamento() {
    return this._departamento;
  }

  set departamento(valor) {
    this._departamento = valor;
  }
}

const persona = new Persona("daniel", "Morena");

persona.nombre = "Melina";
persona.apellido = "Barrios";
console.log(persona);

const empleado1 = new Empleado("Jazmin", "Barrios", "Es vaga");
console.log(empleado1);

console.log (empleado1.nombreCompleto());
