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

let k = parseInt(prompt("Introduzca un numero"));
for(let j = 0; j < k; j++) {
    if(isPrime(j)) {
        console.log(`El número ${j} es primo`);
    }
}