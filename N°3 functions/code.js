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



function suma (num1,num2) {
    let res = num1 + num2;
    document.write(res);
    document.write("<br>")
}
suma (12,23)



const saludar2 = (nombre)=>{
    let frase = `¡hola ${nombre}! ¿como estas?}`;
    document.write(frase)
}
saludar2("pedro")