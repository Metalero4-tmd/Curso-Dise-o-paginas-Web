class Notificacion {
  enviar() {
    return "Enviando notificación genérica";
  }
}

class Email extends Notificacion {
  enviar() {
    return "Enviando email";
  }
}

class SMS extends Notificacion {
  enviar() {
    return "Enviando SMS";
  }
}

let recorrer = [new Notificacion(),new Email(),new SMS()];
recorrer.forEach((recorrer)=>console.log(recorrer.enviar()) );
 
//Alternativa

let recorrer2 = new Notificacion();
console.log(recorrer2.enviar());

let recorrer3 = new Email();
console.log(recorrer3.enviar());

let recorrer4 = new SMS();
console.log(recorrer4.enviar());