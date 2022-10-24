let replaceWithPosition = ( str ) => {
    for(let i of str) {
        let base = parseInt(i,36) - 9;
        console.log(i + ': ' + base);
    }
    return base;
}

let abc = "abcdefghijkmnopqrstuvwxyz";
console.log(replaceWithPosition(abc));