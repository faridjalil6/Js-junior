let frutas = ["manzana", "banana", "pera", 5, 9, "pedro"];
document.write(frutas[5] + "<br>");


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

frase = `el nombre de mi pc es: ${nombre} <br>
         el procesador de mi pc es: ${procesador} <br>
         la memoria ram es: ${ram} <br>
         el espacio de memoria es: ${espacio} <br>`;

document.write(frase)



let numero = 0;

do{
    document.write(numero + "<br>");
    numero++;
}

while (numero <= 6)



let numero1 = 0;

while(numero1 < 100) {
    numero1++;
    document.write(numero1);
    if (numero1 == 10) {
        break;
    }
}
document.write("fin <br>")



i = 20;

for (let i = 6; i >= 0; i--) {
    document.write(i + "<br>")
};

document.write(i + "<br>")



for (let i = 1; i <= 6; i++) {
    if (i == 4) {
        continue;
    }

    document.write(i + "<br>")
}

document.write("<br>");




let animales = ["gato", "perro", "oso"];

for (animal in animales) {
    document.write(animal + "<br>");
}

for (animal of animales) {
    document.write(animal + "<br>");
}


document.write("<br>");


/*label sentence*/
array1 = ["maria ", "josefa ", "roberta "];
array2 = ["pedro ", "marcelo ", array1];

for (let array in array2) {
    if (array == 2) {
        for (let array of array1) {
            document.write(array + "<br>");
        }
    } else {
        document.write(array2 [array] + "<br>");
    }
}