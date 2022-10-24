// EJEMPLO array filter

/* let arr = [
    { nombre: 'Diego', curso: 2, ciclo: 'DAW' },
    { nombre: 'Pepe', curso: 2, ciclo: 'SMR' },
    { nombre: 'Luis', curso: 1, ciclo: 'DAM' },
    { nombre: 'Andres', curso: 2, ciclo: 'DAW' },
];
let a = arr.filter( item => item.ciclo == 'SMR' && item.curso == 2 );

console.log(a); */

// CONVERTIR UNA CADENA A ARRAY Y QUITARLE LAS VOCALES

/* let cadena = prompt('Introduzca una cadena');
let arr = cadena.split('')
                .filter( item  => !'aeiouAEIOU'.includes(item) )
                .join('');

console.log(arr); */

// EJEMPLO arr.map

/* let arr = [
    {nombre: 'Diego', ap: 'Freile'},
    {nombre: 'Pepe', ap: 'Perez'}
];

let arr2 = arr.map( item => `${item.nombre} ${item.ap}` );

console.log(arr);
console.log(arr2); */

//EJEMPLO arr.sort

let arr = [
    {nombre: 'Diego', ap: 'Freile'},
    { nombre:'Luis', ap: 'Fernández'},
    {nombre: 'Pepe', ap: 'Pérez'}
];

arr.sort( (a, b) => {
    return (a.ap.length < b.ap.length) ? -1 : 1;
    // 1 si a>b
    // 0 si a = b
    //-1 si a<b
} );

console.log(arr);