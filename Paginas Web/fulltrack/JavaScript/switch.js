let x = 1;

switch (x) {
    case 1:   
        console.log("inicio");     
        break;

        case 2:   
        console.log("custom");     
        break;

        case 3:   
        console.log("bajas");     
        break;

    default:
        console.log("salida del sistema");
        break;
}

const errores = {
    400: "Solicitud incorrecta",
    404: "No encontrado",
    500: "Error interno"
};

let codigo = 404;

console.log(errores[codigo] || "Error desconocido");