let getFibonacciAt = (n) => {
    if (n <= 1) {
        return n;
    }

    let previousFib = 0;
    let currentFib = 1;

    for(let i = 2; i < n; i++) {
        let newFib = previousFib + currentFib;
        previousFib = currentFib;
        currentFib = newFib;
    }
    return currentFib;
    
}

let num = parseInt(prompt("Introduzca un número"));
console.log(getFibonacciAt(num));