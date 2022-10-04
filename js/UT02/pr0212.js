let isPrime = n => {
    if(n == 4 || n <= 1) {
        return false;
    }

    for(let i = 2; i < n; i++) {
        if(n%i==0) {
            return false;
        } 
    }
    
    return true;
    
}

let n = parseInt(prompt("Introduzca un número"));
console.log(isPrime(n));