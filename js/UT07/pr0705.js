let resultado = document.querySelector('#resultado');
let buttonEnviar = document.querySelector('#enviar');

buttonEnviar.addEventListener('click', () => {
    let apiKey = document.querySelector('#api');
    let cityName = document.querySelector('#ciudad');
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey.value}&lang=es&units=metric`;

    leerApi(url);
});

function leerApi(url) {
    fetch( url )
    .then( (response) => {
        return response.json();
    })
    .then( (json) => {
        let temp = json.main.temp;
        let humedad = json.main.humidity;
        let snow = '';
        let rain = '';
        if(json.snow) {
            snow = json.snow['1h'];
        } else {
            snow = 'No existe la precipitacion de nieve';
        }

        if(json.rain) {
            rain = json.rain['1h'];
        } else {
            rain = 'No existe la precipitación de lluvia'
        }
        let icon = '';
        let descripcion = '';

        json.weather.forEach(item => {
            icon = `http://openweathermap.org/img/wn/${item.icon}.png`
            descripcion = item.description;
        });
        
        resultado.innerHTML = `
            <table>
                <tr>
                    <th>Descripción</th>
                    <th>Icono</th>
                    <th>Temperatura</th>
                    <th>Humedad</th>
                    <th>Precipitaciones (3h)</th>
                </tr>
                <tr>
                    <td>${descripcion}</td>
                    <td><img src='${icon}' alt='Icon'></td>
                    <td>${temp}</td>
                    <td>${humedad}</td>
                    <td>${snow}, ${rain}</td>
                </tr>
            </table>
        `;
    })
    .catch( (error) => {
        console.log(error);
    })
}
