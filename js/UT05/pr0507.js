let email = document.querySelector('#email');
let error = document.querySelector('#error');

email.onblur = function() {
    if(!email.value.includes('@') || !email.value.includes('.')) {
        email.classList.add('invalid');
        error.textContent = 'Por favor introduzca un correo válido';
    }
};

email.onfocus = function() {
    if(email.classList.contains('invalid')) {
        email.classList.remove('invalid');
        error.textContent = '';
    }
}

let inputPass = document.querySelector('#pass');
inputPass.addEventListener('input', checkSecurity);

function checkSecurity(e) {
    let pass = e.target.value;
    let security = 0;

    let numDigits = 0;
    let numMinus = 0;
    let numMayus = 0;
    let numSimbols = 0;

    pass.split('').forEach( (car) => {
        numDigits += ('0123456789'.includes(car)) ? 1 : 0;
        numMinus += ('abcdefghijklmnñopqrstuvwxyz'.includes(car)) ? 1 : 0;
        numMayus += ('abcdefghijklmnñopqrstuvwxyz'.toUpperCase().includes(car)) ? 1 : 0;
        numSimbols += ('|@#€¬[]{}ç!"·$%&/()=?¿+-.,;:_*'.includes(car)) ? 1 : 0;
    });

    //longitud
    security += Math.floor(pass.length / 3);
    security += numDigits > 0 ? 1 : 0;
    security += numMinus > 0 ? 1 : 0;
    security += numMayus > 0 ? 1 : 0;
    security += numSimbols > 0 ? 1 : 0;

    let divSecurity = document.querySelector('#security');
    divSecurity.textContent = (security < 3) ? "muy debil" : 
                        (security < 5) ? "debil" : 
                        (security < 6) ? "normal" : 
                        (security < 8) ? "segura" : "muy segura";
}

let inputRepPass = document.querySelector('#repPass');
inputRepPass.addEventListener("change", checkRepPass);

function checkRepPass() {
    if(inputPass.value != inputRepPass.value) {
        error.textContent = "Las contraseñas no son iguales";
    } else {
        error.textContent ="";
    }
}

let botonEnviar = document.querySelector('#botonEnviar');
botonEnviar.addEventListener("click", () => {
    console.log(`Email: ${email.value}, Contraseña: ${inputPass.value}`);
});