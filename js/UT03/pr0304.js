let usuario1 = {
    nombre: 'Diego',
    contrasena: 1234,
}

let usuario2 = {
    nombre: 'Pablo',
    contrasena: 2345,
}

let containsObject  = ( a,b ) => {
    for(let key in b) {
        if(!(key in a)) {
            return false;
        }
    }
    return true;
}

console.log(containsObject(usuario1,usuario2));