let numero = 0;
let bucle = 0;
do {
    numero = parseInt(prompt("Introduce un número"));
    if(numero >= 0 || numero <=0) {
        console.log(`Has introducido el número ${numero}`);
        bucle = 2;
    } else {
        alert("No has introducido un número");
        numero = parseInt(prompt("Introduce un número"));
        bucle = 1;
    }
} while(bucle==1);