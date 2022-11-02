let array1 = [
    {
        nombre: 'Pepe',
        ape1: 'Pérez',
        ape2: 'López',
        dni: '10100100',
        expediente: '1720',
        pass: 'aaaaABCC1',
        ciclo: 'DAW',
        notas: {
            DWEC: 7.8,
            DIW: 5.4,
            DWEC: 9.4
        }
    },
    {
        nombre: 'Juan',
        ape1: 'Mázquez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'Passw0rd',
        ciclo: 'DAW',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    }
];

let comprobarCadena = (str) => {
    for(let i = 0; i < str.length; i++) {
        if((str[i] == str[i].toUpperCase()) && (str[i] == str[i].toLowerCase()) && (Number.isInteger(Number(str[i])))) {
            return true;
        }
    }
    return false;
}

let getUnsecurePass = () => {
    return array1.filter( item => {
        return !(item.pass.length >= 8 && comprobarCadena(item.pass));
    }).map(item => item.nombre+" "+item.ape1+" "+item.ape2);
};

console.log(getUnsecurePass());