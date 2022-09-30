let num1 = parseInt(prompt("Introduzca el primer número"));
let num2 = parseInt(prompt("Introduzca el segundo número"));
let num3 = parseInt(prompt("Introduzca el tercer número"));
let num4 = parseInt(prompt("Introduzca el cuarto número"));
let num5 = parseInt(prompt("Introduzca el quinto número"));

if (num1>num2 && num1>num3 && num1>num4 && num1>num5) {
    console.log(`${num1} es el mayor`);
} else if (num2>num1 && num2>num3 && num2>num4 && num2>num5) {
    console.log(`${num2} es el mayor`);
} else if (num3>num2 && num3>num1 && num3>num4 && num3>num5) {
    console.log(`${num3} es el mayor`);
} else if (num4>num2 && num4>num3 && num4>num1 && num1>num5) {
    console.log(`${num4} es el mayor`);
} else {
    console.log(`${num5} es el mayor`);
}

if (num1<num2 && num1<num3 && num1<num4 && num1<num5) {
    console.log(`${num1} es el menor`);
} else if (num2<num1 && num2<num3 && num2<num4 && num2<num5) {
    console.log(`${num2} es el menor`);
} else if (num3<num2 && num3<num1 && num3<num4 && num3<num5) {
    console.log(`${num3} es el menor`);
} else if (num4<num2 && num4<num3 && num4<num1 && num4<num5) {
    console.log(`${num4} es el menor`);
} else {
    console.log(`${num5} es el menor`);
}