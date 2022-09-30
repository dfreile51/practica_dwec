let calle = prompt("Introduce la calle en la que vives");
if(calle == "Calle Los Claveles" || calle == "Calle El Rosal" || calle == "Calle Las Hortensias" || calle == "Calle Las Margaritas") {
    alert(`Tienes que tomar la Linea 1 para ir desde la ${calle} hasta el trabajo`);
} else if(calle == "Calle Teleno" || calle == "Calle Catoute" || calle == "Calle Peña Ubiña" || calle == "Calle Vizcodillo") {
    alert(`Tienes que tomar la Linea 2 para ir desde la ${calle} hasta el trabajo`);
} else if(calle == "Calle Astorga" || calle == "Calle La Bañeza" || calle == "Calle Benavente") {
    alert(`Tienes que tomar la Linea 3 para ir desde la ${calle} hasta el trabajo`);
} else {
    alert(`Has introduccido mal la calle`);
}