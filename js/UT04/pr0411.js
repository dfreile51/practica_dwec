let btn = document.getElementById('add-button');
let enters = [];
let cont = 0;

btn.addEventListener('click', (e) => {
    let list = document.querySelectorAll('ul')[0];
    let text = document.getElementById('input-text').value;

    if(text != '') {
        enters[cont] = text;
        crearContenido(list, cont);
        cont++;
        document.getElementById('input-text').value = '';
    }
});

let crearContenido = (list, cont) => {
    list.innerHTML += `<li>${enters[cont]}</li>`;
}