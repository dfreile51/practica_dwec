let nombre = prompt("Introduzca su nombre");
let contrasena = prompt("Introduzca su sontraseña");

let user = {
    username: nombre,
}

let credentials = {
    passwd: contrasena,
}

let mergeObjects = ( a,b ) => {
    return {
        ...a,
        ...b
    };
}

console.log(mergeObjects(nombre,contrasena));