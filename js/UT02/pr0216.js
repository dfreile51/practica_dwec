let covertToBytes = (capacity, from) => {
    let resultado = 0;
    switch(from) {
        case 'Kilobyte':
        case 'KB':
            resultado = capacity * 1e3;
            break;
        case 'Megabyte':
        case 'MB':
            resultado = capacity * 1e6;
            break;
        case 'Gigabyte':
        case 'GB':
            resultado = capacity * 1e9;
            break;
        case 'Terabyte':
        case 'TB':
            resultado = capacity * 1e12;
            break;
        case 'Petabyte':
        case 'PB':
            resultado = capacity * 1e15;
            break;
        case 'Exabyte':
        case 'EB':
            resultado = capacity * 1e18;
            break;        
    }
    return resultado;
}

let cantidad = parseInt(prompt("Introduzca un número"));
let unidad = prompt("Introduzca una de las siguiente opciones: Kilobyte(KB) ,Megabyte(MB), Gigabyte(GB), Terabyte(TB), Petabyte(PB), Exabyte(EB)");
console.log(covertToBytes(cantidad,unidad));