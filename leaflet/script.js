let map = L.map('map')
           .setView([42.6000300, -5.570320], 13);
L.tileLayer('https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=8fea5469271547bdaa2bc623555e4432', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.thunderforest.com/terms/">ThunderForest</a>' 
}).addTo(map);

// let marker = L.marker([42.6000300, -5.570320], {
//     title: 'Mi marcador',
//     opacity: 0.7,
//     draggable: true,
// }).addTo(map);

// marker.bindPopup("<p>Hola Leon</p>").openPopup();

let circle = L.circle([42.6000300, -5.570320], {
    radius: 200,
    color: 'yellow',
    fillColor: 'green',
}).addTo(map);