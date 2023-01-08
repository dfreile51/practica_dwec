let inputFecha = document.querySelector('#fecha');

inputFecha.addEventListener('input', comprobarFecha);

function comprobarFecha(e) {
    let fecha = e.target.value;
    let regExp = /^(0[0-9]|[1-2]\d|3[01])\/(0[0-9]|1[012])\/(\d{4})$/;
    let divComprobarFecha = document.querySelector('#comprobarFecha');

    if(regExp.test(fecha) == true) {
        divComprobarFecha.textContent = "La fecha que ha introducido es correcta";
    } else {
        divComprobarFecha.textContent = "La fecha es incorrecta";
    }
}

let inputTlfn = document.querySelector('#tlfn');

inputTlfn.addEventListener('input', comprobarTlfn);

function comprobarTlfn(e) {
    let tlfn = e.target.value;
    let regExp = /^\(\+\d{2}\)(\s|)\d{3}(\s|)\d{3}(\s|)\d{3}$/;
    let divComprobarTlfn = document.querySelector('#comprobarTlfn');

    if(regExp.test(tlfn) == true) {
        divComprobarTlfn.textContent = "El teléfono es correcto";
    } else {
        divComprobarTlfn.textContent = "El teléfono es incorrecto";
    }
}

let inputMail = document.querySelector('#email');

inputMail.addEventListener('input', comprobarMail);

function comprobarMail(e) {
    let mail = e.target.value;
    let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let divComprobarMail = document.querySelector('#comprobarMail');

    if(regExp.test(mail) == true) {
        divComprobarMail.textContent = "El mail es correcto";
    } else {
        divComprobarMail.textContent = "El mail es incorrecto";
    }
}

let inputHexa = document.querySelector('#hexa');

inputHexa.addEventListener('input', comprobarHexa);

function comprobarHexa() {
    let regExp = /^\#[0-9a-fA-F]{6}$/;
    let divComprobarHexa = document.querySelector('#comprobarHexa');

    if(regExp.test(inputHexa.value) == true) {
        divComprobarHexa.textContent = "El hexadecimal es correcto";
    } else {
        divComprobarHexa.textContent = "El hexadecimal es incorrecto";
    }
}

let inputIp = document.querySelector('#ip');

inputIp.addEventListener('input', comprobarIp);

function comprobarIp() {
    let regExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/;
    let divComprobarIp = document.querySelector('#comprobarIp');

    if(regExp.test(inputIp.value) == true) {
        divComprobarIp.textContent = "La IP es correcta";
    } else {
        divComprobarIp.textContent = "La IP es incorrecta";
    }
}

let inputUrl = document.querySelector('#url');

inputUrl.addEventListener('input', comprobarUrl);

function comprobarUrl() {
    let regExp = /^((http|https):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
    let divComprobarUrl = document.querySelector('#comprobarUrl');

    if(regExp.test(inputUrl.value) == true) {
        divComprobarUrl.textContent = "La URL es correcta";
    } else {
        divComprobarUrl.textContent = "La URL es incorrecta";
    }
}

let inputNif = document.querySelector('#nif');

inputNif.addEventListener('input', comprobarNif);

function comprobarNif() {
    let regExp = /^[0-9]{7,8}[a-zA-Z]$/;
    let divComprobarNif = document.querySelector('#comprobarNif');

    if(regExp.test(inputNif.value) == true) {
        divComprobarNif.textContent = "El NIF es correcto";
    } else {
        divComprobarNif.textContent = "El NIF es incorrecto";
    }
}

let inputMatricula = document.querySelector('#matricula');

inputMatricula.addEventListener('input', comprobarMatricula);

function comprobarMatricula() {
    let regExp = /^\d{4}[A-Z]{3}$/;
    let divComprobarMatricula = document.querySelector('#comprobarMatricula');

    if(inputMatricula.value == '') {
        divComprobarMatricula.textContent = "";
    } else {
        if(regExp.test(inputMatricula.value) == true) {
            divComprobarMatricula.textContent = "La matrícula es correcta";
        } else {
            divComprobarMatricula.textContent = "La matrícula es incorrecta";
        }
    }
}
