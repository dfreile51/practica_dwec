let nombre = prompt("Introduzca su nombre");
let contrasena = prompt("Introduzca su sontraseña");

let user = {
    username: nombre,
}

let credentials = {
    passwd: contrasena,
}

let mergeObjects = ( a,b ) => {
    let login = {
        name: user.username,
        pass: credentials.passwd,
    }
    return login;
}

console.log(mergeObjects(nombre,contrasena));