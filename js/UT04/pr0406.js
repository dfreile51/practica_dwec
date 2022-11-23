let boton = document.getElementById('btn');
let divContent = document.getElementsByClassName('images')[0];

boton.addEventListener("click" , (e) => {
    let imagenes = document.querySelectorAll('img');
    divContent.prepend(imagenes[4]);
});