# 🟦 PROMESAS EN JAVASCRIPT -- APUNTE TÉCNICO

------------------------------------------------------------------------

# 🟢 1️⃣ ¿Qué es una Promesa?

Una **Promise** es un objeto que representa el resultado futuro de una
operación asíncrona.

📌 Definición técnica:

> Una Promesa es un mecanismo de control de flujo para manejar
> asincronismo de forma predecible.

No es la operación en sí.\
Es el contenedor que administra cuándo y cómo se entrega el resultado.

------------------------------------------------------------------------

# 🟡 2️⃣ Estados de una Promesa

Toda Promesa tiene **3 estados**:

                    ┌─────────────────────┐
                    │      PROMISE        │
                    └──────────┬──────────┘
                               │
                          [ 🟡 PENDING ]
                               │
                ┌──────────────┴──────────────┐
                │                             │
         Si todo sale bien             Si algo falla
                │                             │
          [ 🟢 FULFILLED ]             [ 🔴 REJECTED ]
                │                             │
            .then()                       .catch()

### 🔎 Importante:

-   Empieza en 🟡 **Pending**
-   Termina en 🟢 **Fulfilled** o 🔴 **Rejected**
-   Una vez resuelta → no cambia más

------------------------------------------------------------------------

# 🟣 3️⃣ Estructura básica

``` js
const miPromesa = new Promise((resolve, reject) => {

    // operación asíncrona

    if (todoSaleBien) {
        resolve("Éxito");
    } else {
        reject("Error");
    }

});
```

### 🧩 Componentes:

-   `resolve()` → éxito
-   `reject()` → error
-   `.then()` → maneja éxito
-   `.catch()` → maneja error

------------------------------------------------------------------------

# 🔵 4️⃣ Ejemplo Básico

``` js
const saludar = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Proceso terminado");
    }, 2000);

});

saludar
   .then((mensaje) => {
       console.log(mensaje);
   })
   .catch((error) => {
       console.log(error);
   });
```

------------------------------------------------------------------------

# 🟠 5️⃣ Flujo Interno con setTimeout (Event Loop)

    1️⃣ Se crea la Promesa
          ↓
    2️⃣ Estado: 🟡 PENDING
          ↓
    3️⃣ setTimeout va al Web API
          ↓
    4️⃣ JS sigue ejecutando otras tareas
          ↓
    5️⃣ Después de 2s → pasa al Callback Queue
          ↓
    6️⃣ resolve()
          ↓
    7️⃣ Se ejecuta el .then()

### Diagrama técnico simplificado:

    CALL STACK        WEB API          CALLBACK QUEUE
    ----------        -------          --------------
    Promise()
    setTimeout() ---> Timer (2s)

                       (espera)

                                     callback listo
                                          ↓
                                     resolve()
                                          ↓
                                     .then()

------------------------------------------------------------------------

# 🟤 6️⃣ Promesas Encadenadas

``` js
verificarUsuario()
   .then(() => obtenerDatos())
   .then(() => mostrarDatos())
   .catch(error => console.log(error));
```

### 📊 Flujo lineal:

    verificarUsuario()
            │
            ▼
       (resolve)
            │
            ▼
    obtenerDatos()
            │
            ▼
       (resolve)
            │
            ▼
    mostrarDatos()

### ⚠️ Si algo falla:

    verificarUsuario()
            │
         (reject)
            │
            ▼
         .catch()

------------------------------------------------------------------------

# 🔴 7️⃣ Comparación: Callback Hell vs Promesas

### ❌ Callback Hell

    login(
       () => {
          perfil(
             () => {
                permisos(
                   () => {
                      ...
                   }
                )
             }
          )
       }
    )

Pirámide difícil de mantener.

------------------------------------------------------------------------

### ✅ Con Promesas

    login()
       ↓
    perfil()
       ↓
    permisos()

Flujo limpio, lineal y mantenible.

------------------------------------------------------------------------

# 🟢 8️⃣ Ejercicio Básico

Crear una función que:

-   Espere 3 segundos
-   Si el número \> 10 → resolve("Número válido")
-   Si no → reject("Número pequeño")

``` js
function validarNumero(numero) {

   return new Promise((resolve, reject) => {

       setTimeout(() => {

           if (numero > 10) {
               resolve("Número válido");
           } else {
               reject("Número pequeño");
           }

       }, 3000);

   });

}
```

Uso:

``` js
validarNumero(15)
   .then(res => console.log(res))
   .catch(err => console.log(err));
```

------------------------------------------------------------------------

# 🔵 9️⃣ Ejercicio con funciones encadenadas

``` js
function verificarUsuario() {
   return new Promise((resolve) => {
       setTimeout(() => {
           resolve("Usuario verificado");
       }, 1000);
   });
}

function obtenerDatos() {
   return new Promise((resolve) => {
       setTimeout(() => {
           resolve("Datos obtenidos");
       }, 1000);
   });
}
```

Encadenado:

``` js
verificarUsuario()
   .then((mensaje) => {
       console.log(mensaje);
       return obtenerDatos();
   })
   .then((datos) => {
       console.log(datos);
   })
   .catch((error) => {
       console.log(error);
   });
```

------------------------------------------------------------------------

# 🧠 🔥 Concepto Senior que Tenés que Recordar

    Promesa =
       📦 Contrato futuro
          +
       🔁 Control de flujo
          +
       🛑 Manejo centralizado de errores

Una Promesa no es magia.

Es una herramienta formal para:

-   Encadenar asincronismo
-   Propagar errores correctamente
-   Evitar anidación innecesaria
-   Escribir código mantenible
===============================================================================

 async indica que una función regresa una promesa

Concepto REAL de async

👉 async es azúcar sintáctico sobre Promesas.

No es algo nuevo.
No reemplaza Promesas.
No cambia cómo funciona el motor.
Solo cambia la forma de escribirlo.

Regla fundamental:

Toda función async SIEMPRE devuelve una Promesa.

async function saludar() {
  return "Hola";
}

function saludar() {
  return Promise.resolve("Hola");
}

Concepto REAL de await

await solo puede usarse dentro de una función async.

👉 await le dice a JavaScript:

"Esperá a que esta Promesa se resuelva antes de seguir con la siguiente línea."

Pero atención:

No bloquea el hilo principal.
No congela el navegador.
Solo pausa esa función async.


Resumen técnico preciso

| Concepto    | Qué hace realmente                                       |
| ----------- | -------------------------------------------------------- |
| `async`     | Hace que la función devuelva automáticamente una Promesa |
| `await`     | Espera la resolución de una Promesa antes de continuar   |
| `try/catch` | Maneja errores como si fuera código sincrónico           |
| Motor JS    | Sigue usando el Event Loop y la cola de microtareas      |

🔟 Cuándo usar async/await

✔ Cuando hay múltiples Promesas encadenadas
✔ Cuando necesitás claridad
✔ Cuando el flujo tiene pasos dependientes
✔ Cuando querés manejar errores con try/catch


============================================================================
✅ Ejemplo básico
const esperar = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Terminé");
    }, 2000);
  });
};

const ejecutar = async () => {
  console.log("Inicio");

  const resultado = await esperar();

  console.log(resultado);
  console.log("Fin");
};

ejecutar();
🔎 Explicación línea por línea
🔹 1️⃣ Definimos la función esperar
const esperar = () => {

Creamos una función normal.

return new Promise((resolve) => {

Esta función devuelve una Promesa.
Una Promesa es algo que se va a resolver en el futuro.

setTimeout(() => {

Usamos setTimeout para simular algo que tarda tiempo.

resolve("Terminé");

Después de 2 segundos, la Promesa se resuelve y devuelve el texto "Terminé".

}, 2000);

2000 milisegundos = 2 segundos.

Hasta acá tenemos una función que:
👉 tarda 2 segundos
👉 devuelve una Promesa
👉 cuando termina, devuelve "Terminé"

🔹 2️⃣ Creamos la función async
const ejecutar = async () => {

Acá está la palabra clave.

🔹 async hace que esta función:

Devuelva automáticamente una Promesa

Permita usar await dentro

console.log("Inicio");

Se imprime inmediatamente.

const resultado = await esperar();

🔥 ESTA ES LA LÍNEA CLAVE.

await significa:

"Esperá a que la Promesa termine antes de seguir."

Entonces:

Llama a esperar()

Espera 2 segundos

Cuando se resuelve, guarda "Terminé" en resultado

Recién después continúa

console.log(resultado);

Imprime:

Terminé
console.log("Fin");

Se ejecuta después del resultado.

🧠 ¿Qué se imprime en orden?
Inicio
(espera 2 segundos)
Terminé
Fin


=========================================================

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