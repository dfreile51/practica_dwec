let cadena = prompt("Introduzca una cadena");

let countVowels = ( str ) => {
    let strMinus = str.toLowerCase();
    let cantidadVocales = 0;
    for(let vocales of strMinus) {
        if(vocales == "a" || vocales == "e" || vocales == "i" || vocales == "o" || vocales == "u") {
            cantidadVocales++;
        }
    }

    return cantidadVocales;
}

console.log(countVowels(cadena));