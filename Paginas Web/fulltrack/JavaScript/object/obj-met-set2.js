const usuario = {
  nombre: "Morena",
  edad: 25,

  set setEdad(valor) {
    if (typeof valor === "number" && valor >= 0) {
      this.edad = valor;
      console.log("Cumple con la condición");
    } else {
      console.log("No cumple con la condición");
    }
  },
};

usuario.setEdad = 10; // ✅ cumple
usuario.setEdad = -5; // ❌ no cumple
usuario.setEdad = "10"; // ❌ no cumple (es string)
usuario.setEdad = true; // ❌ no cumple
usuario.setEdad = NaN; // ❌ no cumple

// Ej 2

const producto = {
  precio: 30,

  set precioFinal(valor) {
    //La función Math.round()retorna el valor de un número redondeado al entero más cercano.
    this.precio = Math.round(valor);
  },
};

producto.precioFinal = 1996.5;
console.log(producto.precio);
//==> vi que si pones  1996.49 ,lo pone en 1996 y es correcto, eso lo hace la calculadora cientiica

/**************************** */
const temperatura = {
  celsius: 0,
  set celsiusSet(valor) {
    this.celsius = ((valor - 32) * 5) / 9;
  },
  get fahrenheitGet() {
    return (this.celsius * 9) / 5 + 32;
  },
};

temperatura.celsiusSet = 21600;
console.log(temperatura.fahrenheitGet);

//=========================================

const cuentaBancaria = {
  saldo: 10,

  set cuentaBancariaSet(valor) {
    if (typeof valor === "number" && valor > 0) {
      this.saldo = this.saldo + valor;
      console.log("Se sumo el saldo actual!!");
    } else {
      console.log("El saldo ingresado NO es invalido!!!");
    }
  },
  get verSaldo(){

    return this.saldo;

  } 

};
cuentaBancaria.cuentaBancariaSet = 500;
cuentaBancaria.cuentaBancariaSet = 600;
//console.log(cuentaBancaria.verSaldo);

//solo que muestre todo de una sola vez
for( key in cuentaBancaria){
console.log(`campo: ${key} | valor: ${cuentaBancaria[key]}`); 

}
