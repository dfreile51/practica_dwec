let nombre = prompt("Introduzca su nombre");

let user = {
    name: nombre,
}

let cloneObject = ( a ) => {
    clonUser = a;
    return clonUser;
}

console.log(cloneObject(user));