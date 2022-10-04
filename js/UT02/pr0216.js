let covertToBytes = (capacity, from) => {
    let resultado = 0;
    if(from == "KB" || "Kilobyte") {
        resultado = capacity * 1000;
        return resultado;
    } else if (from == "MB" || "Megabyte") {
        resultado = capacity * 1000000;
        return resultado;
    } else if (from == "GB" || "Gigabyte") {
        resultado = capacity * 1000000000;
        return resultado;
    } else if (from == "TB" || "Terabyte") {
        resultado = capacity * 1000000000000;
        return resultado;
    } else if (from == "PB" || "Petabyte") {
        resultado = capacity * 1000000000000000;
        return resultado;
    } else if (from == "EB" || "Exabyte") {
        resultado = capacity * 1000000000000000000;
        return resultado;
    } else {
        alert("Has introducido mal la unidad de medida");
    }
    return resultado;
}

let cantidad = parseInt(prompt("Introduzca un número"));
let unidad = prompt("Introduzca una de las siguiente opciones: Kilobyte(KB) ,Megabyte(MB), Gigabyte(GB), Terabyte(TB), Petabyte(PB), Exabyte(EB)");
console.log(covertToBytes(cantidad,unidad));