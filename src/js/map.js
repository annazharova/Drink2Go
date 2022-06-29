var map = L.map('map').setView([59.96829550570136, 30.317359156407914], 18);

var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var myIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [38, 50],
});

var marker = L.marker([59.96829550570136, 30.317359156407914], {icon: myIcon}).addTo(map);
