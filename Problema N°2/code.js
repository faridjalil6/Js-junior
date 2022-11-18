let free = false;

const validarCliente = (time)=> {
    let edad = prompt("¿cual es tu edad?");
    if (edad > 17) {
        if (time >= 2 &&  time < 7 && free ==  false) {
            alert ("podes pasar gratis por que sos la primer persona  despues de las 2 AM");
            free = true;
        } else {
            alert (`son las  ${time}h y podes pasar, pero tenes que pagar la entrada`);
        }

    } else {
        alert ("no sos mayor de edad, no podes pasar");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.7);
validarCliente(1);
validarCliente(1.5);
validarCliente(2);
validarCliente(3);