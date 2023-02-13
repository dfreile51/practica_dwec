let url = "https://swapi.dev/api/planets/";

leerApi(url);

let divButtons = document.createElement('div');
divButtons.classList.add('botones');
document.body.prepend(divButtons);

let next = document.createElement('button');
let prev = document.createElement('button');
divButtons.append(next);
divButtons.append(prev);
next.textContent = 'Next';
prev.textContent = 'Prev';

let table = document.createElement('table');
let tableHeader = document.createElement('thead');
let tableBody = document.createElement('tbody');
document.body.prepend(table);
table.append(tableHeader);
table.append(tableBody);
let tr = document.createElement('tr');
tableHeader.append(tr);
let th = document.createElement('th');
let th1 = document.createElement('th');
let th2 = document.createElement('th');
let th3 = document.createElement('th');
th.textContent = 'Nombre';
th1.textContent = 'Diametro';
th2.textContent = 'Clima';
th3.textContent = 'Terreno';
tr.append(th);
tr.append(th1);
tr.append(th2);
tr.append(th3);

let nextUrl = '';
let prevUrl = '';

function leerApi(url) {
    fetch( url )
    .then( (response) => {
        return response.json();
    })
    .then( (json) => {
        json.results.forEach(item => {
            let tr2 = document.createElement('tr');
            tableBody.append(tr2);
            let td = document.createElement('td');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            tr2.append(td);
            tr2.append(td1);
            tr2.append(td2);
            tr2.append(td3);
            td.textContent = item.name;
            td1.textContent = item.diameter;
            td2.textContent = item.climate;
            td3.textContent = item.terrain;
        });
        if(json.next != null) {
            nextUrl = json.next;
        }
        prevUrl = json.previous;
        
    })
    .catch( (error) => {
        console.log(error);
    });
}

next.addEventListener('click', () => {
    tableBody.textContent = '';
    console.log(nextUrl);
    leerApi(nextUrl);
});

prev.addEventListener('click', () => {
    tableBody.textContent = '';
    console.log(prevUrl);
    leerApi(prevUrl);
});

