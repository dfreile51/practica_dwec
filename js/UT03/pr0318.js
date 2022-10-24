let generateUsername = ( arr ) => {
    arr.forEach(item => {
        item.nickname = item.name.slice(0, 1).toLowerCase()+item.surname.toLowerCase()
                      + Math.trunc(Math.random() * (9) + 1)
                      + Math.trunc(Math.random() * (9) + 1);
    });
    console.log(arr);
};

let array1 = [
    { name: 'Diego', surname: 'Freile'},
    { name: 'Pablo', surname: 'Vivas' },
    { name: 'Daniel', surname: 'Fernández' }
];

console.log(generateUsername(array1));;