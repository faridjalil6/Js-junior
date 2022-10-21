saludo = "¡hola pedro!";
pregunta = " ¿como estas? ";

frase = saludo + pregunta;
document.write(frase);

numero1 = 5;
numero2 = 8;
frase = "" + numero1 + numero2;
document.write(frase);


nombre = " lucas dalto";


frase1 = ` soy ${nombre} y estoy caminando `;
document.write(frase1);

let numero3 = 23;
let numero4 = 13;
document.write(numero3 == numero4);

// document.write(numero3 != numero4);

if (nombre == " lucas dalto") {
    alert ("tu nombre es bueno")
}

else if (nombre == "dalto") {
    alert("tu nombre es malo")
}

else {
    alert("tu nombre es otro")
}