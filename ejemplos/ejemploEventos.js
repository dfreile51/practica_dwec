let menu = document.querySelector('ul');

menu.addEventListener( 'click', (e) => {
    switch(e.target.dataset.action) {
        case 'save':
            console.log("Guardar");
            break;
        case 'load':
            console.log("Cargar");
            break;
        case 'out':
            console.log("Salir");
            break;
    }
});