let nota1 = 3;

let nota2 = 4,
  nota3 = 3;

let calificacion = (nota1 + nota2 + nota3) / 3;

console.log(`La nota final es: ${calificacion.toPrecision(3)}`);

if (calificacion >= 7 && calificacion <= 10) {
  console.log("Aprobo la materia la materia!!!");
} else if (calificacion >= 4 && calificacion < 7) {
  console.log("Se lleva la materia a dicimbre!!!");
} else {
  console.log("Se lleva la materia a Marzo!!!");
}

let edad = 18;
let tieneDNI = false;

// Puede ingresar si:
// (edad >= 18 Y tieneDNI)
// O está acompañado

if (edad >= 18 && tieneDNI) {
  console.log("Puede ingresar");
} else {
  console.log("No puede ingresar");
}

/*
👉 Este es CLAVE, se usa todo el tiempo.

🧩 EJERCICIO 6 — OR (||)
let esAdmin = false;
let esEditor = true;
Puede acceder si es admin O editor
*/
let esAdmin = false;
let esEditor = false;
if (esAdmin || esEditor) {
  console.log("Puede acceder");
} else {
  console.log("No puede acceder");
}

/*
🔼 EJERCICIO 3 — Incremento
let contador = 0;

 Incrementar contador 3 veces
 Mostrar el valor final

*/

// let i = 0;

// do {

//     if (i === 3) {
//         console.log("Se encontro el numero");
//         break;
//     }

//     else {
//         console.log(i);

//     }
//     i++;

// } while (i < 5);

let i = 0;

do {
  if (i < 3) {
    console.log(i);
  } else {
    console.log("Se encontro el numero");
    break;
  }

  i++;
} while (i < 5);


let suma = 0;

for (let indice = 0; indice <10; indice++)
  {
        if( suma != 45)
        {
            suma = suma+ 5;
            console.log(suma);
            continue;
        } 
 
         else { 
           console.log(`Se encontro el numero: ${suma}`);     
           break;
         }  
  

  } 