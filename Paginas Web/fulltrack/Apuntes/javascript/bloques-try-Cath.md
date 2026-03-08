🧱 Estructura básica
try {
   // Código que puede fallar
} catch (error) {
   // Código que maneja el error
} finally {
   // Se ejecuta siempre (opcional)
}
🔥 throw
📌 ¿Qué hace?

throw lanza una excepción manualmente.

throw new Error("Mensaje del error");

Cuando se ejecuta:

⛔ Se detiene el bloque actual.

🔁 Salta inmediatamente al catch.

❌ No continúa el código restante del try.

🧠 Flujo Interno (Diagrama)

           ┌──────────────┐
           │     try      │
           └──────┬───────┘
                  │
        ¿Ocurre error?
          /             \
        NO               SÍ
        │                 │
 Continúa            Salta a catch
 normalmente              │
        │                 │
        └──────► finally ◄┘
                (si existe)

🎨 Conceptos Clave (para entender cuándo usarlo)
🟢 Validación Normal (no excepcional)

Errores esperables del usuario:

if (edad < 18) {
   console.log("No permitido");
}
🔴 Error Excepcional (flujo anormal)

Errores que:

No deberían pasar

Vienen de algo externo

Rompen el flujo normal

Ejemplo real:

try {
   const datos = JSON.parse(texto);
} catch (error) {
   console.error("JSON mal formado");
}
🧩 Diferencias importantes
🔹 throw

Lanza el error.

🔹 catch

Lo captura y permite:

Loguearlo

Transformarlo

Re-lanzarlo

Mostrar mensaje amigable

🔹 finally

Se ejecuta siempre:

Haya error o no.

Ideal para cerrar conexiones, limpiar recursos, etc.

🏗 Uso Profesional
✔ Cuándo usarlo

Llamadas a API

Lectura de archivos

Base de datos

Librerías externas

Código impredecible

❌ Cuándo NO usarlo

Validaciones simples

Flujo normal esperado

Para ocultar bugs propios

🔁 Patrón Avanzado: Capturar y Re-lanzar
try {
   proceso();
} catch (error) {
   console.error("Error en proceso:", error);
   throw error;
}

Se usa cuando:

Querés registrar el error

Pero no querés ocultarlo

Permitís que una capa superior lo maneje

| Tipo de error                 | ¿Usar excepción? |
| ----------------------------- | ---------------- |
| Error esperado del usuario    | ❌ No             |
| Error externo/impredecible    | ✅ Sí             |
| Bug de programación           | ❌ Arreglarlo     |
| Error crítico que rompe flujo | ✅ Sí             |

🧩 Diferencia clave
return

Termina la función normalmente.

throw

Rompe el flujo y lo marca como error.

🏁 Resumen Mental

throw = Interrumpir

catch = Capturar

finally = Siempre ejecutar

No usar excepciones como reemplazo de if

No ocultar bugs

==========
|Ejemplo|
==========


try {
  let numero = 4;

  if (typeof numero != "number") {
    console.log("El numero ingresado no es numerico");
  } else if (numero < 10 && numero > 0) {
     
   throw new Error("Ese valor ingresado no es permitido");
  } else {
    console.log("Es numerico");
  }
} catch (error) {
  console.log(error.message);
}


let monto = 10001;
try {
  if (typeof monto != "number") {
    throw new Error("El monto ingresado debera ser numérico!!!");
  } else if (monto <= 0) {
    throw new Error("El monto debe ser mayor cero");
  } else if (monto > 10000) {
    throw new Error("El monto debe menor a 9999!!!");
  } else {
    console.log("Retiro permitido!!!");
  }
} catch (error) {
  console.log(error.message);
}



