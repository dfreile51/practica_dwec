let start = document.querySelector('#btn-start');
let puntuacion = document.querySelector('#score');
let juego = document.querySelector('#game-zone');
let tiempo = document.querySelector('#time');
let resetear = document.querySelector('#btn-reset');
let cuadrado = document.createElement('div');

let ranking = [];

let intervalo;
let ms = 0;
let s = 0;
let temporizador = s + '.' + ms;
tiempo.textContent = temporizador;

let cont = 0;
puntuacion.textContent = cont;

comenzarPartida();

//Funcion para crear la partida
function comenzarPartida() {
    start.addEventListener('click', crearCuadrado);
    start.addEventListener('click', timer);
    resetear.addEventListener('click', borrarValores);
}

//Crear el cuadrado por primera vez
function crearCuadrado() {
    start.removeEventListener('click', crearCuadrado); //quitar el listener para no crear mas partidas a la vez
    
    cuadrado.classList.add('cuadrado');
    let altura = Math.floor(Math.random() * (200-100+1)+100);
    let anchura = Math.floor(Math.random() * (200-100+1)+100);
    cuadrado.style.width = `${anchura}px`;
    cuadrado.style.height = `${altura}px`;
    cuadrado.style.left = `${Math.floor(Math.random() * (juego.clientWidth-anchura))}px`;
    cuadrado.style.top = `${Math.floor(Math.random() * (juego.clientHeight-altura))}px`;
    
    cuadrado.addEventListener('click', handleClick);
    
    juego.append(cuadrado);
}

//Cada vez que se hace click al cuadrado se redimensiona y se desplaza
function handleClick(event) {
    cont++;
    puntuacion.textContent = cont;
    let altura = Math.floor(Math.random() * (200-100+1)+100);
    let anchura = Math.floor(Math.random() * (200-100+1)+100);
    event.target.style.width = `${anchura}px`;
    event.target.style.height = `${altura}px`;
    event.target.style.left = `${Math.floor(Math.random() * (juego.clientWidth-anchura))}px`;
    event.target.style.top = `${Math.floor(Math.random() * (juego.clientHeight-altura))}px`;
}


//Funcion temporizador cuando comience la partida
function timer() {
    start.removeEventListener('click', timer); //quitar el listener para no crear mas cronometros
    intervalo = setInterval(medirTiempo , 100);
}

//Funcion para medir el tiempo
function medirTiempo() {
    ms++;
    if(ms == 9) {
        s++;
        ms = 0;
    }
    if(s == 5) {
        actualizarRanking();

        cuadrado.remove();
        clearInterval(intervalo);
    }
    temporizador = s + '.' + ms;
    tiempo.textContent = temporizador;
    
}

//Funcion para borrar los valores
function borrarValores() {
    cuadrado.remove();
    
    clearInterval(intervalo);
    
    ms=0;
    s=0;
    temporizador = s + '.' + ms;
    tiempo.textContent = temporizador;

    cont = 0;
    puntuacion.textContent = cont;
    
    start.addEventListener('click', crearCuadrado);
    start.addEventListener('click', timer);
    cuadrado.removeEventListener('click', handleClick);
}

//Funcion para agregar al jugador en el ranking y actualizar la lista del ranking
function actualizarRanking() {
    let nombreJugador = document.getElementById('player-input').value;
    let puntos = cont;
    ranking = [...ranking, {nombre: nombreJugador, puntos: puntos}];
    
    ranking.sort((a,b) => b.puntos - a.puntos);
    if(ranking.length > 3) {
        ranking.pop();
    }

    document.querySelector('#ranking-first .ranking-name').textContent = ranking[0].nombre?ranking[0].nombre:'';
    document.querySelector('#ranking-first .ranking-score').textContent = ranking[0].puntos?ranking[0].puntos:'';

    if(ranking.length > 1) {
        document.querySelector('#ranking-second .ranking-name').textContent = ranking[1].nombre?ranking[1].nombre:'';
        document.querySelector('#ranking-second .ranking-score').textContent = ranking[1].puntos?ranking[1].puntos:'';
    }

    if(ranking.length > 2) {
        document.querySelector('#ranking-third .ranking-name').textContent = ranking[2].nombre?ranking[2].nombre:'';
        document.querySelector('#ranking-third .ranking-score').textContent = ranking[2].puntos?ranking[2].puntos:'';
    }

    console.log(ranking);
}