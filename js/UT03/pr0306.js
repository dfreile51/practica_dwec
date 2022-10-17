let num = parseInt(prompt("Introduzca una cadena"));
let baseOrigen = parseInt(prompt("Introduzca la base origen"));
let baseDestino = parseInt(prompt("Introduzca la base destino"));

let covertBase = ( str, baseFrom, baseTo ) => {
    console.log(str);
    console.log(str.toString(baseFrom));
    return str.toString(baseTo);
}

console.log(covertBase(num, baseOrigen, baseDestino));