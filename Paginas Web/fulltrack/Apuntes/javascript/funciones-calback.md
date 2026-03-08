# 📝 Apuntes JavaScript

## 🏹 Funciones Flecha (Arrow Functions)

### ¿Qué es?
Una forma **más corta** de escribir funciones en JavaScript.

---

### Función normal vs Función Flecha

```javascript
// Función normal
function saludar() {
  return "¡Hola!"
}

// Función flecha
const saludar = () => "¡Hola!"
```

---

### Con parámetros

```javascript
// Un parámetro (se pueden quitar los paréntesis)
const saludar = nombre => "¡Hola " + nombre + "!"

// Dos parámetros
const sumar = (a, b) => a + b
```

---

### Con varias líneas

```javascript
// Si tiene más de una línea → usás llaves {} y escribís return
const saludar = (nombre) => {
  const mensaje = "¡Hola " + nombre + "!"
  return mensaje
}
```

---

### Regla clave: ¿Cuándo usar llaves y return?

| ¿Cuándo? | ¿Llaves? | ¿Return? |
|---|---|---|
| Una línea simple | ❌ No | ❌ No (es automático) |
| Varias líneas | ✅ Sí | ✅ Sí, obligatorio |

---

### Uso con listas (.map y .filter)

```javascript
const numeros = [1, 2, 3, 4, 5]

// Duplicar cada número
const dobles = numeros.map(n => n * 2)
// [2, 4, 6, 8, 10]

// Filtrar solo los pares
const pares = numeros.filter(n => n % 2 === 0)
// [2, 4]
```

---

### Resumen rápido

| ¿Qué querés? | Cómo se escribe |
|---|---|
| Sin parámetros | `() => ...` |
| Un parámetro | `nombre => ...` |
| Dos parámetros | `(a, b) => ...` |
| Varias líneas | `(a, b) => { ... return }` |

---

## 📞 Funciones Callback

### ¿Qué es?
Una función que se pasa como **argumento** a otra función, y se ejecuta cuando esa función termina.

> 💡 Como decirle a un amigo: *"Cuando termines, llamame"*

---

### Ejemplo básico

```javascript
const saludar = () => {
  console.log("¡Hola! Soy el callback 👋")
}

const ejecutar = (miFuncion) => {
  console.log("Primero hago algo...")
  miFuncion() // Aquí se llama al callback
}

ejecutar(saludar)
// "Primero hago algo..."
// "¡Hola! Soy el callback 👋"
```

---

### Ejemplo con Pizza 🍕

```javascript
const pizzaLista = () => {
  console.log("🍕 ¡La pizza está lista!")
}

const hacerPizza = (callback) => {
  console.log("Preparando pizza...")
  console.log("Horneando pizza...")
  callback() // Cuando termina, avisa
}

hacerPizza(pizzaLista)
// "Preparando pizza..."
// "Horneando pizza..."
// "🍕 ¡La pizza está lista!"
```

---

### Regla importante ⚠️

Al pasar un callback, **NO le pongas `()`** porque si no se ejecuta al instante.

```javascript
ejecutar(saludar)   // ✅ Correcto - se ejecuta cuando ejecutar lo decida
ejecutar(saludar()) // ❌ Incorrecto - se ejecuta en el momento
```

---

### Resumen Callback

| | |
|---|---|
| Función normal | Hace una tarea |
| Callback | Se ejecuta **dentro** de otra función |
| ¿Cómo se pasa? | Como argumento, **sin paréntesis** `()` |


=====================================================================

📚 setTimeout en JavaScript
🟢 ¿Qué es setTimeout?

setTimeout es una función que:

⏳ Ejecuta otra función después de un tiempo determinado (en milisegundos).

📌 No bloquea el código.
📌 Es asincrónico.
📌 Usa el Event Loop.

🟡 Sintaxis general
setTimeout(funcion, tiempo, arg1, arg2, ...);

🔹 funcion → lo que se ejecutará después
🔹 tiempo → en milisegundos (1000 = 1 segundo)
🔹 arg1, arg2... → argumentos opcionales que recibe esa función

🧠 Concepto CLAVE

Hay dos niveles de funciones:

1️⃣ Tu función principal
2️⃣ La función interna que ejecuta setTimeout

🟢 Ejercicio resuelto (multiplicar con callback)
let numero1 = 5;
let numero2 = 4;

const multiplicar = (numero1, numero2, callback) => {
  setTimeout(() => {
    const resultado = numero1 * numero2;
    callback(`El resultado de la multiplicacion es: ${resultado}`);
  }, 2000);
};

const imprimirInfo = (mensaje) => console.log(mensaje);

multiplicar(numero1, numero2, imprimirInfo);
🟣 Diagrama de ejecución
Llamada a multiplicar()
        │
        ▼
Entra a multiplicar
        │
        ▼
setTimeout espera 2 segundos
        │
        ▼
Ejecuta función interna
        │
        ▼
Calcula resultado
        │
        ▼
Ejecuta callback
        │
        ▼
Imprime mensaje
🔵 ¿Qué significa () => {}?
() => { }

Significa:

🔹 Estoy creando una función
🔹 No recibe parámetros

Si fuera:

(mensaje) => { }

Significa:

🔹 Recibe un parámetro llamado mensaje

🟠 Parámetros propios de setTimeout

setTimeout permite pasar argumentos extra:

setTimeout((mensaje) => {
  console.log(mensaje);
}, 2000, "Hola Daniel");

📌 "Hola Daniel" es argumento de la función interna
📌 No pertenece a la función externa

🔴 Regla Mental Importante
Código	Significado
funcion	Paso referencia
funcion()	Ejecuto inmediatamente
() => {}	Creo una función nueva
🟢 Closure (concepto importante)

La función interna de setTimeout puede usar variables externas:

numero1
numero2
callback

Porque JavaScript usa closure.

🧩 Resumen Final

✔ setTimeout ejecuta algo después de un tiempo
✔ Todo lo que esté dentro se ejecuta después
✔ Puede recibir argumentos propios
✔ No bloquea el código
✔ La función interna puede acceder a variables externas


// Usar setInterval

let reloj = ()=>{

let fecha = new Date();

console.log(`${fecha.getHours()} - ${fecha.getMinutes()} - ${fecha.getSeconds()}`);
} 


setInterval (reloj,1000);