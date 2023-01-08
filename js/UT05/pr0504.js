let cont = 0;

let barraSuperior = document.getElementById('barraSuperior');
let contenedor = document.getElementById('contenedor');

let contador = document.createElement('span');
contador.textContent = cont;

let cuadrado = document.createElement('div');
cuadrado.classList.add('cuadrado');
let altura = Math.floor(Math.random() * (200-100+1)+100);
let anchura = Math.floor(Math.random() * (200-100+1)+100);
cuadrado.style.width = `${anchura}px`;
cuadrado.style.height = `${altura}px`;
cuadrado.style.left = `${Math.floor(Math.random() * (contenedor.clientWidth-anchura))}px`;
cuadrado.style.top = `${Math.floor(Math.random() * (contenedor.clientHeight-altura))}px`;

cuadrado.addEventListener('click', handleClick);

function handleClick(event) {
    cont = cont + 1;
    contador.textContent = cont;
    let altura = Math.floor(Math.random() * (200-100+1)+100);
    let anchura = Math.floor(Math.random() * (200-100+1)+100);
    event.target.style.width = `${anchura}px`;
    event.target.style.height = `${altura}px`;
    event.target.style.left = `${Math.floor(Math.random() * (contenedor.clientWidth-anchura))}px`;
    event.target.style.top = `${Math.floor(Math.random() * (contenedor.clientHeight-altura))}px`;
}

barraSuperior.append(contador);
contenedor.append(cuadrado);