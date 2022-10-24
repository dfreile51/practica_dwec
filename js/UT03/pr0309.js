/* let cadena = prompt("Introduzca una cadena");

let removeVowels = ( str ) => {
    return str.replaceAll(/[aeiouAEIOU]/g, '');
}

console.log(removeVowels(cadena)); */

let cadena = prompt("Introduzca una cadena");

let removeVowels = ( str ) => {
    str = str.toLowerCase();
    const vowels = 'aeiouAEIOU';
    for(let char of str) {
        if(!vowels.includes(char)) {
            let resultado 
            resultado = resultado + char;
        }
    }
    return resultado;
}

console.log(removeVowels(cadena));