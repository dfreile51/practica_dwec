let fact = n => {
    let r = 1;
    for(let i = 1; i <= n; i++) {
        r *= i;
    }
    return r;
}

let num = parseInt(prompt("Introduzca un número"));
console.log(fact(num));