# 📚 Manejo del DOM con HTML y JavaScript

------------------------------------------------------------------------

# 🧠 Concepto clave

[`<b>`{=html}DOM (Document Object
Model)`</b>`{=html}]{style="color:orange"} es la representación del
documento HTML como una **estructura de objetos** que JavaScript puede
manipular.

💡 Idea importante:

> Cada elemento HTML se convierte en un **objeto JavaScript**

------------------------------------------------------------------------

# 🌳 Estructura del DOM

El navegador transforma el HTML en un **árbol de nodos (objetos)**.

    document
       │
       └── html
            │
            ├── head
            │    └── title
            │
            └── body
                 │
                 ├── h1  (cabecero)
                 │
                 └── p   (parrafo)

📌 En JavaScript accedemos a estos objetos usando el objeto principal:

``` javascript
document
```

------------------------------------------------------------------------

# 📌 Acceder a elementos por ID

Uno de los métodos más comunes del DOM es:

``` javascript
document.getElementById("id")
```

✔ Busca un elemento específico\
✔ Devuelve un **objeto HTML**

------------------------------------------------------------------------

# 🧪 Ejemplo 1 --- Modificar contenido HTML

## HTML + JavaScript

``` html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Ejemplo DOM con JavaScript</title>
  </head>

  <body>

    <h1 id="cabecero">Ejemplo DOM con JavaScript</h1>
    <p id="parrafo">Morena!!!</p>

    <script>

      // devuelve un objeto del DOM
      let cabecero = document.getElementById("cabecero");

      // modificar contenido
      cabecero.innerHTML = "Hola Daniel";

      console.log(`El resultado cabecera es ${cabecero}`);

      let parrafo = document.getElementById("parrafo");

      parrafo.innerHTML = "Hola Aida";

      console.log(`El resultado del parrafo es ${parrafo}`);

      console.log("DOM con JavaScript");

    </script>

  </body>
</html>
```

------------------------------------------------------------------------

# 🔍 Explicación paso a paso

### 1️⃣ Obtener elemento del DOM

``` javascript
let cabecero = document.getElementById("cabecero");
```

✔ Busca el elemento que tenga ese **id**\
✔ Devuelve un **objeto HTML**

Ejemplo del objeto:

    <h1 id="cabecero">Ejemplo DOM con JavaScript</h1>

------------------------------------------------------------------------

### 2️⃣ Modificar el contenido

``` javascript
cabecero.innerHTML = "Hola Daniel";
```

📌 `innerHTML`

Permite:

-   leer el contenido
-   modificar el contenido

------------------------------------------------------------------------

### 3️⃣ Resultado visual

Antes:

    Ejemplo DOM con JavaScript
    Morena!!!

Después:

    Hola Daniel
    Hola Aida

------------------------------------------------------------------------

# 🧠 Idea importante

    HTML element  →  DOM Object  →  JavaScript puede modificarlo

Ejemplo:

    <h1 id="cabecero">

            ↓

    document.getElementById("cabecero")

            ↓

    objeto JavaScript

------------------------------------------------------------------------

# 📌 Acceder a múltiples elementos

Cuando hay varios elementos del mismo tipo usamos:

``` javascript
document.getElementsByTagName("tag")
```

✔ Devuelve una **colección de elementos**

Tipo de objeto:

    HTMLCollection

------------------------------------------------------------------------

# 🧪 Ejemplo 2 --- Obtener varios elementos

``` html
<!doctype html>
<html>

<head>
  <meta charset="UTF-8" />
  <title>Ejemplo DOM con JavaScript</title>
</head>

<body>

  <h1 id="cabecero">Ejemplo DOM con JavaScript</h1>

  <p>Parrafo 1</p>
  <p>Parrafo 2</p>
  <p>Parrafo 3</p>

  <script>

    // trae todos los elementos <p>

    let parrafos = document.getElementsByTagName("p");

    console.log(`Nro parrafos ${parrafos.length}`);

    for (let i = 0; i < parrafos.length; i++) {

      console.log(parrafos[i].innerHTML);

    }

  </script>

</body>
</html>
```

------------------------------------------------------------------------

# 🔍 Qué devuelve getElementsByTagName

Devuelve una colección:

    HTMLCollection

Ejemplo:

    parrafos

    │
    ├── p[0] → "Parrafo 1"
    ├── p[1] → "Parrafo 2"
    └── p[2] → "Parrafo 3"

------------------------------------------------------------------------

# 🔁 Recorrer los elementos con un FOR

``` javascript
for (let i = 0; i < parrafos.length; i++)
```

📌 `parrafos.length`

Cantidad de elementos encontrados.


es una colección de objetos del DOM llamada HTMLCollection
Si lo simplificamos aún más:

Es una colección de objetos HTML indexada, similar a un array, pero no es un array real.

✔ Dentro hay objetos <p>
✔ Se accede con [0], [1], [2]
✔ Tiene .length
❌ Pero no es un Array de JavaScript
------------------------------------------------------------------------

# 📊 Diagrama de funcionamiento

    HTML
     │
     │
     ▼
    Browser crea el DOM
     │
     │
     ▼
    JavaScript accede al DOM

    document.getElementById()
    document.getElementsByTagName()

     │
     │
     ▼

    Modifica o lee los elementos

------------------------------------------------------------------------

# 🎯 Resumen rápido

  Método                            Qué hace
  --------------------------------- ------------------------------
  document.getElementById()         Busca un elemento por ID
  document.getElementsByTagName()   Busca elementos por etiqueta
  innerHTML                         Lee o modifica contenido

------------------------------------------------------------------------

# 🧠 Regla mental simple

    HTML → DOM → JavaScript

o más simple:

    Elemento HTML = Objeto manipulable

------------------------------------------------------------------------

# 🚀 Ejemplo mental

    <h1 id="titulo">Hola</h1>

JavaScript lo ve como:

    objeto titulo

y podemos hacer:

``` javascript
titulo.innerHTML = "Nuevo texto"
```

------------------------------------------------------------------------

# 📌 Conclusión

El DOM permite que **JavaScript manipule el HTML dinámicamente**:

✔ cambiar texto\
✔ agregar elementos\
✔ eliminar elementos\
✔ modificar estilos

Por eso es la base de **todas las páginas web interactivas**.

# 📘 querySelectorAll() en JavaScript (DOM)

## 🧠 ¿Qué es querySelectorAll?

`querySelectorAll()` es un método del **DOM** que permite **seleccionar varios elementos del HTML utilizando selectores CSS**.

Devuelve una **NodeList** (una lista de nodos similar a un array).

---

## 🧩 Sintaxis

```javascript
document.querySelectorAll("selectorCSS");

🎨 Ejemplo HTML

<p class="azul">Mensaje 1</p>
<p class="azul">Mensaje 2</p>
<p class="azul">Mensaje 3</p>
<p>Mensaje 4</p>

⚙️ Código JavaScript

let elementos = document.querySelectorAll("p.azul");

console.log(`Cantidad de elementos: ${elementos.length}`);

for(let elemento of elementos){
    console.log(elemento.innerHTML);
}

📊 Resultado en consola
Cantidad de elementos: 3
Mensaje 1
Mensaje 2
Mensaje 3

Conceptualmente sería algo así:

NodeList
│
├── [0] <p class="azul">Mensaje 1</p>
├── [1] <p class="azul">Mensaje 2</p>
└── [2] <p class="azul">Mensaje 3</p>

Flujo de funcionamiento
document
   │
   ▼
querySelectorAll("p.azul")
   │
   ▼
NodeList (lista de elementos)
   │
   ▼
Recorrido con for / for...of
   │
   ▼
Acceso a propiedades
(innerHTML, style, textContent)

Selectores que acepta

| Selector  | Qué selecciona            |
| --------- | ------------------------- |
| `p`       | todos los párrafos        |
| `.azul`   | elementos con clase azul  |
| `#titulo` | elemento con id titulo    |
| `p.azul`  | párrafos con clase azul   |
| `div p`   | párrafos dentro de un div |

==========================================================

# 📘 Manipulación del DOM con JavaScript
## Uso de `getElementsByClassName()` y estilos dinámicos

---

# 🎯 Objetivo del código

Este programa JavaScript realiza tres tareas principales:

🟦 **Seleccionar elementos del DOM por clase**  
🟨 **Modificar el contenido de los párrafos**  
🟥 **Aplicar estilos dinámicos alternando colores**

---

# 🧩 Estructura del HTML

```html
<h1>Lista de mensajes</h1>

<p class="contenedor">Mensaje uno</p>
<p class="contenedor">Mensaje dos</p>
<p class="contenedor">Mensaje tres</p>
<p class="contenedor">Mensaje cuatro</p>
<p class="contenedor">Mensaje cinco</p>
<p class="contenedor">Mensaje seis</p>

Todos los párrafos tienen la misma clase:

contenedor

Por lo tanto JavaScript podrá seleccionarlos juntos.

🔎 Selección de elementos del DOM
let parrafos = document.getElementsByClassName("contenedor");

Este método busca:

Todos los elementos con la clase "contenedor"

Devuelve una estructura llamada:

HTMLCollection
📦 Representación conceptual

El navegador crea una colección así:

HTMLCollection
│
├── [0] <p>Mensaje uno</p>
├── [1] <p>Mensaje dos</p>
├── [2] <p>Mensaje tres</p>
├── [3] <p>Mensaje cuatro</p>
├── [4] <p>Mensaje cinco</p>
└── [5] <p>Mensaje seis</p>

📊 Cantidad de elementos
console.log(`Cantidad párrafos: ${parrafos.length}`);

Resultado en consola:

Cantidad párrafos: 6

La propiedad .length indica cuántos elementos hay en la colección.

✏️ Modificación del contenido

Se cambia el contenido de algunos párrafos usando:

innerHTML

Ejemplo:

parrafos[0].innerHTML = "TN";

📊 Cambios realizados

| Índice | Texto original | Texto nuevo |
| ------ | -------------- | ----------- |
| 0      | Mensaje uno    | TN          |
| 1      | Mensaje dos    | CINECANAL   |
| 2      | Mensaje tres   | FOX         |
| 3      | Mensaje cuatro | STUDIO 21   |
| 4      | Mensaje cinco  | (no cambia) |
| 5      | Mensaje seis   | (no cambia) |

🔁 Recorrido de los elementos

Se usa un bucle FOR para recorrer todos los párrafos.

for (let i = 0; i < parrafos.length; i++)

El índice i avanza así:

i = 0
i = 1
i = 2
i = 3
i = 4
i = 5
🎨 Lógica para aplicar colores

Dentro del for se usa esta condición:

if (i % 2 === 0)

El operador % calcula el resto de una división.

📊 Evaluación de la condición


| Índice | Operación | Resultado |
| ------ | --------- | --------- |
| 0      | 0 % 2     | 0         |
| 1      | 1 % 2     | 1         |
| 2      | 2 % 2     | 0         |
| 3      | 3 % 2     | 1         |
| 4      | 4 % 2     | 0         |
| 5      | 5 % 2     | 1         |


🎯 Aplicación de estilos
🟦 Índices pares
parrafos[i].style.color = "white";
parrafos[i].style.background = "blue";

Resultado:

Texto blanco
Fondo azul
🟥 Índices impares
parrafos[i].style.background ="red";
parrafos[i].style.color= "white";

Resultado:

Texto blanco
Fondo rojo
🎨 Resultado visual final

| Índice | Texto         | Fondo   |
| ------ | ------------- | ------- |
| 0      | TN            | 🟦 Azul |
| 1      | CINECANAL     | 🟥 Rojo |
| 2      | FOX           | 🟦 Azul |
| 3      | STUDIO 21     | 🟥 Rojo |
| 4      | Mensaje cinco | 🟦 Azul |
| 5      | Mensaje seis  | 🟥 Rojo |
