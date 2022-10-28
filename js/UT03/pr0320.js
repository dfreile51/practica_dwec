let dates = ['27-09-1999', '25-10-1999', '19-09-1962'];

let sortDates = ( arr ) => {
    arr.sort( (a, b) => {
        let strA = a.slice(6) + a.slice(3, 5) + a.slice(0, 2);
        let strB = b.slice(6) + b.slice(3, 5) + b.slice(0, 2);
        return strA < strB ? -1 : 1;
    } );

    console.log(arr);
};

console.log(sortDates(dates));