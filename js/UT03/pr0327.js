let array1 = [
    {
        nombre: 'Pepe',
        ape1: 'Pérez',
        ape2: 'López',
        dni: '10100100',
        expediente: '1720',
        pass: '1234ABC',
        ciclo: 'DAW',
        notas: {
            DWEC: 7.8,
            DIW: 5.4,
            DWES: 9.4
        }
    },
    {
        nombre: 'Juan',
        ape1: 'Mázquez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'P@ssw0rd',
        ciclo: 'DAW',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    }
]

/* let getAlumnosCiclo = ( str ) => {
    return array1.filter( ({ciclo}) => ciclo==str)
                 .length;
}; */

let getAlumnosCiclo = ( str ) => {
    return array1.reduce((acum, {ciclo}) => {
        if(ciclo == str) {
            return ++acum;
        }
    }, 0);
};
console.log(getAlumnosCiclo('DAW'));