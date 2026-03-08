📁 📘 Convenciones para nombres de archivos y carpetas
🟦 1️⃣ Regla de oro

👉 Usar minúsculas
👉 No usar espacios
👉 No usar acentos
👉 No usar caracteres raros

🟥 ❌ Nunca hacer esto
Mi Proyecto Nuevo
MiProyectoFinal!!!
Archivo Número 1.js


Porque:

Los espacios pueden romper rutas

Los acentos generan problemas en servidores

Los caracteres especiales dan errores en producción

🟩 2️⃣ Formatos recomendados

Hay 3 estilos comunes:

🔹 1) kebab-case (RECOMENDADO para carpetas y archivos generales)

Separa palabras con guiones.

mi-proyecto-web
formulario-contacto.js
lista-productos.js


✔ Es el más usado en frontend
✔ Es el más compatible
✔ Es claro visualmente

👉 Este es el estándar más común en proyectos web.

🔹 2) camelCase (más común dentro del código)
miArchivo.js
listaProductos.js


✔ Se usa más para variables y funciones
✔ En archivos no es tan común como kebab-case

🔹 3) PascalCase (para clases o componentes)
Usuario.js
Producto.js
CarritoDeCompras.js


✔ Muy usado cuando trabajes con clases
✔ Muy común en React o frameworks

🟦 3️⃣ Estructura típica de proyecto web básico

Ejemplo ordenado:

mi-proyecto/
│
├── index.html
├── css/
│   └── estilos.css
│
├── js/
│   ├── app.js
│   ├── validaciones.js
│   └── helpers.js
│
└── assets/
    ├── img/
    └── icons/

🟪 4️⃣ Reglas prácticas profesionales
📌 Archivos HTML
index.html
contacto.html
productos.html

📌 Archivos JS
app.js
auth.js
form-validator.js
error-handler.js

📌 Archivos CSS
styles.css
layout.css
buttons.css

🟨 5️⃣ Algo importante cuando empieces con objetos y clases

Si hacés una clase:

class Usuario {}


El archivo debería llamarse:

Usuario.js

📌 Convención más común

Si tenés:

class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }
}


El archivo debería llamarse:

Usuario.js


Si tenés:

class CarritoDeCompras {}


El archivo:

CarritoDeCompras.js

🧠 ¿Por qué se hace así?

Porque en proyectos modernos se usa mucho:

👉 1 archivo = 1 clase

Entonces el nombre del archivo coincide con lo que exporta.

Eso hace que cuando veas esto:

import Usuario from "./Usuario.js";


Sea totalmente coherente y legible.

🔎 Comparación rápida
Tipo	Formato recomendado
Carpetas	kebab-case
Archivos comunes	kebab-case
Clases	PascalCase
Archivo de clase	PascalCase
🎯 ¿Es obligatorio?

No. JavaScript no lo exige.

Pero es una convención profesional fuerte.

Y las convenciones importan cuando trabajás en equipo o en proyectos grandes.

🟢 Ejemplo de estructura limpia
src/
│
├── models/
│   ├── Usuario.js
│   └── Producto.js
│
├── services/
│   └── auth-service.js
│
└── utils/
    └── helpers.js


Ahí ya estás trabajando con mentalidad de proyecto serio.