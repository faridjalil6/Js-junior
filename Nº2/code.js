let frutas = ["manzana", "banana", "pera", 5, 9, "pedro"];
document.write(frutas[5]);


let pc = {
    nombre: "faridPC",
    procesador: "intel core i5",
    ram: "16GB",
    espacio: "1TB",
};

let nombre = pc["nombre"]
let procesador = pc["procesador"]
let ram = pc["ram"]
let espacio = pc["espacio"]

frase = `<br> el nombre de mi pc es: ${nombre} <br>
         el procesador de mi pc es: ${procesador} <br>
         la memoria ram es: ${ram} <br>
         el espacio de memoria es: ${espacio}`;

document.write(frase)