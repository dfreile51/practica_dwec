let btn = document.getElementById('add-button');
let enters = [];
let cont = 0;

btn.addEventListener('click', (e) => {
    let list = document.querySelectorAll('ul')[0];
    let text = document.getElementById('input-text').value;

    if(text != '') {
        enters[cont] = text;
        crearContenido(list);
        cont++;
        document.getElementById('input-text').value = '';
    }
});

let crearContenido = (list) => {
    let elementList = document.createElement('li');
    elementList.textContent = enters[cont];
    elementList.classList.add("todo");
    elementList.setAttribute("id",cont);
    let remove = document.createElement('span');
    remove.textContent = "borrar";
    remove.setAttribute("data-id",cont);
    remove.classList.add("btn");
    elementList.append(remove);
    list.append(elementList);

    remove.addEventListener("click", () => {
        let nodo = document.getElementById(remove.getAttribute("data-id"));
        nodo.remove();
    });
}