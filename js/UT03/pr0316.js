let array1 = [ 45, 78, 25, 12, 6 ];

let getOdd = ( arr ) => {
    /* arr.forEach(item => {
        if(item % 2 != 0) {
            console.log(item);
        }
    }); */
    return arr.filter( item => item%2 != 0 );
};

console.log(getOdd(array1));