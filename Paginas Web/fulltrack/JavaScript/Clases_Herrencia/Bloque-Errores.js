
try {
  let numero = 4;

  if (typeof numero != "number") {
    console.log("El numero ingresado no es numerico");
  } else if (numero < 10 && numero > 0) {
     
   throw new Error("Ese valor ingresado no es permitido");
  } else {
    console.log("Es numerico");
  }
} catch (error) {
  console.log(error.message);
}


let monto = 10001;
try {
  if (typeof monto != "number") {
    throw new Error("El monto ingresado debera ser numérico!!!");
  } else if (monto <= 0) {
    throw new Error("El monto debe ser mayor cero");
  } else if (monto > 10000) {
    throw new Error("El monto debe menor a 9999!!!");
  } else {
    console.log("Retiro permitido!!!");
  }
} catch (error) {
  console.log(error.message);
}
