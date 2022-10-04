let tryTriangulo = (a,b,c) => {
    let result = "";
    if (a + b > c && a + c > b && b + c > a) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

let lado1 = parseInt(prompt("Introduzca el primer lado"));
let lado2 = parseInt(prompt("Introduzca el segundo lado"));
let lado3 = parseInt(prompt("Introduzca el tercer lado"));

console.log(tryTriangulo(lado1,lado2,lado3));