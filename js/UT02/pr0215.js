let calc = (operando1, operando2, operador) => {
    let resultado = 0;
    if(operador == "+"){
        resultado = operando1 + operando2;
    } else if(operador == "-") {
        resultado = operando1 - operando2;
    } else if(operador == "*") {
        resultado = operando1 * operando2;
    } else if(operador == "/") {
        resultado = operando1 / operando2;
    } else if(operador == "%") {
        resultado = operando1 % operando2;
    } else {
        resultado = operando1 ** operando2;
    }
    return resultado;
}

let num1 = parseInt(prompt("Introduzca el primer número"));
let num2 = parseInt(prompt("Introduzca el segundo número"));

do {
    let cuenta = prompt("Introduzca uno de estos simbolos: +, -, *, /, %, **");
    if(cuenta == "+" || "-" || "*" || "/" || "%" || "**") {
        console.log(calc(num1, num2, cuenta));
        bucle = 2;
    } else {
        alert("Has introducido mal el simbolo");
        bucle = 1;
    }
} while(bucle==1);