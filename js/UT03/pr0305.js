let person = {
    name: "Diego",
    surname: "Freile"
}

let removeUndefined = (a) => {
    let clon = Object.assign( {},a );
    delete clon.name;
    delete clon.surname;
    return clon;
}

console.log(removeUndefined(person));