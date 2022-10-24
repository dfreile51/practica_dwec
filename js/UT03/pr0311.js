let ascendDescend = ( len, min, max ) => {
    let num = min -1;
    let subiendo = true;
    let cadena = '';
    for(let i = 0; i < len; i++) {
        if (num < max && !subiendo) {
            num++;
        } else if (num > min && !subiendo) {
            num--;
        } else if (num == max) {
            num--;
        } else {
            num++;
            subiendo = true;
        }

        cadena += num;
    }
    return cadena;
}

let long = prompt("Introduce la longuitud");
let minimo = prompt("Intorduce el minimo");
let maximo = prompt("Intorduce el maximo");
console.log(ascendDescend(long,minimo,maximo));