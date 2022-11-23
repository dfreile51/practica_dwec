let items = document.getElementsByTagName('li');
// h1.textContent = 'Hola Mundo!!!';
Array.from(items).forEach( (item) => {
    item.textContent = "AAAA";
} );