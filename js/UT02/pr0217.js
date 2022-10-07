function convertCapacity(capacity, from, to) {
    resultado = 0;
    switch(from, to) {
        case "B", "KB", "Byte", "Kilobyte":
            return capacity * 1e3;
            break;
        case "B", "MB", "Byte", "Megabyte":
            return capacity * 1e6;
            break;
        case "B", "GB", "Byte", "Gigabyte":
            return capacity * 1e9;
            break;
        case "B", "TB", "Byte", "Terabyte":
            return capacity * 1e12;
            break;
        case "B", "PB", "Byte", "Petabyte":
            return capacity * 1e15;
            break;
        case "B", "EB", "Byte", "Exabyte":
            return capacity * 1e18;
            break;
    
        case "KB", "B", "Kilobyte", "Byte":
            return capacity / 1e3;
            break;
        case "KB", "MB", "Kilobyte", "Megabyte":
            return capacity * 1e3;
            break;
        case "KB", "GB", "Kilobyte", "Gigabyte":
            return capacity * 1e6;
            break;
        case "KB", "TB", "Kilobyte", "Terabyte":
            return capacity * 1e9;
            break;
        case "KB", "PB", "Kilobyte", "Petabyte":
            return capacity * 1e12;
            break;
        case "KB", "EB", "Kilobyte", "Exabyte":
            return capacity * 1e15;
            break;
        
        case "MB", "B", "Megabyte", "Byte":
            return capacity / 1e6;
            break;
        case "MB", "KB", "Megabyte", "Kilobyte":
            return capacity / 1e3;
            break;
        case "MB", "GB", "Megabyte", "Gigabyte":
            return capacity * 1e3;
            break;
        case "MB", "TB", "Megabyte", "Terabyte":
            return capacity * 1e6;
            break;
        case "MB", "PB", "Megabyte", "Petabyte":
            return capacity * 1e9;
            break;
        case "MB", "EB", "Megabyte", "Exabyte":
            return capacity * 1e12;
            break;
    
        case "GB", "B", "Gigaabyte", "Byte":
            return capacity / 1e9;
            break;
        case "GB", "KB", "Gigabyte", "Kilobyte":
            return capacity / 1e6;
            break;
        case "GB", "MB", "Gigabyte", "Megabyte":
            return capacity / 1e3;
            break;
        case "GB", "TB", "Gigabyte", "Terabyte":
            return capacity * 1e3;
            break;
        case "GB", "PB", "Gigabyte", "Petabyte":
            return capacity * 1e6;
            break;
        case "GB", "EB", "Gigabyte", "Exabyte":
            return capacity * 1e9;
            break;
        
        case "TB", "B":
            return capacity / 1e12;
            break;
        case "TB", "KB":
            return capacity / 1e9;
            break;
        case "TB", "MB":
            return capacity / 1e6;
            break;
        case "TB", "GB":
            return capacity / 1e3;
            break;
        case "TB", "PB":
            return capacity * 1e3;
            break;
        case "TB", "EB":
            return capacity * 1e6;
            break;
        
        case "PB", "B":
            return capacity / 1e15;
            break;
        case "PB", "KB":
            return capacity / 1e12;
            break;
        case "PB", "MB":
            return capacity / 1e9;
            break;
        case "PB", "GB":
            return capacity / 1e6;
            break;
        case "PB", "TB":
            return capacity / 1e3;
            break;
        case "PB", "EB":
            return capacity * 1e18;
            break;
            
        case "EB", "B":
            return capacity / 1e18;
            break;
        case "EB", "KB":
            return capacity / 1e15;
            break;
        case "EB", "MB":
            return capacity / 1e12;
            break;
        case "EB", "GB":
            return capacity / 1e9;
            break;
        case "EB", "TB":
            return capacity / 1e6;
            break;
        case "EB", "PB":
            return capacity / 1e3;
            break;  
    }
}

let capacidad = parseInt(prompt("Introduce el tamaño"));
let medida = prompt("Introduce la unidad de medida");
let medida2 = prompt("Introduce la medida a la que quieres transformar " + medida)
console.log(convertCapacity(capacidad,medida,medida2));