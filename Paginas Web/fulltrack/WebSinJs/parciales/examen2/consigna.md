====================================================
 TRABAJO PRÁCTICO / PARCIAL HTML5
 Tema: Emmet + Etiquetas Semánticas
====================================================

## 📌 Objetivo
Construir la estructura HTML5 de un sitio web simple utilizando:

- Etiquetas semánticas
- Abreviaciones Emmet
- Buenas prácticas de estructura
- Sin CSS
- Sin JavaScript

---
 
## 📄 Consigna general

Crear un **sitio web compuesto por 2 páginas HTML**:

1. `index.html` (página principal)
2. `detalle.html` (página secundaria)

La estructura debe estar escrita en **HTML5 válido**, usando **etiquetas semánticas correctamente**.

---

## 🧩 Página 1: index.html

La página principal debe contener:

### 🔹 Header
- Un `<header>` principal
- Dentro del header:
  - Un `<h1>` con el nombre del sitio
  - Un `<nav>` con una lista de navegación (`ul > li > a`)
  - El menú debe tener:
    - Un link a `index.html`
    - Un link a `detalle.html`

📌 El menú debe repetirse exactamente igual en ambas páginas.

---

### 🔹 Main
Dentro del `<main>`:

#### Sección de contenido principal
- Una `<section>` que agrupe artículos
- Dentro de esa sección:
  - **Dos `<article>`**
  - Cada article debe tener:
    - Un `<h2>`
    - Un `<p>` con texto descriptivo

📌 Cada `<article>` debe tener sentido por sí solo.

---

### 🔹 Aside
- Un `<aside>` como contenido secundario
- Dentro del aside:
  - Un título `<h2>`
  - Un `<figure>` que contenga:
    - Una imagen (`<img>`) con atributo `alt`
    - Un `<figcaption>` describiendo la imagen

📌 El `<aside>` debe estar relacionado con el contenido, pero no ser lo principal.

---

### 🔹 Footer
- Un `<footer>` con:
  - Información de autor
  - Año
  - Texto descriptivo del trabajo práctico

---

## 🧩 Página 2: detalle.html

Debe reutilizar la **misma estructura base** que `index.html`:

- Mismo `<header>` (mismo menú)
- Mismo `<footer>`

### Contenido diferente en `<main>`:
- Una `<section>` con:
  - **Un solo `<article>`**
  - El article debe incluir:
    - Un `<h2>`
    - Al menos **dos párrafos `<p>`**
    - Contenido más detallado que en la página principal

---

## ⚙️ Requisitos técnicos

- Usar `<!DOCTYPE html>`
- Usar `<html lang="es">`
- Usar `<meta charset="UTF-8">`
- Usar `<meta name="viewport">`
- Indentación correcta
- Comentarios explicativos en las etiquetas principales
- No usar etiquetas obsoletas
- No usar `<div>` cuando exista una etiqueta semántica adecuada

---

## 🧠 Parte Emmet (obligatoria)

Antes de escribir el HTML final:

1. Pensar la estructura
2. Escribir las abreviaciones Emmet necesarias para:
   - Header + nav + menú
   - Main + section + articles
   - Aside + figure
   - Footer

📌 **No es obligatorio entregar las abreviaciones**, pero sí usarlas para construir el HTML.

---

## ✅ Criterios de evaluación

Se evaluará:

- Uso correcto de etiquetas semánticas
- Correcta jerarquía HTML
- Uso lógico de `<section>` y `<article>`
- Buen uso de `<aside>` y `<figure>`
- Consistencia entre páginas
- Orden, prolijidad y legibilidad del código

---

## 🚫 No se permite

- CSS
- JavaScript
- Frameworks
- Copiar estructuras sin entenderlas

---

## 🎯 Objetivo pedagógico

Demostrar que el alumno:
- Entiende la arquitectura HTML
- Sabe cuándo usar cada etiqueta
- Puede estructurar un sitio sin depender del diseño visual

====================================================
