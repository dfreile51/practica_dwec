let isPrime = n => {
    /*if(n == 4 || n <= 1) {
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

let num;

while( num != 0 ) {
    num = parseInt(prompt("Introduzca un número"));
    console.log(isPrime(num));
}