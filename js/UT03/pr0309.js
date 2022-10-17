let cadena = prompt("Introduzca una cadena");

let removeVowels = ( str ) => {
    return str.replace(/[aeiouAEIOU]/g, ' ');
}

console.log(removeVowels(cadena));