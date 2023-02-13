const url = "https://swapi.dev/api/planets/";

leerApi();

let table = document.createElement('table');
document.body.prepend(table);
let tr = document.createElement('tr');
table.append(tr);
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

function leerApi() {
    fetch( url )
    .then( (response) => {
        // console.log(response);
        return response.json();
    })
    .then( (json) => {
        // console.log(json);
        json.results.forEach(item => {
            console.log(item.name);
            let tr2 = document.createElement('tr');
            table.append(tr2);
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
    })
    .catch( (error) => {
        console.log(error);
    });
}