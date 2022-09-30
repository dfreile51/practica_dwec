let bucle = 0;
do {
    let n = parseInt(prompt("Introduce un número"));
    if(n >=0 || n <= 0) {
        let k = parseInt(prompt("Introduce un valor"));
        if(k >= 0 || k <=0) {
            for(let i = 1; i<=k; i++) {
                console.log(`${n} * ${i} = ${n*i}`);
            }
            bucle = 2;
        } else {
            alert("No has introducido bien el valor");
            bucle = 1;
        }
    } else {
        alert("No has introducido bien el número, vuelve a introducir el número");
        bucle = 1;
    }
} while(bucle==1);