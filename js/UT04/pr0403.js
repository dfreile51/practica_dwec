let numParrafo = document.getElementsByTagName('p').length;
let penultimoEnla = document.getElementsByTagName('a')[1].href;
let numEnla = document.getElementsByTagName('a');
let numPalabrasParra = document.getElementsByTagName('p')[1].textContent.trim().split(' ').length;

let cont = 0;
for(let i = 0; i<numEnla.length; i++) {
    if(numEnla[i].href == 'https://www.google.es/') {
        cont++;
        numEnla = cont;
    }
}

let ej1 = document.getElementById('parrafos').append(numParrafo);
let ej2 = document.getElementById('segundo-enlace').append(penultimoEnla);
let ej3 = document.getElementById('links-google-es').append(numEnla);
let ej4 = document.getElementById('palabras-segundo-parrafo').append(numPalabrasParra);

/* console.log(numParrafo);
console.log(penultimoEnla.href);
console.log(cont);
console.log(numPalabrasParra); */