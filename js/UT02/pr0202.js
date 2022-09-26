let nombre = prompt("Indica tu nombre");
let nota1 = parseInt(prompt("Indica la nota del primer examen"));
let nota2 = parseInt(prompt("Indica la nota del segundo examen"));
let notaMedia = (nota1 + nota2) / 2;
console.log(`Hola ${nombre}, tu nota media es de ${notaMedia}`);