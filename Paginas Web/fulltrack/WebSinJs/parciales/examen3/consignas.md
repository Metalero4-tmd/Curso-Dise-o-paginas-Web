📘 TRABAJO PRÁCTICO EVALUATIVO

HTML + CSS – Integrador

🧾 Descripción general

Desarrollar una página web estática utilizando HTML semántico y CSS externo, aplicando correctamente los conceptos vistos en clase: estructura, selectores, pseudo-clases, pseudo-elementos, cascada y especificidad.

El foco del trabajo es conceptual y estructural, no estético.

📁 Entrega

El trabajo debe contar con:

/tp-html-css
 ├── index.html
 └── styles.css

🧱 Parte 1 – HTML (estructura y contenido)
1️⃣ Estructura semántica (obligatoria)

El documento HTML debe contener:

<header>

<main>

<section>

<article>

<footer>

📌 El <article> debe estar dentro de una <section>.

2️⃣ Encabezados y texto

1 <h1> → título principal de la página

Mínimo 2 <h2> → subtítulos de secciones

Mínimo 3 <p> → texto descriptivo

3️⃣ Lista

Agregar una lista (ul u ol) con mínimo 5 ítems.

📌 Los ítems deben ser coherentes con el tema elegido.

4️⃣ Tabla

Crear una tabla con:

<thead>

<tbody>

mínimo 3 filas

mínimo 2 columnas

Ejemplo de uso:

listado

resumen

comparación

estado / categoría

5️⃣ Enlaces

Agregar al menos 2 enlaces:

1 enlace externo (https://…)

1 enlace interno (puede ser #)

🎨 Parte 2 – CSS (estilos y selectores)
6️⃣ CSS externo

El archivo CSS debe estar:

separado del HTML

correctamente linkeado con <link>

7️⃣ Clases (obligatorio)

Utilizar clases como principal forma de estilado.

📌 Mínimo 3 clases distintas.

❌ No usar IDs para dar estilo.

8️⃣ Selectores requeridos

En el CSS deben aparecer correctamente aplicados:

Selector de elemento (p, h1, etc.)

Selector por clase (.clase)

Selector múltiple (h1, p, .clase)

li:nth-child(...)

:hover

::before o ::after

9️⃣ nth-child

Aplicar nth-child a:

una lista o

una tabla

📌 Debe tener un patrón lógico (pares, impares, desde X, etc.).

🔟 Pseudo-clases

Aplicar al menos:

a:hover

1️⃣1️⃣ Pseudo-elementos

Usar uno de estos:

::before
::after


📌 Con contenido visible (content).

🚫 Restricciones (evaluación)

No se evaluará como correcto si contiene:

❌ CSS inline
❌ IDs para estilos
❌ Selectores innecesariamente complejos
❌ Código sin comentarios básicos

📝 Comentarios en el código

El CSS debe tener comentarios breves, por ejemplo:

/* Estilos generales */

/* Lista de items */

🎯 Criterios de evaluación

Se evaluará:

Correcta estructura semántica

Uso adecuado de clases

Comprensión de cascada y especificidad

Uso coherente de selectores

Claridad y orden del código nbhvcgc 