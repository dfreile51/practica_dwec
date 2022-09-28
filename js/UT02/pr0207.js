let numero = parseInt(prompt("Introduzaca un número"));
for(let i = 1; i<=numero; i++) {
    let fila = "";
    for(let j = 1; j <= i; j++) {
        fila += "*";
    }
    console.log(fila);
}