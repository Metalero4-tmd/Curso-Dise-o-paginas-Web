/*
//Genero la función
const verificarStock = (producto) => {

    // creo la promesa y lo devuelvo a la funcion  
    return new Promise((resolve, reject) => {
        //Metodo que establece un tiempo
        setTimeout(() => {
            //validaciones del producto
            if (producto === "notebook") {
                resolve("stock disponible");
            }
            else {
                reject("NO hay stock disponble");
            }

        }, 2000);
    })
}

//Variable del producto deseado
let miProducto = "notebook";

verificarStock(miProducto)
    //Verifico con then si es ok o si hubo error
    .then((exito) => {
        console.log(exito);
    }
    )
    .catch((error) => {
        console.log(error);

    })

*/
/**********  Async ****************/
/*
async function miPromesa() {

    return "saludos con promesa y async";
}


miPromesa().then(valor => console.log(valor));
*/

/*
//Ejercicio repaso
let a = 100;
console.log(`El primer numero es: ${a}`);
let b = 80;
console.log(`El segundo numero es: ${b}`);

const sumar = (a, b) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let x = a + b;
      resolve(x);
    }, 3000);
  });
};

const resultado = async () => {
  console.log("inicio...");

  const total = await sumar(a, b);

  console.log(`La suma total es: ${total}`);
  console.log("Fin");
  return total;
};

resultado();
*/
//Version altenativa con try y catch
let a = 100;
console.log(`El primer numero es: ${a}`);
let b = "80";
console.log(`El segundo numero es: ${b}`);

const sumar = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (typeof (a) != "number" || typeof (b) != "number") {
                 reject(new Error("No es numerico"));
            }
            else {
                let x = a + b;
                resolve(x);
            }
        }, 3000);
    });
};

const resultado = async () => {
    console.log("inicio...");

    try {

        const total = await sumar(a, b);
        console.log(`La suma total es: ${total}`);
        console.log("Fin");
        return total;

    }
    catch (error) {

        console.log("Hubo error:", error.message)
    }
};

resultado();