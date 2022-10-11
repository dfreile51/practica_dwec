let isValidTriangle = (a,b,c) => {
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
        return true;
    } else {
        return false;
    }
}

let lado1 = parseInt(prompt("Introduzca el primer lado"));
let lado2 = parseInt(prompt("Introduzca el segundo lado"));
let lado3 = parseInt(prompt("Introduzca el tercer lado"));

console.log(isValidTriangle(lado1,lado2,lado3));