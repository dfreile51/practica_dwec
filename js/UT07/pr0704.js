let resultado = document.querySelector('#resultado');
let buttonEnviar = document.querySelector('#enviar');

buttonEnviar.addEventListener('click', () => {
    let apiKey = document.querySelector('#api');
    let lon = document.querySelector('#longitud');
    let lat = document.querySelector('#latitud');
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat.value}&lon=${lon.value}&appid=${apiKey.value}&lang=es`;

    leerApi(url);
});

function leerApi(url) {
    fetch( url )
    .then( (response) => {
        return response.json();
    })
    .then( (json) => {
        json.weather.forEach(item => {
            resultado.textContent = `Tiempo actual: ${item.description}`;
        });
    })
    .catch( (error) => {
        console.log(error);
    })
}
