let sumOFMults = (n,k) => {
    let r = 0;
    for(let i = 1; i <= k; i++) {
        r += (n * i);
    }
    return r;
}

let num1 = parseInt(prompt("Introduzca un número"));
let num2 = parseInt(prompt("Introduzca un número"));
console.log(sumOFMults(num1,num2));