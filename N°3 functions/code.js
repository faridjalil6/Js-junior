function saludar () {
    
    respuesta = prompt("¡hola!  ¿como fue tu dia?");
    if (respuesta  == "bien") {
        alert("me alegro");
    } else {
        alert("una pena")
    }
}

saludar()
saludar()

function hello() {
    alert("hola");
    return 3;
}

let hi = hello();
document.write(hi)