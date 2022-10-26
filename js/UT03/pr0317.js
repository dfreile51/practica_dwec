let array1 = [1, 8, 16];
let num = 24;

let createPow = ( arr, pow ) =>{
    return arr.map( item => item**pow );
};

console.log(createPow(array1, num));