let cadena = prompt("Introduzca una cadena");
let countLetters = ( str ) => {
    let strMinus = str.toLowerCase().replace(/\s+/g, '');
    let objeto = {};
    for(let i in strMinus) {
        objeto[strMinus[i]] = (objeto[strMinus[i]] || 0) + 1;
    }
    return objeto;
}

console.log(countLetters(cadena));