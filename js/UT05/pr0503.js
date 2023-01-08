let cuadricula = document.createElement('table');
let parrafo = document.createElement('p');
let body = document.querySelector('body');

for(let i = 0; i <= 9; i++) {
    let tr = document.createElement('tr');
    cuadricula.append(tr);
    for(let j = 0; j <= 9; j++) {
        let td = document.createElement('td');
        td.textContent = i+''+j;
        td.setAttribute("data-coord",i+''+j);
        tr.append(td);
    }
}

body.append(cuadricula);

let tds = document.querySelectorAll('td');

tds.forEach( (td) => {
    td.addEventListener('click', handleClick);
    td.addEventListener('contextmenu', handleClick2);
    td.onmousedown = function() { return false }
    td.oncontextmenu = function() { return false }
});

function handleClick(e) {
    if(e.target.classList.contains('selected')) {
        e.target.classList.remove('selected');
    } else {
        e.target.classList.add('selected');
    }
    parrafo.textContent = `Has hecho click en ${e.target.dataset.coord}`;
}

function handleClick2(e) {
    if(e.target.classList.contains('selected')) {
        e.target.classList.remove('selected');
        e.target.classList.add('selected2');
    } else {
        e.target.classList.add('selected2');
    }
    parrafo.textContent = `Has hecho click en ${e.target.dataset.coord}`;
}

body.append(parrafo);