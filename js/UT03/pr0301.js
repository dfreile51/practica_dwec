let nombre = prompt("Introduzca su nombre");

let user = {
    name: nombre,
}

let cloneObject = ( a ) => {
    let clonUser = {};
    for(let k in a) {
        clonUser[k] = a[k];
    }
    return clonUser;
}

console.log(cloneObject(user));