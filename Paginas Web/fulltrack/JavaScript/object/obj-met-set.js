const persona2 = {
  nombre: "Morena",

  set cambiarNombre(valor) {
    this.nombre = valor;
  },
};

persona2.cambiarNombre = "Perez";
console.log(persona2.nombre);

const persona = {
  nombre: "Morena",
  idioma: "es",
  set leng(valor) {
    this.idioma = valor.toUpperCase();
  },
};
persona.leng = "br";
console.log(persona.idioma);


