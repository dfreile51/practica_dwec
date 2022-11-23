let boton = document.getElementById('btn');
let divContent = document.getElementsByClassName('images')[0];

boton.addEventListener("click" , (e) => {
    let imagenes = document.querySelectorAll('img');
    let images = Array.from(imagenes);

    images.sort((a, b) => 0.5 - Math.random());
    divContent.innerHTML = images.reduce((acum,item) => acum + item.outerHTML,'');
});