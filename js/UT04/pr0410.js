let boton = document.getElementById('btn');

boton.addEventListener('click', (e) => {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color[i] = Math.round(Math.random() * 255);
    }
    document.getElementsByTagName("body")[0].setAttribute('style', `background-color: rgb(${color[0]},${color[1]},${color[2]})`);
});