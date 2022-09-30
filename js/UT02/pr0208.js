let ano = parseInt(prompt("Introduce tu año de nacimiento"));
if(ano >= 1946 && ano <=1968) {
    alert("Eres de la generación 'Baby Boomer'");
} else if(ano >= 1969 && ano <=1980) {
    alert("Eres de la generación 'Generación X'");
} else if(ano >= 1961 && ano <=1993) {
    alert("Eres de la generación 'Generación Millenial'");
} else if(ano >= 1994 && ano <=2010) {
    alert("Eres de la generación 'Generación Z'");
} else {
    alert("Has introducido un año erroneo");
}