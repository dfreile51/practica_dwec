let botonMostrarModal = document.querySelector("#botonMostrarModal");
let fondo = document.querySelector("#fondo");
let ventana = document.querySelector("#ventana");
let cerrar = document.querySelector("#cerrar");
let login = document.querySelector("#login");
let register = document.querySelector("#register");
let formularioSesion = document.querySelector("#iniciar-sesion");
let formularioRegistro = document.querySelector("#registro");

// Inputs de los formularios
let inputEmail1 = document.querySelector('#email1');
let inputPass1 = document.querySelector('#pass1');
let inputEmail2 = document.querySelector('#email2');
let inputPass2 = document.querySelector('#pass2');
let inputRepPass = document.querySelector('#repPass');
let divEmail1 = document.querySelector('#divEmail1');
let divPass1 = document.querySelector('#divPass1');
let divEmail2 = document.querySelector('#divEmail2');
let divPass2 = document.querySelector('#divPass2');

cerrar.addEventListener("click", cerrarVentana);
botonMostrarModal.addEventListener("click", añadirDisplay);
login.addEventListener("click", añadirFormularioSesion);
register.addEventListener("click", añadirFormularioRegistro);

function añadirDisplay() {
    ventana.classList.remove("invisible");
    fondo.classList.remove("invisible");
    ventana.classList.add("formulario");
    fondo.classList.add("fondo");

    comprobar();
}

function cerrarVentana() {
    ventana.classList.remove("formulario");
    fondo.classList.remove("fondo");
    ventana.classList.add("invisible");
    fondo.classList.add("invisible");
}

function añadirFormularioSesion() {
    if(!formularioRegistro.classList.contains("invisible")) {
        formularioSesion.classList.remove("invisible");
        formularioRegistro.classList.add("invisible");
    }
}

function añadirFormularioRegistro() {
    if(!formularioSesion.classList.contains("invisible")) {
        formularioRegistro.classList.remove("invisible");
        formularioSesion.classList.add("invisible");
    }
}


function comprobar() {
    let comprobarEmail1 = false;
    let comprobarPass1 = false;
    let comprobarEmail2 = false;
    let comprobarPass2 = false;
    let comprobarRepPass = false;

    inputEmail1.addEventListener("change", () => {
        if(inputEmail1.value == '') {
            divEmail1.classList.add('invisible');
        } else {
            if(inputEmail1.value.includes('@') && inputEmail1.value.includes('.') && inputEmail1.value != '') {
                
                if(!divEmail1.classList.contains("invisible")) {
                    divEmail1.classList.add('invisible');
                }
    
                divEmail1.textContent = '';
        
                comprobarEmail1 = true;
    
                if(comprobarPass1) {
                    document.querySelector('#buttonIniciar').disabled = false;
                }
    
            } else {
                divEmail1.classList.remove("invisible");
                divEmail1.textContent = "Email incorrecto";
            }
        }
    });

    inputPass1.addEventListener("change", () => {
        if(inputPass1.value == '') {
            divPass1.classList.add('invisible');
        } else {
            if(inputPass1.value.length >= 8 && inputPass1.value != '') {
    
                if(!divPass1.classList.contains('invisible')) {
                    divPass1.classList.add('invisible');
                }
    
                divPass1.textContent = '';
    
                comprobarPass1 = true;
    
                if(comprobarEmail1) {
                    document.querySelector('#buttonIniciar').disabled = false;
                }
            } else {
                divPass1.classList.remove("invisible");
                divPass1.textContent = "Contraseña incorrecta";
            }
        }
    });

    inputEmail2.addEventListener("change", () => {
        if(inputEmail2.value == '') {
            divEmail2.classList.add('invisible');
        } else {
            if(inputEmail2.value.includes('@') && inputEmail2.value.includes('.') && inputEmail2.value != '') {
                
                if(!divEmail2.classList.contains("invisible")) {
                    divEmail2.classList.add('invisible');
                }
    
                divEmail2.textContent = '';
        
                comprobarEmail2 = true;
    
                if(comprobarPass2 && comprobarRepPass) {
                    document.querySelector('#buttonRegister').disabled = false;
                }
    
            } else {
                divEmail2.classList.remove("invisible");
                divEmail2.textContent = "Email incorrecto";
            }
        }
    });

    inputPass2.addEventListener("change", () => {
        if(inputPass2.value == '') {
            divPass2.classList.add('invisible');
        } else {
            if(inputPass2.value.length >= 8 && inputPass2.value != '') {
    
                if(!divPass2.classList.contains('invisible')) {
                    divPass2.classList.add('invisible');
                }
    
                divPass2.textContent = '';
    
                comprobarPass2 = true;
    
                if(comprobarEmail2 && comprobarRepPass) {
                    document.querySelector('#buttonRegister').disabled = false;
                }
            } else {
                divPass2.classList.remove("invisible");
                divPass2.textContent = "Contraseña incorrecta";
            }
        }
    });

    inputRepPass.addEventListener("change", () => {
        if(inputRepPass.value  == '') {
            divPass2.classList.add('invisible');
        } else {
            if(inputRepPass.value != inputPass2.value) {
                divPass2.classList.remove('invisible');
                divPass2.textContent = "Las contraseñas no son iguales";
            } else {
                if(!divPass2.classList.contains('invisible')) {
                    divPass2.classList.add('invisible');
                }
    
                divPass2.textContent = '';
    
                comprobarPass2 = true;

                if(comprobarPass2 && comprobarEmail2) {
                    document.querySelector('#buttonRegister').disabled = false;
                }
            }
        }
    });
}

let botonInicioSesion = document.querySelector('#buttonIniciar');
botonInicioSesion.addEventListener("click", () => {
    console.log(`Operacion de inicio de sesión \n Email: ${inputEmail1.value} \n Contraseña: ${inputPass1.value}`);
});

let botonRegistro = document.querySelector('#buttonRegister');
botonRegistro.addEventListener("click", () => {
    console.log(`Operación de registro \n Email: ${inputEmail2.value} \n Contraseña: ${inputPass2.value}`);
});