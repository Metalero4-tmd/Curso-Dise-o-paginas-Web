Object.prototype.toString();

// Ejercicio 2
class Animal
{
  constructor(nombre, tipo) {
    this._nombre = nombre;
    this._tipo = tipo;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(valor) {
    this._nombre = valor;
  }

  get tipo() {
    return this._tipo;
  }
  set tipo(valor) {
    this._tipo = valor;
  }

  //Devuelve una cadena string
  descripcion() {
    return "Mi mascota se llama " + this._nombre + " es " + this._tipo;
  }
  toString() {
    return this.descripcion();
  }

  static saludar() {
    return "Saludos solo desde la clase";
  }

  static saludar2(persona) {
    return persona.nombre + " "+ persona.tipo;
  }


}

const animal = new Animal("Morena", "Ovejera belga");
console.log(animal);
console.log(animal.descripcion());
console.log(Animal.saludar());

class Mascota extends Animal {
  constructor(nombre, tipo, edad) {
    super(nombre, tipo);
    this._edad = edad;
  }

  get edad() {
    return this._edad;
  }

  set edad(valor) {
    this._edad = valor;
  }
  mostrarInfo() {
    this.nombre;
    return super.descripcion() + ` tiene la edad ${this.edad}`;
  }
  descripcion() {
    return super.descripcion() + ` tiene la edad ${this.edad}`;
  }
}

const mascota = new Mascota("More", "perra", 1);

console.log(mascota.descripcion());
console.log(mascota.toString());
Animal.saludar2(animal);

console.log(Animal.saludar2(animal));