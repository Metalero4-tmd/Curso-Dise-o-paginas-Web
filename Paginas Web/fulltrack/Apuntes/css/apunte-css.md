📘 APUNTE — CSS

Tipos de selectores, pseudo-clases y pseudo-elementos

(qué son y sobre qué actúan)

1️⃣ SELECTORES BÁSICOS
🔹 Selector de elemento (etiqueta)
p {
color: blue;
}

Tipo: Selector de elemento
Actúa sobre: todas las etiquetas <p>
Uso en producción: ✔️ sí
Especificidad: baja

🔹 Selector de clase
.destacado {
color: red;
}

Tipo: Selector de clase
Actúa sobre: elementos con class="destacado"
Uso en producción: ✔️ SÍ (el más usado)
Especificidad: media
Nota: reutilizable

🔹 Selector por ID
#titulo-principal {
color: green;
}

Tipo: Selector por ID
Actúa sobre: un único elemento
Uso en producción: ⚠️ limitado
Especificidad: alta
Nota: no recomendado para estilos generales

2️⃣ PSEUDO-CLASES DE INTERACCIÓN

(estados del elemento)

🔹 :hover
a:hover {
color: red;
}

Tipo: Pseudo-clase
Actúa sobre: elementos (ej: a, .caja)
Cuándo se activa: mouse encima
Uso en producción: ✔️ MUY usado

🔹 :active
a:active {
color: gray;
}

Tipo: Pseudo-clase
Actúa sobre: elementos
Cuándo se activa: mientras se hace click
Uso en producción: ✔️ sí (menos visible)

🔹 :hover sobre clase
.caja1:hover {
background-color: green;
}

Tipo: Pseudo-clase
Actúa sobre: elementos con clase .caja1
Uso en producción: ✔️ sí

3️⃣ PSEUDO-CLASES DE POSICIÓN

(orden dentro del padre)

⚠️ Importante:
Estas NO son pseudo-elementos → son pseudo-clases

🔹 :nth-child(odd)
li:nth-child(odd) {
background-color: #eee;
}

Tipo: Pseudo-clase
Actúa sobre: elementos (li)
Selecciona: hijos impares (1, 3, 5…)
Uso en producción: ✔️ sí

🔹 :nth-child(even)
li:nth-child(even) {
background-color: #ddd;
}

Tipo: Pseudo-clase
Actúa sobre: elementos
Selecciona: hijos pares (2, 4, 6…)
Uso en producción: ✔️ sí

🔹 :nth-child(2n + 3)
li:nth-child(2n + 3) {
background-color: aquamarine;
}

Tipo: Pseudo-clase
Actúa sobre: elementos (li)
Selecciona: 3, 5, 7…
Uso en producción: ✔️ sí, con moderación

🔹 Selección puntual con nth-child
li:nth-child(1),
li:nth-child(3),
li:nth-child(4) {
background-color: aquamarine;
}

Tipo: Pseudo-clase
Actúa sobre: elementos específicos
Uso en producción: ✔️ recomendado cuando son pocos

🔹 :first-child
li:first-child {
font-weight: bold;
}

Tipo: Pseudo-clase
Actúa sobre: primer hijo
Uso en producción: ✔️ sí

🔹 :last-child
li:last-child {
color: red;
}

Tipo: Pseudo-clase
Actúa sobre: último hijo
Uso en producción: ✔️ sí

4️⃣ PSEUDO-ELEMENTOS

(crean “partes” visuales del elemento)

🔹 ::before
p::before {
content: "==>";
}

Tipo: Pseudo-elemento
Actúa sobre: el contenido visual del elemento
Inserta: contenido antes
Uso en producción: ✔️ sí

🔹 ::after
p::after {
content: "\*\*\*";
}

Tipo: Pseudo-elemento
Actúa sobre: el contenido visual del elemento
Inserta: contenido después
Uso en producción: ✔️ sí

📌 Nota:

::before y ::after no modifican el HTML, solo lo visual.

5️⃣ RESUMEN FINAL (CLARITO)
Caso Qué es Actúa sobre
p Selector de elemento Etiquetas
.clase Selector de clase Elementos con clase
#id Selector por ID Elemento único
:hover Pseudo-clase Estado
:active Pseudo-clase Estado
:nth-child() Pseudo-clase Posición
::before Pseudo-elemento Contenido visual
::after Pseudo-elemento Contenido visual

===============================================================================================================
Nota:
===============================================================================================================
🧱 Primero: el mapa mental (clave)

En CSS hay 3 cosas distintas que suelen mezclarse:

1️⃣ Selectores
2️⃣ Pseudo-clases → :
3️⃣ Pseudo-elementos → ::

👉 :hover NO es lo mismo que ::before.

1️⃣ :hover → PSEUDO-CLASE
🧠 Qué es

Una pseudo-clase describe un estado de un elemento real.

“Este elemento, cuando está en tal estado…”

📌 Ejemplo
a:hover {
color: red;
}

✔️ El elemento ya existe (a)
✔️ Solo cambia cómo se ve cuando pasa algo (mouse encima)
✔️ Representa un estado

Otros ejemplos
input:focus
button:disabled
li:first-child

👉 Todas son condiciones / estados

2️⃣ ::before y ::after → PSEUDO-ELEMENTOS
🧠 Qué son

Un pseudo-elemento crea una parte virtual del elemento.

“Antes o después del contenido del elemento, agregá algo”

⚠️ No existen en el HTML.

📌 Ejemplo
p::before {
content: "👉 ";
}

✔️ El <p> existe
✔️ El 👉 NO está en el HTML
✔️ Lo crea CSS

❗ Regla CLAVE (esta te ordena todo)
:hover ::before
¿Es un elemento real? ✅ Sí ❌ No
¿Crea contenido? ❌ No ✅ Sí
¿Depende de una acción/estado? ✅ Sí ❌ No
¿Necesita content? ❌ No ✅ Sí
3️⃣ El error típico (normal que pase)

❌ Pensar que:

p:hover::before

son “dos cosas parecidas”.

En realidad es:

Cuando el párrafo está en hover, mostrale el pseudo-elemento

p:hover::before {
content: "🔥 ";
}

✔️ Ahí trabajan juntos, pero no son lo mismo.

🧩 Cómo pensarlo sin confundirte (truco mental)
Pseudo-clase (:)

👉 “CUÁNDO”

cuándo pasa el mouse

cuándo está activo

cuándo es el primero

Pseudo-elemento (::)

👉 “QUÉ PARTE”

antes del contenido

después del contenido

🎓 Para decirlo en examen (frase perfecta)

:hover es una pseudo-clase que aplica estilos según el estado del elemento.
::before y ::after son pseudo-elementos que permiten generar contenido virtual sin modificar el HTML.

Con eso te aplauden.

🧠 Bonus: relación con Java (para que cierre el círculo)

:hover ≈ evento (onMouseOver)

::before ≈ contenido generado automáticamente

La definición correcta quedaría así:

Una pseudo-clase es cuando un elemento se encuentra en un determinado estado o cumple una condición específica, y en función de eso se le aplican estilos.

Si querés todavía más prolijo (nivel examen/oral):

Una pseudo-clase permite aplicar estilos a un elemento real según su estado o condición, sin necesidad de modificar el HTML.

========================================================================================
Ejemplo
========================================================================================
/_ Estilos para la lista:
Selecciona los elementos li desde el 4° en adelante _/
li:nth-child(1n + 4) {
color: white;
background-color: blue;
}

/_ Estilo del título principal _/
.titulo-principal {
color: crimson;
}

/_ Pseudo-clase: estado hover del enlace _/
a:hover {
color: rgb(112, 36, 8);
}

/_ Estilo aplicado a la clase caja-info _/
.caja-info {
border-style: solid;
color: darkblue;
}

/_ Estilo para celdas de tabla (th y td) _/
th,
td {
color: rgb(37, 15, 243);
}

/_ Pseudo-elemento ::before:
Agrega contenido visual antes del párrafo _/
p::before {
content: ">> ";
color: rgb(247, 179, 9);
}
=================================================================================
Reglas de Precedencia CSS
=================================================================================

- Las reglas de precedencia en CSS ==>Determina que reglas se aplican, cuando hay multiples reglas que afecta a un elemento, en un documento html.

- Es para casos muy espeficicos, esta regla tendra la maxima prioridad, incluso con las reglas de selectores mas especificas

Ejemplo

p{
font-size: 36px;
color: blue;

}

.caja-elemento1{

color: red !important;
}
========================================================
nota:
Combiene no usarlo, lo mejor es diseñarlo en figma
========================================================
Fuente unica para todos los navegadores
usar fuentes de google
====================================
🎯 Cómo pensarlo sin volverte loco

La clave no es el tamaño del negocio, sino el tipo de proyecto.

🟢 Negocio chico (web simple, pocas visitas)

Google Fonts remoto

TTF local

listo

foco en contenido y funcionalidad

🟡 Negocio medio (el que vos describís)

web pública

varias sucursales

intención de crecer

imagen profesional

👉 Acá sí tiene sentido:

===================================
ejemplo fuente en link, texto y Redondear Bordes

 <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="./css/fuentes.css">

    <title>Document</title>

  </head>
  <body>
    <h2>Mi web</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero harum,
      autem cumque officia placeat itaque labore enim. Ipsum, rerum blanditiis
      impedit placeat quisquam non ipsam cupiditate praesentium eos a dolorum.
    </p>
  </body>
</html>

archivo: fuentes.css

p {
font-family: 'Oswald', sans-serif;
font-weight: 400;
}

=====================================================================
Para importar fuentes:

archivo fuente-import.css

@font-face {
font-family:'fuente-importada' ;
src: url(../fuente/Oswald/Oswald-VariableFont_wght.ttf);
}

p{
font-family: 'fuente-importada' ;

}

arhivo html

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="./css/fuentes.css">

    <title>Document</title>

  </head>
  <body>
    <h2>Mi web</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero harum,
      autem cumque officia placeat itaque labore enim. Ipsum, rerum blanditiis
      impedit placeat quisquam non ipsam cupiditate praesentium eos a dolorum.
    </p>
  </body>
</html>

================================================================

.articulo {
font-size: 24px; /_ sirve: cambia el tamaño del texto _/
font-weight: bolder; /_ sirve: hace el texto más grueso/negrita _/
font-style: italic; /_ sirve: pone cursiva _/
text-transform: capitalize; /_ sirve, pero limitado: solo capitaliza la primera letra de cada palabra, no después de guiones o caracteres especiales _/
text-decoration: underline; /_ sirve: subraya el texto _/
color: blue; /_ sirve: cambia color _/
}
==================================================================
adjunta un imagen para uego poner un texto

.caja4 {
background-image: url(/fulltrack/archivos/Imagenes/lightning-7389933_640.jpg);
width: 600px;
height: 400px;
color: white;
border-radius: 10px 10px 10px 10px ;
}

html

<div class="caja4">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quam
maiores eveniet, possimus adipisci esse delectus suscipit voluptate illum
voluptatibus nobis doloribus earum sapiente ipsum debitis voluptatem ab
consequatur dolor?
</div>
===============================================================================

# 📦 Box Model (modelo de caja en CSS)

En CSS **todo elemento es una caja**. Aunque no la veas, siempre existe y tiene una estructura interna muy clara.

El orden **real y correcto**, de adentro hacia afuera, es:

**contenido → padding → borde → margin**

---

## 🧩 Gráfico del Box Model

```
┌──────────────────────────────┐  ← margin (espacio externo)
│  ┌────────────────────────┐  │
│  │  ┌──────────────────┐  │  │
│  │  │   CONTENIDO       │  │  │
│  │  └──────────────────┘  │  │
│  │        padding           │  │
│  └────────────────────────┘  │
│          borde                │
└──────────────────────────────┘
```

---

## 1️⃣ Contenido

Es **lo que hay dentro del elemento**:

- texto
- imágenes
- íconos
- botones

Cuando definís:

```css
width: 300px;
height: 150px;
```

👉 eso define **el tamaño del contenido**, no del borde ni del margen.

---

## 2️⃣ Padding (espacio interno)

👉 El **padding es el espacio interno entre el contenido y el borde**.

- No es un borde
- No es un margen
- Es **espacio**

Sirve para que el contenido **no quede pegado al borde**.

Ejemplo:

```css
padding: 20px;
```

✔️ El fondo del elemento **sí ocupa el padding**
✔️ Empuja el contenido hacia adentro

👉 Pensarlo como: **“aire interno”** está perfecto.

---

## 3️⃣ Borde (border)

👉 Es la **línea visible** que rodea la caja.

```css
border: 2px solid black;
```

- Marca el límite de la caja
- Rodea al padding y al contenido
- Suma tamaño al elemento

---

## 4️⃣ Margin (espacio externo)

👉 El **margin es el espacio por fuera de la caja**.

```css
margin: 20px;
```

- Separa una caja de otra
- Es transparente
- No tiene fondo
- No forma parte del elemento

👉 Pensalo como **la distancia entre elementos**.

---

## 🧠 Diferencia clave para no confundirse

- Si el espacio **tiene color de fondo** → es **padding**
- Si el espacio **no tiene color** → es **margin**

---

## ⚠️ Detalle importante sobre tamaños

Por defecto, CSS calcula así:

```
ancho total = width + padding + borde
```

### Solución recomendada (uso profesional):

```css
* {
  box-sizing: border-box;
}
```

✔️ El width pasa a ser el tamaño final
✔️ Todo es más fácil de controlar

---

## 📝 Resumen corto

- **Contenido** → lo que se ve
- **Padding** → espacio interno entre contenido y borde
- **Borde** → línea que rodea la caja
- **Margin** → espacio externo entre cajas

  .caja {
  width: 200px;
  background: lightblue;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
  }

    <div class="caja">Soy el contenido</div>

  ===================================================================

  # 🟦 Reset CSS – Cuadro comparativo

Este apunte compara un **reset CSS agresivo** con un **reset suave (recomendado)** y explica cuándo conviene usar cada uno.

---

## 🔹 Reset CSS agresivo

```css
* {
  margin: 0;
  padding: 0;
}

Qué hace

Elimina todos los márgenes y paddings por defecto del navegador.

Obliga a reconstruir todos los espacios manualmente.

Ventajas

Control total desde cero.

Útil para prácticas o ejercicios.

Desventajas / Peligros

Rompe listas (ul, ol) → sin bullets ni sangría.

Elimina jerarquía visual (h1, h2, etc.).

Formularios se ven mal (inputs, botones).

Puede afectar la accesibilidad.

Requiere escribir mucho más CSS.

Mayor riesgo de bugs.

Reset CSS suave (recomendado)
/* Reset base estándar y seguro */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  line-height: 1.5;
}
Qué hace

Normaliza el cálculo de tamaños (box-sizing).

Elimina el margen molesto por defecto del body.

Mantiene los estilos útiles del navegador.

Ventajas

Tamaños predecibles.

No rompe listas ni formularios.

Mejor accesibilidad.

Menos código extra.

Ideal para proyectos reales.

Desventajas

No elimina todos los estilos (a propósito).

| Aspecto             | Reset agresivo    | Reset suave          |
| ------------------- | ----------------- | -------------------- |
| Márgenes / paddings | ❌ Borra todo      | ✔️ Conserva          |
| Listas              | ❌ Se rompen       | ✔️ Normales          |
| Títulos             | ❌ Sin jerarquía   | ✔️ Jerarquía intacta |
| Formularios         | ❌ Problemáticos   | ✔️ Estables          |
| Accesibilidad       | ❌ Puede empeorar  | ✔️ No afecta         |
| Control de layout   | Alto pero costoso | Alto y predecible    |
| Riesgo de bugs      | Alto              | Bajo                 |
| Uso recomendado     | Práctica          | Producción           |

mas detalle

| Aspecto               | Reset agresivo                         | Reset suave (recomendado)                 |
|---------------------- |----------------------------------------|----------------------------------------   |
| Código                | `* { margin: 0; padding: 0; }`         | `*, *::before, *::after { box-sizing: border-box; }` |
|                       |                                        | `body { margin: 0; }`                     |
| Qué hace              | Borra todos los márgenes y paddings    | Normaliza el tamaño de las cajas          |
| Estilos del navegador | ❌ Los elimina                         | ✅ Los conserva                          |
| Listas (ul, ol)       | ❌ Pierden bullets y sangría           | ✅ Se mantienen                          |
| Títulos (h1, h2)      | ❌ Pierden jerarquía visual            | ✅ Se mantienen                          |
| Formularios           | ❌ Se rompen estilos base              | ✅ Funcionan normal                      |
| Accesibilidad         | ❌ Puede empeorarla                    | ✅ No la afecta                          |
| Control de layout     | ⚠️ Alto pero costoso                   | ✅ Alto y predecible                     |
| Tamaños (width)       | ❌ Confusos sin border-box             | ✅ Predecibles                           |
| CSS extra             | ❌ Mucho                               | ✅ Poco                                  |
| Riesgo de bugs        | ❌ Alto                                | ✅ Bajo                                  |
| Uso recomendado       | Práctica / pruebas                     | Proyectos reales                        |

Frase final

box-sizing: border-box hace que los tamaños tengan sentido.
body { margin: 0 } elimina un problema invisible del navegador
=========================================================================================================

🧠 ¿Qué hace line-height exactamente?

line-height controla la altura de cada línea de texto, o sea:

el espacio vertical entre una línea y la siguiente

No cambia el tamaño de la letra.
Cambia el “aire” que hay entre líneas.

🔍 En tu ejemplo

line-height: 1.6em;

Significa:

Cada línea va a medir 1.6 veces el tamaño de la fuente.

Ejemplo práctico:

font-size: 16px

line-height: 1.6em

👉 la altura real de cada línea será:

16px × 1.6 = 25.6px


Eso hace que el texto:

se lea más cómodo

no quede todo apretado

📐 ¿Dónde se aplica?

A:

<p>

<h*>

cualquier texto

Y afecta:

separación entre líneas

altura del bloque de texto

⚠️ Detalle importante (muy importante)

Cuando usás em, el valor depende del font-size del elemento.

Por eso hoy se recomienda muchas veces esto 👇

✔️ Forma más moderna y limpia
line-height: 1.6;


👉 sin unidad

Eso significa lo mismo, pero:

es más flexible

se hereda mejor

no se rompe si cambia el font-size

🧩 Comparación rápida
line-height: 1.2;  /* apretado */
line-height: 1.6;  /* ideal para lectura */
line-height: 2;    /* muy aireado */


Para texto largo:

1.5 – 1.7 → zona ideal

🎯 Regla práctica (para tus apuntes)

line-height → espacio entre líneas

No cambia la letra

Usar sin unidad salvo casos puntuales

1.6 es un valor muy común y correcto

🧠 Resumen ultra corto

line-height: 1.6
hace que cada línea tenga un 60% más de altura que la letra, mejorando la legibilidad.


📦 Estructura básica: .contenedor y .caja
🎯 Objetivo general

Separar responsabilidades:

.contenedor → estructura y alineación general

.caja → estilo visual del contenido

🧱 .contenedor
.contenedor {
  max-width: 500px;
  margin: 50px auto;
}

Qué hace

max-width: 500px
Limita el ancho máximo del contenedor.
✔️ Evita que el contenido se estire demasiado en pantallas grandes
✔️ Mantiene un diseño más legible

margin: 50px auto

50px arriba y abajo → separación vertical

auto a los costados → centra el contenedor horizontalmente

Idea clave

El contenedor define el espacio y la posición, no el diseño visual.

🟦 .caja
.caja {
  background-color: rgb(46, 160, 141);
  color: white;
  padding: 20px;
  margin-bottom: 10px;
}

Qué hace

background-color
Define el color de fondo de la caja.

color: white
Cambia el color del texto para lograr buen contraste con el fondo.

padding: 20px
Espacio interno entre el contenido y el borde.
✔️ Mejora la legibilidad
✔️ Evita que el texto quede pegado

margin-bottom: 10px
Espacio externo debajo de la caja.
✔️ Separa una caja de la siguiente

Idea clave

padding = espacio interno
margin = espacio externo

🧠 Buenas prácticas aplicadas

No se usan id para CSS

Solo propiedades que cumplen una función clara

Código simple y mantenible

Fácil de escalar o modificar más adelante

📌 Resumen rápido

max-width → controla el ancho sin romper responsive

margin: auto → centra horizontalmente

padding → aire interno

margin → separación entre elementos

Menos código = más claridad


#===================================================
Rutas Relativas y Absolutas en HTML
usar la ruta relativa , solo cuando se tiene que ir a una pagina web externa, ahi si o si tiene que poner toda la ruta

ejemplo
Ruta Absoluta
<a href="https://www.linkedin.com">Ir a linkeding</a>

si son archivos que se encuenta de forma local , en nuestros proyectos se debera usar ruta relativa

<a href="../web/formularios.html"> formulario</a>
```

Error común a evitar

No usar rutas absolutas con el dominio propio en proyectos locales, por ejemplo:

<a href="http://localhost/web/formularios.html">

=============================================================================

/_ Comportamiento general de la tabla _/
table {
border-collapse: collapse;
}

/_ Bordes para la tabla, cabeceras y celdas _/
table,
th,
td {
border: 1px solid crimson;
}

/_ Estilo del contenido de las celdas _/
th,
td {
padding: 8px 12px;
text-align: center;
}

📝 Idea clave para el apunte

table → define el comportamiento general de la tabla

table, th, td → estilos comunes (bordes)

th, td → estilos del contenido (espaciado y alineación)

📌 CSS = propiedades
📌 HTML = atributos

ejemplo
/_ La propiedad border-collapse se utiliza para fusionar los bordes. Ésto tiene una gran influencia sobre la presentación y el estilo de las celdas de tabla_/

table {
border-collapse: collapse;
}

table,
th,
td {
border: 1px solid crimson;
}

th,
td {
padding: 8px 12px;
text-align: center;
}

th{

background-color: #1d3557;
color: #f1faee;

}

tr:nth-child(even)
{

background-color: #249E94;

}

/_ título descriptivo a las tablas_/
caption{
background-color:#84934A;
color: #ECECEC;

}

============================================================

📦 Modelo de Caja (Box Model) – Apunte clave

En CSS, todos los elementos son cajas.
Cada caja está compuesta por 4 partes, siempre en este orden (de adentro hacia afuera):

CONTENIDO → PADDING → BORDE → MARGIN

🔹 1. Contenido (content)

Es lo que vive dentro del elemento:

texto

imágenes

íconos

listas, etc.

📌 El tamaño del contenido se controla con:

width

height

max-width

max-height

Ejemplo:

max-width: 200px;

🔹 2. Padding (espacio interno)

👉 Espacio ENTRE el contenido y el borde

Se considera borde interno

Empuja el contenido hacia adentro

Aumenta el tamaño visual del elemento

Se usa cuando el elemento tiene:

fondo (background-color)

borde (border)

rol de “caja” o bloque visual

Ejemplo:

padding: 16px;

📌 Sin padding, el contenido queda “pegado” al borde.

🔹 3. Borde (border)

👉 Línea que rodea el elemento

Puede tener:

grosor

color

estilo

Ejemplo:

border: 2px solid black;

📌 El borde rodea padding + contenido.

🔹 4. Margin (espacio externo)

👉 Espacio ENTRE un elemento y los demás

Es el borde externo

NO afecta el contenido interno

Sirve para separar elementos entre sí

Puede usarse para centrar bloques

Ejemplo:

margin: 40px auto;

📌 auto centra horizontalmente cuando hay ancho definido.

🧠 Regla mental FUNDAMENTAL (guardar)

Padding = respiración interna
Margin = separación externa

❌ Errores comunes (evitar)

❌ Usar padding para separar elementos entre sí
👉 eso es margin

❌ Usar padding “porque sí” en texto simple

❌ Confundir padding con borde

✅ Cuándo usar padding

Usar padding cuando el elemento:

tiene fondo o borde

es una caja visual (card, bloque, aviso)

contiene más de un elemento interno

necesita “aire” interno

📦 Padding se usa en CONTENEDORES, no en texto suelto

✍️ Cuándo NO usar padding

Texto simple (p, h2, etc.)

Flujo normal de lectura

Separación vertical entre elementos (usar margin)

🧪 Ejemplo claro y completo

HTML:

<p class="contenedor">
  Texto dentro del contenedor
</p>

CSS:

.contenedor {
margin: 40px auto; /_ espacio externo + centrado _/
padding: 16px; /_ espacio interno _/
max-width: 200px; /_ ancho máximo del contenido _/
text-align: left; /_ alineación del texto _/
background-color: #b0d17a;/_ fondo _/
border: 2px solid #333; /_ borde _/
}

🧠 Lectura del ejemplo:

el texto no toca el borde → padding

el bloque se separa de otros → margin

el fondo y el borde forman la “caja”

🎯 Resumen express
Contenido → lo que se ve
Padding → espacio interno
Borde → línea que encierra
Margin → espacio externo

📌 No todo lleva padding
📌 Todo depende de la intención del elemento

======================================================

📦 ¿CUÁNDO USAR padding Y CUÁNDO NO?
🟢 SÍ usar padding cuando…
1️⃣ El elemento tiene fondo

Si hay background-color, casi siempre necesitás padding.

.card {
background-color: #eee;
padding: 16px;
}

👉 Sin padding, el texto queda pegado al borde → se lee mal.

2️⃣ El elemento es una caja

Todo lo que conceptualmente sea una “caja” lleva padding.

Ejemplos:

section

article

aside

div contenedor

cards

banners

section {
padding: 20px;
}

3️⃣ Títulos que funcionan como bloques

No como texto suelto, sino como bloque visual.

.h2_titulo_centrado {
text-align: center;
padding: 10px;
}

✔️ Perfecto uso (como hiciste vos)

4️⃣ Botones y links tipo botón

Regla de oro.

a.btn {
padding: 10px 16px;
}

👉 Sin padding no hay área clickeable cómoda.

5️⃣ Tablas (en td y th)

Clásico y obligatorio en la práctica real.

td, th {
padding: 8px 12px;
}

🔴 NO usar padding cuando…
1️⃣ Texto suelto (fluido)

Párrafos normales dentro de un layout.

p {
/_ NO padding acá _/
}

👉 El espacio se maneja con margin, no con padding.

2️⃣ Separar elementos entre sí

Ese es trabajo del margin.

❌ Mal:

p {
padding-bottom: 20px;
}

✅ Bien:

p {
margin-bottom: 20px;
}

3️⃣ Ajustar alineación general

Para centrar o separar bloques:

❌ No padding
✅ margin

.contenedor {
margin: 40px auto;
}

(esto lo hiciste perfecto)

4️⃣ Cuando rompe el tamaño del elemento

Si el elemento tiene ancho fijo chico y el padding lo “revienta”.

box {
width: 200px;
padding: 40px; /_ ⚠️ ojo _/
}

Ahí hay que pensar bien o usar box-sizing.

🧠 Regla mental SIMPLE (para siempre)

¿Quiero separar el contenido del borde? → padding
¿Quiero separar un elemento de otro? → margin

🧪 Ejemplo CLARO (contenido real)
.card {
max-width: 300px;
margin: 40px auto; /_ separa la card del resto _/
padding: 16px; /_ separa el texto del borde _/
background: #b0d17a;
}

📦 Visualmente:

el margin mueve la caja

el padding acomoda lo de adentro

===============================

📘 Apuntes CSS – Reset + Formulario Login
🔹 Reset base estándar y seguro
_,
_::before,
\*::after {
box-sizing: border-box;
}

📌 ¿Qué hace?

Selecciona todos los elementos HTML, incluyendo sus pseudo-elementos ::before y ::after.

🧠 box-sizing: border-box;

Cambia cómo CSS calcula el tamaño de los elementos.

🔴 Por defecto (content-box)
width = solo contenido
padding + border se SUMAN

🟢 Con border-box
width = contenido + padding + border

👉 Esto hace que el diseño sea más predecible y evita que los elementos se “agranden solos”.

🔹 Estilos base del body
body {
margin: 0;
line-height: 1.5;
}

📌 margin: 0;

El navegador trae márgenes por defecto.
Esto los elimina para tener control total del layout.

📌 line-height: 1.5;

Define la altura de línea del texto.

Mejora la legibilidad

1.5 es un estándar recomendado (ni muy apretado ni muy separado)

🔹 Fondo con gradiente
body {
background: linear-gradient(#7109b7, #3f37c0);
}

📌 linear-gradient()

Crea un fondo degradado.

Primer color: arriba

Segundo color: abajo

👉 Se usa mucho en UI modernas porque evita fondos planos aburridos.

🔹 Contenedor del formulario
.contenedor {
margin: 50px auto;
max-width: 400px;
padding: 30px;
background: rgba(0, 0, 0, 0.5);
border-radius: 10px;
}

📌 margin: 50px auto;

50px arriba y abajo

auto izquierda y derecha → centra el contenedor horizontalmente

📌 max-width: 400px;

El contenedor no puede superar 400px de ancho.

👉 Importante para formularios: evita que sean gigantes en pantallas grandes.

📌 padding: 30px;

Espacio interno entre el borde del contenedor y su contenido.

📌 background: rgba(0, 0, 0, 0.5);

Color de fondo negro con 50% de transparencia.

Formato:

rgba(red, green, blue, alpha)
alpha = 0 (transparente) → 1 (opaco)

📌 border-radius: 10px;

Redondea las esquinas del contenedor.

👉 Muy usado en diseño moderno (cards, formularios, modales).

🔹 Estilo de labels
.contenedor .elemento label {
color: #fff;
}

📌 Selector

Selecciona:

labels dentro de .elemento dentro de .contenedor

📌 color: #fff;

Texto blanco, porque el fondo es oscuro.

🔹 Estilo del botón submit
.contenedor .elemento input[type="submit"] {
background-color: #f72585;
border: none;
letter-spacing: 5px;
text-transform: uppercase;
cursor: pointer;
padding: 15px;
margin-top: 30px;
}

📌 Selector

Selecciona solo:

<input type="submit"> dentro de .elemento dentro de .contenedor

🎨 background-color: #f72585;

Color de fondo del botón.

👉 Rosa vibrante, típico en UI modernas.

🚫 border: none;

Quita el borde por defecto del navegador.

🔤 letter-spacing: 5px;

Aumenta el espacio entre letras.

5px = separación fuerte

Se usa mucho en botones con texto en mayúsculas

🔠 text-transform: uppercase;

Convierte el texto a MAYÚSCULAS sin modificar el HTML.

🖱 cursor: pointer;

Cuando pasás el mouse:
👉 muestra la mano (indica que es clickeable)

📦 padding: 15px;

Espacio interno del botón (lo hace más grande y clickeable).

📏 margin-top: 30px;

Espacio superior para separar el botón del campo anterior.

🧠 Notas técnicas importantes (nivel pro)
⚠️ Sobre letter-spacing: 5px

Es bastante alto.
Más común:

letter-spacing: 1px;
letter-spacing: 0.1em;

💡 Mejora profesional sugerida

Separar submit de campos:

.contenedor .elemento input:not([type="submit"]) {
width: 100%;
background: transparent;
border-bottom: 1px solid #fff;
}

====================================================================

# Apunte CSS – Reset, Layout y Estilos Visuales

> **Objetivo del apunte**
> Entender **cómo ordenar el CSS mental y técnicamente** para evitar código enquilombado, separar responsabilidades y poder razonar cualquier layout sin parches.

Este apunte está pensado para:

- leerlo varias veces
- usarlo como referencia en TPs
- reutilizar el reset/base como template

---

## 1️⃣ RESET / BASE

### 📌 Qué es

Es la preparación del terreno. **No diseña nada**, solo elimina comportamientos raros del navegador para que todos los elementos se comporten de forma predecible.

### 📌 Qué problemas evita

- márgenes inesperados
- cajas que miden distinto de lo que uno espera
- diferencias entre navegadores

### 📌 Código (template reutilizable)

```css
/* =====================
   RESET / BASE
===================== */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  line-height: 1.5;
}
```

### 🧠 Idea clave

> El reset **no se estudia cada vez**.
> Se copia, se confía y se sigue.

---

## 2️⃣ LAYOUT (ESTRUCTURA)

### 📌 Qué es

El layout define **dónde va cada cosa y cuánto espacio ocupa**.

Acá NO importa:

- colores
- bordes
- si es lindo o feo

Acá SÍ importa:

- izquierda / derecha
- columnas
- proporciones
- flujo del documento

Es el **esqueleto** de la página.

---

### 📌 Regla mental principal

> **Layout = estructura**
> **Contenido = lo que vive adentro**

No se mezclan.

---

### 📌 Layout con floats (como el curso)

```css
/* =====================
   LAYOUT
===================== */
nav {
  float: left;
  width: 20%;
}

section {
  float: right;
  width: 75%;
}

aside {
  float: right;
  width: 75%;
}

footer {
  clear: both;
}
```

---

### 🧠 Cómo leer esto mentalmente

```
[ NAV 20% ] [   SECTION 75%   ]
             [    ASIDE 75%   ]
--------------------------------
              FOOTER
```

- `nav` → columna izquierda
- `section` → contenido principal
- `aside` → contenido secundario, alineado con section
- `footer` → baja sí o sí, no se mezcla

---

### 📌 Por qué se usa `width` acá

- Porque define **columnas**
- Porque reserva espacio
- Porque no depende del contenido

```css
section {
  width: 75%; /* estructura */
}
```

> `width` se usa cuando el elemento **forma parte del layout**.

---

## 3️⃣ ESTILOS VISUALES

### 📌 Qué es

Todo lo que **no afecta la estructura**, solo la apariencia.

Acá recién se juega con:

- márgenes
- padding
- bordes
- colores
- radios

---

### 📌 Código

```css
/* =====================
   ESTILOS VISUALES
===================== */
nav a {
  display: block;
  margin: 10px;
  padding: 10px;

  background-color: #f71570;
  color: #fff;
  text-decoration: none;

  border-radius: 10px 0;
}

section {
  margin: 10px;
  padding: 10px;

  border: 1px solid #000;
  border-radius: 5px;
}

aside {
  margin: 10px;
  padding: 10px;
}

footer {
  padding: 20px;

  background-color: #333;
  color: #fff;
  text-align: center;
  font-size: 0.9rem;
}
```

---

### 🧠 Idea clave

> Primero que funcione.
> Después que se vea bien.

Los estilos visuales **no deben romper el layout**, porque el layout ya quedó definido arriba.

---

## 4️⃣ WIDTH vs MAX-WIDTH (CLAVE DEL APUNTE)

### 🧱 Layout (columnas)

Usa:

```css
width
```

Porque:

- define estructura
- fija proporciones
- no depende del contenido

---

### 📄 Contenido (lo que va adentro)

Usa:

```css
max-width
```

Ejemplo:

```css
article {
  max-width: 70ch;
  margin: auto;
}
```

Porque:

- mejora la lectura
- evita líneas infinitas
- es flexible

---

### 🧠 Regla mental definitiva

> **Columnas → `width`**
> **Contenido → `max-width`**

---

## 5️⃣ SEPARACIÓN DE RESPONSABILIDADES

| Parte  | Qué hace   | Qué NO hace |
| ------ | ---------- | ----------- |
| Reset  | Normaliza  | Diseñar     |
| Layout | Posicionar | Decorar     |
| Visual | Estética   | Reordenar   |

---

## 6️⃣ FRASES PARA QUE TE QUEDE GRABADO

- “Si necesito `clear` por todos lados, el layout está mal pensado.”
- “Si no puedo explicar una regla en 5 segundos, sobra.”
- “No mezclo estructura con decoración.”
- “Primero ordeno, después embellezco.”

---

## 🎯 CIERRE

Este esquema:

- evita quilombos
- se entiende al leerlo
- escala a flexbox y grid
- es el mismo criterio que se usa en proyectos reales

No es copiar CSS.
Es **pensar el CSS**.

🔹 1️⃣ RESET / BASE

Objetivo: empezar desde cero, sin sorpresas del navegador.

👉 Qué hace

Normaliza comportamientos

Quita márgenes por defecto

Hace que los tamaños sean predecibles

👉 Qué NO hace

No diseña

No posiciona

No da estilos visuales

🧠 Frase clave:

“Preparo el terreno para poder laburar tranquilo.”

🔹 2️⃣ LAYOUT (ESTRUCTURA)

Objetivo: definir dónde va cada bloque y cuánto espacio ocupa.

👉 Qué hace

Posiciona elementos (izquierda, derecha, columnas)

Define proporciones (width)

Arma el esqueleto de la página

👉 Qué NO hace

No pone colores

No embellece

No ajusta detalles finos

🧠 Frase clave:

“Acá decido la estructura, no la estética.”

🔹 3️⃣ ESTILOS VISUALES

Objetivo: hacer que se vea bien sin romper el layout.

👉 Qué hace

Márgenes

Padding

Bordes

Colores

Radios

Tipografía

👉 Qué NO hace

No mueve columnas

No redefine el layout

No parchea errores estructurales

🧠 Frase clave:

“Ahora sí juego, porque arriba ya está todo definido.”

🧠 RESUMEN EN UNA LÍNEA (nivel mantra)

Reset = preparo
Layout = organizo
Visual = decoro
===========================================================================================

# 📘 CSS – `text-indent`

## ¿Qué es?

La propiedad `text-indent` se usa para aplicar **sangría a la primera línea del texto** dentro de un elemento.

👉 No mueve todo el texto, **solo la primera línea**.

---

## Sintaxis

````css
text-indent: valor;

Valores permitidos

text-indent acepta distintos tipos de valores:

text-indent: 10px;   /* valor fijo */
text-indent: 2em;    /* relativo al tamaño de la fuente */
text-indent: 5%;     /* relativo al ancho del contenedor */
text-indent: -20px;  /* sangría hacia la izquierda */

Recomendación

✔️ Usar em suele ser mejor que px, porque se adapta al tamaño de la fuente.

Comparación con otras propiedades
Propiedad	Qué afecta
text-indent	Solo la primera línea
margin-left	Todo el bloque
padding-left	Todo el contenido interno
text-align	Alineación del texto (no sangría)
Cuándo usar text-indent

Para estilos tipo libro o artículo

Para introducir párrafos largos

Para dar jerarquía visual al texto

Cuándo NO usarlo

❌ Cuando querés mover todo el bloque
❌ Cuando necesitás espacio interno general (usar padding)

Resumen rápido

text-indent ≠ margen

Afecta solo la primera línea

Ideal para textos largos

Forma parte del modelo visual del texto, no del layout


Si querés, en el próximo mensaje puedo:
- unir esto con **Box Model**
- o armar un **apunte completo Reset / Layout / Estilos visuales** en un solo `.md` 📚

============================================================================

📌 Centrar un ícono con Flexbox (caso real)
1️⃣ Estructura HTML
<div class="contenedor-icono">
  <img src="icons/badge-tm.svg" alt="badge-tm" class="badge-tm" />
</div>

Explicación

<img>

Importa el archivo SVG

Tiene alt (accesibilidad)

Usa la clase .badge-tm para tamaño

<div class="contenedor-icono">

Es el contenedor padre

Se usa para controlar la alineación, no el tamaño del ícono

2️⃣ CSS del ícono (hijo)
.badge-tm {
  width: 80px;
  height: 100px;
}

Qué hace esta clase

Define qué tan grande es el ícono

❌ No controla posición

❌ No centra nada

📌 Responsabilidad única: tamaño del elemento visual

3️⃣ CSS del contenedor (padre)
.contenedor-icono {
  display: flex;
  justify-content: center;
}

Qué hace cada propiedad
display: flex;

Convierte al div en un contenedor flex

Le da control sobre sus hijos

No mueve nada por sí solo

👉 Habilita el sistema Flexbox

justify-content: center;

Alinea los hijos en el eje principal

Como flex-direction no está definido:

el eje principal es horizontal

📌 Resultado:
➡️ el ícono queda centrado de izquierda a derecha

4️⃣ Representación gráfica (mental)
Antes de Flexbox
| IMG |

Con display: flex + justify-content: center
|     IMG     |


El contenedor reparte el espacio horizontal y coloca el ícono en el centro.

5️⃣ Por qué NO se usó align-items

No se definió altura (height) en el contenedor

El div se ajusta al alto del ícono

No hay espacio vertical sobrante

👉 Alinear verticalmente no cambia nada visible

✔ Es correcto
✔ No es un error conceptual

6️⃣ Cuándo sí sería necesario align-items
.contenedor-icono {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

Resultado gráfico
┌────────────────────┐
│                    │
│        IMG         │
│                    │
└────────────────────┘


📌 Se usa solo si hay espacio en el eje secundario

7️⃣ Resumen conceptual (para memorizar)

.badge-tm → qué es el ícono (tamaño)

.contenedor-icono → dónde va (posición)

display: flex → habilita control

justify-content → eje principal

align-items → eje secundario (solo si hay espacio)

8️⃣ Regla final (clave)

Flexbox no centra cosas mágicamente.
Centra solo en el eje donde hay espacio disponible.

nota:
====

📌 La foto mental correcta (guardala)

img → qué es (tamaño, color, forma)

div → dónde va (posición, alineación)

display: flex → “yo controlo a mis hijos”


=====================================


📌 Uso de íconos SVG en HTML (enfoque práctico)
1️⃣ Opción recomendada (simple y directa): SVG local con <img>
📄 Estructura típica
<div class="contenedor-icono">
  <img src="icons/0-square.svg" alt="icono cuadrado" class="icono" />
</div>

.contenedor-icono {
  display: flex;
  justify-content: center;
}

.icono {
  width: 80px;
  height: 100px;
}

🧠 Qué está pasando realmente

<img> carga un archivo SVG local

El SVG se comporta como una imagen

El navegador NO expone el contenido interno del SVG

El archivo SVG sigue siendo texto editable

📊 Diagrama visual
HTML
┌─────────────────────┐
│ <div class="contenedor-icono"> │
│   <img src="0-square.svg">     │
└──────────┬──────────┘
           │
           ▼
Archivo SVG (texto plano)
┌─────────────────────┐
│ <svg>               │
│   <path d="..."/>   │
│ </svg>              │
└─────────────────────┘


👉 El SVG no entra al DOM, se renderiza como imagen.

✅ Qué SÍ podés hacer con SVG como <img>

Cambiar tamaño (width / height)

Centrar con Flexbox

Aplicar opacity, transform, filter

Editar el archivo SVG con un editor de texto

Tener control total local

❌ Qué NO podés hacer

Animar path internos con CSS

Cambiar fill desde CSS externo

Usar :hover path

Usar pseudo-elementos sobre el contenido interno

Motivo:

El contenido del SVG no forma parte del DOM

✏️ Edición de SVG local (IMPORTANTE)
🟢 SVG = texto plano

Un .svg se puede abrir directamente con:

VS Code

Notepad++

cualquier editor de texto

Ejemplo real:

✔ No hay que convertirlo
✔ No se rompe
✔ No pierde calidad

2️⃣ SVG Inline (más flexible, más complejo)
📄 Ejemplo
🧠 Qué cambia acá

El SVG vive dentro del HTML

El contenido interno sí entra al DOM

Cada path se puede estilizar y animar

📊 Diagrama visual
DOM
┌──────────────────────────┐
│ <svg>                    │
│   <path class="shape">   │
│ </svg>                   │
└──────────────────────────┘

✅ Ventajas del SVG inline

Animaciones internas

Cambiar colores con CSS

Hover sobre paths

Uso de pseudo-elementos

❌ Desventajas

Más código en el HTML

Menos legible

Más mantenimiento

Innecesario si solo mostrás íconos

3️⃣ SVG Sprite / CDN (Bootstrap Icons)
Concepto clave

No es un ícono, es un contenedor de íconos

Ejemplo de sprite:

Uso:

📊 Diagrama mental
Sprite SVG
┌───────────────────┐
│ symbol #0-square  │
│ symbol #alarm     │
│ symbol #gear      │
└─────────┬─────────┘
          │
          ▼
<use href="#0-square">

🧠 Por qué a veces “parece vacío”

El sprite no se renderiza

Solo define símbolos

El ícono aparece recién con <use>

| Método            | Simple | Editable | Animable | Recomendado |
| ----------------- | ------ | -------- | -------- | ----------- |
| `<img>` SVG local | ✅      | ✅        | ❌        | ⭐⭐⭐⭐        |
| SVG inline        | ❌      | ✅        | ✅        | ⭐⭐          |
| Sprite / CDN      | ❌      | ✅        | ✅        | ⭐           |

🧠 Criterio práctico (el tuyo)

Si el ícono solo tiene que mostrarse,
SVG local con <img> es la mejor opción.

Menos setup
Menos dependencias
Más control
Más velocidad mental

📝 Frase final para el apunte

Usar SVG como <img> es menos flexible para animaciones internas porque el contenido del SVG no forma parte del DOM. Sin embargo, es una solución más simple, mantenible y suficiente para la mayoría de los casos donde solo se requiere mostrar íconos.

============================================================================

📝 Apunte: Uso de íconos con SVG y Flexbox
1️⃣ Estructura HTML de ejemplo
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./icono.css" />
    <title>Document</title>
  </head>
  <body>
    <!-- Ícono local (SVG dentro de <img>) -->
    <div class="contenedor-icono">
      <img src="icons/badge-tm.svg" alt="badge-tm" class="badge-tm" />
    </div>

    <!-- Ícono SVG inline (Bootstrap Icon) -->
    <div class="contenedor-icono-sgv">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-bank"
        viewBox="0 0 16 16"
      >
        <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
      </svg>
    </div>
  </body>
</html>

2️⃣ CSS para centrar y dimensionar
/* Reset base estándar y seguro */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  line-height: 1.5;
}

/* Tamaño de los íconos (selector múltiple) */
.badge-tm, .bi-bank {
  width: 100px;
  height: 80px;
  margin: 10px;
}

/* Contenedores centrados con Flexbox */
.contenedor-icono,
.contenedor-icono-sgv {
  display: flex;
  justify-content: center; /* centra horizontal */
  align-items: center;     /* centra vertical */
  width: 100%;             /* ocupa todo el ancho disponible */
  height: 150px;           /* espacio del contenedor */
  border: 1px solid #ccc;  /* opcional: ver contenedor */
  margin-bottom: 20px;     /* separación entre íconos */
}

3️⃣ Explicación paso a paso

Selector múltiple:

.badge-tm, .bi-bank permite aplicar ancho, alto y margen a ambos íconos a la vez.

Flexbox:

display: flex en el contenedor convierte al <div> en contenedor flexible.

justify-content: center → centra los hijos horizontalmente

align-items: center → centra los hijos verticalmente

SVG inline vs IMG local:

| Ícono    | HTML              | Observación                                                    |
| -------- | ----------------- | -------------------------------------------------------------- |
| badge-tm | `<img src="...">` | Ícono local, un solo hijo en el contenedor → centrado perfecto |
| bank     | `<svg>...</svg>`  | SVG inline, un solo hijo → centrado perfecto                   |


4️⃣ Diagrama visual (ASCII)
Contenedor icono local
┌────────────────────────┐
│        <img>           │ <- centrado perfecto
└────────────────────────┘

Contenedor SVG inline
┌────────────────────────┐
│        <svg>           │ <- centrado perfecto
└────────────────────────┘


========================================================================================

# 📌 CSS `position: relative` — Apunte detallado

## 1. ¿Qué es `position: relative`?

`position: relative` **no mueve automáticamente** a un elemento.

Lo que hace es **habilitarlo** para que *vos* puedas moverlo después usando las propiedades:

* `top`
* `bottom`
* `left`
* `right`

👉 Sin `position`, estas propiedades **no funcionan**.

---

## 2. Idea mental correcta (la más importante)

Pensalo así:

> **“Quedate donde estás, pero preparate porque después te voy a mover.”**

Primero se habilita:

```css
.elemento {
  position: relative;
}
````

Después se ejecuta el movimiento:

```css
.elemento {
  position: relative;
  top: 20px;
  left: 10px;
}
```

---

## 3. ¿Qué cambia realmente cuando uso `relative`?

### ✔ El elemento **NO sale del flujo del documento**

- Sigue ocupando su lugar original
- No empuja ni reacomoda a otros elementos
- El espacio original **queda reservado**

Aunque visualmente se mueva, el layout no se rompe.

---

## 4. Cómo funcionan `top`, `left`, `right`, `bottom`

Con `position: relative`, estas propiedades **desplazan visualmente** el elemento **desde su posición original**.

### Direcciones reales (esto es clave)

| Propiedad | Movimiento visual |
| --------- | ----------------- |
| `top`     | baja ⬇️           |
| `bottom`  | sube ⬆️           |
| `left`    | derecha ➡️        |
| `right`   | izquierda ⬅️      |

Ejemplo:

```css
.elemento {
  position: relative;
  top: 30px; /* baja 30px */
  left: 15px; /* va a la derecha */
}
```

---

## 5. ¿Qué significa `top: 30%`?

Cuando usás porcentajes:

```css
top: 30%;
```

👉 El porcentaje se calcula **en base al tamaño del contenedor**, no del propio elemento.

Ejemplo:

```css
.contenedor {
  height: 400px;
}

.caja {
  position: relative;
  top: 30%;
}
```

📐 30% de 400px = **120px**

➡️ La caja baja 120px desde donde estaba.

---

## 6. ¿Por qué `top` no funciona sin `position`?

Porque por defecto los elementos tienen:

```css
position: static;
```

Con `static`:

- `top`, `left`, etc **son ignorados**
- El navegador no permite desplazamientos manuales

👉 Por eso **primero siempre va `position`**.

---

## 7. Diferencia entre `relative` y `margin`

### `margin-top`

- Empuja a otros elementos
- Modifica el layout
- Cambia el espacio real

### `top` con `position: relative`

- Solo mueve visualmente el elemento
- No afecta a los demás
- El espacio original queda intacto

👉 `relative` es ideal para **ajustes finos**.

---

## 8. Uso muy común (padre de un absolute)

Muchas veces `relative` **no se usa para mover**, sino para servir de referencia:

```css
.padre {
  position: relative;
}

.hijo {
  position: absolute;
  top: 0;
  right: 0;
}
```

👉 El `relative` fija el sistema de coordenadas del hijo.

---

## 9. Frase resumen para memorizar

> **`position: relative` habilita el movimiento**
> **`top / left / right / bottom` ejecutan el movimiento**

Si entendés esto, ya dominás `relative`.

---

## 10. Errores comunes

❌ Pensar que `relative` mueve solo

❌ Creer que libera espacio

❌ Usarlo cuando en realidad conviene `flex`, `grid` o `transform`

---

## 11. Conclusión

`position: relative` es una herramienta **segura y controlada** para:

- Ajustes visuales
- Referencias de posicionamiento
- Correcciones finas sin romper el layout

Cuando lo usás sabiendo esto, CSS deja de ser confuso.

# La idea correcta (ya depurada)

Vos llegaste a esta conclusión, que es la que va 👇

👉 top / left → mejor en píxeles cuando querés control fino
👉 width / height → porcentajes cuando querés que sea flexible
=======================================================================

| Propiedad | Se mueve con el scroll | Respeta contenedor | Siempre visible |
| --------- | ---------------------- | ------------------ | --------------- |
| sticky    | al principio sí        | ✔                  | ❌              |
| fixed     | ❌                     | ❌                 | ✔               |

============================================================================

# 📌 Apunte CSS: `position: fixed` vs `position: sticky`

Este apunte resume **qué hace cada propiedad**, **cuándo usarla**, **cuándo NO usarla** y trae **ejemplos claros y reales** con HTML y CSS.

---

## 1️⃣ `position: fixed`

### 🔹 Qué hace

- El elemento **sale del flujo normal** del documento.
- Se posiciona **respecto a la ventana del navegador**.
- **Siempre queda visible**, aunque hagas scroll.

👉 No depende del contenedor padre.

---

### 🔹 Ejemplo básico (botón flotante)

```html
<button class="btn-fixed">Contacto</button>
```

```css
.btn-fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 12px 16px;
  background: #25d366;
  color: white;
  border: none;
}
```

### 🔹 Qué vas a ver

- El botón **siempre está visible**.
- No importa cuánto scrollees.

---

### ✅ Cuándo usar `fixed`

- Botón de WhatsApp / contacto
- Header siempre visible
- Acciones globales del sitio

### ❌ Cuándo NO usar `fixed`

- Contenido que pertenece a una sección
- Títulos de bloques
- Elementos que deberían desaparecer

---

---

## 2️⃣ `position: sticky`

### 🔹 Qué hace

- El elemento **vive dentro del flujo normal**.
- Se comporta como `relative`.
- **Solo se pega cuando llega al valor indicado (`top`, `bottom`)**.
- **Depende del contenedor padre**.

👉 Cuando termina el contenedor, el sticky **desaparece**.

---

### 🔹 Ejemplo básico (título de sección)

```html
<ul>
  <li>
    <div class="contenedor">
      <h2>Rock</h2>
      <p>Contenido largo...</p>
      <p>Más contenido...</p>
    </div>
  </li>
</ul>
```

```css
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.contenedor {
  padding: 16px;
}

.contenedor h2 {
  position: sticky;
  top: 0;
  background: black;
  color: white;
  padding: 10px;
  margin: 0;
}
```

### 🔹 Qué vas a ver

- El título baja normal.
- Llega arriba.
- 👉 Se pega.
- Cuando termina esa sección → **desaparece**.

---

### ✅ Cuándo usar `sticky`

- Títulos de secciones
- Menú interno de formularios largos
- Encabezados de tablas
- Ayuda contextual

### ❌ Cuándo NO usar `sticky`

- Navegación global
- Elementos que deben verse siempre
- Páginas sin scroll

---

---

## 3️⃣ Diferencia clave (resumen rápido)

| Propiedad              | Fixed | Sticky |
| ---------------------- | ----- | ------ |
| Depende del scroll     | ❌ No | ✅ Sí  |
| Depende del contenedor | ❌ No | ✅ Sí  |
| Siempre visible        | ✅ Sí | ❌ No  |
| Sale del flujo         | ✅ Sí | ❌ No  |

---

## 4️⃣ Regla mental para elegir bien

🧠 Preguntate:

> **¿Este elemento debe estar siempre visible, sin importar dónde esté el usuario?**

- Sí → `fixed`

> **¿Este elemento solo sirve mientras recorro ESTA sección?**

- Sí → `sticky`

Si no aporta nada → **no usar ninguno**.

---

## 5️⃣ Conclusión

- `fixed` = acción permanente
- `sticky` = acompañamiento contextual

👉 Usarlos bien **mejora UX**.
👉 Usarlos mal **molesta**.

# Este criterio vale más que memorizar propiedades.

# 📌 Propiedad `z-index` en CSS — Apunte práctico

## 🧠 ¿Qué es `z-index`?

`z-index` define **la prioridad visual** de un elemento **cuando se superpone con otro**.

- No mueve elementos
- No afecta el layout
- **Solo decide qué elemento se ve por encima de otro**

> 👉 Si no hay superposición, `z-index` no produce ningún efecto visible.

---

## ⚠️ Regla fundamental

`z-index` **solo funciona en elementos posicionados**:

```css
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

❌ No funciona con `position: static` (valor por defecto).

---

## 🧩 Relación con `top / bottom / left / right`

Las propiedades:

- `top`
- `bottom`
- `left`
- `right`

👉 **Sirven para mover el elemento** y, muchas veces, **provocar la superposición**.

`z-index`:
👉 **decide quién queda arriba una vez que existe esa superposición**.

### Separación clara de roles

- `top / left / etc.` → generan el cruce
- `z-index` → decide el orden visual

---

## 📐 Ejemplo didáctico (basado en tu prueba)

### HTML

```html
<div class="contenido1">contenido 1</div>
<div class="contenido2">contenido 2</div>
<div class="contenido3">contenido 3</div>
```

### CSS

```css
.contenido1 {
  position: relative;
  z-index: 2;
  border: 2px solid crimson;
  margin: 10px;
}

.contenido2 {
  position: relative;
  top: -40px; /* fuerza superposición */
  z-index: 1;
  border: 2px solid blue;
  margin: 10px;
}

.contenido3 {
  position: relative;
  top: -80px; /* pisa a los anteriores */
  z-index: 3;
  border: 2px solid green;
  margin: 10px;
}
```

### Qué demuestra este ejemplo

- Solo los elementos que **se pisan** entran en comparación
- El que tiene **mayor `z-index` se ve arriba**
- Un valor negativo en `top` **no da prioridad**, solo genera el cruce

---

## ❌ Errores comunes

- Pensar que `z-index` ordena elementos que no se superponen
- Usarlo para arreglar problemas de layout
- Usar valores exagerados sin criterio (`z-index: 999999`)
- Creer que `top` o valores negativos deciden qué queda arriba

---

## ✅ Usos reales de `z-index` hoy en día

`z-index` se usa **para capas de interfaz**, no para layout.

### 1️⃣ Modales (login, confirmación, alertas)

```css
.modal {
  position: fixed;
  z-index: 1000;
}
```

### 2️⃣ Overlay / backdrop (fondo oscuro del modal)

```css
.overlay {
  position: fixed;
  z-index: 900;
}
```

### 3️⃣ Header `sticky` o `fixed`

```css
header {
  position: sticky;
  top: 0;
  z-index: 100;
}
```

Evita que el header quede tapado al hacer scroll.

### 4️⃣ Menús desplegables / dropdowns

```css
.dropdown {
  position: absolute;
  z-index: 200;
}
```

### 5️⃣ Tooltips

```css
.tooltip {
  position: absolute;
  z-index: 300;
}
```

### 6️⃣ Notificaciones flotantes (toasts)

```css
.toast {
  position: fixed;
  z-index: 1100;
}
```

### 7️⃣ Elementos flotantes

- botones de ayuda
- chat widgets
- botón “volver arriba”

---

## 🧠 Modelo mental correcto

> **`z-index` no ordena contenido, ordena capas cuando se superponen.**

Si no hay cruce, no hay prioridad.

---

## 🧾 Resumen final

- `z-index` **define prioridad visual**, no importancia
- Necesita `position`
- Solo actúa cuando hay superposición
- Es una herramienta de **interfaz**, no de layout
- Se usa principalmente en modales, overlays, headers, menús y tooltips

---

# 📌 _Este apunte está pensado para entender `z-index` desde la práctica, no desde la memorización._

# CSS `overflow` – Apunte práctico

## 🧠 ¿Qué es `overflow`?

La propiedad `overflow` define **qué hace un contenedor cuando su contenido es más grande que su tamaño**.

En otras palabras:

> Decide si el contenido que se sale se muestra, se corta o genera scroll.

---

## 🎛️ Valores principales

### 1️⃣ `visible` (valor por defecto)

````css
overflow: visible;


El contenido que excede se ve

Puede superponerse con otros elementos

No hay recorte ni scroll

👉 Es el comportamiento normal si no se define nada.

2️⃣ hidden
overflow: hidden;


El contenido que se sale se recorta

No hay scroll

Muy usado en diseño visual

📌 Usos típicos:

Cards

Imágenes

Animaciones

Sliders

3️⃣ scroll
overflow: scroll;


Siempre muestra scroll

Aunque no sea necesario

Poco usado hoy

4️⃣ auto (el más usado)
overflow: auto;


Muestra scroll solo si hace falta

Es el comportamiento más natural

👉 Estándar en layouts reales.

↔️ Control por eje

Se puede controlar cada eje por separado:

overflow-x: hidden;
overflow-y: auto;


📌 Muy común:

Ocultar scroll horizontal

Permitir scroll vertical

🧪 Ejemplo simple
.caja {
  width: 200px;
  height: 100px;
  border: 2px solid black;
  overflow: auto;
}


Si el texto es más grande:

aparece scroll vertical

no rompe el layout

✅ Usos reales hoy en día
1️⃣ Modales con scroll interno
.modal {
  max-height: 80vh;
  overflow-y: auto;
}


👉 El modal no se sale de la pantalla.

2️⃣ Cards / previews
.card {
  overflow: hidden;
}


👉 Nada se sale de la card.

3️⃣ Imágenes recortadas
.img-container {
  width: 300px;
  height: 200px;
  overflow: hidden;
}


👉 La imagen no rompe el diseño.

4️⃣ Sliders y animaciones
.slider {
  overflow: hidden;
}


👉 Se oculta lo que entra y sale del frame.

5️⃣ Evitar scroll horizontal molesto
body {
  overflow-x: hidden;
}


👉 Muy común en layouts responsive.

⚠️ Detalle IMPORTANTE (nivel intermedio)

Un elemento con:

overflow: hidden | auto | scroll


👉 Crea un nuevo contexto visual

Esto puede afectar:

position: sticky

z-index

elementos hijos posicionados

📌 Muchos bugs de “no funciona sticky” vienen de acá.

❌ Para qué NO usar overflow

No para “arreglar” layouts rotos

No para esconder errores

No como solución rápida sin entender el problema

🧠 Modelo mental

overflow = regla del contenedor

Controla límites visuales

Decide si hay scroll o recorte

No mueve elementos, define qué se ve

📌 Resumen rápido

Controla contenido que se sale

auto → el más usado

hidden → recorte visual

Clave en modales, cards y sliders

Puede afectar sticky y z-index


===========================================

### overflow (CSS)

Controla qué pasa cuando el contenido excede el tamaño del contenedor.

Valores:
- visible (default)
- hidden (recorta)
- scroll (siempre scrollbar)
- auto (scroll solo si hace falta) ✅

IMPORTANTE:
overflow solo funciona si el contenedor tiene height o width definido.

Usos reales:
- Cards
- Modales
- Sidebars
- Layouts controlados
- Recorte de imágenes
- Textos

ejemplo

.contenido1 {
  border: 2px solid crimson;
  height: 100px;
  width: 40px;
  overflow: hidden;
}
===========================================
# Selector Descendiente en CSS

## ¿Qué es?
Un **selector descendiente** permite aplicar estilos **solo a elementos que están dentro de otro elemento específico**.

Sirve para **controlar el alcance de los estilos** y evitar que una modificación afecte a toda la página.

---

## Sintaxis

```css
elemento_padre elemento_hijo {
  propiedad: valor;
}

Esto se lee así:

“Aplicá este estilo SOLO a elemento_hijo que esté DENTRO de elemento_padre”.

Ejemplo básico

<main>
  <p>Texto del contenido principal</p>
</main>

<footer>
  <p>Texto del footer</p>
</footer>

CSS (SIN selector descendiente)
p {
  color: red;
}


❌ Resultado:

Todos los <p> se vuelven rojos

Tocás una cosa y se rompe otra

CSS (CON selector descendiente)
main p {
  color: red;
}


✅ Resultado:

Solo el <p> dentro de <main> es rojo

El footer NO se ve afectado

Para qué sirve en la práctica?
1. Evitar efectos colaterales

Permite cambiar estilos en una sección sin romper otras partes del sitio.

Ejemplo:

nav a {
  text-decoration: none;
}


👉 Solo afecta a los links del menú, no a todos los links de la página.

2. Mantener el HTML limpio

Sin selector descendiente, necesitarías muchas clases:

<p class="texto-main">...</p>
<p class="texto-main">...</p>


Con selector descendiente:

main p {
  margin-bottom: 10px;
}


👉 Menos clases, más orden.

3. Trabajar por bloques (layout)

El selector descendiente ayuda a pensar la página por zonas:

header

nav

main

aside

footer

Ejemplo:

aside ul {
  padding-left: 20px;
}


👉 Solo las listas del aside cambian.

Idea clave para recordar

El selector descendiente define el “territorio” donde una regla puede actuar.

Fuera de ese territorio, el estilo no existe.

Diferencia con otros selectores

p → afecta a todos los <p>

main p → solo a los <p> dentro de <main>

main > p → solo a los hijos directos (NO nietos)

Cuándo usarlo

✔ Cuando querés evitar que un estilo se aplique globalmente
✔ Cuando trabajás con secciones
✔ Cuando querés que el layout no se rompa al modificar algo

Cuándo NO usarlo

✖ Si realmente querés que el estilo sea global
✖ Si el selector se vuelve demasiado largo y confuso
````
=============================================================================

# Selector Hijo (Child) en CSS

## ¿Qué es?
El **selector hijo** (`>`) permite aplicar estilos **solo a los hijos directos** de un elemento padre.

👉 NO afecta a nietos ni a elementos más profundos.

---

## Sintaxis

```css
padre > hijo {
  propiedad: valor;
}


Se lee así:

“Aplicá este estilo SOLO a los elementos hijo que sean
hijos directos de padre”.

Ejemplo claro
HTML
<div class="contenedor">
  <p>Primer párrafo (hijo directo)</p>
  <p>Segundo párrafo (hijo directo)</p>

  <section>
    <p>Tercer párrafo (nieto)</p>
  </section>
</div>

Selector DESCENDIENTE (espacio)
.contenedor p {
  background-color: lightyellow;
}

Resultado:

✔ Primer párrafo

✔ Segundo párrafo

✔ Tercer párrafo (nieto)

👉 Afecta a todos los <p> dentro del contenedor, sin importar el nivel.

Selector HIJO (>)
.contenedor > p {
  background-color: lightblue;
}

Resultado:

✔ Primer párrafo

✔ Segundo párrafo

❌ Tercer párrafo (NO se aplica)

👉 Solo afecta a los hijos directos del contenedor.

¿Para qué sirve en la práctica?
1. Evitar afectar elementos anidados

Muy útil cuando dentro de un bloque hay otros bloques internos.

Ejemplo:

nav > ul {
  list-style: none;
}


👉 No rompe listas que estén dentro de submenús u otras secciones.

2. Control más fino del layout

Evita el efecto:

“tocás un estilo y se rompe algo más adentro”

Diferencia clave (para recordar)
Selector	Qué afecta
padre hijo	Hijos, nietos y todo lo que esté dentro
padre > hijo	SOLO hijos directos
Regla mental rápida

👉 Usá descendiente cuando no te importa la profundidad
👉 Usá child (>) cuando necesitás control estricto

Cuándo usar Child

✔ Cuando el layout es delicado
✔ Cuando hay secciones anidadas
✔ Cuando querés evitar efectos colaterales

Cuándo NO usarlo

✖ Si necesitás que el estilo llegue a todos los niveles
✖ Si la estructura HTML puede cambiar seguido

==============================================================
# 🎨 Selectores CSS: Descendiente y Adyacente

> Apunte práctico y semántico para uso real (con ejemplos claros)

---

## 🔹 Selector **Descendiente** (espacio)

<span style="color:#457b9d"><strong>Sintaxis:</strong></span>

```css
padre hijo {
  propiedad: valor;
}
```

<span style="color:#2a9d8f"><strong>Qué hace:</strong></span> afecta **a todos los elementos hijos**, sin importar el nivel de profundidad.

---

### 📌 Ejemplo

```css
.contenedor p {
  color: blue;
}
```

```html
<div class="contenedor">
  <p>Párrafo 1</p>
  <section>
    <p>Párrafo 2</p>
  </section>
</div>
```

✅ Ambos `<p>` se ven afectados

---

### 🧠 Cuándo usarlo

<span style="color:#e76f51">✔</span> Cuando querés aplicar un estilo **general** dentro de una sección

<span style="color:#e76f51">✔</span> Layouts, artículos, cards, contenedores grandes

<span style="color:#e63946">✖</span> No es ideal si necesitás máxima precisión

---

## 🔹 Selector **Hijo Directo** (`>`)

<span style="color:#457b9d"><strong>Sintaxis:</strong></span>

```css
padre > hijo {
  propiedad: valor;
}
```

<span style="color:#2a9d8f"><strong>Qué hace:</strong></span> afecta **solo a los hijos directos**, no a los anidados.

---

### 📌 Ejemplo

```css
.contenedor > p {
  background: yellow;
}
```

```html
<div class="contenedor">
  <p>Párrafo directo</p>
  <section>
    <p>Párrafo anidado</p>
  </section>
</div>
```

✅ Solo el primer `<p>`

---

### 🧠 Cuándo usarlo

<span style="color:#e76f51">✔</span> Cuando la estructura HTML es clara y controlada

<span style="color:#e76f51">✔</span> Para evitar efectos colaterales

---

## 🔹 Selector **Adyacente** (`+`)

<span style="color:#457b9d"><strong>Sintaxis:</strong></span>

```css
elemento + hermano {
  propiedad: valor;
}
```

<span style="color:#2a9d8f"><strong>Qué hace:</strong></span> afecta **solo al elemento inmediatamente siguiente**

---

### 📌 Ejemplo

```css
h2 + p {
  font-style: italic;
  color: gray;
}
```

```html
<h2>Título</h2>
<p>Texto explicativo</p>
<p>Texto normal</p>
```

✅ Solo el primer `<p>`

---

### 🧠 Caso real típico

<span style="color:#8ecae6">👉</span> Descripción breve después de un título

<span style="color:#8ecae6">👉</span> Mensaje de ayuda después de un input

---

## 🧾 Comparación rápida

| Selector | Precisión | Uso típico          |
| -------- | --------- | ------------------- |
| `A B`    | Baja      | Estilos generales   |
| `A > B`  | Media     | Control estructural |
| `A + B`  | Alta      | Ajustes puntuales   |

---

## 🧠 Regla mental

* <span style="color:#457b9d"><strong>Descendiente</strong></span> → “todo lo que esté adentro”
* <span style="color:#2a9d8f"><strong>Hijo directo</strong></span> → “solo el nivel 1”
* <span style="color:#e76f51"><strong>Adyacente</strong></span> → “el que viene justo después”

---

📌 <em>Conclusión:</em> en la vida real se combinan. Lo importante es **no sobrecomplicar** si una clase directa resuelve mejor el problema.

---

## 🔹 Selector **Hermano General** (Sibling `~`)

<span style="color:#457b9d"><strong>Sintaxis:</strong></span>

```css
elemento ~ hermano {
  propiedad: valor;
}
```

<span style="color:#2a9d8f"><strong>Qué hace:</strong></span> afecta a **todos los hermanos que aparecen después** del elemento base (no solo el inmediato).

---

### 📌 Ejemplo

```css
h2 ~ p {
  color: purple;
}
```

```html
<h2>Título</h2>
<p>Párrafo 1</p>
<p>Párrafo 2</p>
<p>Párrafo 3</p>
```

✅ Todos los `<p>` posteriores al `<h2>` se ven afectados

---

### ⚠️ Importante

<span style="color:#e63946">✖</span> No afecta a elementos anteriores

<span style="color:#e63946">✖</span> No funciona si no comparten el mismo padre

---

### 🧠 Casos reales de uso

<span style="color:#8ecae6">👉</span> Estilizar todos los textos explicativos después de un título

<span style="color:#8ecae6">👉</span> Mostrar mensajes luego de un estado (error, warning, info)

---

## 🧾 Tabla completa de selectores combinados

| Selector | Nombre            | Qué afecta           |
| -------- | ----------------- | -------------------- |
| `A B`    | Descendiente      | Todos los hijos      |
| `A > B`  | Hijo directo      | Solo nivel 1         |
| `A + B`  | Hermano adyacente | El inmediato         |
| `A ~ B`  | Hermano general   | Todos los siguientes |

---

## 🧠 Regla mental final

* <span style="color:#457b9d"><strong>Descendiente</strong></span> → "todo lo que esté adentro"
* <span style="color:#2a9d8f"><strong>Hijo directo</strong></span> → "solo el primer nivel"
* <span style="color:#e76f51"><strong>Adyacente</strong></span> → "el que viene justo después"
* <span style="color:#9d4edd"><strong>Hermano general</strong></span> → "todos los que vienen después"


=============================================================================


# 🎨 Selectores CSS: Descendiente y Adyacente

> Apunte práctico y semántico para uso real (con ejemplos claros)

---

## 🔹 Selector **Descendiente** (espacio)

<span style="color:#457b9d"><strong>Sintaxis:</strong></span>

```css
padre hijo {
  propiedad: valor;
}
```

<span style="color:#2a9d8f"><strong>Qué hace:</strong></span> afecta **a todos los elementos hijos**, sin importar el nivel de profundidad.

---

### 📌 Ejemplo

```css
.contenedor p {
  color: blue;
}
```

```html
<div class="contenedor">
  <p>Párrafo 1</p>
  <section>
    <p>Párrafo 2</p>
  </section>
</div>
```

✅ Ambos `<p>` se ven afectados

---

### 🧠 Cuándo usarlo

<span style="color:#e76f51">✔</span> Cuando querés aplicar un estilo **general** dentro de una sección

<span style="color:#e76f51">✔</span> Layouts, artículos, cards, contenedores grandes

<span style="color:#e63946">✖</span> No es ideal si necesitás máxima precisión

---

## 🔹 Selector **Hijo Directo** (`>`)

<span style="color:#457b9d"><strong>Sintaxis:</strong></span>

```css
padre > hijo {
  propiedad: valor;
}
```

<span style="color:#2a9d8f"><strong>Qué hace:</strong></span> afecta **solo a los hijos directos**, no a los anidados.

---

### 📌 Ejemplo

```css
.contenedor > p {
  background: yellow;
}
```

```html
<div class="contenedor">
  <p>Párrafo directo</p>
  <section>
    <p>Párrafo anidado</p>
  </section>
</div>
```

✅ Solo el primer `<p>`

---

### 🧠 Cuándo usarlo

<span style="color:#e76f51">✔</span> Cuando la estructura HTML es clara y controlada

<span style="color:#e76f51">✔</span> Para evitar efectos colaterales

---

## 🔹 Selector **Adyacente** (`+`)

<span style="color:#457b9d"><strong>Sintaxis:</strong></span>

```css
elemento + hermano {
  propiedad: valor;
}
```

<span style="color:#2a9d8f"><strong>Qué hace:</strong></span> afecta **solo al elemento inmediatamente siguiente**

---

### 📌 Ejemplo

```css
h2 + p {
  font-style: italic;
  color: gray;
}
```

```html
<h2>Título</h2>
<p>Texto explicativo</p>
<p>Texto normal</p>
```

✅ Solo el primer `<p>`

---

### 🧠 Caso real típico

<span style="color:#8ecae6">👉</span> Descripción breve después de un título

<span style="color:#8ecae6">👉</span> Mensaje de ayuda después de un input

---

## 🧾 Comparación rápida

| Selector | Precisión | Uso típico          |
| -------- | --------- | ------------------- |
| `A B`    | Baja      | Estilos generales   |
| `A > B`  | Media     | Control estructural |
| `A + B`  | Alta      | Ajustes puntuales   |

---

## 🧠 Regla mental

* <span style="color:#457b9d"><strong>Descendiente</strong></span> → “todo lo que esté adentro”
* <span style="color:#2a9d8f"><strong>Hijo directo</strong></span> → “solo el nivel 1”
* <span style="color:#e76f51"><strong>Adyacente</strong></span> → “el que viene justo después”

---

📌 <em>Conclusión:</em> en la vida real se combinan. Lo importante es **no sobrecomplicar** si una clase directa resuelve mejor el problema.

---

## 🔹 Selector **Hermano General** (Sibling `~`)

<span style="color:#457b9d"><strong>Sintaxis:</strong></span>

```css
elemento ~ hermano {
  propiedad: valor;
}
```

<span style="color:#2a9d8f"><strong>Qué hace:</strong></span> afecta a **todos los hermanos que aparecen después** del elemento base (no solo el inmediato).

---

### 📌 Ejemplo

```css
h2 ~ p {
  color: purple;
}
```

```html
<h2>Título</h2>
<p>Párrafo 1</p>
<p>Párrafo 2</p>
<p>Párrafo 3</p>
```

✅ Todos los `<p>` posteriores al `<h2>` se ven afectados

---

### ⚠️ Importante

<span style="color:#e63946">✖</span> No afecta a elementos anteriores

<span style="color:#e63946">✖</span> No funciona si no comparten el mismo padre

---

### 🧠 Casos reales de uso

<span style="color:#8ecae6">👉</span> Estilizar todos los textos explicativos después de un título

<span style="color:#8ecae6">👉</span> Mostrar mensajes luego de un estado (error, warning, info)

---

## 🧾 Tabla completa de selectores combinados

| Selector | Nombre            | Qué afecta           |
| -------- | ----------------- | -------------------- |
| `A B`    | Descendiente      | Todos los hijos      |
| `A > B`  | Hijo directo      | Solo nivel 1         |
| `A + B`  | Hermano adyacente | El inmediato         |
| `A ~ B`  | Hermano general   | Todos los siguientes |

---

## 🧠 Regla mental final

* <span style="color:#457b9d"><strong>Descendiente</strong></span> → "todo lo que esté adentro"
* <span style="color:#2a9d8f"><strong>Hijo directo</strong></span> → "solo el primer nivel"
* <span style="color:#e76f51"><strong>Adyacente</strong></span> → "el que viene justo después"
* <span style="color:#9d4edd"><strong>Hermano general</strong></span> → "todos los que vienen después"

---

# 🔹 Pseudo-elementos en CSS

Los **pseudo-elementos** permiten aplicar estilos a **partes específicas de un elemento** o **generar contenido visual sin modificar el HTML**.

---

## ::before

<span style="color:#457b9d"><strong>Qué hace:</strong></span> inserta contenido **antes** del contenido real del elemento.

```css
.card::before {
  content: "★";
  color: gold;
  margin-right: 8px;
}
```

```html
<div class="card">Destacado</div>
```

📌 Uso real:

* íconos
* decoraciones
* indicadores visuales

---

## ::after

<span style="color:#2a9d8f"><strong>Qué hace:</strong></span> inserta contenido **después** del contenido real del elemento.

```css
.alert::after {
  content: "⚠";
  color: red;
  margin-left: 8px;
}
```

```html
<p class="alert">Mensaje importante</p>
```

📌 Uso real:

* alertas
* badges
* separadores

---

## ::first-letter

<span style="color:#e76f51"><strong>Qué hace:</strong></span> aplica estilos **solo a la primera letra** del texto.

```css
p::first-letter {
  font-size: 2em;
  color: #e63946;
  font-weight: bold;
}
```

```html
<p>Este párrafo tiene una letra inicial destacada.</p>
```

📌 Uso real:

* textos editoriales
* introducciones
* blogs

---

## ::first-line

<span style="color:#9d4edd"><strong>Qué hace:</strong></span> aplica estilos **solo a la primera línea visible** del texto.

```css
p::first-line {
  color: #1d3557;
  font-weight: bold;
}
```

```html
<p>
  Este texto es largo y permite ver cómo solo la primera línea
  recibe el estilo especial aplicado por CSS.
</p>
```

📌 Uso real:

* destacar comienzos de texto
* mejorar legibilidad

---

## 🧠 Reglas importantes

* Siempre usan `::` (doble dos puntos)
* No reemplazan HTML semántico
* Son decorativos (no estructurales)

---

## 🧾 Resumen rápido

| Pseudo-elemento  | Función           |
| ---------------- | ----------------- |
| `::before`       | Contenido antes   |
| `::after`        | Contenido después |
| `::first-letter` | Primera letra     |
| `::first-line`   | Primera línea     |

---

📌 <em>Conclusión:</em> los pseudo-elementos se usan para **detalles visuales**, mantener el HTML limpio y mejorar la presentación sin agregar nodos extra.

nota mental

🗂️ Tabla mental definitiva
Forma	Qué selecciona
p	El elemento completo
p:estado	El elemento bajo una condición
p::parte	Una parte del elemento