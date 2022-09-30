let radio = parseInt(prompt("Introduce el radio del circulo"));
const pi = 3.141592;
let perimetro = 2*pi*radio;
let area = pi*radio**2;
console.log(`El perímetro del círculo de radio ${radio} es ${perimetro} y su área es ${area}`);