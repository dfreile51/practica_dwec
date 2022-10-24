let array1 = [
    'dfreile51',
    'pablovivas17',
    'danifer54'
];

let sendMessage = ( arr ) => {
    arr.forEach(item => {
        console.log(`Hola, ${item}, bienvenido al curso de DWEC`);
    });
};

console.log(sendMessage(array1));