let inputTexto = document.querySelector('#texto');
let botonEnviar = document.querySelector('#enviar');
let divResultado = document.querySelector('#resultado');

botonEnviar.addEventListener('click', () => {
    let regExp = /(0[0-9]|[1-2]\d|3[01])\/(0[0-9]|1[012])\/(\d{4})/g;

    let reemplazo = inputTexto.value.replace(regExp, '$1 del $2 de $3');

    divResultado.textContent = `${reemplazo}`;
});