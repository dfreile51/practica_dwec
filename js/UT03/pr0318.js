let generateUsername = ( arr ) => {
    arr.forEach( item => {
        item.nickname = (item.name.charAt(0)+item.surname).toLowerCase()
                      + Math.trunc(Math.random() * 10).toString()
                      + Math.trunc(Math.random() * 10).toString();
    });
    return arr;
};

let array1 = [
    { name: 'Diego', surname: 'Freile'},
    { name: 'Pablo', surname: 'Vivas' },
    { name: 'Daniel', surname: 'Fernández' }
];

console.log(generateUsername(array1));;