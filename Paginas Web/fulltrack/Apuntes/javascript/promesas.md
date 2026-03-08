Promesas en JavaScript
¿Qué es una Promise?
Una Promise (promesa) es un objeto que representa el resultado eventual de una operación asíncrona. Es como un "contrato" que dice: "te prometo que en algún momento voy a darte un resultado, ya sea exitoso o fallido".
Una Promise tiene 3 estados:

Estado    |             Significado                  |
pending   | Esperando... la operación aún no terminó |
fulfilled | ✅ Éxito: la operación termino bien     | 
rejected  |  ❌ Error: algo salió mal               |

const miPromesa = new Promise((resolve, reject) => {
  // Aquí va la operación asíncrona
  const exito = true;

  if (exito) {
    resolve("¡Datos obtenidos!"); // → fulfilled
  } else {
    reject("Ocurrió un error");   // → rejected
  }
});


miPromesa
  .then((resultado) => {
    console.log("Éxito:", resultado); // "¡Datos obtenidos!"
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Esto siempre se ejecuta"); // pase lo que pase
  });