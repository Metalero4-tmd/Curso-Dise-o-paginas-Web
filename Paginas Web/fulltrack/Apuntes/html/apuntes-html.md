# Curso de Desarrollo Web Moderno con HTML, CSS y JavaScript (Versión Mejorada)

---

## 1. Estructura básica de un documento HTML5

```html
<!DOCTYPE html>
<html lang="es">
  <head>
  </head>
  <body>
  </body>
</html>
```

**Explicación de etiquetas:**

| Etiqueta          | Función                                                                         |
| ----------------- | ------------------------------------------------------------------------------- |
| `<!DOCTYPE html>` | Declara que el documento es HTML5. No es una etiqueta, sino una declaración.    |
| `<html>`          | Contenedor raíz del documento.                                                  |
| `<head>`          | Contiene metadatos y configuraciones para el navegador (no visible al usuario). |
| `<body>`          | Contiene el contenido visible de la página.                                     |

---

## 2. Ejemplo completo comentado

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>UNIVERSIDAD HTML</title>
  </head>
  <body>
    <h1>CURSO UNIVERSIDAD HTML</h1>
    <p>Mi primera página</p>
  </body>
</html>
```

---

## 3. Etiquetas sin contenido (self-closing)

Se usan para **metadatos, codificación y compatibilidad**. No tienen contenido interno.

```html
<meta charset="UTF-8" />
```

---

## 4. Método abreviado (Emmet) en VS Code

```
! + Tab
```

Genera automáticamente la estructura base de HTML5.

---

## 5. Etiquetas básicas de texto

| Etiqueta | Función                             |
| -------- | ----------------------------------- |
| `<br />` | Salto de línea                      |
| `<hr />` | Línea horizontal (separador visual) |

---

## 6. Enlaces (`<a>`)

```html
<a href="https://www.google.com" target="_blank">Google</a>
```

**Atributos importantes:**

* `href` → Destino del enlace
* `target="_blank"` → Abre en una nueva pestaña

---

## 7. Imágenes en HTML

### 7.1 Imagen local

```html
<img src="HTML/Imagenes/html5.png" alt="Logo de HTML5" />
```

### 7.2 Imagen desde servidor externo

```html
<img src="https://globalmentoring.com.mx/imagenes/css3.png" alt="Logo de CSS3" />
```

### 7.3 Atributo `alt`

* Obligatorio.
* Describe la imagen para accesibilidad y SEO.

✅ Correcto: `alt="Logo de JavaScript"`

❌ Incorrecto: `alt="No se encuentra la imagen"`

### 7.4 Ancho y alto de imágenes

```html
<img src="HTML/Imagenes/html5.png" alt="Logo de HTML5" width="100" height="120" />
```

> Se recomienda usar **números** sin `px`.

### 7.5 Atributo `title`

* Muestra texto al pasar el mouse (desktop).
* Opcional y baja prioridad en SEO.

```html
<img src="HTML/Imagenes/html5.png" alt="Logo de HTML5" title="Logo HTML5" />
```

### 7.6 Atributo `style` (inline)

* Útil solo para pruebas rápidas.
* En producción, usar **CSS externo**.

```html
<body style="background-color: rgb(211, 221, 226);">
<p style="color: #c51e1e;">Tipos de Memoria RAM</p>
```

### 7.7 Etiqueta `<pre>`

* Respeta espacios y saltos de línea.

```html
<pre>
En la historia de las memorias RAM
    Año 1960
    Año 1990
</pre>
```

---

## 8. Metadatos importantes (`<meta>`)

| Meta                 | Uso                                                                |
| -------------------- | ------------------------------------------------------------------ |
| description          | Texto usado por buscadores (SEO), 150-160 caracteres recomendados. |
| author               | Autor del sitio, útil en blogs.                                    |
| http-equiv="refresh" | Refresca la página automáticamente.                                |

Ejemplos:

```html
<meta name="description" content="Curso introductorio de HTML, CSS y JavaScript para principiantes" />
<meta name="author" content="Daniel Morales" />
<meta http-equiv="refresh" content="30" />
```

---

## 9. Etiquetas semánticas de texto

| Etiqueta   | Función               |
| ---------- | --------------------- |
| `<i>`      | Cursiva visual        |
| `<em>`     | Énfasis semántico     |
| `<b>`      | Negrita visual        |
| `<strong>` | Importancia semántica |
| `<span>`   | Contenedor en línea   |

Ejemplo `<span>`:

```html
<p>Hola <span style="color:red;">Mundo</span></p>
```

---

## 10. Contenedores

| Etiqueta | Función                       |
| -------- | ----------------------------- |
| `<div>`  | Contenedor de bloque genérico |
| `<span>` | Contenedor en línea           |

---

## 11. SEO básico

* Usar HTML semántico
* Texto alternativo (`alt`)
* Meta descripción
* Contenido claro y estructurado

---

## 12. Listas

| Tipo        | Etiqueta | Uso              |
| ----------- | -------- | ---------------- |
| Desordenada | `<ul>`   | Viñetas          |
| Ordenada    | `<ol>`   | Numerada         |
| Elemento    | `<li>`   | Ítem de la lista |

**Regla:** Sublistas van **dentro de `<li>`**.

```html
<ol>
  <li>Item 1</li>
  <li>
    Item 2
    <ul>
      <li>Subitem A</li>
      <li>Subitem B</li>
    </ul>
  </li>
  <li>Item 3</li>
</ol>
```

---

## 13. Tablas en HTML

```html
<table>
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
  </tr>
  <tr>
    <td>Daniel</td>
    <td>45</td>
  </tr>
</table>
```

**Notas:**

* `<table>` → Tabla
* `<tr>` → Fila
* `<th>` → Encabezado de columna
* `<td>` → Celda de datos

> No existe etiqueta `<col>` para datos directos.

---

## 14. Formularios

```html
<form action="procesar.php" method="get">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" placeholder="Escribí tu nombre" maxlength="20" minlength="1" />

  <label for="edad">Edad:</label>
  <input type="number" id="edad" name="edad" />

  <label for="telefono">Teléfono:</label>
  <input type="tel" id="telefono" name="telefono" maxlength="13" minlength="3" />

  Sexo:
  <input type="radio" id="masculino" name="sexo" value="masculino" />
  <label for="masculino">Masculino</label>
  <input type="radio" id="femenino" name="sexo" value="femenino" />
  <label for="femenino">Femenino</label>
  <button type="submit" id="enviar">Enviar</button>
  <button type="button" id="cancelar">cancelar</button>

</form>
```

---

## 15. Conexión con CSS externo

```html
<link rel="stylesheet" href="css/estilos.css" />
```

* `rel="stylesheet"` → Obligatorio
* `href` → Ruta del CSS
* `type="text/css"` → Opcional

---

## 16. Plantilla HTML5 moderna

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- Esto hace que la página se ajuste al ancho de la pantalla del dispositivo y evita que el contenido se desborde -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Conecta tu archivo de CSS externo para dar estilos a la página. -->
    <link rel="stylesheet" href="style.css" />
    <!--Esto hace que agrege un icono a la pestaña-->
    <link rel="shortcut icon" href="../logo/goku.ico" />
    <title>Mi web</title>
  </head>
  <body>
    <!-- Header principal de la página: contiene logo, menú y título principal -->
    <header>
      <!-- Aquí va el contenido del header, como logo y navegación -->
      <h1>Mi primera Web</h1>
      <img src="../logo/heavy.ico" alt="Heavy" width="380" height="300" />
      <!-- Menú de navegación principal -->
      <nav>
        <ul>
          <li>
            <a href="https://www.google.com" target="_parent">ir a google</a>
          </li>
          <li><a href="./enlaces.html" target="_parent">enlaces</a></li>
        </ul>
      </nav>
    </header>
    <!-- Sección principal de contenido: información importante de la página, solo puede haber uno por cada archivo html -->
    <main>
      <!--representa una sección genérica independiente de un documento -->
      <section id="inicio">
        <h2>Artículo principal</h2>
        <p>Este es el contenido más importante que queremos mostrar.</p>
      <!--representa una sección genérica independiente de un documento -->
      </section>
      <section id="nosotros">
        <h2>Nosotros</h2>
      </section>

    </main>
           <footer>
        <!--representa un pie de página para el contenido de sección más cercano o el elemento-->
        <p>&copy; 2026 Mi Página. Todos los derechos reservados.</p>
        <p>Contacto: contacto@mipagina.com</p>
    </footer>

  </body>
</html>


## 17. Diagrama de estructura HTML5 (simplificado)

```
HTML
│
├─ head
│  ├─ meta charset
│  ├─ meta viewport
│  ├─ title
│  ├─ link CSS
│  └─ link favicon
│
└─ body
   ├─ header
   │  ├─ div.logo
   │  └─ nav > ul > li > a
   ├─ main
   │  ├─ section.main-content
   │  │  └─ article
   │  └─ aside
   └─ footer

**Esta versión está organizada para que puedas usarla como guía de estudio y referencia rápida.**
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pagina Principal</title>
</head>
<body>
  <form action="datos.php" method="post">
  
    <label for="nombre">nombre</label>
    <input type="text" id="nombre" name="nombre" placeholder="ingrese su nombre..." required>
    <br>
    <label for="contrasena">contraseña</label>
    <input type="password" name="contrasena" id="contrasena" placeholder="ingrese su contraseña..." required>
    <br>
    <label for="correo">mail</label>
    <input type="email" name="correo" id="correo" placeholder="ingrese su email" required>
    <br>
    <label for="edad">edad</label>            
    <input type="number" name="edad" id="edad" min="1" max="120" required>
    <br>
    <label for="fecha">fecha</label>
    <input type="date" name="fecha" id="fecha" min="2026-01-01" required >        
    <br>
    <label for="comentario">comentario</label>
    <br>
    <textarea name="comentario" id="comentario" cols="30" rows="5"></textarea>
    <br>
    <label for="pais">pais</label>
    <select name="pais" id="pais" required>

    <option value="" selected disabled>Seleccione un país</option>
    <option value="arg">Argentina</option>
    <option value="ita">Italia</option>
    <option value="mex">México</option>       
    </select>
    <br>
   <label for="archivo">cargar archivo</label>
   <br>
  <input type="file" name="archivo" id="archivo"> 
  <br>
   <button type="submit" id="enviar">Enviar</button>
   <button type="button" id="cancelar">cancelar</button>  
  </form>
</body>
</html>

# Apuntes HTML – Fundamentos y Buenas Prácticas

---

## 1. ¿Qué es HTML?
HTML (**HyperText Markup Language**) es un lenguaje de marcado que se utiliza para:
- Definir la **estructura** de una página web
- Dar **significado semántico** al contenido

📌 HTML **NO se usa para diseño ni maquetado visual**.

---

## 2. Estructura básica de un documento HTML
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título de la página</title>
</head>
<body>
  Contenido visible
</body>
</html>
Conceptos clave:
<!DOCTYPE html> → indica HTML5

<head> → información para el navegador

<body> → contenido visible para el usuario

3. HTML vs CSS (concepto fundamental)
HTML
Define qué es cada cosa

Estructura el contenido

Da significado

CSS
Define cómo se ve

Hace el diseño

Hace el maquetado (layout)

📌 Regla clave

Si es estructura → HTML
Si es visual o diseño → CSS

4. Formularios HTML (estructura)
Ejemplo completo
html
Copiar código
<form action="datos.php" method="post">

  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" name="nombre" required>

  <label for="correo">Correo</label>
  <input type="email" id="correo" name="correo" required>

  <label for="edad">Edad</label>
  <input type="number" id="edad" name="edad" min="1" max="120" required>

  <label for="fecha">Fecha</label>
  <input type="date" id="fecha" name="fecha" required>

  <label for="pais">País</label>
  <select id="pais" name="pais" required>
    <option value="" selected disabled>Seleccione un país</option>
    <option value="arg">Argentina</option>
    <option value="ita">Italia</option>
    <option value="mex">México</option>
  </select>

  <input type="submit" value="Enviar">

</form>
5. Atributos importantes en formularios
required
Hace que el campo sea obligatorio

Valida desde el navegador

Evita envíos incompletos

html
Copiar código
<input type="text" required>
method
get → datos visibles en la URL

post → datos no visibles (más usado)

html
Copiar código
<form method="post">
Validaciones básicas sin JavaScript
html
Copiar código
<input type="number" min="1" max="120">
<input type="date" min="2026-01-01">
6. Entidades HTML
¿Qué son?
Las entidades HTML representan caracteres especiales que:

Tienen significado propio en HTML

No pueden escribirse directamente

📌 Todas:

Empiezan con &

Terminan con ;

Ejemplo
html
Copiar código
<p>
  Texto con comillas: &quot;Hola&quot;<br>
  Menor que: &lt;<br>
  Mayor que: &gt;<br>
  Ampersand: &amp;
</p>
Entidades más comunes
Entidad	Resultado
&lt;	<
&gt;	>
&amp;	&
&quot;	"
&apos;	'
&nbsp;	espacio

7. ⚠️ Importante: NO usar HTML para maquetar
❌ MAL (usar HTML para diseño)
html
Copiar código
<p>Nombre:&nbsp;&nbsp;&nbsp;&nbsp;<input type="text"></p>
❌ Problemas:

Código sucio

Mala práctica

No escalable

Difícil de mantener

✅ BIEN (HTML + CSS)
html
Copiar código
<label>Nombre</label>
<input type="text">
css
Copiar código
label {
  display: block;
  margin-bottom: 8px;
}
✔ HTML → estructura
✔ CSS → diseño y espaciado

8. ¿Para qué SÍ usar entidades HTML?
Usos correctos:
Mostrar símbolos reservados (<, >, &)

Mostrar código como texto

Contenido técnico o educativo

Usos incorrectos:
Crear espacios

Acomodar elementos

Maquetar páginas

Diseñar formularios

9. Qué conviene recordar (criterio práctico)
✔ Recordar:
&lt;

&gt;

&amp;

&quot;

✔ El resto:
👉 Se consulta cuando hace falta

10. Criterio de aprendizaje (nota personal)
No memorizar todo

Entender conceptos

Saber qué se puede hacer

Consultar cuando haga falta

📌 El conocimiento se consolida con la práctica.

1. Tu idea es correcta (aunque el nombre técnico venga después)

Cuando vos decís:

“No meto mano en el código, llamo a ese pedazo y listo”

Eso conceptualmente es correcto.

Hoy lo estás llamando:

“método”

“pedazo de código”

“algo que llamo”

Más adelante el nombre técnico será:

clase CSS

regla CSS

📌 El nombre se aprende después.
📌 La idea ya la entendiste, y eso es lo importante.

============================================================================
# Audio y Video en HTML

## Etiquetas `<audio>` y `<video>`
HTML5 permite insertar audio y video sin plugins externos.

- `<audio>` → contenido de audio
- `<video>` → contenido de video

HTML define el contenido, no el diseño visual.

---

## Ejemplo de Audio
```html
<audio controls>
  <source src="multimedia/audio1.mp3" type="audio/mpeg">
  <source src="multimedia/audio1.ogg" type="audio/ogg">
  <source src="multimedia/audio1.wav" type="audio/wav">
  Tu navegador no admite audio HTML5
</audio>

<video controls width="320" height="240">
  <source src="multimedia/video1.mp4" type="video/mp4">
  <source src="multimedia/video1.webm" type="video/webm">
  <source src="multimedia/video1.ogg" type="video/ogg">
  Tu navegador no admite video HTML5
</video>


---

## Cierre (importante)
Este ejemplo:
- ✔ Sí vale la pena aprenderlo
- ✔ Sí se usa en proyectos reales
- ✔ Encaja con tu enfoque de sitios chicos / educativos / negocios

Cuando quieras, el próximo paso natural es:
- audio/video + **CSS básico**
- o **estructura semántica completa** (`header`, `main`, `section`, `footer`)

Vas avanzando con muy buen criterio 👌
===============================
enviar un mail desde una web
===============================

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>link</title>
  </head>
  <body>
    <a href="mailto:mo.daniel@hotmail.com?subject=contacto">Enviar email</a>
  </body>
</html>


## 🟦 TEMA – Contenido embebido en HTML (`<iframe>`)

### ¿Qué es un `<iframe>`?
La etiqueta `<iframe>` se utiliza para **embeber (incrustar)** contenido externo dentro de una página web.

📌 No copia el contenido  
📌 Muestra otra página **dentro de un marco**

---

### Ejemplo básico

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>web</title>
</head>
<body>

  <h2>Contenido embebido</h2>

  <iframe 
    src="https://tn.com.ar"
    width="580"
    height="600">
  </iframe>

</body>
</html>

Importante: por qué no carga TN

Aunque el código sea correcto, tn.com.ar bloquea el uso de iframes por seguridad.

El servidor envía headers como:

X-Frame-Options

Content-Security-Policy

📌 Resultado:

Pantalla en blanco

Error en consola

El contenido no se muestra

❗ No es un error del HTML
=========================================

## 🟦 TEMA – Contenido desplegable en HTML (`<details>` y `<summary>`)

### ¿Qué son `<details>` y `<summary>`?
Las etiquetas `<details>` y `<summary>` se usan para **mostrar y ocultar contenido** de forma nativa, sin JavaScript.

- `<details>` → contenedor del contenido oculto
- `<summary>` → título visible y clickeable

📌 El navegador se encarga del comportamiento.

---

### Ejemplo básico

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>detalle</title>
</head>
<body>

  <details>
    <summary>Mostrar detalle</summary>
    <p>Esta es información vital</p>
  </details>

</body>
</html>

Explicación de etiquetas

<details>

Contiene toda la información desplegable

Puede incluir texto, listas, imágenes, etc.

<summary>

Es el encabezado visible

Debe ser el primer hijo de <details>

Es interactivo por defecto

<p>

Contenido que se muestra u oculta

=====================================================

## 🟦 TEMA – Uso de `<script>` y `<noscript>` en HTML

### ¿Qué es `<script>`?
La etiqueta `<script>` se utiliza para **ejecutar código JavaScript** dentro de una página web o para **vincular archivos externos**.

📌 JavaScript agrega **lógica y comportamiento**, no estructura.

---

### Ejemplo básico con JavaScript embebido

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Script y Noscript</title>
</head>
<body>

  <h2>Ejemplo de script</h2>

  <script>
    alert("Hola mundo!");
  </script>

</body>
</html>

.

🧠 Respuesta larga (criterio profesional)
<script>

Es esencial hoy:

SPAs (React, Vue, Angular)

Validaciones

Interacciones

Lógica de negocio

APIs

Animaciones

📌 Sin <script>, la web moderna no existe.

<noscript> ¿se usa hoy?
✅ Sí se usa cuando:

El sitio depende fuertemente de JavaScript

Querés avisar al usuario que algo no va a funcionar

Hay requerimientos de:

accesibilidad

SEO

cumplimiento legal (algunos países)

Ejemplos reales:

Homebanking

Sistemas internos

Paneles administrativos

Apps web (SPA)

<noscript>
  <p>Esta aplicación requiere JavaScript para funcionar correctamente.</p>
</noscript>

Página HTML
│
├── script
│    └── JavaScript (si está habilitado)
│
└── noscript
     └── Mensaje alternativo (si JS está deshabilitado)

<noscript>
  <p>Esta aplicación requiere JavaScript para funcionar.</p>
</noscript>

🟢 Qué es <noscript> en la práctica real

👉 Es solo un texto informativo.
👉 No ejecuta lógica
👉 No reemplaza funcionalidad
👉 No “arregla” nada


====================================================
 Etiquetas Semánticas en HTML5
====================================================

Las **etiquetas semánticas** describen el significado del contenido que contienen, no solo su forma visual.

---

## Beneficios principales

- **Mejoran la accesibilidad**  
  Las etiquetas semánticas hacen que el contenido sea más accesible para personas con discapacidades visuales o cognitivas, ya que los lectores de pantalla pueden interpretar mejor la estructura del documento.

- **Mejoran el SEO**  
  Los motores de búsqueda utilizan la estructura semántica para comprender mejor el contenido de una página web, lo que puede mejorar su indexación y posicionamiento.

- **Facilitan el mantenimiento**  
  El código es más claro y legible para los desarrolladores, lo que facilita el mantenimiento del sitio y su actualización.

---
=========================================
## Diagrama general de estructura HTML5

HTML
│
├── header
│ └── nav
│
├── main
│ ├── section
│ │ ├── article
│ │ └── article
│ │
│ └── section
│ └── article
│
├── aside
│
└── footer

====================================


---

## 🧠 Lectura del diagrama (importante)

### `<header>`
Encabezado del sitio o de una sección.

Suele contener:
- título
- logo
- navegación

📌 Puede haber más de un `<header>`, pero **solo uno principal por página**.

---

### `<nav>`
Menú de navegación.

- Contiene enlaces importantes.
- No todo enlace va en `<nav>`, solo navegación principal.

---

### `<main>`
Contenido principal del documento.

- ❗ Solo uno por página.
- ❌ No va dentro de `<header>`, `<footer>` ni `<aside>`.

---

### `<section>`
Agrupa contenido relacionado.

- Tiene sentido temático.
- Normalmente lleva un `<h2>`, `<h3>`, etc.

📌 No usar `<section>` solo para “envolver”.

---

### `<article>`
Contenido independiente y reutilizable.

Ejemplos:
- post
- noticia
- card
- entrada de blog

👉 Un `<article>` debería tener sentido por sí solo.

---

### `<aside>`
Contenido secundario o complementario.

Ejemplos:
- publicidad
- enlaces extra
- información complementaria

---

### `<footer>`
Pie de página.

Información típica:
- copyright
- contacto
- enlaces legales

📌 Puede haber:
- footer de página
- footer de section
- footer de article

---

## 🟢 Regla mental simple

header → presentación
nav → navegación
main → lo importante
section → agrupar temas
article → contenido independiente
aside → contenido lateral
footer → cierre


---

## 🧪 Mini ejemplo estructural (conceptual)

```html
<body>

  <header>
    <nav></nav>
  </header>

  <main>
    <section>
      <article></article>
      <article></article>
    </section>
  </main>

  <aside></aside>

  <footer></footer>

</body>
📌 No es diseño
📌 Es arquitectura del documento

====================================================
Nota: Etiqueta <figure>
🔷 ¿Qué es <figure>?

La etiqueta <figure> se usa para agrupar contenido independiente que está relacionado con el contenido principal, pero que podría moverse a otro lugar sin romper el sentido del texto.

📌 Es semántica, no visual.

🔹 ¿Qué tipo de contenido va dentro de <figure>?

Puede contener:

imágenes (<img>)

diagramas

gráficos

código

tablas

videos

ilustraciones

👉 Contenido referenciado o explicado por el texto.

🔹 Relación con <figcaption>

Normalmente se usa junto con <figcaption>, que sirve para:

describir

titular

explicar la figura

✅ Ejemplo correcto
<figure>
  <img src="html5.png" alt="Logo de HTML5">
  <figcaption>Figura 1: Logo oficial de HTML5</figcaption>
</figure>


📌 Esto forma una unidad semántica:
imagen + descripción

Relación semántica con <aside>
aside
 └─ figure
     ├─ img
     └─ figcaption

====================================================
Ejemplo completo de HTML5 semántico (comentado)
<!doctype html>
<!-- Declara el documento como HTML5 -->

<html lang="es">
<!-- Elemento raíz del documento. El atributo lang indica el idioma del contenido -->

<head>
  <!-- Contiene metadatos y configuraciones para el navegador -->

  <meta charset="UTF-8" />
  <!-- Define la codificación de caracteres -->

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Hace que la página sea responsive -->

  <title>HTML Etiquetas semánticas</title>
  <!-- Título que aparece en la pestaña del navegador -->
</head>

<body>
  <!-- Contenido visible de la página -->

  <header>
    <!-- Encabezado principal del sitio -->

    <h1>Mi página web</h1>
    <!-- Título principal -->

    <nav>
      <!-- Navegación principal -->

      <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="link.html">Ir a link</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <!-- Contenido principal -->

    <section>
      <article>
        <h2>Artículo 1</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </article>
    </section>

    <section>
      <article>
        <h2>Artículo 2</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </article>
    </section>

    <aside>
      <!-- Contenido complementario -->

      <h2>Barra lateral</h2>

      <figure>
        <img src="../Imagenes/html5.png" alt="Logo oficial de HTML5" />
        <figcaption>Figura 1: Logo oficial de HTML5</figcaption>
      </figure>
    </aside>

  </main>

  <footer>
    <p>&copy; 2026 - Daniel Morales</p>
    <p>Práctica HTML5</p>
  </footer>

</body>
</html>

==============
Grafico
==============

<main>
  <section>
    <h2>Productos destacados</h2>

    <article>Producto 1</article>
    <article>Producto 2</article>
  </section>
</main>


========================================

<h1> → uno solo, tema principal

<h2> → secciones

Listas y tablas → datos solamente

Contexto → siempre afuera