let miPromesa = new Promise((resolver, rechazar) => {

    let expresion = false;
    if (expresion) {
        resolver("Resuelto");

    }
    else{
        rechazar("Se produjo un error");

    }

});

miPromesa.then(
    valor => console.log(valor),
    error => console.error(error)
);



/***Ejercicios */

let usuario = "admin";
let pass = "1234";

const verificarLogin = (usuario, clave) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

             if (usuario === "admin" && clave === "1234") {
                             
                resolve("usuario logueado");
            }
            
            else {

               reject ("Error, no se pudo loguear");    

            }

        }, 3000);



    })
}


const respuesta = verificarLogin(usuario,pass);

respuesta.then(resultado =>{ 

   console.log(resultado);

})
.catch(error=>{

console.log(error);
})