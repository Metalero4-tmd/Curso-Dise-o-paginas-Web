/*
🟢 Ejercicio 1

Crear una variable edad con valor 30.

Crear una función cambiarEdad(e) que intente cambiar el valor a 50.

Mostrar edad fuera de la función.

👉 Pregunta conceptual:
¿Se modificó la variable original? ¿Por qué?
*/

//Declaro la varibble
let edad = 30;

function cambiarEdad(e){
    //referencio la variable edad
   e.edad =50;
     return e;
}

 cambiarEdad(edad);
 console.log(cambiarEdad(edad));
 
 

