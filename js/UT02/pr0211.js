let bucle = 0;
do {
    let numero = parseInt(prompt("Introduzca un número "));
    if(numero > 0) {
        if(numero%2==0) {
            console.log("Es par");
        } else {
            console.log("Es impar");
        }
        bucle==2;
    } else {
        alert("Has introducido un número erroneo, vuelve a introducirlo");
        bucle=1;
    }
} while(bucle==1);
