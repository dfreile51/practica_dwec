let isPrime = n => {
/*
    if(n == 4 || n <= 1) {
        return false;
    }

    for(let i = 2; i < n; i++) {
        if(n%i==0) {
            return false;
        } 
    }
    
    return true;
*/
    for(let i = 2; i<=n**(1/2); i++) {
        if( n % i == 0 ) return false;
    }
    return true;
    
}

let k = parseInt(prompt("Introduzca un numero"));
let impreso = 0;
let contador = 1;
while(k != impreso) {
    contador++;
    if(isPrime(contador)) {
        console.log(contador);
        impreso++;
    }
}

/*
for(let j = 0; j < k; j++) {
    if(isPrime(j)) {
        console.log(`El número ${j} es primo`);
    }
}
*/